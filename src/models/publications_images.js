/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return publications_images.init(sequelize, DataTypes);
}

class publications_images extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    publication_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publications',
        key: 'id'
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'publications_images',
    schema: 'public',
    timestamps: false
  });
  return publications_images;
  }
}
