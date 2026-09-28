import React, { useState } from 'react';

import HomeScreen from './screens/HomeScreen';
import CadastrosScreen from './screens/CadastrosScreen';
import AlunosScreen from './screens/AlunosScreen';
import ProfessoresScreen from './screens/ProfessoresScreen';
import ResponsaveisScreen from './screens/ResponsaveisScreen';
import CursosScreen from './screens/CursosScreen';
import DisciplinasScreen from './screens/DisciplinasScreen';
import MatriculasScreen from './screens/MatriculasScreen';
import TurmasScreen from './screens/TurmasScreen';
import AvaliacoesScreen from './screens/AvaliacoesScreen';
import CoordenadoresScreen from './screens/CoordenadoresScreen';
import BoletimScreen from './screens/BoletimScreen';
import ConsultarAlunosScreen from './screens/ConsultarAlunosScreen';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('Home');
  const [historico, setHistorico] = useState([]);

  const navigation = {
    navigate: (tela) => {
      setHistorico((anterior) => [...anterior, telaAtual]);
      setTelaAtual(tela);
    },

    goBack: () => {
      if (historico.length > 0) {
        const copia = [...historico];
        const telaAnterior = copia.pop();

        setHistorico(copia);
        setTelaAtual(telaAnterior);
      }
    },
  };

  switch (telaAtual) {
    case 'Cadastros':
      return <CadastrosScreen navigation={navigation} />;

    case 'Alunos':
      return <AlunosScreen navigation={navigation} />;

    case 'Professores':
      return <ProfessoresScreen navigation={navigation} />;

    case 'Responsaveis':
      return <ResponsaveisScreen navigation={navigation} />;

    case 'Cursos':
      return <CursosScreen navigation={navigation} />;

    case 'Disciplinas':
      return <DisciplinasScreen navigation={navigation} />;

    case 'Matriculas':
      return <MatriculasScreen navigation={navigation} />;

    case 'Turmas':
      return <TurmasScreen navigation={navigation} />;

    case 'Avaliacoes':
      return <AvaliacoesScreen navigation={navigation} />;

    case 'Coordenadores':
      return <CoordenadoresScreen navigation={navigation} />;

    case 'Boletim':
      return <BoletimScreen navigation={navigation} />;

    case 'ConsultarAlunos':
      return <ConsultarAlunosScreen navigation={navigation} />;

    default:
      return <HomeScreen navigation={navigation} />;
  }
}