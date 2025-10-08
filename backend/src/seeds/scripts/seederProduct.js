import { v2 as cloudinary } from 'cloudinary';
import envConfig from '../../config/env.js';
import sequelize from '../../config/connectDB.js';
import { Product, Category, Image } from '../../models/index.js';
import products from '../data/products.json' assert { type: "json" };

// ===========================
// CONFIG CLOUDINARY
// ===========================
cloudinary.config({
  cloud_name: envConfig.CLOUD_NAME,
  api_key: envConfig.CLOUD_API_KEY,
  api_secret: envConfig.CLOUD_API_SECRET,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected for seeding...");

    // Sync models (alter để đảm bảo đúng cấu trúc)
    await sequelize.sync({ alter: true });

    for (const data of products) {
      const transaction = await sequelize.transaction(); // rollback-safe
      try {
        // ========== 1. CATEGORY ==========
        let category = await Category.findOne({
          where: { categoryName: data.category },
          transaction,
        });
        if (!category) {
          category = await Category.create(
            { categoryName: data.category },
            { transaction }
          );
        }

        // ========== 2. SUBCATEGORY ==========
        let subCategory = category;
        if (data.subCategory) {
          subCategory = await Category.findOne({
            where: { categoryName: data.subCategory },
            transaction,
          });
          if (!subCategory) {
            subCategory = await Category.create(
              {
                categoryName: data.subCategory,
                parent_id: category.id,
              },
              { transaction }
            );
          }
        }

        // ========== 3. PRODUCT ==========
        const priceInt = parseInt(data.price.replace(/[^\d]/g, ''), 10);

        const product = await Product.create(
          {
            name: data.name,
            price: priceInt,
            description: data.description || 'Đang cập nhật',
            brand: data.brand || null,
            categoryId: subCategory.id,
            stock: data?.stock || 30,
          },
          { transaction }
        );

        // ========== 4. UPLOAD IMAGES TO CLOUDINARY ==========
        if (data.subImg && data.subImg.length > 0) {
          const uploadResults = await Promise.all(
            data.subImg.map((url, index) =>
              cloudinary.uploader.upload(url, {
                folder: 'products',
                public_id: `${product.id}_${index}`,
                overwrite: true,
              })
            )
          );

          // ========== 5. SAVE IMAGES ==========
          const imageRecords = uploadResults.map((res, index) => ({
            url: res.secure_url,
            public_id: res.public_id,
            productId: product.id,
            type: index === 0 ? 'main' : 'sub',
            sort_order: index,
          }));

          await Image.bulkCreate(imageRecords, { transaction });
        }

        await transaction.commit();
        console.log(`🌱 Seeded product: ${data.name}`);
      } catch (innerErr) {
        console.error(`❌ Error while seeding "${data.name}":`, innerErr);
        await transaction.rollback();
      }
    }

    console.log("🎉 All products seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
})();
