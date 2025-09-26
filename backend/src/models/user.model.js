import { DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js";
import generateAvatar from '../utils/avatar.js';

const User = sequelize.define('User', {
       userName: {
        type: DataTypes.STRING(30),
        allowNull: false,
       },
       email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
       },
       password: {
        type: DataTypes.STRING(255),
       allowNull: false
       },
       isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
       },
       phoneNumber: {
        type: DataTypes.STRING(20),
       },
       avatar: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
       }
}, {
    tableName: 'users',
    timestamps: true
})


User.beforeCreate((user) => {
  if (!user.avatar) {
    user.avatar = generateAvatar(user.user_name);
  }
});

export default User;