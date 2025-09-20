import app from './app.js';
import envConfig from './config/env.js'


const PORT = envConfig.PORT;

app.listen(PORT,() => {
    console.log(`Server is running to port: ${PORT}`);
})