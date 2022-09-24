import Realm from 'realm-web'
import { realmApp } from '../../realm'

export const register = async (email: string, password: string) => {
  try {
    await realmApp.emailPasswordAuth.registerUser({ email, password })
  } catch (error) {
    console.log(error)
  }
}

export const login = async (email: string, password: string) => {
  const credentials = Realm.Credentials.emailPassword(email, password)
  try {
    const user = await realmApp.logIn(credentials)
    return user
  } catch (error) {
    console.log(error)
  }
}
