import { View } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import Icon1 from '../Icons/Icon1';
import Icon2 from '../Icons/Icon2';
import Icon3 from '../Icons/Icon3';
import Icon4 from '../Icons/Icon4';
import Icon from 'react-native-vector-icons/AntDesign';
const TabBar = () => {
  return (
    <Svg width={395} height={49} viewBox="0 0 395 49" fill="none">
      <Defs>
        <LinearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="395"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0.286458" stopColor="#00B67A" />
          <Stop offset="0.40625" stopColor="#4256C5" />
          <Stop offset="0.489583" stopColor="#523FD7" />
          <Stop offset="0.510417" stopColor="#F4F3FD" stopOpacity="0.0619576" />
          <Stop offset="0.994792" stopColor="white" stopOpacity="0" />
        </LinearGradient>
      </Defs>

      <Path
        fill="url(#gradient)"
        d="M334 24C330.134 24 327.103 20.7998 325.992 17.0966C323.027 7.20671 313.855 0 303 0C292.145 0 282.973 7.20671 280.008 17.0966C278.897 20.7997 275.866 24 272 24H267.699C263.944 24 260.962 20.9731 259.775 17.4109C256.6 7.87537 247.603 1 237 1C226.397 1 217.4 7.87537 214.225 17.411C213.038 20.9731 210.056 24 206.301 24H198.699C194.944 24 191.962 20.9731 190.775 17.4109C187.6 7.87537 178.603 1 168 1C157.397 1 148.4 7.87537 145.225 17.411C144.038 20.9731 141.056 24 137.301 24H128.699C124.944 24 121.962 20.9731 120.775 17.4109C117.6 7.87537 108.603 1 98 1C87.6541 1 78.8373 7.54632 75.4656 16.7227C74.2092 20.1421 71.2787 23 67.6359 23H54.3641C50.7213 23 47.7908 20.1421 46.5344 16.7227C43.1627 7.54632 34.3459 1 24 1C10.7452 1 0 11.7452 0 25C0 38.2548 10.7452 49 24 49C34.0843 49 42.716 42.7805 46.2683 33.9681C47.5885 30.6931 50.4646 28 53.9957 28H68.0044C71.5354 28 74.4115 30.6931 75.7317 33.9681C79.284 42.7805 87.9157 49 98 49C107.818 49 116.258 43.1051 119.976 34.6617C121.354 31.5325 124.173 29 127.592 29H138.408C141.827 29 144.646 31.5325 146.024 34.6617C149.742 43.1051 158.182 49 168 49C177.818 49 186.258 43.1051 189.976 34.6617C191.354 31.5325 194.173 29 197.592 29H207.408C210.827 29 213.646 31.5325 215.024 34.6617C218.742 43.1051 227.182 49 237 49C246.818 49 255.258 43.1051 258.976 34.6617C260.354 31.5325 263.173 29 266.592 29H273.85C277.156 29 279.915 31.3759 281.344 34.358C285.211 42.4274 293.455 48 303 48C312.545 48 320.789 42.4274 324.656 34.358C326.085 31.3759 328.844 29 332.15 29H341.85C345.156 29 347.915 31.3759 349.344 34.358C353.211 42.4274 361.455 48 371 48C384.255 48 395 37.2548 395 24C395 10.7452 384.255 0 371 0C360.145 0 350.973 7.20671 348.008 17.0966C346.897 20.7998 343.866 24 340 24H334Z"
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor:'transparent',top: 15 }}>
        <View style={{ left: 15 }}>
          <Icon1 />
        </View>
        <View style={{ right: 5 }}>
          <Icon2 />
        </View>
        <View style={{ right: 26 }}>
          <Icon3 />
        </View>
        <View style={{ right: 52 }}>
          <Icon4 />
        </View>
        <View style={{ right: 80 }}>
          <Icon name={"questioncircleo"} color={"white"} size={24} />
        </View>


      </View>
    </Svg>
  );
};

export default TabBar;