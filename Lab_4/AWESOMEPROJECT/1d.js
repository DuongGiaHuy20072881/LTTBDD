import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
  } from "react-native";
  
  export default function App() {
    return (
      <View style={styles.container}>
        <Text style={styles.head1}>LOGIN</Text>
        <View style={styles.rowInput}>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.rowInput}>
          <TextInput style={styles.input} placeholder="Password" />
          <TouchableOpacity>
            <Image
              source={require("./assets/1d/eye 1.png")}
              style={{ width: 36, height: 36 }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 14, fontWeight: "400" }}>
          When you agree to terms and conditions
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: "rgba(93, 37, 250, 1)",
          }}
        >
          For got your password?
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "400" }}>Or login with</Text>
        <View style={styles.rowBTN}>
          <TouchableOpacity
            style={[styles.btnOthLogin, { backgroundColor: "rgb(39,90,141)" }]}
          >
            <Image
              source={require("./assets/1d/icofacebook-1924510 1.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnOthLogin,
              { backgroundColor: "rgba(6, 128, 241, 1)" },
            ]}
          >
            <Text style={{fontSize:35,fontWeight:"700",color:'#fff'}}>Z</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOthLogin}>
            <Image
              source={require("./assets/1d/icogoogle 1.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(255, 255, 255, 1)",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    head1: {
      fontSize: 25,
      fontWeight: "700",
    },
    rowInput: {
      display: "flex",
      flexDirection: "row",
      width: 330,
      height: 54,
      backgroundColor: "rgba(196, 196, 196, 0.3)",
      padding: 10,
    },
    input: {
      width: 290,
    },
    btnLogin: {
      display: "flex",
      width: 330,
      height: 45,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(229, 57, 53, 1)",
    },
    rowBTN:{
      display:'flex',
      flexDirection:'row',
      width:328,
      height:45,
  
    },
    btnOthLogin:{
      display:'flex',
      width:109,
      height:45,
      borderWidth:1,
      borderColor:'rgba(6, 128, 241, 1)',
      alignItems:'center',
      justifyContent:'center'
    }
  });
  