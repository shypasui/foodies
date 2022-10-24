import { HStack } from "@chakra-ui/react";

interface Params {
    children: JSX.Element[] | JSX.Element
}

const Header: React.FC<Partial<Params>> = ({children}): JSX.Element => {
  return (
    <HStack 
    minH={"10%"} 
    h={"auto"}
    w={"full"} 
    className={"bg-[#020202b4] bg-opacity-60 backdrop-filter backdrop-blur-lg"}
    bg={"#18181881"}
    backdropBlur={"lg"}
    backdropFilter={"blur(2px)"}
    alignItems={"center"}
    justifyContent={"space-between"}
    px={"8"}
    >
        {children}
    </HStack>
  )
}

export default Header;