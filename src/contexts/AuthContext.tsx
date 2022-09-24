import { useStore } from '@nanostores/react'
import React from 'react'
import { currentUser } from '../store'

export const AuthContext = React.createContext<Realm.User | null>(null)

export const AuthProvider = ({
  children,
  fallback
}: {
  children: React.ReactNode
  fallback: React.ReactNode
}) => {
  const user = useStore(currentUser)

  if (!user) return <>{fallback}</>

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
