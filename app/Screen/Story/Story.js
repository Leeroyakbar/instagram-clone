import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const data_stories = [
    {
        name: "Your Story",
        imgUrl: require('../../../assets/img/person/person-1.jpg')
    },
    {
        name: "Joshua",
        imgUrl: require('../../../assets/img/person/person-2.jpg')
    },
    {
        name: "Jenny",
        imgUrl: require('../../../assets/img/person/person-3.jpg')
    },
    {
        name: "Sarah",
        imgUrl: require('../../../assets/img/person/person-4.jpg')
    },
    {
        name: "John",
        imgUrl: require('../../../assets/img/person/person-5.jpg')
    }
]

export default function Story() {
  const [stories, setStories] = useState(data_stories)
  return (
    <ScrollView horizontal style={{ height: 40}} showsHorizontalScrollIndicator={false}>
      {
        stories.map((story, index) => (
            <View style={styles.circle} key={index}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#FBAA47', '#D91A46', '#A60F93']}
                    style={{borderRadius: 100, width: 95, height: 95, alignItems: "center", justifyContent: "center"}}>
                    <Image source={story.imgUrl} style={styles.circleContainer} />
                </LinearGradient>
                <Text style={styles.circleText}>{story.name}</Text>
            </View>
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    circle: {
        height: 150,
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: 10,
    },
    circleContainer: {
        width: 90,
        height: 90,
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 2,
    },
    circleText:{
        color: "black",
        alignSelf: "center",
        fontSize: 15,
        marginTop: 8
    }
})