import AsyncStorage from '@react-native-async-storage/async-storage'

import { IUser } from '@models/IUser'
import { USER_STORAGE } from './storageConfig'

export async function storageUserSave(user: IUser) {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
}

export async function storageUserGet() {
  const user = await AsyncStorage.getItem(USER_STORAGE)
  return user ? JSON.parse(user) : null
}
