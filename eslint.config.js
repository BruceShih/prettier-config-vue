// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true
}, {
  rules: {
    'style/max-len': ['error', { code: 100 }],
    'style/comma-dangle': ['error', 'never']
  }
})
