const path = require('path')

let entries = {
  react: './react/react.js'
}

if (!Object.keys(entries).includes(process.env.STEP)) {
  console.error(`Unknown or missing STEP (found '${process.env.STEP}'). Re-run with 'STEP=x npm start' (where x is one of react|others)`)
  process.exit()
}

module.exports = {
  entry: path.resolve(__dirname, entries[process.env.STEP]),
  output: {
    filename: 'bundle.js'
  },
}