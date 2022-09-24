export type Theme = 'light' | 'dark'

export type Language = 'en' | 'fr'

export type BackgroundImage = string

export type Settings = {
  theme: Theme
  language: Language
  backgroundImage: BackgroundImage
}

export type Command = {
  query: string
  action: () => void
}
