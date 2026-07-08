import express from 'express';
import cors from 'cors';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import { typeDefs, resolvers } from './graphql/schema';
import { createContext } from './graphql/context';
import { initSocket } from './socket';
import { expressMiddleware } from '@as-integrations/express5';

async function main() {
  const app = express();


  const httpServer = http.createServer(app);

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start(); 

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(apolloServer, {
      context: createContext,
    })
  );

  initSocket(httpServer);

  const PORT = 4000;
  httpServer.listen(PORT, () => {
    console.log(` GraphQL server ready at http://localhost:${PORT}/graphql`);
  });
}

main();
