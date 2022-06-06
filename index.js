const { Client } = require('pg');
const obtenerExplorers = async () =>{

    /*datos de conexion*/ 

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'launchx_nodejs',
        password: 'dakon1234',
        port: 5432,
      })



    //const client = new Client();
    await client.connect();
    const res = await client.query("SELECT  e.username FROM explorers e");
    const result = res.rows; // Hello world!;
    await client.end();
    return result


}


obtenerExplorers().then((result) =>{

    console.log(result);
})


//primero tenemos que saber el host de la base de datos