import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class ShowMapPage extends React.Component{
  render() {
    const {navigation}=this.props;

    const username=navigation.getParam('username', '');

    const dropoffPressed=navigation.getParam('dropoffPressed', true);
    const numBags=navigation.getParam('numBags', 0);
 // Please follow the map to find your nearest station
    return (
      <View style={styles.container}>
        <Button
          title={'Scan QR Code'}
          style={styles.input}
          onPress={() => this.props.navigation.navigate('ShowQRCodePage', {
            'username': username,

            'dropoffPressed': dropoffPressed,
            'numBags': numBags
          })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#aaaaaa',
  },
});
// import React, { Component } from "react";
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Animated,
//   Image,
//   Dimensions,
//   TouchableOpacity,
// } from "react-native";

// import MapView from "react-native-maps";

// const Images = [
//   { uri: 'https://www.localike-newyork.com/wp/en/files/2016/09/Williamsburg1.png'},
//   { uri: "https://fastly.4sqi.net/img/general/699x268/2DJ-UeRdiAHH4KV2Q7aV6JKHnulYZ9S9wS0ZEDiQHdY.jpg" },
//   { uri: "https://i2.wp.com/www.power965radio.com/wp-content/uploads/2017/10/rochester-skyline.jpg?fit=652%2C367&ssl=1" },
//   { uri: "https://fastly.4sqi.net/img/general/699x268/4LwCnLhLnXy7XVaIYO0ckYXbRbfSvinXTods8pdts-M.jpg" },
//   { uri: 'http://cdn.cnn.com/cnnnext/dam/assets/170217164615-brooklyn-hotels-wythe-reynard-super-tease.jpg'},
//   { uri: 'https://cdn.newsday.com/polopoly_fs/1.20763240.1535744503!/httpImage/image.jpg_gen/derivatives/display_960/image.jpg'},
//   { uri: 'https://www.ytravelblog.com/wp-content/uploads/2015/11/IMG_7183.jpg'}
// ]

// const { width, height } = Dimensions.get("window");

// const CARD_HEIGHT = height / 4;
// const CARD_WIDTH = CARD_HEIGHT - 50;

// export default class ShowMapPage extends React.Component {
//   state = {
//     markers: [
//       {
//         coordinate: {
//           latitude: 40.700237,
//           longitude: -73.992632,
//         },
//         title: "Spot 1",
//         description: "Pickup/Dropoff Center 1",
//         image: Images[0],
//       },
//       {
//         coordinate: {
//           latitude: 40.700116,
//           longitude: -73.980651,
//         },
//         title: "Spot 2",
//         description: "Pickup/Dropoff Center 2",
//         image: Images[1],
//       },
//       {
//         coordinate: {
//           latitude: 40.686840,
//           longitude: -73.995688,
//         },
//         title: "Spot 3",
//         description: "Pickup/Dropoff Center 3",
//         image: Images[2],
//       },
//       {
//         coordinate: {
//           latitude: 40.695105,
//           longitude: -73.988556,
//         },
//         title: "Spot 4",
//         description: "Pickup/Dropoff Center 4",
//         image: Images[3],
//       },
//       {
//         coordinate: {
//           latitude: 40.691916,
//           longitude: -73.984690,
//         },
//         title: "Spot 5",
//         description: "Pickup/Dropoff Center 5",
//         image: Images[4],
//       },
//       {
//         coordinate: {
//           latitude: 40.696667,
//           longitude: -73.975227,
//         },
//         title: "Spot 6",
//         description: "Pickup/Dropoff Center 6",
//         image: Images[5],
//       },
//       {
//         coordinate: {
//           latitude: 40.711080,
//           longitude: -73.991220,
//         },
//         title: "Spot 7",
//         description: "Pickup/Dropoff Center 7",
//         image: Images[6],
//       },
//     ],
//     region: {
//       latitude: 40.695923,
//       longitude: -73.987221,
//       latitudeDelta: 0.04864195044303443,
//       longitudeDelta: 0.040142817690068,
//     },
//   };

//   componentWillMount() {
//     this.index = 0;
//     this.animation = new Animated.Value(0);
//   }
//   componentDidMount() {
//     // We should detect when scrolling has stopped then animate
//     // We should just debounce the event listener here
//     this.animation.addListener(({ value }) => {
//       let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
//       if (index >= this.state.markers.length) {
//         index = this.state.markers.length - 1;
//       }
//       if (index <= 0) {
//         index = 0;
//       }

//       clearTimeout(this.regionTimeout);
//       this.regionTimeout = setTimeout(() => {
//         if (this.index !== index) {
//           this.index = index;
//           const { coordinate } = this.state.markers[index];
//           this.map.animateToRegion(
//             {
//               ...coordinate,
//               latitudeDelta: this.state.region.latitudeDelta,
//               longitudeDelta: this.state.region.longitudeDelta,
//             },
//             350
//           );
//         }
//       }, 10);
//     });
//   }

//   render() {
//     const interpolations = this.state.markers.map((marker, index) => {
//       const inputRange = [
//         (index - 1) * CARD_WIDTH,
//         index * CARD_WIDTH,
//         ((index + 1) * CARD_WIDTH),
//       ];
//       const scale = this.animation.interpolate({
//         inputRange,
//         outputRange: [1, 2.5, 1],
//         extrapolate: "clamp",
//       });
//       const opacity = this.animation.interpolate({
//         inputRange,
//         outputRange: [0.35, 1, 0.35],
//         extrapolate: "clamp",
//       });
//       return { scale, opacity };
//     });

//     return (
//       <View style={styles.container}>
//         <MapView
//           ref={map => this.map = map}
//           initialRegion={this.state.region}
//           style={styles.container}
//         >
//           {this.state.markers.map((marker, index) => {
//             const scaleStyle = {
//               transform: [
//                 {
//                   scale: interpolations[index].scale,
//                 },
//               ],
//             };
//             const opacityStyle = {
//               opacity: interpolations[index].opacity,
//             };
//             return (
//               <MapView.Marker key={index} coordinate={marker.coordinate}>
//                 <Animated.View style={[styles.markerWrap, opacityStyle]}>
//                   <Animated.View style={[styles.ring, scaleStyle]} />
//                   <View style={styles.marker} />
//                 </Animated.View>
//               </MapView.Marker>
//             );
//           })}
//         </MapView>
//         <Animated.ScrollView
//           horizontal
//           scrollEventThrottle={1}
//           showsHorizontalScrollIndicator={false}
//           snapToInterval={CARD_WIDTH}
//           onScroll={Animated.event(
//             [
//               {
//                 nativeEvent: {
//                   contentOffset: {
//                     x: this.animation,
//                   },
//                 },
//               },
//             ],
//             { useNativeDriver: true }
//           )}
//           style={styles.scrollView}
//           contentContainerStyle={styles.endPadding}
//         >
//           {this.state.markers.map((marker, index) => (
//             <View style={styles.card} key={index}>
//               <Image
//                 source={marker.image}
//                 style={styles.cardImage}
//                 resizeMode="cover"
//               />
//               <View style={styles.textContent}>
//                 <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
//                 <Text numberOfLines={1} style={styles.cardDescription}>
//                   {marker.description}
//                 </Text>
//               </View>
//             </View>
//           ))}
//         </Animated.ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     position: "absolute",
//     bottom: 30,
//     left: 0,
//     right: 0,
//     paddingVertical: 10,
//   },
//   endPadding: {
//     paddingRight: width - CARD_WIDTH,
//   },
//   card: {
//     padding: 10,
//     elevation: 2,
//     backgroundColor: "#FFF",
//     marginHorizontal: 10,
//     shadowColor: "#000",
//     shadowRadius: 5,
//     shadowOpacity: 0.3,
//     shadowOffset: { x: 2, y: -2 },
//     height: CARD_HEIGHT,
//     width: CARD_WIDTH,
//     overflow: "hidden",
//   },
//   cardImage: {
//     flex: 3,
//     width: "100%",
//     height: "100%",
//     alignSelf: "center",
//   },
//   textContent: {
//     flex: 1,
//   },
//   cardtitle: {
//     fontSize: 12,
//     marginTop: 5,
//     fontWeight: "bold",
//   },
//   cardDescription: {
//     fontSize: 12,
//     color: "#444",
//   },
//   markerWrap: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   marker: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "rgba(58,140,21, 0.9)",
//   },
//   ring: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     backgroundColor: "rgba(58,140,21, 0.3)",
//     position: "absolute",
//     borderWidth: 1,
//     borderColor: "rgba(58,140,21, 0.5)",
//   },
// });

// AppRegistry.registerComponent("mapfocus", () => ShowMapPage);
