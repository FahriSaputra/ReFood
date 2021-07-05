import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ph, pw, rf} from '../Utils/Layout.util';

const CardMeal = ({data, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={{uri: data.strMealThumb}} />
        <Text style={styles.title}>{data.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMeal;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    marginVertical: ph(1),
    alignItems: 'center',
    paddingBottom: ph(2),
    borderRadius: 20,
  },
  image: {
    width: pw(100),
    height: ph(20),
    borderRadius: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: rf(20),
    marginTop: ph(1),
    maxWidth: pw(80),
    textAlign: 'center',
  },
});
