/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options
 */
async function routes(fastify, options) {
    // const collection = fastify.mongo.db.collection('fastify_collection');

    fastify.get('/', async (request, reply) => {
        return {hello: 'world'}
    })
}

export default routes;
