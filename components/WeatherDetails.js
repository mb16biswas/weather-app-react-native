import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'



export default function WeatherDetails({ currentWeather }) {
    const {
        main: { feels_like, humidity, pressure , temp_max , temp_min },
        wind: { speed },
    } = currentWeather




    return (
        <View style={styles.weatherDetails}>
            
            
            <View style={styles.weatherDetailsRow}>
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: '#dbdbdb' }}>
                    <View style={styles.weatherDetailsRow}>
                        <FontAwesome5 name="temperature-low" size={30} color={'#ff304f'} />
                        <View style={styles.weatherDetailsItems}>
                            <Text style={{color: 'white'}} >Temp_max  :</Text>
                            <Text style={styles.textSecondary}>{(temp_max - 273).toFixed(2)} °</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <View style={styles.weatherDetailsRow}>
                    <FontAwesome5 name="temperature-low" size={30} color={'#ff304f'} />
                        <View style={styles.weatherDetailsItems}>
                            <Text style={{color: 'white'}} >Temp_min  :</Text>
                            <Text style={styles.textSecondary}>{(temp_min - 273).toFixed(2)} °</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ ...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: '#dbdbdb' }}>
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: '#dbdbdb' }}>
                    <View style={styles.weatherDetailsRow}>
                            <FontAwesome5 name="temperature-low" size={35} color={'#ff304f'} />
                            <View style={styles.weatherDetailsItems}>
                                <Text style={{color: 'white'}} >Feels like :</Text>
                                <Text style={styles.textSecondary}>{(feels_like - 273).toFixed(2)} °</Text>
                            </View>
                        </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name="water" size={35} color={'#ff304f'} />
                        <View style={styles.weatherDetailsItems}>
                            <Text style={{color: 'white'}} >Humidity : </Text>
                            <Text style={styles.textSecondary}>{humidity} %</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ ...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: '#dbdbdb' }}>
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: '#dbdbdb' }}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name="weather-windy" size={35} color={'#ff304f'} />
                        <View style={styles.weatherDetailsItems}>
                            <Text style={{color: 'white'}} >Wind Speed :</Text>
                            <Text style={styles.textSecondary}>{speed.toFixed(2)} m/s </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name="speedometer" size={35} color={'#ff304f'} />
                        <View style={styles.weatherDetailsItems}>
                            <Text style={{color: 'white'}} >Pressure :</Text>
                            <Text style={styles.textSecondary}>{pressure} hPa</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherDetails: {
       marginTop : 20 , 
        marginLeft: 20,
        marginRight : 20 , 
        marginBottom : 20 , 
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 30,
     
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherDetailsBox: {
        flex: 1,
        padding: 20,
    },
    weatherDetailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textSecondary: {
        fontSize: 15,
        color: "#24a2cc",
        fontWeight: '700',
        margin: 7,
    },
})
