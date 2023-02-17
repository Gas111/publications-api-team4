/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return states.init(sequelize, DataTypes);
}

class states extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'countries',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'states',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "states_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return states;
  }
}
