const path = require('path')

let entries = {
  react: './react/react.js',
  'react-solution': './react/react-solution.js',
  redux: './redux/redux.js',
  'redux-solution': './redux/redux-solution.js',
  'redux-async': './redux-async/redux-async.js',
  'redux-async-solution': './redux-async/redux-async-solution.js'
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
  // this is commented out to illustrate a point about transpilation in the react tutorial.
  // You'll likely want to uncomment it...
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?$/,
  //       exclude: /(node_modules|bower_components)/,
  //       loader: 'babel-loader',
  //       query: {
  //         presets: ['react']
  //       }
  //     },
  //   ]
  // }
}
