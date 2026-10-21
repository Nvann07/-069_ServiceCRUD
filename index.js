import express  from 'express'
import pg  from 'pg'
const app = express()
const { Pool } = pg
const port = process.env.PORT || 3000

