import fs from 'fs'
import React from 'react'
import ReactDOM from 'react-dom/server'

import App from '../src/App'

import { STRING_PATH, STATIC_PATH } from './constants'

const Html = () => (
  <>
  <html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"><App /></div>
    <script src="/bundle.js"></script>
  </body>
  </html>
  </>
)

const string = ReactDOM.renderToString(<Html />)
const stringStatic = ReactDOM.renderToStaticMarkup(<Html />)

fs.writeFileSync(STRING_PATH, string)
fs.writeFileSync(STATIC_PATH, stringStatic)