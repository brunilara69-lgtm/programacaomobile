import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function MatriculasScreen({ navigation }) {
  const [aluno, setAluno] = useState('');
  const [curso, setCurso] = useState('');
  const [dataMatricula, setDataMatricula] = useState('');

  const cadastrarMatricula = () => {
    if (!aluno || !curso || !dataMatricula) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    Alert.alert(
      'Sucesso',
      'Matrícula cadastrada com sucesso!'
    );

    setAluno('');
    setCurso('');
    setDataMatricula('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.icone}>📝</Text>

      <Text style={styles.titulo}>
        Cadastrar Matrícula
      </Text>

      <Text style={styles.subtitulo}>
        Preencha os dados da matrícula
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Aluno"
        value={aluno}
        onChangeText={setAluno}
      />

      <TextInput
        style={styles.input}
        placeholder="Curso"
        value={curso}
        onChangeText={setCurso}
      />

      <TextInput
        style={styles.input}
        placeholder="Data da matrícula"
        value={dataMatricula}
        onChangeText={setDataMatricula}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarMatricula}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Matrícula
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