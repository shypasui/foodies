import { VStack } from '@chakra-ui/react'
import React from 'react'

interface Params {
  children: JSX.Element[] | JSX.Element
}


const IconsEnteries: React.FC<Params> = ({children}):JSX.Element => {
  return (
    <VStack
    w={"fit-content"}
    h={"auto"}
    bgGradient={"linear(to-tl, #181818e0, #18181881)"}
    alignItems={"flex-end"}
    justifyContent={"center"}
    backdropBlur={"lg"}
    backdropFilter={"blur(1px)"}
    px={"5"}
    py={"4"}
    gap={"5"}
    rounded={"2xl"}
    shadow={"2xl"}
    >
      {children}
    </VStack>
  )
}

export default IconsEnteries;