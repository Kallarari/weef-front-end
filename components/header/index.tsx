import Button from '@mui/material/Button'
import React from 'react'

import { Container, LoginPlace, Title } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Title>EVENTOS.COM</Title>
      <Button color="primary">HOME</Button>
      <Button color="primary">
        MEUS <br /> EVENTOS
      </Button>
      <LoginPlace>
        <Button color="primary">LOGIN</Button>
        <Button color="primary"  variant="contained">SE CADASTRAR</Button>
      </LoginPlace>
    </Container>
  )
}

export default Header
