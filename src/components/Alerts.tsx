import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useRecoilState } from 'recoil'
import { AlertAtom } from '../State/atoms'

const Alerts: React.FC = (): JSX.Element => {
    const [alerts, setAlerts] = useRecoilState(AlertAtom)
  const cancelRef = React.useRef<any>()

const onClose = () => {
    setAlerts(false)
}

  return (
    <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={alerts}
        isCentered
        size={"sm"}
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>You have no no data.</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            You have no data for your request please try using the app more.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme={"red"} ref={cancelRef} onClick={onClose}>
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  )
}

export default Alerts;