import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from "./components/ItemListContainer"
import { Center, Square, Circle } from '@chakra-ui/react'

const App = () => {
  return (
<div>
    <Navbar />
    <Center h='100px' fontSize={35}>
    <ItemListContainer greeting={"Bienvenido a Pigmalion"}/>
</Center>
</div>
  )
}

export default App