import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ScrollView } from 'react-native';

import SportNews from './SportNews'
export default function SportNewsList() {
  const testData = [
    {
      uri: "https://phantom-marca.unidadeditorial.es/138e4559ecaa64a40eca4832d050b804/resize/660/f/webp/assets/multimedia/imagenes/2021/08/14/16288955874342.jpg",
      title: 'Di Mari: "Cristiano se debe querer matar por no estar aca"'
    }, {
      uri: "https://phantom-marca.unidadeditorial.es/f4f90e67a9dacbcb1b37f5ff5f04c6af/resize/660/f/webp/assets/multimedia/imagenes/2021/08/13/16288678470803.jpg",
      title: 'Esprint por Coutinho'
    },
    {
      uri: "https://phantom-marca.unidadeditorial.es/2fe46fc03435aa644e0363b5cee70bd6/resize/660/f/webp/assets/multimedia/imagenes/2021/08/13/16288397790426.jpg",
      title: 'Mbappé "se queda" según Di María'
    }
  ]

  return (
    <ScrollView>
      { testData.map(t => <SportNews data={t} />)}
    </ScrollView>
  );
}
