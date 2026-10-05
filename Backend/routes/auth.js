const { pool } = require('../config/db');
const { findUserByEmail, createUser } = require('../utils/modules/Queries');

async function authRoutes(fastify, options) {
  fastify.post('/login', async (request, reply) => {
    const { email, password } = request.body;
    
    if (!email) {
      return reply.status(400).send({ error: 'Email is required' });
    }

    if (!password) {
      return reply.status(400).send({ error: 'Password is required' });
    }

    try {
      const [result] = await pool.query(findUserByEmail,[email]);
      return reply.status(200).send({ user: result[0] });
    } catch (err) {
      request.log.error(err);
      return reply.status(500).send({ error: 'Failed to login user' });
    }
  });
}

module.exports = authRoutes;
