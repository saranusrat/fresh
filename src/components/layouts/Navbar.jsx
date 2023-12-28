import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/logo.png'
import Menu from '../Menu'
import Button from '../Button'


const Navbar = () => {
  return (
    <nav className="pt-14 bg-backGround">
       <Container>
        <Flex className="justify-between">
        <div className="w-1/4">
          <Image src={Logo}/>
        </div>
        <div className="w-1/2 pt-3">
          <Menu/>
        </div>
        <div className="w-1/4 text-right">
          <Button className="py-2.5 px-7 border rounded-borderRadius border-borderColor shadow-2xl font-semibold hover:bg-hovarColor " text="Login"/>
          <Button className="py-2.5 px-3.5 ml-3 border rounded-borderRadius border-borderColor font-semibold hover:bg-hovarColor " text="Sign up"/>
        </div>
        </Flex>
       </Container>
    </nav>
  )
}

export default Navbar