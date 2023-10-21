import { createCachedResource } from "solid-cached-resource";
import { Accessor } from "solid-js";

export const createGetUserById = (userId: Accessor<string>) => {
  return createCachedResource(
    () => ["user", userId()],
    async ([, userId]) => {
      console.log("Hitting api");
      return { id: userId, name: `Name-${Math.random()}` };
    },
    { refetchOnMount: true }
  );
};
