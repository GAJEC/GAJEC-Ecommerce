const fastify = require('fastify')({ logger: true });
const { Database } = require('./config/db');
const userRoutes = require('./routes/user');

fastify.register(userRoutes);

const start = async () => {
  try {
    await Database(fastify);
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
