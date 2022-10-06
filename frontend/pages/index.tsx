
import type { NextPage } from 'next'
import { Box } from '@mui/material'
import Lista from '../src/components/Lista/Lista';
import { Professor } from '../src/@types/professor';

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Antonio",
      foto: "https://github.com/queyx0.png",
      descricao: "Descrição do Professor 1",
      valor_hora: 100
    },
    {
      id: 2,
      nome: "Professor 2",
      foto: "https://github.com/queyx0.png",
      descricao: "Descrição do Professor 1",
      valor_hora: 100
    },
    {
      id: 3,
      nome: "Professor 3",
      foto: "https://github.com/queyx0.png",
      descricao: "Descrição do Professor 1",
      valor_hora: 100
    },
    {
      id: 4,
      nome: "Professor 4",
      foto: "https://github.com/queyx0.png",
      descricao: "Descrição do Professor 1",
      valor_hora: 100
    },
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={professores}></Lista>
    </Box>
  )
}

export default Home;
