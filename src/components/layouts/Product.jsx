import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Pragraph from '../Pragraph'
import Button from '../Button'
import Image from '../Image'
import Product01 from '../../assets/product01.png'
import Product02 from '../../assets/product02.png'
import { FaStar } from "react-icons/fa";

const Product = () => {
  return (
   <Section className="bg-productColor pt-[36px] pb-[191px]">
    <Container>

<Flex className="gap-[31px]">
<div className="w-[457px]">
    <Heading className=" font-frank font-bold text-6xl text-white" text="Best Seller Product" as="h2"/>
    <Pragraph className=" font-frank font-bold text-2xl text-white py-[43px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."/>
    <Button className="py-6 px-24 bg-black rounded-lg text-white mt-16 " text="Learn More"/>
</div>
<div className="w-[366px]">
<Image src={Product01}/>
<div className="bg-white w-[366px] py-3.5">
<Flex className="gap-2 ml-4">
<FaStar className="text-yellow-500"/>
<FaStar className="text-yellow-500"/>
<FaStar className="text-yellow-500"/>
<FaStar className="text-yellow-500"/>
<FaStar className="text-yellow-500"/>
</Flex>
<Pragraph className=" ml-4 font-poppin font-semibold text-[22px] pt-3 " text="Sweater Shirt"/>
<span className=" ml-4 text-gray-500 font-poppin font-normal text-2xl">$45.99</span>
<span className=" ml-[31px] text-gray-500 font-poppin font-normal text-2xl">$35.99</span>

</div>

</div>
<div className="w-[366px]">
<Image src={Product02}/>
<div className="bg-white w-[366px] py-3.5">
<Flex className="gap-2 ml-4">
<FaStar className="text-yellow-500"/>
<FaStar className="text-yellow-500"/>
<FaStar className="text-yellow-500"/>
<FaStar className="text-yellow-500"/>
<FaStar className="text-yellow-500"/>
</Flex>
<Pragraph className=" ml-4 font-poppin font-semibold text-[22px] pt-3 " text="Sweater Shirt"/>
<span className=" ml-4 text-gray-500 font-poppin font-normal text-2xl">$45.99</span>
<span className=" ml-[31px] text-gray-500 font-poppin font-normal text-2xl">$35.99</span>

</div>
</div>














</Flex>














    </Container>










   </Section>
  )
}

export default Product