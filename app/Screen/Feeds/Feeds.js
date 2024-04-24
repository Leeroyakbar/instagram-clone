import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'

const saveImg = require("../../../assets/img/save.png")
const sendImg = require("../../../assets/img/Shape.png")
const cmtImg = require("../../../assets/img/comment.png")
const loveImg = require("../../../assets/img/love.png")

const data_feeds = [
    {
        name: "aodai",
        profilePic: require("../../../assets/img/person/person-1.jpg"),
        imgUrl: require("../../../assets/img/person/feed-1.jpg"),
        location: "Vietnam",
        caption: "Beautiful moment in my life",
        likes: 44.837,
    },
    {
        name: "jenny",
        profilePic: require("../../../assets/img/person/person-3.jpg"),
        imgUrl: require("../../../assets/img/person/person-3.jpg"),
        location: "Vietnam",
        caption: "Nice picture",
        likes: 44.837,
    },
    {
        name: "Joshua",
        profilePic: require("../../../assets/img/person/person-2.jpg"),
        imgUrl: require("../../../assets/img/person/person-2.jpg"),
        location: "Vietnam",
        caption: "Nice picture",
        likes: 44.837,  
    },
    {
        name: "aodai",
        profilePic: require("../../../assets/img/person/person-1.jpg"),
        imgUrl: require("../../../assets/img/person/person-3.jpg"),
        location: "Vietnam",
        caption: "Nice picture",
        likes: 44.837,  
    },
    {
        name: "aodai",
        profilePic: require("../../../assets/img/person/person-1.jpg"),
        imgUrl: require("../../../assets/img/person/person-4.jpg"),
        location: "Vietnam",
        caption: "Nice picture",
        likes: 44.837,  
    },
    {
        name: "aodai",
        profilePic: require("../../../assets/img/person/person-1.jpg"),
        imgUrl: require("../../../assets/img/person/person-5.jpg"),
        location: "Vietnam",
        caption: "Nice picture",    
        likes: 44.837,
    }
]

export default function Feeds() {
  const [feeds, setFeeds] = useState(data_feeds)
  return (
    <ScrollView style={{flex: 1, width: "100%"}}>
       {
           feeds.map((feed, index) => {
            return (
                <View key={index}>
                    {/* Bagian atas postingannya */}
                    <View  style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={{flexDirection: "row", gap: 10, padding: 10, alignItems: "center"}}>
                            <Image source={feed.profilePic} style={styles.imgPerson} />
                            <View>
                                <Text style={{fontWeight: "bold"}}>{feed.name}</Text>
                                <Text>{feed.location}</Text>
                            </View>
                        </View>
                        <View style={{padding: 10, alignItems: "center", justifyContent: "center"}}>
                            <Image source={require("../../../assets/img/more.png")}/>
                        </View>
                    </View>
                    {/* Postingannya */}
                    <View>
                        <Image source={feed.imgUrl} style={{width: "100%", height: 400}} />
                    </View>

                    {/* Bagian Like, comment, dan save */}
                    <View style={{paddingHorizontal: 20, paddingVertical: 10, flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={{flexDirection: "row", gap: 12, alignItems: "center"}}>
                            <Image source={loveImg}/>
                            <Image source={cmtImg}/>
                            <Image source={sendImg}/>
                        </View>
                        <View>
                            <Image source={saveImg}/>   
                        </View>
                    </View>
                    <View>
                        <Text style={{paddingHorizontal: 20}}>Liked by <Text style={{fontWeight: "bold"}}>{feed.likes} </Text></Text>
                    </View>
                    {/* Bagian caption */}
                    <View>
                        <Text style={{fontWeight: "bold", paddingHorizontal: 20}}>{feed.name}</Text>
                        <Text style={{paddingHorizontal: 20}}>{feed.caption}</Text>
                    </View>
                </View>
                
            )
           })
       }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    imgPerson: {
        width: 60, 
        height: 60, 
        borderRadius: 100
    }
})