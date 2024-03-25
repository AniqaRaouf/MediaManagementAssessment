import React, { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import GradientText from '../components/GradientText';
import TabBar from '../components/TabBar';
import { funList, educationList, sportsList, newsList, investmentList, factsList, data } from '../components/Data';
import SliderComponent from '../components/Slider';

function MediaManagement() {
    const [value, setValue] = useState(null);
    const [sliderValue, setSliderValue] = useState(100);
    const [selectedType, setSelectedType] = useState('Fun');
    const [isFocus, setIsFocus] = useState(false);
    const [dropdownData, setDropdownData] = useState(funList);
    const height = Dimensions.get("window").height;

    useEffect(() => {
        switch (selectedType) {
            case 'Fun':
                setDropdownData(funList);
                break;
            case 'Education':
                setDropdownData(educationList);
                break;
            case 'Sports':
                setDropdownData(sportsList);
                break;
            case 'News':
                setDropdownData(newsList);
                break;
            case 'Investment':
                setDropdownData(investmentList);
                break;
            default:
                setDropdownData(factsList);
        }
    }, [selectedType]);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#12111A' }]}>
            <View style={styles.contentContainer}>
                <View style={styles.tabBar}>
                    <TabBar />
                </View>
                <Text style={styles.sectionTitle}>Content type</Text>
                <Text style={styles.sectionDescription}>Choose a content type that best fits you.</Text>
                <View style={styles.divider} />
                <Text style={styles.label}>What type of content are you creating ?</Text>
                <FlatList
                    data={data}
                    style={styles.flatList}
                    numColumns={3}
                    contentContainerStyle={{ width: '100%' }}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => setSelectedType(item.name)} style={[styles.touchableOpacity, { backgroundColor: selectedType === item.name ? '#523FD7' : '#12111A' }]}>
                            <Text style={styles.touchableOpacityText}>{item.name}</Text>
                        </TouchableOpacity>}
                    keyExtractor={item => item.id}
                />
                <Text style={styles.contentLabel}>What type of "{selectedType}" content are you creating ?</Text>
                <LinearGradient
                    colors={['#523FD7', '#FF7DFF']}
                    start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                    style={[styles.gradient, { height: isFocus ? 58 : 56, width: isFocus ? '100%' : '99%', }]}>
                    <Dropdown
                        style={[styles.dropdown, { width: isFocus ? '99%' : '100%' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemContainerStyle={styles.itemContainerStyle}
                        containerStyle={styles.dropdownContainer}
                        data={dropdownData}
                        itemTextStyle={styles.itemTextStyle}
                        search
                        maxHeight={300}
                        labelField="label"
                        activeColor={'#12111A'}
                        valueField="value"
                        placeholder={'Select'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                    />
                </LinearGradient>
                <Text style={[styles.contentLabel, { top: height / 4.9 }]}>Set the number of words for output text.</Text>
                <SliderComponent />

                <TouchableOpacity style={styles.nextButton}>
                    <View style={{ alignSelf: 'center' }}>
                        <GradientText colors={['#cc2b5e', '#753a88']} style={styles.nextButtonText}>
                            Next
                        </GradientText>
                    </View>
                    <Icon name="doubleright" size={20} color="#FF7DFF" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#12111A',
    },
    tabBar: {
        top: 10

    },
    contentContainer: {
        marginHorizontal: 15,
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        top: Dimensions.get("window").height / 15,
    },
    sectionDescription: {
        color: '#D0CFD1',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        top: Dimensions.get("window").height / 14,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#3A3940',
        top: Dimensions.get("window").height / 11,
    },
    label: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        top: Dimensions.get("window").height / 8.5,
    },
    flatList: {
        top: Dimensions.get("window").height / 7.5,
    },
    touchableOpacity: {
        backgroundColor: '#12111A',
        borderColor: '#616066',
        borderWidth: 1,
        marginHorizontal: 8,
        marginVertical: 10,
        borderRadius: 30,
    },
    touchableOpacityText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        paddingHorizontal: 28,
        paddingVertical: 14
    },
    contentLabel: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Poppins-Regular',
        top: Dimensions.get("window").height / 6.5,
    },
    gradient: {
        height: 56,
        top: Dimensions.get("window").height / 5.5,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 12,
    },
    dropdown: {
        height: 56,
        backgroundColor: '#3A3940',
        borderRadius: 12,
        alignSelf: 'center',
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'white'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'white'
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    itemContainerStyle: {
        backgroundColor: '#12111A'
    },
    dropdownContainer: {
        backgroundColor: '#12111A'
    },
    itemTextStyle: {
        color: 'white',
        fontWeight: '400',
        fontSize: 16
    },
    nextButton: {
        width: '100%',
        backgroundColor: 'white',
        height: 52,
        justifyContent: 'space-between',
        flexDirection: 'row',
        top: Dimensions.get("window").height / 4.2,
        borderRadius: 30
    },
    nextButtonText: {
        fontSize: 16,
        fontWeight: '400',
        marginHorizontal: 15,
        fontFamily: 'Poppins-Regular',
        justifyContent: 'center',
    },
    icon: {
        alignSelf: 'center',
        marginHorizontal: 15
    },
});



export default MediaManagement;
