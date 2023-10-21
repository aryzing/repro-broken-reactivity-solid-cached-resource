import { VoidProps } from "solid-js";
import { createGetUserById } from "../resources/user";

export function One(props: VoidProps<{ userId: string }>) {
  const [user] = createGetUserById(() => props.userId);

  return (
    <>
      <h1>one</h1>
      <div>{user()?.name}</div>
    </>
  );
}
