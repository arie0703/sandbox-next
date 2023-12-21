export type Profile = {
  name: string
  introduction: string
  experiences: Array<{
    image: string
    title: string
    content: string
  }>
}