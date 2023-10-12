
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput} from 'react-native-paper';

var account = {name:'abc',password:'123'}

var validAccount = (name,password)=>{
  if(name === account.name && password === account.password){
    alert('Dang nhap thanh cong')
  }
  else
    alert('Dang nhap that bai')
}
export default function App() {
  var [name,setName] = useState('')
  var [password,setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={{ width: 360 }}>
        <Text style={{ fontSize: 30, fontWeight: "700" }}>LOGIN</Text>
      </View>
      <View style={styles.containerInput}>
        <View style={styles.rowInput}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={setName}
            left={<TextInput.Icon icon="account" />}
          />
        </View>
        <View style={styles.rowInput}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry
            left={<TextInput.Icon icon="lock" />}
            right={<TextInput.Icon icon="eye" />}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={()=>validAccount(name,password)}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 640,
    flex: 1,
    backgroundImage: "linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerInput: {
    width: 330,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  rowInput: {
    width: 330,
    height: 54,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
  },
  btn: {
    width: 330,
    height: 45,
    backgroundColor: "rgba(6, 0, 0, 1)",
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
});