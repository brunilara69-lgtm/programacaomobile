import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function AvaliacoesScreen({ navigation }) {
  const [aluno, setAluno] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [nota, setNota] = useState('');
  const [data, setData] = useState('');

  const cadastrarAvaliacao = () => {
    if (!aluno || !disciplina || !nota || !data) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    Alert.alert(
      'Sucesso',
      'Avaliação cadastrada com sucesso!'
    );

    setAluno('');
    setDisciplina('');
    setNota('');
    setData('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.icone}>📊</Text>

      <Text style={styles.titulo}>
        Cadastrar Avaliação
      </Text>

      <Text style={styles.subtitulo}>
        Preencha os dados da avaliação
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Aluno"
        value={aluno}
        onChangeText={setAluno}
      />

      <TextInput
        style={styles.input}
        placeholder="Disciplina"
        value={disciplina}
        onChangeText={setDisciplina}
      />

      <TextInput
        style={styles.input}
        placeholder="Nota"
        value={nota}
        onChangeText={setNota}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Data da avaliação"
        value={data}
        onChangeText={setData}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarAvaliacao}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Avaliação
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.voltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoVoltar}>
          ← Voltar
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    paddingTop: 30,
  },

  icone: {
    fontSize: 42,
    textAlign: 'center',
    marginBottom: 5,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.6,
    marginTop: 5,
    marginBottom: 28,
  },

  input: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginBottom: 15,
    fontSize: 16,
  },

  botao: {
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    elevation: 4,
  },

  textoBotao: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  voltar: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 12,
  },

  textoVoltar: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});