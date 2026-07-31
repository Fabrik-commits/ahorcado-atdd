import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(root: HTMLElement, juego: Ahorcado) {
  root.innerHTML = `
    <div data-testid="word"></div>
    <div data-testid="lives"></div>
    <input type="text" maxlength="1" />
    <div data-testid="message"></div>
  `;

  const input = root.querySelector("input")!;
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value) {
      const letra = input.value.toUpperCase();
      if (!juego.entradaValida(letra)) {
        mostrarMensaje("Entrada inválida");
      } else if (juego.letraRepetida(letra)) {
        mostrarMensaje("Letra ya ingresada");
      } else {
        juego.adivinar(letra);
        render();
      }
      input.value = "";
    }
  });

  render();

  function render() {
    root.querySelector('[data-testid="word"]')!.textContent = juego.palabraEnmascarada();
    root.querySelector('[data-testid="lives"]')!.textContent = String(juego.vidas());
    mostrarMensaje(juego.gano() ? "GANASTE" : juego.perdio() ? "PERDISTE" : "");
  }

  function mostrarMensaje(texto: string) {
    root.querySelector('[data-testid="message"]')!.textContent = texto;
  }

}