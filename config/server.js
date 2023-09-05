module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});


// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST','localhost'),
//       port: env.int('DATABASE_PORT',8889),
//       database: env('DATABASE_NAME','root'),
//       user: env('DATABASE_USERNAME','strapi'),
//       password: env('DATABASE_PASSWORD', 'root'),
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//       },
//     },
//     debug: false,
//   },
// });