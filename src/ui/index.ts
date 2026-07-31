import { Ahorcado } from "../domain/Ahorcado";
import { mountApp } from "./main";

const params = new URLSearchParams(window.location.search);
const palabra = params.get("word") ?? "GATO";
const categoria = params.get("categoria") ?? "";

const juego = new Ahorcado(palabra, categoria);
const root = document.getElementById("app")!;

mountApp(root, juego);