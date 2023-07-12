import React from "react";
import { FragmentType, graphql, useFragment } from "@/gql";

// prettier-ignore
const UserFragment = graphql(/* GraphQL */ `fragment UserFragment on User {\n  id\n  name\n  age\n  address {\n    zip\n    street\n    city\n  }\n}`)

const User = (props: { user: FragmentType<typeof UserFragment> }) => {
  const user = useFragment(UserFragment, props.user);

  return (
    <div className="border-2 border-zinc-300 w-fit p-5 rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-x-0">
        <span className="font-semibold">Id: </span>
        <span>{user.id}</span>
        <span className="font-semibold">Name: </span>
        <span>{user.name}</span>
        <span className="font-semibold">Age: </span>
        <span>{user.age}</span>
        <span className="font-semibold">Address: </span>
        <div className="flex flex-col">
          <span>{user.address?.street}</span>
          <span>
            {user.address?.zip} {user.address?.city}
          </span>
        </div>
      </div>
    </div>
  );
};

export default User;
