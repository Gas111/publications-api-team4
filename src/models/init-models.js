var DataTypes = require("sequelize").DataTypes;
var _cities = require("./cities");
var _countries = require("./countries");
var _profiles = require("./profiles");
var _publications = require("./publications");
var _publications_images = require("./publications_images");
var _publications_tags = require("./publications_tags");
var _publications_types = require("./publications_types");
var _roles = require("./roles");
var _states = require("./states");
var _tags = require("./tags");
var _users = require("./users");
var _users_tags = require("./users_tags");
var _votes = require("./votes");

function initModels(sequelize) {
  var cities = _cities(sequelize, DataTypes);
  var countries = _countries(sequelize, DataTypes);
  var profiles = _profiles(sequelize, DataTypes);
  var publications = _publications(sequelize, DataTypes);
  var publications_images = _publications_images(sequelize, DataTypes);
  var publications_tags = _publications_tags(sequelize, DataTypes);
  var publications_types = _publications_types(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var states = _states(sequelize, DataTypes);
  var tags = _tags(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users_tags = _users_tags(sequelize, DataTypes);
  var votes = _votes(sequelize, DataTypes);

  cities.belongsTo(states, { foreignKey: "state_id"});
  states.hasMany(cities, { foreignKey: "state_id"});
  profiles.belongsTo(roles, { foreignKey: "role_id"});
  roles.hasMany(profiles, { foreignKey: "role_id"});
  profiles.belongsTo(users, { foreignKey: "user_id"});
  users.hasMany(profiles, { foreignKey: "user_id"});
  publications.belongsTo(cities, { foreignKey: "city_id"});
  cities.hasMany(publications, { foreignKey: "city_id"});
  publications.belongsTo(publications_types, { foreignKey: "publication_type_id"});
  publications_types.hasMany(publications, { foreignKey: "publication_type_id"});
  publications.belongsTo(users, { foreignKey: "user_id"});
  users.hasMany(publications, { foreignKey: "user_id"});
  publications_images.belongsTo(publications, { foreignKey: "publication_id"});
  publications.hasMany(publications_images, { foreignKey: "publication_id"});
  publications_tags.belongsTo(publications, { foreignKey: "publication_id"});
  publications.hasMany(publications_tags, { foreignKey: "publication_id"});
  publications_tags.belongsTo(tags, { foreignKey: "tag_id"});
  tags.hasMany(publications_tags, { foreignKey: "tag_id"});
  states.belongsTo(countries, { foreignKey: "country_id"});
  countries.hasMany(states, { foreignKey: "country_id"});
  users.belongsTo(countries, { foreignKey: "country_id"});
  countries.hasMany(users, { foreignKey: "country_id"});
  users_tags.belongsTo(tags, { foreignKey: "tag_id"});
  tags.hasMany(users_tags, { foreignKey: "tag_id"});
  users_tags.belongsTo(users, { foreignKey: "user_id"});
  users.hasMany(users_tags, { foreignKey: "user_id"});
  votes.belongsTo(publications, { foreignKey: "publication_id"});
  publications.hasMany(votes, { foreignKey: "publication_id"});
  votes.belongsTo(users, { foreignKey: "user_id"});
  users.hasMany(votes, { foreignKey: "user_id"});

  return {
    cities,
    countries,
    profiles,
    publications,
    publications_images,
    publications_tags,
    publications_types,
    roles,
    states,
    tags,
    users,
    users_tags,
    votes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
