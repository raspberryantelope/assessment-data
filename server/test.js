require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
console.log(process.env.CONNECTION_STRING)
