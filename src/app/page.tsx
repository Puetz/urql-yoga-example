"use client";
import { gql, useQuery } from "urql";

const UserQuery = gql`
  query ($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`;

export default function Home() {
  const [result, reexecuteQuery] = useQuery({
    query: UserQuery,
    variables: { id: "1" },
  });

  const { data, fetching, error } = result;

  return <main className="h-full w-full">{data && data.user ? <span>{data.user.name}</span> : <></>}</main>;
}
