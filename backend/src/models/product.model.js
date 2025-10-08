import { DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js";


const Product = sequelize.define('Product', {
       name: {
        type: DataTypes.STRING(255),
        allowNull: false,
       },
       price: {
        type: DataTypes.INTEGER,
        allowNull: false,
       },
       description: {
        type: DataTypes.TEXT,
        allowNull: false
       },
       stock: {
        type: DataTypes.INTEGER,
        defaultValue: false
       },
       brand: {
        type: DataTypes.STRING(50),
       },
       categoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'categories',
            key: 'id'
        }
       }
}, {
    tableName: 'products',
    timestamps: true
})

export default Product; 