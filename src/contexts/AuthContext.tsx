import { IUser } from '@models/IUser'
import { createContext, useState } from 'react'

interface AuthContextDataProps {
  user: IUser
  signIn: (email: string, password: string) => void
}

interface AuthContextProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    avatar: '',
  })

  function signIn(email: string, password: string) {
    setUser({
      id: '',
      name: '',
      email,
      avatar: '',
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
