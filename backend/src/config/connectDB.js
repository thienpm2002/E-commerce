import { Sequelize } from 'sequelize';
import envConfig from './env.js';

const sequelize = new Sequelize("e_commerce", envConfig.DB_USER_NAME, envConfig.DB_PASSWORD, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: false,
});

export default sequelize;