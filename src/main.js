import {exit} from 'node:process';
import Fastify from 'fastify';
import routes from './routes/routes.js'

const fastify = Fastify({
    logger: true
})

fastify.register()
fastify.register(routes)

fastify.listen({port: 3000}, (err, address) => {
    if (err) {
        fastify.log.error(err);
        exit(1);
    }
})


