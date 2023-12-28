import React from 'react'
import Section from '../Section'
import Heading from '../Heading'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import collection01 from '../../assets/collection01.png'
import collection02 from '../../assets/collection02.png'
import collection03 from '../../assets/collection03.png'
import Button from '../Button'

const Collection = () => {
  return (
  <>
<Section>
    <Heading className=" font-frank  font-bold  text-bigHeading text-center pt-[217px] pb-[117px]" text="New Collection" as="h1"/>
    <Container>
<Flex className=" justify-between">
<div>
   <div><Image src={collection01} /></div>
<Button className=" py-2 px-[108px]  bg-white  rounded-borderRadius font-normal
    relative left-[18px] bottom-[101px] " text="Sweater"/>
    </div>
<div>
<div> <Image src={collection02}/></div>
<Button className=" py-2 px-[108px] bg-white rounded-borderRadius font-normal
    relative left-[18px] bottom-[101px] " text="Jeans"/>
</div>
<div>
<div><Image src={collection03}/></div>
<Button className=" py-2 px-[108px]  bg-white  rounded-borderRadius font-normal
   relative left-[22px] bottom-[101px] " text="Baskets"/>
</div>

</Flex>

    </Container>

   </Section>
  </>
  )
}

export default Collection