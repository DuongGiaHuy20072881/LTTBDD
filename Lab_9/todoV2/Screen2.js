import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "react-native-vector-icons";
import { Checkbox } from "react-native-paper";

const Screen2 = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [navigation, route]);
  const fetchData = () =>
    fetch(
      `https://654df06ecbc32535574216e1.mockapi.io/account/${route.params.id}/Notes`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            width: 390,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Pressable
            onPress={() => {
              fetch(
                `https://654df06ecbc32535574216e1.mockapi.io/account/${route.params.id}/Notes?priority=1`
              )
                .then((response) => response.json())
                .then((json) => {
                  setData(json);
                });
            }}
            style={{
              width: 80,
              height: 40,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Priority 1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              fetch(
                `https://654df06ecbc32535574216e1.mockapi.io/account/${route.params.id}/Notes?priority=2`
              )
                .then((response) => response.json())
                .then((json) => {
                  setData(json);
                });
            }}
            style={{
              width: 80,
              height: 40,
              backgroundColor: "orange",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Priority 2</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              fetch(
                `https://654df06ecbc32535574216e1.mockapi.io/account/${route.params.id}/Notes?priority=3`
              )
                .then((response) => response.json())
                .then((json) => {
                  setData(json);
                });
            }}
            style={{
              width: 80,
              height: 40,
              backgroundColor: "yellow",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Priority 3</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              fetchData();
            }}
            style={{
              width: 80,
              height: 40,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>All</Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              width: 350,
              height: 150,
              backgroundColor: "#fff",
              borderRadius: 10,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              margin: 10,
            }}
          >
            <Text style={{ width: 200, fontSize: 18, fontWeight: "400" }}>
              {item.note}
            </Text>
            <View
              style={{
                width: 100,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Checkbox status={item.status ? "checked" : "unchecked"} />
              <Pressable
                onPress={() => {
                  navigation.navigate("Screen3", { item });
                }}
              >
                <FontAwesome name="pencil" size={24} />
              </Pressable>
              <Pressable
                onPress={() => {
                  fetch(
                    `https://654df06ecbc32535574216e1.mockapi.io/account/${route.params.id}/Notes/${item.id}`,
                    {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  ).then((response) => {
                    if (response.ok) {
                      fetchData();
                    }
                  });
                }}
              >
                <FontAwesome name="trash" size={24} />
              </Pressable>
            </View>
          </View>
        )}
      />
      <Pressable
        onPress={() =>
          navigation.navigate("Screen3", { accountId: route.params.id })
        }
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: "lightgreen",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name="plus" size={24} />
      </Pressable>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "space-around",
    width: 390,
    height: 844,
  },
});