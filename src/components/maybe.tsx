import { VoidProps } from "solid-js";
import { createGetUserById } from "../resources/user";

export function Maybe(props: VoidProps<{ userId: string }>) {
  const [user] = createGetUserById(() => props.userId);

  return (
    <>
      <h1>Maybe</h1>
      <div>{user()?.name}</div>
    </>
  );
}
