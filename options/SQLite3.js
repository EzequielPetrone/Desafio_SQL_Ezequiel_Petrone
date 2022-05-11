//Por lo que ví no es fácil crear las bases de datos con knex. 
//La BD ya debe estar creada para conectarnos y luego podemos crear tablas, ejecutar consultas, etc

//Dado que __dirname no puede usarse con type: module (ES6), esta es una alternativa para tomar el path base
const { pathname: root } = new URL('../DB/ecommerce.sqlite', import.meta.url) 

const mysqlOptions = {
    client: 'sqlite3',
    connection: {
        filename: root
    },
    useNullAsDefault: true
}
export default mysqlOptions