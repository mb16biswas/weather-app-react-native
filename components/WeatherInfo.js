import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


export default function WeatherInfo({ currentWeather }) {
    const {
        main: { temp },
        weather: [details],
        name,
    } = currentWeather
    const { icon, main, description } = details

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.weatherInfo}>
            <Text style = {styles.cityname}>{name}</Text>
            <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
            <Text style={styles.textPrimary}>{(temp - 273).toFixed(2)}°</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.texSecondary}>{main}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',

        marginBottom : 10 , 
        marginTop : 10 

    },
    weatherDescription: {
        textTransform: 'capitalize',
        padding : 1 ,
        color : "#24a2cc" ,
    },
    cityname : {
        marginTop : 15 , 
        fontWeight: 'bold' , 
        fontSize: 35, 
        padding : 1 ,
        color : "#cc24be" ,
      
        
        
        
    } , 
    weatherIcon: {
        width: 100,
        height: 100,
        padding : 1 ,
    },
    textPrimary: {
        fontSize: 40,
        color: '#ff304f',
        padding : 1 , 
 
    },
    texSecondary: {
        fontSize: 20,
        color: "white",
        padding : 1 , 
        
    },
})
