const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    testIsolation: true,
    retries: {
      runMode: 2,
      openMode: 1
    },
    env: {
      API_TOKEN: 'sQACkUBojgTdYRq4eAS4FhMuZVVphKR2XPEM/gL1D23kwWUKqyI/OmFMj4JIy+VsLUUz+dKIuOCp3gZC3GCUpw=='
    }
  }
})

