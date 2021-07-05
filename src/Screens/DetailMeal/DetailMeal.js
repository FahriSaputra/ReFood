import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';
import {Loading} from '../../Components';
import {API} from '../../Config/api';
import {ph, pw, rf} from '../../Utils/Layout.util';

const DetailMeal = ({route, navigation}) => {
  const {
    data: {idMeal},
  } = route.params;
  const [meal, setMeal] = useState({});
  const [loading, setLoading] = useState(false);
  const [ingredient, setIngredient] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const getDetailMeal = async () => {
    try {
      setLoading(true);
      const response = await API(`/lookup.php?i=${idMeal}`);
      const meal = response.data.meals[0];
      setMeal(meal);
      getIngredient(meal);
      getMeasure(meal);

      setInstructions(meal.strInstructions.split('\r\n'));
      setLoading(false);
    } catch (err) {
      Alert.alert(err);
    }
  };

  const getIngredient = (meal) => {
    const result = [];
    for (const ingredient in meal) {
      if (
        ingredient.includes('strIngredient') &&
        meal[ingredient] != '' &&
        meal[ingredient] != null
      ) {
        result.push(meal[ingredient]);
      }
    }
    setIngredient(result);
  };

  const getMeasure = (data) => {
    const result = [];
    for (const measure in data) {
      if (
        measure.includes('strMeasure') &&
        data[measure] != '' &&
        data[measure] != null
      ) {
        result.push(data[measure]);
      }
    }
    setMeasure(result);
  };

  useEffect(() => {
    getDetailMeal();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={{uri: meal.strMealThumb}} />
      </View>
      {meal.strYoutube ? (
        <Button
          onPress={() =>
            navigation.navigate('VideoPlayer', {urlVideo: meal.strYoutube})
          }
          title="Watch Video"
        />
      ) : null}

      <View style={{paddingHorizontal: pw(5)}}>
        <Text style={styles.titleIngridient}>ingredient</Text>
        {ingredient.map((data, i) => (
          <Text style={styles.ingredient}>
            {i + 1}. {data} [{measure[i]}]
          </Text>
        ))}
        <Text style={styles.titleIngridient}>Instructions :</Text>
        {instructions.map((ins, i) => (
          <Text style={styles.instructions}>
            {i + 1}. {ins}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default DetailMeal;

const styles = StyleSheet.create({
  image: {
    width: pw(100),
    height: ph(20),
    resizeMode: 'cover',
  },
  titleIngridient: {
    fontWeight: 'bold',
    fontSize: rf(20),
    marginVertical: ph(1),
  },
  ingredient: {
    fontSize: rf(15),
    marginVertical: ph(0.5),
  },
  instructions: {
    fontSize: rf(15),
    marginBottom: ph(1),
  },
});
