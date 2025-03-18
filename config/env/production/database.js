module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST'), // This will be the URL or IP from DigitalOcean
        port: env.int('DATABASE_PORT', 5432), // Default PostgreSQL port
        database: env('DATABASE_NAME', 'strapi'), // Default database name
        user: env('DATABASE_USERNAME', 'strapi'), // Default username
        password: env('DATABASE_PASSWORD', 'strapi'), // Default password
        schema: env('DATABASE_SCHEMA', 'public'), // Optional schema
        ssl: {
          ca: env('DATABASE_CA') // For self-signed certificates if needed
        },
      },
      debug: false,
    },
  });
  