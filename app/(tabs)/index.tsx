import { View, Text } from '../../components/Themed';
import React, { FunctionComponent } from 'react';
interface HomeScreenProps {
    
}
 
const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>HomeScreen Component</Text>
        </View>
     );
}
 
export default HomeScreen;
