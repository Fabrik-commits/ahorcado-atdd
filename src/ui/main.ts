import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(root: HTMLElement, juego: Ahorcado) {
  root.innerHTML = `
    <div data-testid="word"></div>
    <div data-testid="lives"></div>
  `;

  render();

  function render() {
    root.querySelector('[data-testid="word"]')!.textContent = juego.palabraEnmascarada();
    root.querySelector('[data-testid="lives"]')!.textContent = String(juego.vidas());
  }
}