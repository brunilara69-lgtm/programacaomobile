import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';

import { API_URL } from '../services/api.js';

export default function AlunosScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [carregando, setCarregando] = useState(false);

  const cadastrarAluno = async () => {
    if (!nome || !cpf || !dataNascimento || !email) {
      Alert.alert(
        'Atenção',
        'Preencha Nome, CPF, Data de nascimento e E-mail.'
      );
      return;
    }

    setCarregando(true);

    try {
      const url = `${API_URL}/cadastrar_aluno.php`;

      console.log('Enviando para:', url);

      const resposta = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome,
          cpf: cpf,
          data_nascimento: dataNascimento,
          email: email,
          telefone: telefone,
          endereco: endereco,
        }),
      });

      console.log('Status:', resposta.status);

      const texto = await resposta.text();

      Alert.alert('Resposta do servidor', texto);

      if (!texto.trim()) {
        Alert.alert('Erro', 'O servidor não enviou nenhuma resposta.');
        return;
      }

      let resultado;

      try {
        resultado = JSON.parse(texto);
      } catch (erro) {
        Alert.alert(
          'Erro',
          'O servidor respondeu em um formato inválido.'
        );
        return;
      }

      if (resultado.sucesso) {
        Alert.alert(
          'Sucesso',
          'Aluno cadastrado com sucesso!'
        );

        setNome('');
        setCpf('');
        setDataNascimento('');
        setEmail('');
        setTelefone('');
        setEndereco('');
      } else {
        Alert.alert(
          'Erro',
          resultado.mensagem || 'Não foi possível cadastrar o aluno.'
        );
      }
    } catch (erro) {
      console.log('ERRO COMPLETO:', erro);

      Alert.alert(
        'Erro de conexão',
        'Não foi possível conectar com o servidor.'
      );
    } finally {
      setCarregando(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.icone}>👨‍🎓</Text>

      <Text style={styles.titulo}>
        Cadastrar Aluno
      </Text>

      <Text style={styles.subtitulo}>
        Preencha os dados do aluno
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Data de nascimento (AAAA-MM-DD)"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarAluno}
        disabled={carregando}
      >
        <Text style={styles.textoBotao}>
          {carregando ? 'Cadastrando...' : 'Cadastrar Aluno'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() => navigation.navigate('ConsultarAlunos')}
      >
        <Text style={styles.textoSecundario}>
          Consultar Alunos
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

  botaoSecundario: {
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 12,
  },

  textoSecundario: {
    fontSize: 16,
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