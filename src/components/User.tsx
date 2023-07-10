import { User } from "@/gql/graphql";
import React from "react";

export default function User({ user }: { user: User }) {
  return (
    <div className="border-2 border-zinc-300 w-fit p-5 rounded-lg">
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
}
