import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      
      <View style={estilos.barraSuperior}>
        <Text style={estilos.titulo}>Quadro de Tarefas da Semana</Text>
        <Text style={estilos.subtitulo}>Faça suas atividades de forma dinamica</Text>
      </View>

      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={estilos.quadro}
        contentContainerStyle={estilos.quadroContent}
      >

        <View style={estilos.coluna}>
          <Text style={estilos.tituloColuna}>A Fazer</Text>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Tarefa 1:</Text>
            <Text style={estilos.descricaoCartao}>Conferir sistema de roteamento</Text>
          </View>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Tarefa 2:</Text>
            <Text style={estilos.descricaoCartao}>Testar o resfriamento </Text>
          </View>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Tarefa 3:</Text>
            <Text style={estilos.descricaoCartao}>Testar o código criado</Text>
          </View>
        </View>


        <View style={estilos.coluna}>
          <Text style={estilos.tituloColuna}>Em Progresso</Text>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Tarefa 1:</Text>
            <Text style={estilos.descricaoCartao}>Configurar os computadores</Text>
          </View>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Tarefa 2:</Text>
            <Text style={estilos.descricaoCartao}>Relatório pendente (URGENTE)</Text>
          </View>
        </View>


        <View style={estilos.coluna}>
          <Text style={estilos.tituloColuna}>Concluído</Text>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Tarefa 1:</Text>
            <Text style={estilos.descricaoCartao}>Limpar o servidor</Text>
          </View>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Tarefa 2:</Text>
            <Text style={estilos.descricaoCartao}>Trocar cabos do servidor</Text>
          </View>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Tarefa 3:</Text>
            <Text style={estilos.descricaoCartao}>Comemorar o aniver do chefe</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
      

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7ed', 
  },

  barraSuperior: {
    backgroundColor: '#faa661ff', 
    padding: 10,
    paddingTop: 12,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    color: '#fff7ed',
  },

  subtitulo: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff7ed', 
  },

  quadro: {
    flex: 1,
    paddingVertical: 30,
  },

  quadroContent: {
    paddingHorizontal: 30,
  },

  coluna: {
    width: 300,
    backgroundColor: '#ffe4b5', 
    borderRadius: 20,
    padding: 15,
    marginRight: 30,
    height: '90%',
  },

  tituloColuna: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d97706',
    marginBottom: 20,
    textAlign: 'center',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#fb923c', 
  },

  cartao: {
    backgroundColor: '#fffaf0', 
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },

  tituloCartao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ea580c', 
    marginBottom: 5,
  },

  descricaoCartao: {
    fontSize: 14,
    color: '#d97706', 
  },
});