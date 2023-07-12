/**
 *
 * Example page without any client-side codegen.
 * UserType gets imported from the generated server type.
 * Generic gql function from urql package is used.
 * So no typesafety on client here.
 *
 */

"use client";
import { useQuery, useMutation, gql } from "urql";
import User from "@/components/User";
import { User as UserType } from "@/generated/graphql";
import { useEffect, useState } from "react";

function Test() {
  const [allUsers, setAllUsers] = useState<UserType[]>([]);
  const [idIn, setIdIn] = useState("0");
  const [ageIn, setAgeIn] = useState(0);

  const UserQuery = gql(/* GraphQL */ `query GetUser($id: ID!) {\n  user(id: $id) {\n    id\n    name\n    age\n   }\n  }\n}`);
  const [userQueryResult] = useQuery({
    query: UserQuery,
    variables: { id: idIn },
  });

  // prettier-ignore
  const UpdateUserMutation = gql(/* GraphQL */ `mutation UpdateAge($id: ID!, $age: Int!) {\n  updateAge(input: {id: $id, age: $age}) {\n    id\n    name\n    age\n  }\n}`);
  const [updateResult, updateUser] = useMutation(UpdateUserMutation);

  // prettier-ignore
  const AllUsersQuery = gql(/* GraphQL */ `query AllUsers {\n  users {\n    id\n    name\n    age\n  }\n}`);
  const [usersQueryResult] = useQuery({ query: AllUsersQuery });

  useEffect(() => {
    if (usersQueryResult.data && usersQueryResult.data.users && usersQueryResult.data.users.length > 0) {
      setAllUsers(usersQueryResult.data.users as UserType[]);
    }
  }, [usersQueryResult.data]);

  return (
    <main className="h-full w-full p-24 flex flex-col gap-2">
      <label>
        Id:
        <input
          type="text"
          onChange={e => setIdIn(e.target.value)}
          placeholder="ID"
          className="ml-3 w-fit bg-cyan-100 border-2 border-cyan-300 p-2 rounded shadow-md"
          defaultValue={userQueryResult?.data?.user?.id || "0"}
        ></input>
      </label>
      {userQueryResult.data && userQueryResult.data.user ? <User user={userQueryResult.data.user as UserType}></User> : <></>}
      <div>
        <input
          type="number"
          onChange={e => {
            if (parseInt(e.target.value) > 0) setAgeIn(parseInt(e.target.value));
          }}
          defaultValue={userQueryResult?.data?.user?.age || 0}
          placeholder="Age"
          className="w-fit bg-cyan-100 border-2 border-cyan-300 p-2 rounded shadow-md"
        ></input>
        <button className="w-fit bg-cyan-100 border-2 border-cyan-300 p-2 rounded shadow-md" onClick={() => updateUser({ id: idIn, age: ageIn })}>
          Update Age
        </button>
      </div>
      {allUsers.map(u => (
        <User key={u.id} user={u}></User>
      ))}
    </main>
  );
}

export default Test;
