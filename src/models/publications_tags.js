/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return publications_tags.init(sequelize, DataTypes);
}

class publications_tags extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tags',
        key: 'id'
      }
    },
    publication_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publications',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'publications_tags',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "publications_tags_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return publications_tags;
  }
}
