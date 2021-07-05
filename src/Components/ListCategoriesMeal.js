import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import Card from './Card';
const ListCategoriesMeal = ({data, onSeeAllPress, onPress}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        return (
          <>
            <Card
              data={item}
              onPress={() => onPress(item)}
              onSeeAllPress={() => onSeeAllPress(item)}
            />
          </>
        );
      }}
    />
  );
};

export default ListCategoriesMeal;

const styles = StyleSheet.create({});
