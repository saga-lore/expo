import { useEffect, useState } from 'react';
import { Image as RNImage, View } from 'react-native';
import { Image } from 'expo-image';
import { ScrollView } from 'react-native-gesture-handler';
import soloLeveling from 'data/kunmanga/solo-leveling.json';
import weaponMaker from 'data/kunmanga/weapon-maker.json';
import { viewportHeight, viewportWidth } from 'utils/viewport';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

type MangaImageProps = {
  source: string;
};

const MangaImage = ({ source }: MangaImageProps) => {
  const [width, setWidth] = useState(viewportWidth);
  const [height, setHeight] = useState(viewportHeight);

  useEffect(() => {
    RNImage.getSize(
      source,
      (width, height) => {
        setWidth(width);
        setHeight(height);
      },
      console.error,
    );
  }, []);

  const aspectRatio = width / height;
  const imageHeight = viewportWidth / aspectRatio;

  return (
    <View
      style={{
        flex: 1,
        width: viewportWidth,
        height: imageHeight,
        backgroundColor: 'blue',
        marginBottom: 100,
      }}
    >
      <Image
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: '#0553',
        }}
        source={source}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
    </View>
  );
};
const Manga = ({ chapters }: MangaProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.floor(offsetY / viewportHeight);
    setCurrentIndex(index);
    console.log(index, offsetY);
  };
  return (
    <ScrollView className="bg-black" onScroll={handleScroll}>
      {chapters.map((chapter) => {
        return chapter.images.map((image) => <MangaImage key={image} source={image} />);
      })}
    </ScrollView>
  );
};

type MangaProps = {
  chapters: {
    id: string;
    mangaTitle: string;
    images: string[];
  }[];
};

const Index = () => {
  return <Manga chapters={[...soloLeveling.chapters].reverse().splice(0, 2)} />;
};

export default Index;
