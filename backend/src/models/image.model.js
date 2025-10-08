import { DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js";


const Image = sequelize.define('Image', {
       url: {
        type: DataTypes.STRING(255),
        allowNull: false,
       },
       productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        }
       },
       type: {      
            type: DataTypes.ENUM('main', 'sub'),
            allowNull: false
       },
       sort_order: {
        type: DataTypes.INTEGER,
        defaultValue: 0
       },
       public_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
       }
}, {
    tableName: 'images',
    timestamps: true
})

export default Image; 