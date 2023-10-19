import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import StarRating from "react-native-star-rating-widget";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Details({navigation,route}) {
  const [img, setImg] = useState(require("../assets/vs_blue.png"));
  const [starCount, setStarCount] = useState(0);
  useEffect(() => {
    if (route.params?.img) {
      setImg(route.params.img);
    }
  }, [route.params?.img]);
  return (
    <View style={styles.container}>
      <View>
        <Image source={img} style={{ width: 301, height: 361 }} />
      </View>
      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          height: 150,
        }}
      >
        <View style={styles.row}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            Điện thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
        </View>
        <View style={styles.row}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <StarRating rating={starCount} onChange={setStarCount} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>(Xem 828 đánh giá)</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>1.790.000 đ</Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              textDecorationLine: "line-through",
              opacity: 0.5,
            }}
          >
            1.790.000 đ
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={{ color: "red", fontSize: 12, fontWeight: "700" }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <Icon name="question-circle-o" size={20} />
        </View>
      </View>
      <View>
        <Pressable onPress={()=>{
          navigation.navigate('Color')
        }} style={styles.btnColor}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            4 MÀU - CHỌN MÀU
          </Text>
          <Icon name="chevron-right" />
        </Pressable>
      </View>
      <View>
        <Pressable style={styles.btnBuy}>
          <Text style={{ fontSize: 20, fontWeight: "700", color:'#fff' }}>
            CHỌN MUA
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    width: 360,
    height: 640,
  },
  row: {
    flexDirection: "row",
    width: 332,
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnColor: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 332,
    height: 34,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.46)",
    borderRadius: 10,
  },
  btnBuy: {
    width: 326,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(202, 21, 54, 1)",
  },
});