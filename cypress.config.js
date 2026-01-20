const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    env: {
      API_TOKEN: 'sQACkUBojgTdYRq4eAS4FhMuZVVphKR2XPEM/gL1D23kwWUKqyI/OmFMj4JIy+VsLUUz+dKIuOCp3gZC3GCUpw=='
    }
  }
})

