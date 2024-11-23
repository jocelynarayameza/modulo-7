const { User, Bootcamp } = require("./../models/index.js")

const createBootcamp = async (data_bootcamp) => {
    try {
        const bootcamp = await Bootcamp.create(data_bootcamp);
        console.log(`Creado el bootcamp: ${JSON.stringify(bootcamp.dataValues)}`)
    } catch (error) {
        console.log(error);
    }
}

const addUser = async(idUser, idBootcamp) => {
    try {
        const user = await User.findByPk(idUser);
        const bootcamp = await Bootcamp.findByPk(idBootcamp)
        const agregar = await bootcamp.addUser(user);
            console.log(`Agregado el usuario id=${idUser} al bootcamp con id=${idBootcamp}`);
    } catch (error) {
        console.log(error)
    }
}

const findById = async (id) => {
    try {
        const bootcamp = await Bootcamp.findByPk(id)
        console.log(bootcamp.dataValues)
    } catch (error) {
        console.log(error)
    }
}

const findAll = async () => {
    try {
        const bootcamp = await Bootcamp.findAll({
            include: {
                model: User,
            }
        })
        console.log(bootcamp)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {createBootcamp, addUser, findById, findAll}