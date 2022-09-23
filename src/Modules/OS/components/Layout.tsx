import { FC, PropsWithChildren } from 'react'
import BG from './BG'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <BG>{children}</BG>
    </>
  )
}

export default Layout
