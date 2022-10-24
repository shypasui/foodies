import { Avatar, Box, Heading, HStack, Stack, Tooltip } from "@chakra-ui/react";
import { userName } from "../State/atoms";
//import { IconType } from "react-icons";
import { useRecoilValue } from 'recoil';

interface Params {
    icon: string
    title: string
}

const Profile: React.FC<Partial<Params>> = ({icon, title}): JSX.Element => {

    const Username = useRecoilValue(userName)

  return (
    <HStack
    >
        
    <Tooltip label="Hey, We are eat some" aria-label='A profile tooltip'>
        <Stack
        alignItems={"center"}
        justifyContent={"center"}
        >
            
            <Box
            w={"45px"}
            h={"45px"}
            rounded={"full"}
            >
                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            </Box>

            <Heading
            fontSize={"xs"}
            fontWeight={"light"}
            color={"aliceblue"}
            >
                {Boolean(Username) ? `@${Username}` : title}
            </Heading>

        </Stack>
    </Tooltip>
    </HStack>
  )
}

export default Profile;