# Client-side

The documents part in the codegen file is highly necessary.  
If you just use a schema and bundle all Queries and Mutations under one Query or Mutation type, the codegen does not work.

```
type Query {
  user(id: ID!): User
  users: [User]
}
```

The above Query would result in only one `export function graphql` in gql.ts. Therefore you need to create a separate file for every query, mutation, etc. in the documents folder.

# Examples

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
