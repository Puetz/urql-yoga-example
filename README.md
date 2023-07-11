# Client-side

The documents part in the codegen file is very important.
If you just use a schema and bundle all queries and mutations under one query or mutation type, the codegen does not work.

```
type Query {
  user(id: ID!): User
  users: [User]
}
```

The above Query would result in only one `export function graphql` in /src/gql/gql.ts. Therefore you need to create a separate file for each query, mutation, etc. in the documents folder.

The fragment-masking.ts, gql.ts, graphql.ts and index.ts files inside /src/gql are all generated by codegen-client.ts.  
The Wrapper.tsx is necessary because the `<Provider>` needs to be inside a client component. So I'm wrapping the entire body in layout.tsx with this wrapper component.

# Server-side

The types fot the server are solely based on the schema.graphql file and generated by codegen-server.ts.  
The resulting file is in /src/generated/graphql.ts.

# Examples for localhost:3000/graphql

```
{
  user(id: "1"){
    id
    name
    age
    address {
      city
    }
  }
}
```

```
mutation {
  updateAge(input: {id: "2", age: 18}){
    id
    name
    age
  }
}
```
