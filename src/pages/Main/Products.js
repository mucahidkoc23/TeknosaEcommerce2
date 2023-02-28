import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity,ScrollView } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Home from "./Home";

const Products = (props) => {
  const width = Dimensions.get('window').width;
  return(
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Carousel
          loop
          width={width}
          height={width/2}
          autoPlay={true}
          data={[props.Banner]}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ index }) => (
             <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent:'center',
               }}
              >
            <Text style={{ textAlign:'center',fontSize: 30 }}>
              {index}
            </Text>
            </View>
            )}
        /> 
      </View>
      <Image style={styles.imageStyle} source={{ uri: props.images }}/>
      <View style={styles.bodyContainer}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <Text style={styles.priceStyle}>{props.price}$</Text>
        <TouchableOpacity
          style={styles.TouchableStyle}
          onPress={props.press}>
          <Text style={styles.TouchableTextStyle}>Add</Text>        
        </TouchableOpacity>
      </View>  
    </View>
  );
};
export default Products;
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 5,
    marginRight: 5,
    flexDirection: "row",
  },
  bodyContainer: {
    flex: 1,
    padding: 5,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 25,
  },
  priceStyle: {
    fontSize: 20,
    marginTop: 10,
  },
  imageStyle: {
    height: Dimensions.get('window').height / 4,
    width: 200,
    resizeMode: 'contain',
    minHeight: 100,
    backgroundColor: "white",
  },
  TouchableStyle: {
    marginTop: 20,
    backgroundColor: "#F2921D",
    height: 40,
    width: 45,
    borderRadius: 30,
    justifyContent: "space-around",
    marginLeft: 125,
    marginTop: 60,
  },
  TouchableTextStyle: {
    textAlign: "center",
    padding: 9,
  },
});