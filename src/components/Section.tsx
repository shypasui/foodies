import { VStack } from '@chakra-ui/react'
import React from 'react'
interface Params {
    children: JSX.Element[] | JSX.Element
}

const Section: React.FC<Partial<Params>> = ({children}):JSX.Element => {

  return (
    <VStack
    width={"full"}
    height={"full"}
    justifyContent={"flex-end"}
    alignItems={"flex-end"}
    >
        {children}
    </VStack>
  )
}

export default Section;