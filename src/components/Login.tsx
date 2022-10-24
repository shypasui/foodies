import React,{useState} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast,
  } from '@chakra-ui/react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { LoginForm, userName } from '../State/atoms'

const Login: React.FC = (): JSX.Element => {
    const [loginForm, setLoginForm] = useRecoilState(LoginForm)
    const setUsername = useSetRecoilState(userName)
    const [localUser, setLocalUser] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const toast = useToast()

    //const { isOpen, onOpen} = useDisclosure()

    const onClose = () => {
        setLoginForm(false)
    }

    const handleSubmit = () => {

        if(localUser === null) {
            toast({
                title: 'Please enter your user name',
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
              return
        }

        if(password === null) {
            toast({
                title: 'Please enter your password',
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
              return
        }


        setUsername(localUser)
        setLoginForm(false)
        toast({
            title: 'You have successfully Login.',
            description: `Hey, ${localUser} thank welcome back to eatsome app.`,
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
    }


  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={loginForm}
        onClose={onClose}
        size={"xs"}
      >
        <ModalOverlay />
        <ModalContent bg={"aliceblue"}>
          <ModalHeader>Login into account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input 
              onChange={(e: React.SyntheticEvent<HTMLInputElement>) => {
                setLocalUser(e.currentTarget.value)
            }
              }
              ref={initialRef} 
              placeholder='Username' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
              onChange={(e: React.SyntheticEvent<HTMLInputElement>) => {
                setPassword(e.currentTarget.value)
            }
              }
               type={"password"} placeholder='password' />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default Login