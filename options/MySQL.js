//Por lo que ví no es fácil crear las bases de datos con knex. 
//La BD ya debe estar creada para conectarnos y luego podemos crear tablas, ejecutar consultas, etc

const mysqlOptions = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'ecommerce'
    },
    pool: { min: 0, max: 10 }
}
export default mysqlOptions