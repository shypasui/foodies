import { HStack, useToast } from '@chakra-ui/react';
import React from 'react'
import IconsEnteries from './IconsEnteries';
import IconContainer from './IconContainer';
import {MdOutlineMore} from 'react-icons/md';
import {FiLogIn, FiLogOut} from 'react-icons/fi';
import {GiThreeKeys, GiWallet, GiVote} from 'react-icons/gi';
import {FaUserFriends,FaHeart} from 'react-icons/fa';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { AlertAtom, likedAtom, likesAtom, LoginForm, userName } from '../../State/atoms';


function RowContainer() {
    const setloginForm = useSetRecoilState(LoginForm)
    const [likes,setLikes] = useRecoilState(likesAtom)
    const [liked,setLiked] = useRecoilState(likedAtom)
    const [alerts, setAlerts] = useRecoilState(AlertAtom)
    const [Username, setUsername] = useRecoilState(userName)
    const toast = useToast()

    const Login = () => {
        if(Username !== null) {
            setUsername(null)
            return
        }
        setloginForm(true)
    }

    const LikeBtn = () => {
        setLikes(prev => prev + 1)
        setLiked(true)
    }

    const Keys = () => {
        toast({
            title: "you can purchase these keys",
            description: `Purchase these keys to stand a chance to win gift card`,
            status: 'info',
            duration: 4000,
            isClosable: true,
          })
    }

    const ShowAlert = () => {
        setAlerts(true)
    }



  return (
    <HStack
    w={"full"}
    h={"auto"}
    alignItems={"flex-end"}
    justifyContent={"space-between"}
    px={"3"}
    >
        <IconsEnteries >
            <IconContainer action={Keys} title={"Keys"} InIcon={GiThreeKeys} />
            <IconContainer action={ShowAlert} title={"Pays"} InIcon={GiWallet} />
            <IconContainer action={ShowAlert} title={"Vote"} InIcon={GiVote} />
            <IconContainer action={Login} title={!Boolean(Username) ? "Login" : "Logout"} InIcon={!Boolean(Username) ? FiLogIn : FiLogOut} />
        </IconsEnteries>

        <IconsEnteries >
            <IconContainer action={LikeBtn} active={liked} color={"red.500"} title={likes} InIcon={FaHeart} />
            <IconContainer action={ShowAlert} title={"Friends"} InIcon={FaUserFriends} />
            <IconContainer action={ShowAlert} title={"More"} InIcon={MdOutlineMore} />
        </IconsEnteries>

    </HStack>
  )
}

export default RowContainer;