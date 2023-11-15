import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Screen1 = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, fontWeight: "700" }}>Log in</Text>
      <View style={{ width: 390, height: 100, justifyContent: "space-around" }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text style={{ width: 100, fontSize: 18, fontWeight: "700" }}>
            Username:
          </Text>
          <TextInput
            onChangeText={setUsername}
            style={{ width: 250, height: 45, borderWidth: 1, borderRadius: 5 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text style={{ width: 100, fontSize: 18, fontWeight: "700" }}>
            Password:
          </Text>
          <TextInput
            onChangeText={setPassword}
            style={{ width: 250, height: 45, borderWidth: 1, borderRadius: 5 }}
          />
        </View>
        <Text style={{ fontSize: 16,color:'red'}}>{error}</Text>
      </View>
      <Pressable
        onPress={() => {
          fetch("https://654df06ecbc32535574216e1.mockapi.io/account")
            .then((response) => response.json())
            .then((json) => {
              var arr = json.filter((item) => item.user === username);
              if (arr.length != 0) {
                if (arr[0].password === password) {
                  navigation.navigate("Screen2",{id:arr[0].id});
                } else setError("Password is wrong");
              } else setError("Username is wrong");
            });
        }}
        style={{
          width: 150,
          height: 50,
          borderRadius: 10,
          backgroundColor: "lightgreen",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "700", color: "#333" }}>
          Log in
        </Text>
      </Pressable>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "space-around",
  },
});