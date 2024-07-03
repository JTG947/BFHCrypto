import { View, Text } from '../../components/Themed';
import React, { FunctionComponent } from 'react';
interface PortfolioScreenProps {
    
}
 
const PortfolioScreen: FunctionComponent<PortfolioScreenProps> = () => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>HomeScreen Component</Text>
        </View>
     );
}
 
export default PortfolioScreen;
