import { Heading, Icon, Stack } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

interface Params {
    InIcon: IconType
    title?: string | number
    action?: () => void
    active?: boolean
    color?: string
}

const IconContainer: React.FC<Params> = ({InIcon, title, action, active, color}): JSX.Element => {
  return (
    <Stack
        alignItems={"center"}
        justifyContent={"center"}
        shadow={"xl"}
        rounded={"full"}
        onClick={action}
        >
            
            <Stack
            w={"30px"}
            h={"30px"}
            rounded={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            >
                <Icon as={InIcon} color={ Boolean(active) ? color : "aliceblue"} w={6} h={6} />
            </Stack>

            <Heading
            fontSize={"xx-small"}
            fontWeight={"light"}
            color={"aliceblue"}
            >
                <b>{title}</b>
            </Heading>

        </Stack>
  )
}

export default IconContainer;