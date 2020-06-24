import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CameraView as Camera } from './src/classifier/'

export default function App() {
    return (
        <View style={styles.container}>
            <Camera />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
