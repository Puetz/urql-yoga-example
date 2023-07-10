import { createYoga, createSchema } from "graphql-yoga";
import { readFileSync } from "fs";
import { join } from "path";

const typeDefs = readFileSync(join(process.cwd(), "schema.graphql"), {
  encoding: "utf-8",
});

const schema = createSchema({
  typeDefs,
  resolvers: {
    Query: {
      user: async (_, { id }) => {
        return {
          id: "1",
          name: "Thomas",
          age: 26,
        };
      },
    },
  },
});

const { handleRequest } = createYoga({
  graphqlEndpoint: "/graphql",
  schema,
  fetchAPI: { Request, Response },
});

export { handleRequest as GET, handleRequest as POST };
