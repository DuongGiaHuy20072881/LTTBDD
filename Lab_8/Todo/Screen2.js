import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native';

const Screen2 = ({navigation,route}) => {
    const [user,setUser] = useState({});
    useEffect(()=>{
        fetch("https://6546fee0902874dff3abe603.mockapi.io/user/" + route.params?.id)
          .then((response) => response.json())
          .then((json) => setUser(json));
    },[route])
    useEffect(()=>{
        navigation.setOptions({
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: user.image }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  backgroundColor: "rgba(217, 203, 246, 1)",
                }}
              />
              <View>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                  Hi {user.name}
                </Text>
                <Text>Have agrate day a head</Text>
              </View>
            </View>
          ),
        });
    },[user])
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("./assets/search.png")}
          style={{
            width: 26,
            height: 26,
            position: "absolute",
            top: 10,
            left: 5,
          }}
        />
        <TextInput
          placeholder="Search"
          style={{
            width: 334,
            height: 44,
            borderWidth: 1,
            borderRadius: 4,
            paddingLeft: 30,
          }}
        />
      </View>
      <View style={{ height: "80%" }}>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <FlatList
              data={user.todo}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    width: 335,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: "rgba(144, 149, 160, 1)",
                    justifyContent: "space-around",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <Image
                    source={require("./assets/check.png")}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text>{item.job}</Text>
                  <Pressable>
                    <Image
                      source={require("./assets/edit.png")}
                      style={{ width: 24, height: 24 }}
                    />
                  </Pressable>
                </View>
              )}
            />
            <Pressable
              onPress={() => navigation.navigate("Screen3", { user })}
              style={{
                width: 69,
                height: 69,
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 189, 214, 1)",
              }}
            >
              <Image
                source={require("./assets/plus.png")}
                style={{ width: 32, height: 32 }}
              />
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Screen2

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff'
    }
})