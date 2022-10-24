import {Text, VStack } from "@chakra-ui/react";
import React from 'react';

interface Params {
    title: string;
    description: string;
}

const Description: React.FC<Params> = ({title, description}, restProps): JSX.Element => {

  return (
    <VStack 
        width={"auto"}
        height={"fit-content"}
        padding={"1"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        px={{base: "4", md:"8"}}
        bgGradient={"linear(to-r, #181818e0, #18181881)"}
        {...restProps}
    >
        <Text fontSize={{base: "sm", md: "4xl"}} color={"aliceblue"}>
            <b> {title} </b>
            <br/>
            {description}
        </Text>
    </VStack>
  )
}

export default Description;