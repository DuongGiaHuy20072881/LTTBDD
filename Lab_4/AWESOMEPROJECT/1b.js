
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";


export default function Cau1b() {
  return ( 
    <View style={styles.container}>
      <Image
        source={require("./assets/1b/lock-152879 1.png")}
        style={{ width: 105, height: 117 }}
      />
      <Text style={styles.title}>Forget Password</Text>
      <Text style={styles.title2}>
        Provide your account’s email for which you want to reset your password
      </Text>
      <View style={styles.rowInput}>
        <Image
          source={require("./assets/1b/mail-2935365 1.png")}
          style={[styles.icon,{ width: 45, height: 40 }]}
        />
        <TextInput style={styles.input} placeholder="Email"/>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{fontSize:18,fontWeight:"700"}}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom, rgba(199, 244, 246, 1),rgba(209, 244, 246, 1),rgba(229, 244, 245, 1),rgba(0, 204, 249, 1))',
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  rowInput: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    width: 305,
    height: 45,
    backgroundColor: "rgba(196, 196, 196, 1)",
    paddingLeft:50
  },
  icon :{
    position:'absolute',
    top:2,
    left:2
  },
  btn: {
    display: "flex",
    width: 305,
    height: 45,
    backgroundColor: "rgba(227, 192, 0, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: 169,
    height: 58,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 29.3,
  },
  title2: {
    width: 302,
    height: 36,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 17.58,
  },
});
