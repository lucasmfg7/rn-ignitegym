import { IUser } from '@models/IUser'
import { createContext, useState } from 'react'

interface AuthContextDataProps {
  user: IUser
}

interface AuthContextProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({
    id: '1',
    name: 'Lucas Fernandes',
    email: 'lucas@email.com',
    avatar: 'lucas.png',
  })

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
