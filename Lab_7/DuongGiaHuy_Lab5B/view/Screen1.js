import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen1({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{ width: 351, height: 87 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: "400",
            fontFamily: "VT323",
          }}
        >
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View
        style={{
          width: 359,
          height: 388,
          backgroundColor: "rgba(233, 65, 65, 0.1)",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/bifour_-removebg-preview.png")}
          style={{ width: 292, height: 270 }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "700",
            width: 200,
            textAlign: "center",
          }}
        >
          POWER BIKE SHOP
        </Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("Screen2")}
        style={{
          width: 340,
          height: 61,
          backgroundColor: "red",
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 27,
            fontWeight: "400",
            fontFamily: "VT323",
          }}
        >
          Get Started
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    height: 812,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});