import { View, Text } from '../../components/Themed';
import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { PortfolioCoinProps } from '../../components/PortfolioCoin';
import { FlatList } from 'react-native';
import PortfolioCoin from '../../components/PortfolioCoin';

interface PortfolioScreenProps {
    
}
const portfolioCoins = [{
    id: 1,
    image: '/../../assets/images/coin_symbol.png',
    name: 'BenForHum',
    symbol: 'BFH',
    amount: 1,
    valueUSD: 62.789,
},
{
    id: 2,
    image: 'data:image/png;base64,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',
    name: 'Bitcoin',
    symbol: 'BTC',
    amount:  1,
    valueUSD: 69789,
},
{
    id: 3,
    image: 'data:image/png;base64,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',
    name: 'Ethereum',
    symbol: 'ETH',
    amount: 1,
    valueUSD: 4789,
}]
 
const PortfolioScreen: FunctionComponent<PortfolioScreenProps> = () => {
    return (
        <View style= {styles.root}>
            <FlatList
                style={{width: '100%'}}
                data={portfolioCoins} 
                renderItem={({item}) => <PortfolioCoin portfolioCoin={item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle = {{alignItems: 'center'}}
                ListHeaderComponent={() => (
                    <>
                        <Image style= {styles.image}source={require('../../assets/images/Saly-10.png')} />
                        <View>
                            <Text style= {styles.label}>PORTFOLIO BALANCE  </Text>
                            <Text style= {styles.balance}> $69,420 </Text>
            
                        </View>
                    </>
                )}
            />    
        </View>
     );
}
 
export default PortfolioScreen;

const styles = StyleSheet.create({
    root:{
        padding: 20,
        alignItems: 'center',
        flex: 1,
    },
    image: {
        height: 250,
        resizeMode: "contain",
        width: 200,
    },
    balanceContainer: {
      width: '100%',
    },
    label : {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#777777',
    },
    balance : {
        fontSize: 36,
        fontWeight: 'bold',
      },
    header2 : {
      fontSize: 20,
      textAlign: 'center',
      color: '#707070' ,
    },
  });