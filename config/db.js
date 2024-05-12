import pg from 'pg';
import 'dotenv/config';

const {DB_PASSWORD, DB_USER, DB_HOST, DB_DATABASE, DB_PORT} = process.env;

const config = {
    user: DB_USER,
    host: DB_HOST,
    database: DB_DATABASE,
    password: DB_PASSWORD,
    port: DB_PORT,
    allowExitOnIdle:true,
}

const dbase = new pg.Pool (config);

const client = await dbase.connect();
const {rows} = await client.query ('SELECT * from alumno'); // consulta a bbdd
console.log(rows);
client.release ();

//mostrar datos de alumno buscado por rut
const mostrarAlumnos = async () => {
    const consulta = "select * from alumno";
  
  const resp = await dbase.query(consulta);
  console.log(resp);
};

//mostrar datos de alumno buscado por rut
const buscarAlumno = async () => {
    const consulta = "select * from alumno where rut = $1";
    const values = ['6457141-9'];
  const resp = await dbase.query(consulta, values);
  console.log(resp);
};
//ejemplo de insertar datos en tabla,
const insertarAlumno=async()=>{
    const consulta='Insert into alumno(nombre,rut,curso,nivel) values ($1,$2,$3,$4)';
    const values=['Juan','6457141-9','guitarra','0'];

    const resp=await dbase.query(consulta,values);
    console.log(resp)
};

//ejemplo para eliminar productos
const borrarAlumno = async () => {
    const consulta = 'delete from alumno where rut =';
    const values = ['6457141-9'];
    const response = await dbase.query(consulta, values);
    console.log(response);
};

//ejemplo para modificar productos
const modificarAlumno = async ()=>{
    const consulta='update alumno set nombre=$1, curso=$3, nivel=$4 where rut =$2';
    const values= ['Maria','6457141-9','piano','1'];
    const response=await dbase.query(consulta, values);
    console.log(response);
}

mostrarAlumnos();// la funcion getDate es la funcion uqe hemos creado que se debe invocar
buscarAlumno();
insertarAlumno();
borrarAlumno();
modificarAlumno();
