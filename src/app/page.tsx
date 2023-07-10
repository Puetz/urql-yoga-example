"use client";
import { useQuery, gql } from "urql";
import { graphql } from "@/gql";
import User from "@/components/User";
import { User as UserType } from "@/gql/graphql";

function Home() {
  // prettier-ignore
  const UserQuery = graphql(`query GetUser($id: ID!) {\n  user(id: $id) {\n    id\n    name\n    age\n    address {\n      ...Address\n    }\n  }\n}`);
  const [result] = useQuery({
    query: UserQuery,
    variables: { id: "1" },
  });

  const { data, fetching, error } = result;

  return <main className="h-full w-full p-24">{data && data.user ? <User user={data.user as UserType}></User> : <></>}</main>;
}

// export default withUrqlClient(
//   (_ssrExchange, ctx) => ({
//     exchanges: [_ssrExchange, cacheExchange, fetchExchange],
//     url: "http://localhost:3000/graphql",
//   }),
//   { ssr: true }
// )(Home);

export default Home;
