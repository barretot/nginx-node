import Fastify from 'fastify';

(async () => {
  const fastify = Fastify({
    logger: true,
  });

  fastify.get('/', async function handler(request, reply) {
    return { message: 'Hello World' };
  });

  try {
    await fastify.listen({ port: 8080, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
