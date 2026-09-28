import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

export default function BoletimScreen({ navigation }) {
  const [aluno, setAluno] = useState('');

  const notas = [
    {
      disciplina: 'Matemática',
      nota: '8.5',
    },
    {
      disciplina: 'Português',
      nota: '9.0',
    },
    {
      disciplina: 'História',
      nota: '7.5',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.icone}>📋</Text>

      <Text style={styles.titulo}>
        Boletim
      </Text>

      <Text style={styles.subtitulo}>
        Consulte as notas do aluno
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do aluno"
        value={aluno}
        onChangeText={setAluno}
      />

      {notas.map((item, index) => (
        <View
          style={styles.card}
          key={index}
        >
          <Text style={styles.disciplina}>
            {item.disciplina}
          </Text>

          <Text style={styles.nota}>
            Nota: {item.nota}
          </Text>
        </View>
      ))}

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
    marginBottom: 20,
    fontSize: 16,
  },

  card: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 18,
    marginBottom: 12,
  },

  disciplina: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  nota: {
    fontSize: 16,
    marginTop: 5,
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