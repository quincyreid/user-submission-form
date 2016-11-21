/**
 * Server
 */

const express = require('express')
const app = express()

if (!module.parent) {
  app.listen(process.env.PORT || 3000)
}

module.exports = app
