import React, { FunctionComponent } from "react";
import {View, Text, Image} from 'react-native'
import { StyleSheet } from "react-native";


export interface MarketCoinProps  {
    marketCoin : {
        image: string,
        name: string,
        symbol: string,
        valueChange24H: number,
        valueUSD: number,
    }
    
}
 
const MarketCoin: FunctionComponent<MarketCoinProps> = (props) => {
    const {
        marketCoin : {
            image,
            name,
            symbol,
            valueChange24H,
            valueUSD,
        }

    } = props;
    return ( 
        <View style={styles.root}>
            <View style={styles.left}>
                <Image style={styles.image} source= {{ uri: image}}/>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.value}>${valueUSD}</Text>
                <Text style={{color: valueChange24H > 0 ? '#4bdb00' : '#f1000'}}>
                    {valueChange24H > 0 && '+'} {valueChange24H}</Text>
            </View>
        </View>
     );
}
 
export default MarketCoin;

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
    }
  });