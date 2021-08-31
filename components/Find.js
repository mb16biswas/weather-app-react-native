import React from 'react'
import { View,  StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function Find({ change_status }) {
    
    return (
        <View style={styles.reloadIcon}>
           <FontAwesome5 name="search" onPress={change_status} size={30} style = {styles.reloadIcon}  color={"#ff304f"} />
        </View>
    )
}

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        top: 60,
        left: 20,
    },
})
