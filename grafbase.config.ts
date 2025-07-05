import { g, config } from '@grafbase/sdk'

const Post = g.model('Post', {
  title: g.string(),
})

export default config({
  schema: g,
})
