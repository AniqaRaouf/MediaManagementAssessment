import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TypingText from '../components/TypingText';
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate("MediaManagement")
    }, 10000);

    return () => clearTimeout(timeoutId); // Cleanup function to clear timer on unmount
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TypingText text={"Welcome to my assessment \n This is Aniqa Raouf :) \n Glad to see you here"} delay={100} />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12111A',
    justifyContent: 'center',
  },
});
