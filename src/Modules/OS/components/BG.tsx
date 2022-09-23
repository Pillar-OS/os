import { useStore } from '@nanostores/react'
import { FC, PropsWithChildren } from 'react'
import { settingsStore } from '../store'

const BG: FC<PropsWithChildren> = ({ children }) => {
  const { backgroundImage } = useStore(settingsStore)

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '100vh',
        padding: '16px'
      }}
    >
      {children}
    </div>
  )
}

export default BG
