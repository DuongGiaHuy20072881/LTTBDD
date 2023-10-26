import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const arr = [
  {
    id: 1,
    img: require("../assets/bifour_-removebg-preview.png"),
    name: "Pinarello",
    price: 1800,
    Description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    discount: "15%",
    type: "MT",
  },
  {
    id: 2,
    img: require("../assets/bione-removebg-preview.png"),
    name: "Pina Moutain",
    price: 1700,
    Description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    discount: "15%",
    type: "MT",
  },
  {
    id: 3,
    img: require("../assets/bithree_removebg-preview.png"),
    name: "Pina Bike",
    price: 1500,
    Description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    discount: "15%",
    type: "RB",
  },
  {
    id: 4,
    img: require("../assets/bitwo-removebg-preview.png"),
    name: "Pinarello",
    price: 1900,
    Description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    discount: "15%",
    type: "RB",
  },
  {
    id: 5,
    img: require("../assets/bithree_removebg-preview.png"),
    name: "Pinarello",
    price: 2700,
    Description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    discount: "15%",
    type: "RB",
  },
  {
    id: 6,
    img: require("../assets/bifour_-removebg-preview.png"),
    name: "Pinarello",
    price: 1350,
    Description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    discount: "15%",
    type: "MT",
  },
];
export default function Screen2({ navigation }) {
  const [data, setData] = useState(arr);
  const [state, setState] = useState(1);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Pressable
            onPress={() => {
              setData(arr);
              setState(1);
            }}
            style={styles.btn}
          >
            <Text
              style={{
                color:
                  state == 1
                    ? "rgba(233, 65, 65, 1)"
                    : "rgba(190, 182, 182, 1)",
              }}
            >
              All
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setData([
                ...arr.filter((x) => {
                  return x.type == "RB";
                }),
              ]);
              setState(2);
            }}
            style={styles.btn}
          >
            <Text
              style={{
                color:
                  state == 2
                    ? "rgba(233, 65, 65, 1)"
                    : "rgba(190, 182, 182, 1)",
              }}
            >
              Roadbike
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setData([
                ...arr.filter((x) => {
                  return x.type == "MT";
                }),
              ]);
              setState(3);
            }}
            style={styles.btn}
          >
            <Text
              style={{
                color:
                  state == 3
                    ? "rgba(233, 65, 65, 1)"
                    : "rgba(190, 182, 182, 1)",
              }}
            >
              Moutain
            </Text>
          </Pressable>
        </View>
        <View>
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate("Screen3", item);
                  }}
                  style={{
                    width: 167,
                    height: 200,
                    backgroundColor: "rgba(247, 186, 131, 0.15)",
                    alignItems: "center",
                    justifyContent: "space-around",
                    margin: 10,
                  }}
                >
                  <Image
                    source={item.img}
                    style={{ width: 108, height: 124 }}
                    resizeMode="contain"
                  />
                  <Text>{item.name}</Text>
                  <Text>$ {item.price}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    height: 812,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  btn: {
    width: 99,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(233, 65, 65, 0.53)",
    borderRadius: 5,
  },
});