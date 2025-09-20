import { createLogger, format, transports } from 'winston';
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
        format.printf(({timestamp,level,message})=>`${timestamp} [${level}] : ${message}`)
    ),
    transports: [
        new transports.File({
            filename: path.join(__dirname,'../logs/error.log'),
            level:'error'
        }),
        new transports.File({ filename: path.join(__dirname, "../logs/combined.log")}),
    ]
})



export default logger;