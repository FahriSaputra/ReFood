import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListMeals from '../../Components/ListMeals';
import {API} from '../../Config/api';
import {Loading} from '../../Components';

const Category = ({route, navigation}) => {
  const {data} = route.params;
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllMealsByCategory = async (data) => {
    try {
      setLoading(true);
      const response = await API(`/filter.php?c=${data.strCategory}`);
      const meals = await response.data.meals;
      setMeals(meals);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllMealsByCategory(data);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <View>
      <ListMeals
        data={meals}
        onPress={(item) => navigation.navigate('Detail', {data: item})}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
