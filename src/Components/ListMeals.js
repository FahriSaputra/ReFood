import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {ph, pw, rf} from '../Utils/Layout.util';
import CardMeal from './CardMeal';

const ListMeals = ({data, onPress}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        return <CardMeal data={item} onPress={() => onPress(item)} />;
      }}
    />
  );
};

export default ListMeals;

const styles = StyleSheet.create({});
