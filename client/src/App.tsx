import { Container, Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar'

function App() {

  return (
    <Stack h="100vh">
      <Navbar />
      <Container>
        {/* <TodoForm/>
        <TodoForm/> */}
      </Container>
    </Stack>
  )
}

export default App
