import Settings from '../Settings/app'
import { osEvents } from './events'
import { Command } from './types'

export const commands: Command[] = [
  {
    query: 'test',
    action: () => {
      alert('Test')
    }
  },
  {
    query: 'settings',
    action: () => {
      osEvents.emit('openApp', Settings)
    }
  }
]
