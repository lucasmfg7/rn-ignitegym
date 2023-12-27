import { IUser } from '@models/IUser'
import { api } from '@services/api'
import { storageUserGet, storageUserSave } from '@storage/storageUser'
import { createContext, useEffect, useState } from 'react'

interface AuthContextDataProps {
  user: IUser
  signIn: (email: string, password: string) => Promise<void>
}

interface AuthContextProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser)

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('/sessions', { email, password })
      if (data.user) {
        setUser(data.user)
        storageUserSave(data.user)
      }
    } catch (error) {
      throw error
    }
  }

  async function loadUserData() {
    const userLogged = await storageUserGet()
    if (userLogged) setUser(userLogged)
  }

  useEffect(() => {
    loadUserData()
  }, [])

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
