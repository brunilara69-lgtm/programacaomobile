import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function DisciplinasScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [cargaHoraria, setCargaHoraria] = useState('');
  const [curso, setCurso] = useState('');

  const cadastrarDisciplina = () => {
    if (!nome || !cargaHoraria || !curso) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    Alert.alert(
      'Sucesso',
      'Disciplina cadastrada com sucesso!'
    );

    setNome('');
    setCargaHoraria('');
    setCurso('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.icone}>📖</Text>

      <Text style={styles.titulo}>
        Cadastrar Disciplina
      </Text>

      <Text style={styles.subtitulo}>
        Preencha os dados da disciplina
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da disciplina"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Carga horária"
        value={cargaHoraria}
        onChangeText={setCargaHoraria}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Curso"
        value={curso}
        onChangeText={setCurso}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarDisciplina}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Disciplina
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