import { View, Text } from '../../components/Themed';
import React, { FunctionComponent } from 'react';
interface MarketScreenProps {
    
}
 
const MarketScreen: FunctionComponent<MarketScreenProps> = () => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>MarketScreen Component</Text>
        </View>
     );
}
 
export default MarketScreen;
