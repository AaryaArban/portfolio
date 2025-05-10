export interface Project {
  title: string
  shortDescription: string
  priority: number
  cover: string
  livePreview?: string
  githubLink?: string
  type: string
}

export interface Heading {
  id: string
  title: string
  items: Heading[]
}

