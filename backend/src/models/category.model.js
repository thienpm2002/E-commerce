import { DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js";


const Category = sequelize.define('Category', {
       categoryName: {
        type: DataTypes.STRING(255),
        allowNull: false,
       },
       parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'categories',
            key: 'id'
        }
       }
}, {
    tableName: 'categories',
    timestamps: true
})

export default Category; 