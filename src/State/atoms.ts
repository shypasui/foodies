import { atom } from 'recoil'

export const likesAtom = atom<number>({
    key: 'likes',
    default: 436
})

export const likedAtom = atom<boolean>({
    key: 'liked',
    default: false
})

export const LoginForm = atom<boolean>({
    key: 'loginForm',
    default: false
})

export const userName = atom<string | null>({
    key: 'userName',
    default: null
})
export const AlertAtom = atom<boolean>({
    key: 'AlertAtom',
    default: false
})