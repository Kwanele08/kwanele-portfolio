export type Project = {
  id: number
  slug?: string
  title: string
  category: string
  description: string
  technologies: string[]
  metric?: string
  metricLabel?: string
  github?: string
  status?: string
  image: string
  imageAlt: string

  problem: string
  approach: string
  contribution: string
  implementation: string[]
  results: string[]
  learnings: string[]
}