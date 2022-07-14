import type { NextPage } from 'next'
import Header from '../components/header'
import { Container } from '../styles/indexStyles'

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <h2>Bem vindo ao</h2>
      <h1>EVENTOS.COM</h1><h2>sua plataforma de<br /> administração de eventos</h2>
      <h3>faça login ou cadastre-se para ter acesso completo</h3>
    </Container>
  )
}

export default Home
