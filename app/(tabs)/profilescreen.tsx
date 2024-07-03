import { View, Text } from '../../components/Themed';
import React, { FunctionComponent } from 'react';
interface ProfileScreenProps {
    
}
 
const ProfileScreen: FunctionComponent<ProfileScreenProps> = () => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>ProfileScreen Component</Text>
        </View>
     );
}
 
export default ProfileScreen;
