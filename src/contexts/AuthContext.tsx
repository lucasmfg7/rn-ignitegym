import { IUser } from '@models/IUser'
import { createContext } from 'react'

interface AuthContextDataProps {
  user: IUser
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
)
