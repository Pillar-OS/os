import { useEffect } from 'react'
import { FC } from 'react'
import CommandPalette from './components/CommandPalette'
import Layout from './components/Layout'
import { osEvents } from './events'

const OS: FC = () => {
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key == 'p') {
        e.preventDefault()
        osEvents.emit('openCommandPalette')
      }
    })
    return () => {
      document.removeEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key == 'p') {
          e.preventDefault()
          osEvents.emit('openCommandPalette')
        }
      })
    }
  })

  return (
    <Layout>
      <CommandPalette />
    </Layout>
  )
}

export default OS
