export default ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT', 25060),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: {
          rejectUnauthorized: false, // Accept self-signed certificates
        },
      },
      pool: {
        min: 2,
        max: 10,
      },
      acquireConnectionTimeout: 60000,
    },
  });