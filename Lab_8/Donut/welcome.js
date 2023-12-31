import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, FlatList, Image} from "react-native";
import { useEffect, useState } from "react";

var arr = []
const welcome = ({navigation}) => {
  const [data, setData] = useState([]);
  const [state, setState] = useState(1);
  useEffect(()=>{
    fetch("https://6546fee0902874dff3abe603.mockapi.io/donut")
      .then((response) => response.json())
      .then((json) => {
        arr = json;
        setData(json)});
  },[])

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "10%" }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: "rgba(0, 0, 0, 0.65)",
          }}
        >
          Welcome, Jala!
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>
          Choice you Best food
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "10%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder="Search food"
          style={{
            width: 266,
            height: 46,
            backgroundColor: "rgba(196, 196, 196, 0.1)",
            borderWidth: 1,
            borderColor: "rgba(196, 196, 196, 1)",
            borderRadius: 3,
            padding: 10,
          }}
        />
        <Pressable
          style={{
            width: 49,
            height: 47,
            borderRadius: 5,
            backgroundColor: "rgba(241, 176, 0, 1)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("./assets/Vector.png")}
            style={{ width: 27, height: 28 }}
          />
        </Pressable>
      </View>
      <View
        style={{
          width: "100%",
          height: "10%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => {
            setData(arr);
            setState(1);
          }}
          style={{
            width: 101,
            height: 35,
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              state == 1 ? "rgba(241, 176, 0, 1)" : "rgba(196, 196, 196, 0.12)",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Donut</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setData([
              ...arr.filter((x) => {
                return x.type == "P";
              }),
            ]);
            setState(2);
          }}
          style={{
            width: 101,
            height: 35,
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              state == 2 ? "rgba(241, 176, 0, 1)" : "rgba(196, 196, 196, 0.12)",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Pink Donut</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setData([
              ...arr.filter((x) => {
                return x.type == "F";
              }),
            ]);
            setState(3);
          }}
          style={{
            width: 101,
            height: 35,
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              state == 3 ? "rgba(241, 176, 0, 1)" : "rgba(196, 196, 196, 0.12)",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Floating</Text>
        </Pressable>
      </View>
      <ScrollView>
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: 337,
                    height: 115,
                    backgroundColor: "rgba(244, 221, 221, 1)",
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    margin: 10,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 111, height: 101 }}
                  />
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>
                      {item.name}{" "}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "700",
                        color: "rgba(0, 0, 0, 0.54)",
                      }}
                    >
                      {item.description}{" "}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>
                      $ {item.price}{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      height: "100%",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        navigation.navigate("Detail", item);
                      }}
                      style={styles.btnAdd}
                    >
                      <Image
                        source={require("./assets/plus.png")}
                        style={{
                          width: 15,
                          height: 15,
                          position: "absolute",
                          top: 20,
                          left: -20,
                        }}
                      />
                    </Pressable>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 360,
    height: 640,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  btnAdd: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 45,
    borderRightWidth: 0,
    borderBottomWidth: 45,
    borderLeftColor: "transparent",
    borderBottomColor: "rgba(241, 176, 0, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});