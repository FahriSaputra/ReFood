import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Loading} from '../../Components';
import ListCategoriesMeal from '../../Components/ListCategoriesMeal';
import {API} from '../../Config/api';
import {ph, pw, rf} from '../../Utils/Layout.util';

const Main = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [mealByCategories, setMealByCategories] = useState([]);

  const getMealByCategories = async () => {
    try {
      setLoading(true);
      const response = await API('/categories.php');
      const categories = response.data.categories;
      setMealByCategories(categories);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMealByCategories();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category Meals</Text>
      <View style={styles.listContainer}>
        <ListCategoriesMeal
          data={mealByCategories}
          onPress={(item) => {
            navigation.navigate('Category', {
              data: item,
            });
          }}
          onSeeAllPress={(item) => {
            navigation.navigate('Category', {
              data: item,
            });
          }}
        />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: pw(5),
  },
  title: {
    fontWeight: 'bold',
    fontSize: rf(20),
    marginVertical: ph(2),
  },
  listContainer: {
    alignItems: 'center',
  },
});
