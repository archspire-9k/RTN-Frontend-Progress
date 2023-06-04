import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
  Text
} from 'react-native';

const API_KEY = 'in9trA7ovDMRRrckmlmOwV0l9vMdJ3lKtyHcBgvY7w9gPsunEpc4hqJI';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [data, setData] = React.useState([])
  const [loaded, setIsloaded] = React.useState(false)
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const CuratedPhotos = async (page_num: number) => {
    // fetch the data from api
    try {
      const response = await fetch(`https://api.pexels.com/v1/curated?page=${page_num}&per_page=80`, {
        method: 'GET',
        headers: {
          Authorization: API_KEY,         //use the apikey you have generated
        },
      })

      // console.log(response)
      var temp = await response.json()
        .catch(_e => console.log("error converting"))
      if (temp) {
        var oldArr = data
        oldArr.push(...temp.photos)
        setData(oldArr)
        setIsloaded(true)
      }
    }
    catch (err) { console.log("Error fetching data ", err) }

    return (
      console.log("End of cycle")
    )
  }

  const renderItem = (item) => (
    <Image source={{ uri: item.item.src.small }} style={{ width: 200, height: 200, backgroundColor: 'lightgray', marginBottom: 5, marginHorizontal: 3 }} />
    // <Text style = {{ color: 'black' }}>{item.item.url}</Text>
  )

  //get images link 
  React.useEffect(() => {
    for(let i = 0; i != 100; i++) {
      CuratedPhotos(i);
    }
    
    
  }, [])

  return (
    <View
      style={
        { flex: 1, ...backgroundStyle }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.darker}
      />
      {loaded ?
        <FlatList
          data={data}
          extraData={data}
          numColumns={2}
          showsVerticalScrollIndicator={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
        :
        <Text> Loading ..</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
