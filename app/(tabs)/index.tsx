import { View, Text } from '../../components/Themed';
import { StyleSheet } from 'react-native';
import React, { FunctionComponent } from 'react';
import { Image } from 'react-native';


interface HomeScreenProps {
    
}
 
const HomeScreen = () => {
    return (
        <View style={styles.root}>
            <Image style= {styles.image}source={require('../../assets/images/Saly-1.png')} />
            <Text style= {styles.header}>HOPE TO SAVE THE EXISTANCE - BFH  </Text>
            <Text style= {styles.header2}> BFH is a movement for the sake of HOPE </Text>
        </View>
     );
}
 
export default HomeScreen;


const styles = StyleSheet.create({
    root:{
        padding: 20,
        alignItems: 'center',
        flex: 1,
    },
    image: {
        height: '60%',
        aspectRatio: 1,
        backgroundColor: 'black',
        width:'30%',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header : {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: 15,
    },
    header2 : {
      fontSize: 20,
      textAlign: 'center',
      color: '#707070' ,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },

  });