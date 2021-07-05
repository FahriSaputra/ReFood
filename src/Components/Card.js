import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ph, pw, rf} from '../Utils/Layout.util';

const Card = ({data, onSeeAllPress, onPress}) => {
  const {strCategory, strCategoryThumb} = data;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardTop}>
            <Text style={styles.title}>{strCategory}</Text>
            <Text onPress={onSeeAllPress}>See All</Text>
          </View>
          <View style={styles.mainCard}>
            <Image style={styles.imageCard} source={{uri: strCategoryThumb}} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: pw(90),
    marginBottom: ph(2),
    backgroundColor: 'white',
    borderRadius: 20,
  },
  cardContainer: {
    paddingHorizontal: pw(5),
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: ph(2),
  },
  title: {
    fontSize: rf(18),
    fontWeight: '600',
  },
  mainCard: {
    width: pw(90),
  },
  imageCard: {
    width: '90%',
    height: ph(20),
    borderRadius: 20,
    marginVertical: ph(2),
    resizeMode: 'contain',
    // backgroundColor: 'blue',
  },
});
