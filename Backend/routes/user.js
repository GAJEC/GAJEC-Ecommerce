const { pool } = require('../config/db');

async function userRoutes(fastify, options) {
  
  fastify.post('/login', async (request, reply) => {
    const { email, password } = request.body;
    
    if (!email) {
      return reply.status(400).send({ error: 'Email is required' });
    }

    try {
      const [result] = await pool.query(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password]
      );
      return reply.status(200).send({ user: result[0] });
    } catch (err) {
      request.log.error(err);
      return reply.status(500).send({ error: 'Failed to login user' });
    }
  });
}

module.exports = userRoutes;
