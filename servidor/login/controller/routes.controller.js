// //importar la conexion de la db
// import { pool } from "../db.js";
// import bcrypt from 'bcrypt';

// //logica para poder registar  un usuario 

// export const createUser = async (req, res) => {
//   try {
//     const { id_login, username, email, password } = req.body;
  
//     if (!password) {
//       throw new Error('Contraseña requerida')
//     }

//     if (!username) {
//       throw new Error('Nombre requerido')
      
//     }

//     if (!email) {
//       throw new Error('Email requerido')
//     }

//     //verficar si ya existe un usario con el mismo email y nombre
//     const checkExistingUserQuery = 'SELECT * FROM login WHERE username = ? ';
//     const checkExistingUserValues = [username];
//     const [existingUser] = await pool.query(checkExistingUserQuery, checkExistingUserValues);
//     console.log(existingUser);

//     if (existingUser.length > 0) {
//       return res.status(409).send(' nombre de usuario ya existente.');
      
//     }
    
//     //se encripta la contraseña antes de guardarla en la db

//     const saltRond = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRond);
    
//     //consulta para insertar un usuario
//     const query = 'INSERT INTO login (id_login, username, email, password) VALUES (?, ?, ?, ?)';

//     const values = [id_login, username, email, hashedPassword]; // Guarda la contraseña encriptada en lugar de la contraseña visible 
//     await pool.query(query, values);
    


//     //verificamos los datos que se envian
//     console.log(query,values);

//     res.send('Registro exitoso 🎉');
//   } catch (error) {
//     console.error('Error de registro:', error);
//     res.status(500).send('Error al registrar');
//   }
// };
