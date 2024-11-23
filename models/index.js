const User = require("./user.model.js")
const Bootcamp = require("./bootcamp.model.js")


User.belongsToMany(Bootcamp, {
    through: "user_bootcamp",
    foreignKey: "user_id"
});

Bootcamp.belongsToMany(User, {
    through: "user_bootcamp",
    foreignKey: "bootcamp_id"
});

module.exports = {User, Bootcamp}