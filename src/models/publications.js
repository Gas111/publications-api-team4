/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return publications.init(sequelize, DataTypes);
}

class publications extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    publication_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publications_types',
        key: 'id'
      }
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cities',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'publications',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "publications_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return publications;
  }
}
