import { Text, VStack } from '@chakra-ui/react';
import React from 'react'

interface Params {
    title: string
    subTitle: string
    sub: string
}

const Notice: React.FC<Partial<Params>> = ({title, subTitle, sub}): JSX.Element => {

  return (
    <VStack
    color={"aliceblue"}
    py={"4"}
    width={"auto"}
    height={"fit-content"}
    textAlign={"center"}
    >
        <Text fontSize={"sm"}>
            {title}
            <br/>
            <b>{subTitle}</b> <sup>{sub}</sup>
        </Text>
        <Text>
        </Text>
    </VStack>
  )
}

export default Notice;