import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { atom, computed, map } from 'nanostores'
import { Language, Settings, Theme } from './types'

// SETTINGS

export const settingsStore = map<Settings>({
  theme: 'light',
  language: 'en',
  backgroundImage:
    'https://mj-gallery.com/741a444c-28ad-4a7a-8b00-c9aceed5231c/grid_0.png'
})

export const changeTheme = (theme: Theme) => {
  settingsStore.setKey('theme', theme)
}

export const changeLanguage = (language: Language) => {
  settingsStore.setKey('language', language)
}

export const changeBackgroundImage = (backgroundImage: string) => {
  settingsStore.setKey('backgroundImage', backgroundImage)
}

// COMMAND PALETTE

export const commandPaletteQueryStore = atom<string>('')

export const commandPaletteSuggestionsStore = atom<string[]>([])

export const suggestions = computed(
  [commandPaletteQueryStore, commandPaletteSuggestionsStore],
  (query, suggestions) => {
    return suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(query)
    )
  }
)
