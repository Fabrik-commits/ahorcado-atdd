import { Ahorcado } from "../domain/Ahorcado";
import { mountApp } from "./main";

const params = new URLSearchParams(window.location.search);
const palabra = params.get("word") ?? "GATO";

const juego = new Ahorcado(palabra);
const root = document.getElementById("app")!;

mountApp(root, juego);