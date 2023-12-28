import React from 'react'
import Flex from './Flex'
import List from './List'

const Menu = () => {
  return (
   <ul>
    
        <Flex className="justify-between">
            <List href="#" text="Men"/>
            <List href="#" text="Woman"/>
            <List href="#" text="Kids"/>
            <List href="#" text="Collection"/>
            <List href="#" text="Trends"/>
        </Flex>
    
   </ul>
  )
}

export default Menu