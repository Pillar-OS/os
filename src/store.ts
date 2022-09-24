import { action, atom, onMount } from 'nanostores'
import Realm from 'realm-web'
import { string } from 'yup'
import { realmApp } from '../realm'

// Global error handling

export const error = atom<string | null>(null)

export const setError = action(error, 'setError', (error, message: string) => {
  error.set(message)
})

// Authentication
export const currentUser = atom<Realm.User | null>(null)

//// Persist auth
onMount(currentUser, () => {
  currentUser.set(realmApp.currentUser || null)
})

//// Register

export const register = async (email: string, password: string) => {
  try {
    await realmApp.emailPasswordAuth.registerUser({ email, password })
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message)
    } else {
      setError('An unknown error has occured')
    }
  }
}

//// Log in
export const login = action(
  currentUser,
  'login',
  async (currentUser, email: string, password: string) => {
    const credentials = Realm.Credentials.emailPassword(email, password)
    try {
      const user = await realmApp.logIn(credentials)
      currentUser.set(user)
      return user
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unknown error has occured')
      }
    }
  }
)
