import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import { Text, View } from './Themed';

export default function SportNews({ data }: { data: any }) {
  return (
    <View style={styles.cardViewContainer}>
      <Image style={styles.image}
        source={{ ...data }}
      />
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {data.title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardViewContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    padding: 10,
  },
  titleText: {
    color: '#3867F0'
  }
});
