'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class PublicationsImages extends Model {
    static associate(models) {
      PublicationsImages.belongsTo(models.Tags, {
        as: 'tags',
        foreignKey: 'tag_id',
      })

      PublicationsImages.belongsTo(models.Publications, {
        as: 'publications',
        foreignKey: 'publication_type_id',
      })
    }
  }
  PublicationsImages.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      tag_id: DataTypes.INTEGER,
      publication_id: DataTypes.UUID, 
    },
    {
      sequelize,
      modelName: 'PublicationsImages',
      tableName: 'publications_images',
      underscored: true,
      timestamps: true,
      scopes: {
        view_public: { attributes: ['id', 'tag_id', 'publication_id'] },
      },
      no_timestamps: {
        attributes: { exclude: ['created_at', 'updated_at'] },
      },
    },
  )
  return PublicationsImages
}
