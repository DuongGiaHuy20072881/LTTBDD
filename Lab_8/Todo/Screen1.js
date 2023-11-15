import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Screen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/Image 95.png")}
        style={{ width: 243, height: 243 }}
      />
      <Text
        style={{
          fontSize: 26,
          fontWeight: "700",
          color: "rgba(131, 83, 226, 1)",
          width: 200,
          textAlign: "center",
        }}
      >
        MANAGE YOUR TASK
      </Text>
      <View>
        <Image
          source={require("./assets/Frame.png")}
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            top: 12,
            left: 5,
          }}
        />
        <TextInput
          style={{
            width: 334,
            height: 43,
            borderWidth: 1,
            borderColor: "rgba(144, 149, 160, 1)",
            borderRadius: 12,
            paddingLeft: 30,
            fontSize: 16,
          }}
          placeholder="Enter your name"
          placeholderTextColor={"rgba(188, 193, 202, 1)"}
        />
      </View>
      <Pressable
      onPress={()=>navigation.navigate("Screen2",{id:1})}
        style={{
          width: 190,
          height: 44,
          borderRadius: 12,
          backgroundColor: "rgba(0, 189, 214, 1)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff",fontSize:16}}>GET STARTED -&gt;</Text>
      </Pressable>
    </View>
  );
}

export default Screen1

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    }
})