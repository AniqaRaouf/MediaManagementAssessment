import React, { useState } from 'react';
import { StyleSheet, Text, Dimensions, View } from 'react-native';
import Slider from '@react-native-community/slider';

const SliderComponent = () => {
    const [sliderValue, setSliderValue] = useState(100)
    return (
        <>
            <View style={[styles.sliderContainer, { backgroundColor: sliderValue === 100 ? "#12111A" : '#523FD7' }]}>
                <Text style={[styles.sliderValue, { color: sliderValue === 100 ? "#12111A" : '#FFFFFF' }]}>{sliderValue.toFixed()}</Text>
            </View>
            <View style={styles.sliderWrapper}>
                <Text style={styles.sliderText}>100</Text>

                <Slider
                    style={[styles.linearGradient, { height: 40 }]}
                    minimumValue={100}
                    maximumValue={1000}
                    minimumTrackTintColor={'#523FD7'}
                    maximumTrackTintColor="white"
                    thumbTintColor="#FF7DFF"
                    value={sliderValue}
                    onValueChange={(value) => setSliderValue(value)}
                />
                <Text style={styles.sliderText}>1000</Text>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    sliderContainer: {
        backgroundColor: '#523FD7',
        top: Dimensions.get("window").height / 4.7,
        alignSelf: 'center',
        borderRadius: 12,
        width: 30,
        height: 22
    },
    sliderValue: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center'
    },
    sliderWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: Dimensions.get("window").height / 4.8,
        backgroundColor: 'rgba(9, 9, 13, 1)',
        height: 53,
        borderRadius: 12
    },
    sliderText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        alignSelf: 'center'
    },
    linearGradient: {
        height: 5,
        width: '70%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5
    },
});
export default SliderComponent;
