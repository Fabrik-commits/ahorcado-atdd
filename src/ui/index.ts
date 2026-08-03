import { Ahorcado } from "../domain/Ahorcado";
import { mountApp, mountInicio } from "./main";

const params = new URLSearchParams(window.location.search);
const listaParam = params.get("lista");
const wordParam = params.get("word");
const categoria = params.get("categoria") ?? "";

const root = document.getElementById("app")!;

if (listaParam) {
  const lista = listaParam.split(",");
  mountInicio(root, () => {
    const juego = new Ahorcado(lista, categoria);
    mountApp(root, juego);
  });
} else {
  const juego = new Ahorcado(wordParam ?? "GATO", categoria);
  mountApp(root, juego);
}