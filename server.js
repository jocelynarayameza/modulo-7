const conexion = require("./config/db.config")
const { createUser, findUserById, findAllUsers, updateUserById, deleteUserById } = require("./controllers/user.controller.js")
const { createBootcamp, addUser, findById, findAll } = require("./controllers/bootcamp.controller.js")

async function probarConexion() {
    try {
        await conexion.sync()
        console.log("Conexión exitosa con la base de datos");

        //RESOLUCIÓN PUNTO 6

        //6. CREAR LOS USUARIOS
        const user1 = await createUser({ firstName: "Mateo", lastName: "Díaz", email: "mateo.diaz@correo.com" });
        const user2 = await createUser({ firstName: "Santiago", lastName: "Mejías", email: "santiago.mejias@correo.com" });
        const user3 = await createUser({ firstName: "Lucas", lastName: "Rojas", email: "lucas.rojas@correo.com" });
        const user4 = await createUser({ firstName: "Facundo", lastName: "Fernández", email: "facundo.fernandez@correo.com" });

        //CREAR LOS BOOTCAMP:

        const bootcamp1 = await createBootcamp({ title: "Introduciendo El Bootcamp De React", cue: 10, description: "React es la librería más usada en JavaScript para el desarrollo de interfaces." });

        const bootcamp2 = await createBootcamp({ title: "Bootcamp Desarrollo Web Full Stack.", cue: 10, description: "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS." });

        const bootcamp3 = await createBootcamp({ title: "Bootcamp Big Data, Inteligencia Artificial & Machine Learning.", cue: 10, description: "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning." });

        // //AGREGAR LOS SIGUIENTES BOOTCAMP
        const add1 = await addUser(1, 1);
        const add2 = await addUser(2, 1)
        const add3 = await addUser(1, 2)
        const add4 = await addUser(1, 3)
        const add5 = await addUser(2, 3)
        const add6 = await addUser(3, 3)

        // //CONSULTAR BOOTCAMP POR ID
        const consulta1 = await findById(1);

        // Listar todos los Bootcamp con sus usuarios.
        const consulta2 = await findAll();

        // //Consultar un usuario por id, incluyendo los Bootcamp.
        const consulta3 = await findUserById(1);

        //Listar los usuarios con sus Bootcamp.
        const consulta4 = await findAllUsers();

        // //Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez.
        const consulta5 = await updateUserById(1, { firstName: "Pedro", lastName: "Sanchez" })

        // //Eliminar un usuario por id; por ejemplo: el usuario con id=1.
        const consulta6 = await deleteUserById(1)


    } catch (error) {
        console.error("No se pudo conectar a la base de datos:", error.message);
    }
}

probarConexion();
