import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.leftIconContainer}>
                <Icon name="left" size={20} color="white" style={styles.leftIcon} />
            </View>
            <View>
                <Text style={styles.headerTitle}>Media management</Text>
                <Text style={styles.statusText}>Draft campaign</Text>
            </View>
            <View>
                <LinearGradient colors={['#523FD7', '#CB6AF5']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                    style={styles.gradientBackground}>
                    <View style={styles.profileImageBackground}>
                        <Image
                            style={styles.profileImage}
                            source={require('../../assets/mediaperson.jpeg')} />
                    </View>
                </LinearGradient>
                <View style={styles.caretdownContainer}>
                    <Icon name="caretdown" size={10} color="white" style={styles.caretdownIcon} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#12111A',
      ...Platform.select({
          ios: {
              height: 140, // Adjust height as needed
          },
          android: {
              height: 70, // Adjust height as needed
          },
      }),
  },
  leftIconContainer: {
      width: 56,
      height: 56,
      backgroundColor: 'rgba(58, 57, 64, 0.3)',
      borderRadius: 30,
      justifyContent: 'center',
  },
  leftIcon: {
      alignSelf: 'center',
      marginHorizontal: 15,
  },
  headerTitle: {
      color: '#FFFFFF',
      fontSize: 16,
      alignSelf: 'center',
      fontFamily: 'Poppins-Regular',
      fontWeight:'500'

  },
  statusText: {
      color: '#D0CFD1',
      alignSelf: 'center',
      fontSize: 14,
      fontFamily: 'Poppins-Regular',
      fontWeight:'400'
  },
  profileImageContainer: {
      height: 56,
      width: 56,
      borderRadius: 34,
      justifyContent: 'center',
      alignSelf: 'center',
  },
  profileImageBackground: {
      height: 53,
      width: 53,
      backgroundColor: 'black',
      justifyContent: 'center',
      borderRadius: 34,
      alignSelf: 'center',
  },
  profileImage: {
      width: 42,
      height: 42,
      alignSelf: 'center',
      borderRadius: 34,
  },
  gradientBackground: {
      height: 56,
      width: 56,
      borderRadius: 34,
      justifyContent: 'center',
      alignSelf: 'center',
  },
  caretdownContainer: {
      backgroundColor: 'rgba(177, 57, 255, 0.7)',
      width: 12,
      height: 12,
      justifyContent: 'center',
      alignSelf: 'flex-end',
      borderRadius: 10,
      position: 'absolute',
      bottom: 3,
  },
  caretdownIcon: {
      alignSelf: 'center',
  },
});

export default Header;
