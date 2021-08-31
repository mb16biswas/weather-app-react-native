import React from 'react'
import { View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function Back({ change_status}) {
    
    return (
        <View >
           <FontAwesome5 name="arrow-left" onPress={change_status}  size={35}  color={"#ff304f"} />
        </View>
    )
}
