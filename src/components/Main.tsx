import { VStack } from '@chakra-ui/react';
import React from 'react';
import Description from './Description';
import Header from './headers/Header';
import IconContainer from './Icons/IconContainer';
import {FaMoneyBillWave, FaWhatsapp} from 'react-icons/fa';
import {BsPhoneVibrateFill} from 'react-icons/bs';
import Profile from './Profile';
import Section from './Section';
import RowContainer from './Icons/RowContainer';
import Notice from './Notice';


interface Params {
    width: string
    height: string,
}

const Main: React.FC<Partial<Params>> = ({width, height}): JSX.Element => {

  const Whatsapp = () => {
    //window.location.pathname = "https://wa.me/971438668/"
    window.open("https://wa.me/0971438668/", "_parent")
}

const PhoneCall = () => {
  window.open("tel:+260971438668", "_parent")
}

  return (
    <VStack
    h={"100vh"} 
    justifyContent={"space-between"} 
    alignItems={"center"} 
    w={"full"} 
    bgImage={"/food.jpg"}
    bgPos={"center"}
    bgSize={"cover"}
    >

      <Header>
        <Profile title='@chocha_trust.'/>
        <Notice title={"Members"} subTitle={"673"}/>
        <Notice title={"Price"} sub={"$"} subTitle={"83"}/>
      </Header>

      <Section>
        <RowContainer />
        <Description title={"Beautiful Taste Ahead"} description={"The greatest taste that leaves you thinking and wondering were the food has been all these years"} />
      </Section>

      <Header>
        <IconContainer title={"38"} action={PhoneCall} InIcon={BsPhoneVibrateFill} />
        <IconContainer title={"Pay"} InIcon={FaMoneyBillWave} />
        <IconContainer title={"13"} action={Whatsapp} InIcon={FaWhatsapp} />
      </Header>

    </VStack>
  )
}

export default Main;