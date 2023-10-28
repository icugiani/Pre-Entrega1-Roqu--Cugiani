import React from 'react'
import CartWidget from './CartWidget'
import { Menu,MenuButton,MenuList,MenuItem,Flex,Box,Spacer,} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>

    <Flex>
  <Box p='4'fontSize={20}>
     <h2>Pigmalion</h2> 
  </Box>
  <Spacer />
<Box>
<Menu>
  <MenuButton>
    MenuHam
  </MenuButton>
  <MenuList>
    <MenuItem>Inicio</MenuItem>
    <MenuItem>Productos</MenuItem>
    <MenuItem>Contacto</MenuItem>

  </MenuList>
</Menu>
</Box>
  <Box p='4'>
    <CartWidget />
  </Box>
</Flex>
        
    </div>
  )
}

export default Navbar