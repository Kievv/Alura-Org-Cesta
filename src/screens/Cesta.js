import React from 'react';
import { StyleSheet, Image } from 'react-native';
import topo from '../../assets/topo.png'

export default function Cesta(){
    return <Image source={topo} style={estilos.topo} />
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
    }
})