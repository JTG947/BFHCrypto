import { View, Text } from '../../components/Themed';
import React, { FunctionComponent } from 'react';
interface RankingScreenProps {
    
}
 
const RankingScreen: FunctionComponent<RankingScreenProps> = () => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>RankingScreen Component</Text>
        </View>
     );
}
 
export default RankingScreen;
