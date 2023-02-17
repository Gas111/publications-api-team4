/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return votes.init(sequelize, DataTypes);
}

class votes extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    publication_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publications',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'votes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "votes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return votes;
  }
}
