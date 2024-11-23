const { User, Bootcamp } = require("./../models/index.js")

const createUser = async (data_user) => {
    try {
        const user = await User.create(data_user);
        console.log(`Se ha creado el usuario ${JSON.stringify(user.dataValues)}`)
    } catch (error) {
        console.log(error);
    }
}

const findUserById = async (id) => {
    try {
        const user = await User.findByPk(id, {
            include: {
                model: Bootcamp,
            }
        })
        console.log(user.dataValues)
    } catch (error) {
        console.log(error)
    }
}

const findAllUsers = async () => {
    try {
        const user = await User.findAll({
            include: {
                model: Bootcamp,
            }
        })
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}

const updateUserById = async (idUser, data) => {
    try {
        let userUpdated = await User.update(data, {
            where: {
                id: idUser
            }
        })
        console.log(userUpdated)
    } catch (error) {
        console.log(error)
    }
}

const deleteUserById = async (userId) => {
    try {
        const userToDelete = await User.destroy({
            where: {
                id: userId
            }
        })
        console.log(userToDelete)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createUser, findUserById, findAllUsers, updateUserById, deleteUserById }