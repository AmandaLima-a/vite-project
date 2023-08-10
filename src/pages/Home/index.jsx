import { Container, Img, Titulo, Input } from './styles'
import H1 from '../../components/Title'
import ContainerI from '../../components/ContainerItens'
import Button from '../../components/Button'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Cadastro from '../../assets/logo-cadastro.svg'
import Seta from '../../assets/seta.svg'

function App() {
  const [ users, setUsers ] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const navigate = useNavigate()

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3000/users", { name: inputName.current.value, age: inputAge.current.value })

    setUsers([ ... users, newUser ])

    navigate('/usuarios')
  }

  
  return (
    <Container>
      <Img alt='img-logo' src={Cadastro}/>
      <ContainerI>
        <H1>Olá!</H1>

        <Titulo>Nome</Titulo>
        <Input ref={inputName} placeholder='Nome'/>

        <Titulo>Idade</Titulo>
        <Input ref={inputAge} placeholder='Idade'/>

        <Button onClick={addNewUser}>Cadastrar <img alt='seta' src={Seta}/></Button>
      </ContainerI>
      
    </Container>
  )
}

export default App