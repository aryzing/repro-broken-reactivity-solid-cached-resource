import { VoidProps } from "solid-js";
import { createGetUserById } from "../resources/user";

export function Two(props: VoidProps<{ userId: string }>) {
  const [user] = createGetUserById(() => props.userId);

  return (
    <>
      <h1>Two</h1>
      <div>{user()?.name}</div>
    </>
  );
}
