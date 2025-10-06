import sequelize from "../config/connectDB.js";
import User from '../models/user.model.js';
import Product from '../models/product.model.js';
import Category from '../models/category.model.js';
import Image from '../models/image.model.js';

// ========== Category <-> Product ==========
Category.hasMany(Product, { foreignKey: 'categoryId', as: 'products', onDelete: 'SET NULL' });
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

// ========== Product <-> Image ==========
Product.hasMany(Image, { foreignKey: 'productId', as: 'images', onDelete: 'CASCADE' });
Image.belongsTo(Product, { foreignKey: 'productId', as: 'product' });

export {
    sequelize,
    User,
    Product,
    Category,
    Image
};