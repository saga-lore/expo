import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { ScrollView } from 'react-native-gesture-handler';
import { viewportHeight, viewportWidth } from 'utils/viewport';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function App() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'red' }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source="https://img-4.harimanga.com/weapon-maker/chapter-34/001.webp"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: viewportWidth,
    height: viewportHeight,
    backgroundColor: 'blue',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});
