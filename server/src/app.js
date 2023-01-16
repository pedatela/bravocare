require('dotenv/config');
require('express-async-errors');
const Youch = require('youch');
const cors = require('cors');
const express = require('express');
const routes = require('./routes');

require('./database');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler()
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors())
  }

  routes() {
    this.server.use('/api', routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors)
      } else {
        return res.status(500).json({ error: 'Internal server error' })
      }
    })
  }
}

module.exports = new App().server;