import { useEffect, useState } from 'react';
import { Image as RNImage, View } from 'react-native';
import { Image } from 'expo-image';
import { ScrollView } from 'react-native-gesture-handler';
import { FlashList } from '@shopify/flash-list';
import soloLeveling from 'data/kunmanga/solo-leveling.json';
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
    if (!source) return;
    RNImage.getSize(
      source,
      (width, height) => {
        setWidth(width);
        setHeight(height);
      },
      console.error,
    );
  });

  if (!source) return null;

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
  const [allImages, setAllImages] = useState(chapters[0].images);
  const [heights, setHeights] = useState<{ [key: number]: number }>({});
  const [prevImage, setPrevImage] = useState('');
  const [nextImage, setNextImage] = useState('');

  useEffect(() => {
    const images = [];
    for (let i = 0; i < chapters.length; i++) images.push(...chapters[i].images);
    setAllImages(images);
  }, [setAllImages, chapters]);

  const handleScroll = (event: any) => {
    if (!heights[currentIndex]) {
      RNImage.getSize(allImages[currentIndex], (w, h) => setHeights({ ...heights, [currentIndex]: h }), console.error);
    }
    const yOffSet = event.nativeEvent.contentOffset.y;
    console.log(yOffSet, heights);
    if (yOffSet + viewportHeight > heights[currentIndex]) {
      setNextImage(allImages[currentIndex + 1]);
    }
    if (yOffSet - viewportHeight < heights[currentIndex]) {
      setPrevImage(allImages[currentIndex - 1]);
    }
    if (yOffSet > heights[currentIndex] * 1.2) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const time = Date.now();
  return (
    <ScrollView className="bg-black" onScroll={handleScroll}>
      {<MangaImage source={prevImage} />}
      {<MangaImage source={allImages[currentIndex]} />}
      {<MangaImage source={nextImage} />}
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
