import dotenv from 'dotenv'

dotenv.config();

const envConfig = {
    PORT : process.env.PORT || 3000,
    DB_HOST : process.env.DB_HOST || 'localhost',
    DB_USER_NAME: process.env.DB_USER_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_API_KEY: process.env.CLOUD_API_KEY,
    CLOUD_API_SECRET: process.env.CLOUD_API_SECRET
}

export default envConfig; 
