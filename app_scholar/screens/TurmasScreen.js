import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function TurmasScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [ano, setAno] = useState('');
  const [semestre, setSemestre] = useState('');

  const cadastrarTurma = () => {
    if (!nome || !curso || !ano || !semestre) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    Alert.alert(
      'Sucesso',
      'Turma cadastrada com sucesso!'
    );

    setNome('');
    setCurso('');
    setAno('');
    setSemestre('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.icone}>🏫</Text>

      <Text style={styles.titulo}>
        Cadastrar Turma
      </Text>

      <Text style={styles.subtitulo}>
        Preencha os dados da turma
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da turma"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Curso"
        value={curso}
        onChangeText={setCurso}
      />

      <TextInput
        style={styles.input}
        placeholder="Ano"
        value={ano}
        onChangeText={setAno}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarTurma}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Turma
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