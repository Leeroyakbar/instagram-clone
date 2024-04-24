import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
const imgIg = require("../../../assets/img/Instagram Logo.png")
const imgMsg = require("../../../assets/img/Shape.png")
const imgLove = require("../../../assets/img/love.png")
export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Image source={imgIg}/>
      </View>
      <View style={styles.msgLoveImg}>
            <Image source={imgLove} />
            <Image source={imgMsg} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 13,
    },
    logoImg: {
      justifyContent: "flex-start",
    },
    msgLoveImg: {
        flexDirection: "row",
        gap: 12,
        justifyContent: "flex-end"
    }
})