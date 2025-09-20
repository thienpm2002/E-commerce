import express from 'express';
import createError from 'http-errors';
import helmet from 'helmet';
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import cors from 'cors';

import routes from './routes/index.js';
import logger from './config/logger.js';
const app = express();

// Middlewear
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  }));
app.use(morgan('common'));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
  })
);


// Middleware log request
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// routes
routes(app);


// Error handler

app.use((req,res,next) => {
     next(createError.NotFound());
})

app.use((err,req,res,next) => {
     logger.error(`${err.status || 500} - ${err.message} - ${req.method} ${req.url}`);
     res.status(err.status || 500).json({
          status: err.status || 500,
          message: err.message,
     })
})

export default app;

