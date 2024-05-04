// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  // onDelete: 'cascade',
  // hooks: true  
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'cascade',
  hooks: true
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  // onDelete: 'cascade',
  // hooks: true
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: ProductTag,
  foreignKey: 'tag_id',
  // onDelete: 'cascade',
  // hooks: true
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
