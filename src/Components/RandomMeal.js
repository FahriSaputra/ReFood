import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {API} from '../Config/api';
import {pw} from '../Utils/Layout.util';

const RandomMeal = ({navigation}) => {
  const [meal, setMeal] = useState({});
  const getRandomMeal = async () => {
    try {
      const response = await API('/random.php');
      const meal = response.data.meals[0];
      setMeal(meal);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRandomMeal();
  }, [meal]);

  return (
    <Text
      style={styles.text}
      onPress={() => navigation.navigate('Detail', {data: meal})}>
      Random Meal
    </Text>
  );
};

export default RandomMeal;

const styles = StyleSheet.create({
  text: {
    marginRight: pw(3),
  },
});
