import app from './app.js';
import envConfig from './config/env.js'
import { sequelize } from './models/index.js'

const PORT = envConfig.PORT;


(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connect database successfully!");

    await sequelize.sync({ alter: true });  
    console.log("Synchronize model with DB successfully");

    app.listen(PORT,() => {
        console.log(`Server is running to port: ${PORT}`);
    })
  } catch (err) {
    console.error("Connect database failure!", err);
  }
})();
