import dbase from '../config/db.js';
const argumentos = process.argv.slice(2);
const funcion = argumentos[0]

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
        //const consulta=`select * from alumno where rut = ${rutAlumno}`;
        //const resp=await dbase.query(consulta);
        const resp = await dbase.query(consulta, values);
        console.log(resp);
    } catch (error) {
        console.error("Error al conectarse a la base de datos:", error);
    }
}
buscarAlumno(rutAlumno);

//ejemplo de insertar datos en tabla,
const insertarAlumno = async (nombreAlumno, rutAlumno, cursoAlumno, nivelAlumno) => {
    try { 
        const consulta ="Insert into alumno (nombre,rut,curso,nivel) values ($1,$2,$3,$4)";
        const values = [nombreAlumno, rutAlumno, cursoAlumno, nivelAlumno];
        //si se desea realizar con texto plano estas dos lineas se cambian por la siguiente:
        //const consulta=`insert into alumno(nombre,rut,curso,nivel) values ('${nombreAlumno}','${rutAlumno}','${cursoAlumno}','${nivelAlumno}')`;
        //la liena de respuesta tambien se debe modificar y en total de 3 lineas, se conservan solo 2
        //const resp=await dbase.query(consulta);
        const resp = await dbase.query(consulta, values);
        console.log(resp);
    } catch (error) {
        console.error("Error al conectarse a la base de datos:", error);
    }   
};
insertarAlumno(nombreAlumno, rutAlumno, cursoAlumno, nivelAlumno);

//ejemplo para eliminar productos
const borrarAlumno = async (rutAlumno) => {
    try {
        const consulta = "delete from alumno where rut =$1";
        const values = [rutAlumno];
        //const consulta=`delete from producto where rut = '${rutAlumno}'`;
        //const resp=await dbase.query(consulta);
        const response = await dbase.query(consulta, values);
        console.log(response);
    }
    catch (error) { 
        console.error("Error al conectarse a la base de datos:", error);
    }    
};
borrarAlumno(rutAlumno);
    
//ejemplo para modificar productos
const modificarAlumno = async (rutAlumno) => {
    try {
      const consulta =
        "update alumno set nombre=$1, curso=$3, nivel=$4 where rut =$2";
      const values = [nombreAlumno, rutAlumno, cursoAlumno, nivelAlumno];
      //const consulta=`update alumno set nombre='${nombreAlumno}', curso='${cursoAlumno}', nivel='${nivelAlumno}' where rut = '${rutAlumno}'`;
      //const resp=await dbase.query(consulta);
      const response = await dbase.query(consulta, values);
      console.log(response);
    }
    catch (error) { 
        console.error("Error al conectarse a la base de datos:", error);
    }    
}
modificarAlumno(rutAlumno);

const funciones = {
    alumnos: mostrarAlumnos,
    alumno: buscarAlumno,
    nuevo:insertarAlumno,
    eliminar:borrarAlumno,
    cambiar: modificarAlumno
};

(async () => {
    await funciones[funcion]({ nombreAlumno, rutAlumno, cursoAlumno, nivelAlumno });
    pool.end
})();
//const modificarAlumno_3 = async (rutAlumno) => {
//    try {
//      const consulta ={
//        text: "update alumno set nombre=$1, curso=$3, nivel=$4 where rut =$2",
//        values: [nombreAlumno, rutAlumno, cursoAlumno, nivelAlumno]
//      };  
//      const response = await dbase.query(consulta, values);
//      console.log(response);
//    }
//    catch (error) { 
//        console.error("Error al conectarse a la base de datos:", error);
//    }    
//}


