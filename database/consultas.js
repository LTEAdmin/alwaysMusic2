import dbase from '../config/db.js';

const mostrarAlumnos = async () => {
    try {
            const consulta ="select * from alumno";
            //const valores= es donde se debe definir los valores de las variables de la consulta en este caso no es necesario
            const result = await dbase.query(consulta); //en caso de necesitar parametros se agrega a tarves de valores (consulta,valores);
            console.log(result.rows);
       } catch (error) {
         console.error("Error al conectarse a la base de datos:", error);
    }
};
mostrarAlumnos();


//mostrar datos de alumno buscado por rut
const buscarAlumno = async (rutAlumno) => {
    try {
        const consulta = "select * from alumno where rut = $1";
        const values = [rutAlumno];
        const resp = await dbase.query(consulta, values);
        console.log(resp);
    } catch (error) {
        console.error("Error al conectarse a la base de datos:", error);
    }
    
    buscarAlumno(rutAlumno);
    
    
  
};
