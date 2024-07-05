import React, { FunctionComponent } from "react";
import {View, Text, Image} from 'react-native'
import { StyleSheet } from "react-native";


export interface UserRankingItemProps  {
    user : {
        id: number,
        image: string,
        name: string,
        random: number,
    }
    place: number,
}
 
const UserRankingItem: FunctionComponent<UserRankingItemProps> = (props) => {
    const {
        user : {
            id,
            image,
            name,
            random,
        },
        place
    } = props;
    return ( 
        <View style={styles.root}>
            <View style={styles.left}>
                <Text style = {styles.place}>{place}</Text>
                <Image style={styles.image} source= {{ uri: image}}/>
                <View>
                    <Text style={styles.name}>{name}</Text>                
                </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.value}>${random}</Text>
            </View>
        </View>
     );
}
 
export default UserRankingItem;

const styles = StyleSheet.create({
    root:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        height: 55,
        marginVertical: 10,
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    name : {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    value : {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    symbol : {
        color: '#6b6b6b',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    place: {
        fontSize: 18, 
        width: 30,
    },
  });