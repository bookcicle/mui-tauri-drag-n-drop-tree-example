import {useState} from "react";
import {invoke} from "@tauri-apps/api/core";
import "./App.css";
import {createTheme, ThemeProvider} from "@mui/material";
import DragAndDrop from "./TreeExample.jsx";

function App() {
    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
        setGreetMsg(await invoke("greet", {name}));
    }

    const theme = createTheme({palette: {mode: "dark"}})

    return (
        <ThemeProvider theme={theme}>
            <main className="container">
                <DragAndDrop/>

            </main>
        </ThemeProvider>
    );
}

export default App;
