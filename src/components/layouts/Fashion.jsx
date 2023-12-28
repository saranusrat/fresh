import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Image from '../Image'
import up from '../../assets/up.png'
import down from '../../assets/down.png'
import fashion01 from '../../assets/fashion01.png'
import Flex from '../Flex'
import Heading from '../Heading'
import Pragraph from '../Pragraph'

const Fashion = () => {
  return (
  <Section>
<Container>
<div className=" relative top-[100px] left-[570px] -z-10">
    <Image src={up}/>
</div>
<Flex className="gap-[124px]">
<div >
    <Image src={fashion01}/>
</div>
<div>
    <Heading className=" font-frank font-bold text-6xl w-[437px] py-[64px]" text="Best Fashion
Since 2010" as="h2"/>
<Pragraph className=" font-poppin font-bold text-2xl w-[443px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "/>
</div>
</Flex>
<div className="bg-fashionColor py-[73px] w-[797px] rounded-borderRadius relative bottom-[70px] left-[550px] -z-10">
    <Flex>
        <div className=" border-r-2 border-black pr-[25px] pl-[77px]">
            <Heading className=" font-podkova font-bold text-6xl" text="2010" as="h2"/>
            <Pragraph className=" font-poppin font-medium text-[28px] pt-[28px]" text="Founded"/>
        </div>
        <div className=" border-r-2 border-black pr-[25px] pl-[77px]">
            <Heading className=" font-podkova font-bold text-6xl" text="5000+" as="h2"/>
            <Pragraph className=" font-poppin font-medium text-[28px] pt-[28px]" text="Product Sold"/>
        </div>
        <div className=" pl-[77px]">
            <Heading className=" font-podkova font-bold text-6xl" text="4500+" as="h2"/>
            <Pragraph className=" font-poppin font-medium text-[28px] pt-[28px]" text="Best Reviews"/>
        </div>
    </Flex>
</div>
<div className="relative left-[212px]">
    <Image src={down}/>
</div>
</Container>
  </Section>
  )
}

export default Fashion