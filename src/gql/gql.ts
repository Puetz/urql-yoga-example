/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment Address on Address {\n  zip\n  street\n  city\n}": types.AddressFragmentDoc,
    "query AllUsers {\n  users {\n    id\n    name\n    age\n  }\n}": types.AllUsersDocument,
    "query GetUser($id: ID!) {\n  user(id: $id) {\n    id\n    name\n    age\n    address {\n      ...Address\n    }\n  }\n}": types.GetUserDocument,
    "mutation UpdateAge($id: ID!, $age: Int!) {\n  updateAge(input: {id: $id, age: $age}) {\n    id\n    name\n    age\n  }\n}": types.UpdateAgeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Address on Address {\n  zip\n  street\n  city\n}"): (typeof documents)["fragment Address on Address {\n  zip\n  street\n  city\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllUsers {\n  users {\n    id\n    name\n    age\n  }\n}"): (typeof documents)["query AllUsers {\n  users {\n    id\n    name\n    age\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUser($id: ID!) {\n  user(id: $id) {\n    id\n    name\n    age\n    address {\n      ...Address\n    }\n  }\n}"): (typeof documents)["query GetUser($id: ID!) {\n  user(id: $id) {\n    id\n    name\n    age\n    address {\n      ...Address\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateAge($id: ID!, $age: Int!) {\n  updateAge(input: {id: $id, age: $age}) {\n    id\n    name\n    age\n  }\n}"): (typeof documents)["mutation UpdateAge($id: ID!, $age: Int!) {\n  updateAge(input: {id: $id, age: $age}) {\n    id\n    name\n    age\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;