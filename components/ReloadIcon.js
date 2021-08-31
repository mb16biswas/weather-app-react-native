import React from 'react'
import { View,  StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function ReloadIcon({ load }) {
    
    return (
        <View style={styles.reloadIcon}>
           <FontAwesome5 name="play-circle" onPress={load} size={30} style = {styles.reloadIcon}  color={"#ff304f"} />
        </View>
    )
}

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        top: 60,
        right: 20,
    },
})
