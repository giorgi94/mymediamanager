import "../assets/main.styl";
import App from "./App.svelte";

const app = new App({
    target: document.querySelector("#my-media-manager"),
});

export default app;