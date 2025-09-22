import { DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js";


const User = sequelize.define('User', {
       userName: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
       },
       email: {
        type: DataTypes.STRING(50),
        allowNull: false
       },
       password: {
        type: DataTypes.STRING,
       allowNull: false
       },
       isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
       },
       phoneNumber: {
        type: DataTypes.STRING(12),
       },
}, {
    tableName: 'users',
    timestamps: true
})


export default User;