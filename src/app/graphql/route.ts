import { createYoga, createSchema } from "graphql-yoga";
import { readFileSync } from "fs";
import { join } from "path";
import { Resolvers } from "@/generated/graphql";
import { users as userData } from "./data";

const typeDefs = readFileSync(join(process.cwd(), "schema.graphql"), {
  encoding: "utf-8",
});

const schema = createSchema({
  typeDefs,
  resolvers: {
    Query: {
      user: async (_, { id }) => {
        if (parseInt(id) < userData.length) {
          return userData[parseInt(id)];
        }
        return {
          id: "XXX",
          name: "Non existent",
        };
      },
      users: () => {
        return userData;
      },
    },
    Mutation: {
      updateAge: async (_, { input }) => {
        userData[parseInt(input.id)].age = input.age;
        return userData[parseInt(input.id)];
      },
    },
  } as Resolvers,
});

const { handleRequest } = createYoga({
  graphqlEndpoint: "/graphql",
  schema,
  fetchAPI: { Request, Response },
});

export { handleRequest as GET, handleRequest as POST };
