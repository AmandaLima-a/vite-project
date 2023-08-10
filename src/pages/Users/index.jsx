import { Container, Img, User } from './styles'
import H1 from '../../components/Title'
import ContainerI from '../../components/ContainerItens'
import Button from '../../components/Button'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Users from '../../assets/logo-usuarios.svg'
import Seta from '../../assets/seta.svg'
import Lixo from '../../assets/lixeira.svg'

function FuncUsers() {
  const [ users, setUsers ] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    async function fetchUsers(){
      const { data: newUsers } = await axios.get("http://localhost:3000/users")

      setUsers(newUsers)
    }

    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3000/users/${userId}`)

    const newUsers = users.filter( user => user.id !== userId )

    setUsers(newUsers)
  }

  function goBackPage() {
    navigate('/')
  }

  
  return (
    <Container>
      <Img alt='img-logo' src={Users}/>
      <ContainerI isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img alt='lixeira' src={Lixo}/></button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}><img alt='seta' src={Seta}/> Voltar</Button>
      </ContainerI>
      
    </Container>
  )
}

export default FuncUsers