import {createRoot} from "react-dom/client";
import {App} from "../ui/App.tsx";
import {appStarted} from "../../shared/config/app-started.ts";

appStarted()

createRoot(document.getElementById('root')!).render(
    <App />
)
