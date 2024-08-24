import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import weaponMaker from 'data/kunmanga/weapon-maker.json';

const { width: screenWidth } = Dimensions.get('window');

const App = () => {
  const [imageWidth, setImageWidth] = useState(screenWidth);
  const [imageHeight, setImageHeight] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const imageUri = weaponMaker.chapters[0].images[0]; // Replace with your high-res image URI

  useEffect(() => {
    Image.getSize(
      imageUri,
      (width, height) => {
        setImageWidth(width);
        setImageHeight(height);
        setIsImageLoaded(true);
      },
      (error) => {
        console.error('Failed to get image size:', error);
      },
    );
  }, [imageUri]);

  // Calculate height based on the aspect ratio
  const aspectRatio = imageWidth / imageHeight;
  const calculatedHeight = screenWidth / aspectRatio;

  return (
    <View style={[styles.container, { width: imageWidth }]}>
      {isImageLoaded && (
        <Image
          source={{ uri: imageUri }}
          style={[styles.image, { width: imageWidth, height: calculatedHeight }]}
          resizeMode="contain" // Try "contain" or "cover" based on your needs
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'black', // Optional: use a background color to contrast image
  },
  image: {
    // Ensure image dimensions are set correctly
    width: '100%',
    height: 'auto',
  },
});

export default App;
