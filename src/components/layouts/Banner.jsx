import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import banner from '../../assets/banner.png'
import Heading from '../Heading'
import Pragraph from '../Pragraph'
import Button from '../Button'


const Banner = () => {
  return (
   <Section className="pt-[120px] bg-backGround">
   <Container>
  <Flex>
     <div className="w-1/2">
     <Heading className="font-poppin text-bigHeading font-semibold" text="Find The Best Fashion Style 
     For You" as="h1"/>
     <Pragraph className=" font-poppin text-pragraph font-normal w-[531px] pt-8" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio      pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "/>
    <Button className="py-6 px-24 bg-black rounded-lg text-white mt-16 " text="SHOP NOW"/>
     </div>
     <div className="w-1/2">
       <Image src={banner}/>
     </div>
  </Flex>
   </Container>
   </Section>
  )
}

export default Banner