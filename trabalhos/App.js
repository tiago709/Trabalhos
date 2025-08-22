import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaView style={estilos.tudo}>
      <ScrollView style={estilos.descer}>
        <View style={estilos.cabeca}>
          <Image source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Cy_ZBke5HbdeeUm4tdTqIyhXNmrr8WHMyw& s' }} style={estilos.circulo}/>
          <View>
            <Text style={estilos.titulo}>Olá, Estudante</Text>
            <Text style={estilos.textosf}>Bem-vindo ao seu painel</Text>
          </View>
        </View>
        <Text style={estilos.secao}>Menu</Text>
        <View style={estilos.botoes}>
          <View style={estilos.botao}>
            <Text style={estilos.textoBotao}>NOTAS</Text>
          </View>
          <View style={estilos.botao}>
            <Text style={estilos.textoBotao}>AULAS</Text>
          </View>
          <View style={estilos.botao}>
            <Text style={estilos.textoBotao}>AVISOS</Text>
          </View>
        </View>
        <Text style={estilos.secao}>Próximas atividades</Text>
        <View style={estilos.partes}>
          <Text style={estilos.textosf}>Trabalhos </Text>
          <Text>Matematica: Entrega: 03/08</Text>
        </View>
        <View style={estilos.partes}>
          <Text style={estilos.textosf} >Provas </Text>
          <Text>Portugues: Data: 11/06</Text>
        </View>
        <View style={estilos.partes}>

          <Text style={estilos.textosf}>Disertação</Text>
          <Text>História: Entrega: 14/08</Text>
        </View>
        <View style={estilos.partes}>
          <Text style={estilos.textosf}>Estrega Final</Text>
          <Text>Ingês: Entrega: 23/12</Text>
        </View>
        <View style={estilos.partes}>
          <Text style={estilos.textosf}>Atividade da Semana</Text>
          <Text>Ciências: Entrega: 12/06</Text>
        </View>
        <Text style={estilos.secao}>Chamada para ação</Text>
        <View style={estilos.partes}>
          <Text>Adquira uma nova oportunidade de aprender!</Text>
          <View style={estilos.botaofinal}>
            <Text style={estilos.textoBotao}>COMPRAR CURSO</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const estilos = StyleSheet.create({
  tudo: {
    flex: 1,
    backgroundColor: '#f3e6fa',
  },
  descer: {
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#7c3aed',
  },
  textosf: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#0d0718ff',

  },
  cabeca: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    gap: 15,
  },
  circulo: {
    width: 70,
    height: 70,
    backgroundColor: '#c4b5fd',
    borderRadius: 35,
    borderWidth: 2,
  },
  secao: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#7c3aed',
  },
  botoes: {
    flexDirection: 'row',
    gap: 10,
  },
  botao: {
    backgroundColor: '#a78bfa',
    padding: 10,
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
  },
  botaofinal: {
    backgroundColor: '#a78bfa',
    padding: 10,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 30,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  partes: {
    backgroundColor: 'white',
    padding: 15,

    marginBottom: 20,
    borderRadius: 8,
  },
});
