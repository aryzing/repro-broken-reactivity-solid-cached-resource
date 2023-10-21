import { Show, createSignal, onCleanup, onMount } from "solid-js";
import "./App.css";
import { One } from "./components/one";
import { Two } from "./components/two";
import { Maybe } from "./components/maybe";

function App() {
  const [show, setShow] = createSignal(false);

  onMount(() => {
    const interval = setInterval(() => {
      setShow((s) => !s);
    }, 2000);
    onCleanup(() => clearInterval(interval));
  });
  return (
    <>
      <One userId="abc" />
      <Two userId="abc" />
      <Show when={show()}>
        <Maybe userId="abc" />
      </Show>
    </>
  );
}

export default App;
