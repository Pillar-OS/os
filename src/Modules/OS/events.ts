import { FunctionComponent } from 'react'
import { eventbus } from '../../utils/eventBus'

export const osEvents = eventbus<{
  openCommandPalette: () => void
  openApp: (component: FunctionComponent) => void
}>()
