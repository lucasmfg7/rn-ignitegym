import { IUser } from '@models/IUser'
import { createContext } from 'react'

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
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: '1',
          name: 'Lucas Fernandes',
          email: 'lucas@email.com',
          avatar: 'lucas.png',
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
