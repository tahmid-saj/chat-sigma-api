import keys from "../../utils/constants/redis.constants"

// redis client setup
import redis from "redis"

// const redisClient = redis.createClient({
//   host: keys.redisHost,
//   port: keys.redisPort
// })
// const redisPublisher = redisClient.duplicate()

// redisClient.on('error', (err) => {
//   console.error('Redis Client Error:', err);
// });

// async function connectRedis() {
//   if (!redisClient.isOpen) {
//     await redisClient.connect();
//     console.log('Connected to Redis');
//   }
// }

// module.exports = {
//   redisClient,
//   redisPublisher,
//   connectRedis
// }