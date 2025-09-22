import dotenv from 'dotenv'

dotenv.config();

const envConfig = {
    PORT : process.env.PORT || 3000,
    DB_HOST : process.env.DB_HOST || 'localhost',
    DB_USER_NAME: process.env.DB_USER_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
}

export default envConfig; 
