import { Ahorcado } from "../domain/Ahorcado";

function dibujoAhorcado(errores: number): string {
  const partes = [
    `<circle cx="60" cy="28" r="8" stroke="black" fill="none" stroke-width="2"/>`,
    `<line x1="60" y1="36" x2="60" y2="65" stroke="black" stroke-width="2"/>`,
    `<line x1="60" y1="45" x2="42" y2="58" stroke="black" stroke-width="2"/>`,
    `<line x1="60" y1="45" x2="78" y2="58" stroke="black" stroke-width="2"/>`,
    `<line x1="60" y1="65" x2="42" y2="85" stroke="black" stroke-width="2"/>`,
    `<line x1="60" y1="65" x2="78" y2="85" stroke="black" stroke-width="2"/>`,
  ];
  return `<svg viewBox="0 0 100 110" width="100" height="110" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="105" x2="90" y2="105" stroke="black" stroke-width="2"/>
    <line x1="10" y1="5" x2="10" y2="105" stroke="black" stroke-width="2"/>
    <line x1="10" y1="5" x2="60" y2="5" stroke="black" stroke-width="2"/>
    <line x1="60" y1="5" x2="60" y2="20" stroke="black" stroke-width="2"/>
    ${partes.slice(0, errores).join("")}
  </svg>`;
}

export function mountInicio(root: HTMLElement, onComenzar: () => void) {
  root.innerHTML = `<button type="button">Comenzar juego</button>`;
  root.querySelector("button")!.addEventListener("click", onComenzar);
}

export function mountApp(root: HTMLElement, juego: Ahorcado) {
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  root.innerHTML = `
    <div data-testid="word"></div>
    <div data-testid="lives"></div>
    <input type="text" maxlength="1" />
    <div data-testid="message"></div>
    <div data-testid="hangman-parts"></div>
    <button type="button" id="pista">Ver pista</button>
    <div id="teclado">
      ${alfabeto.map((l) => `<button type="button">${l}</button>`).join("")}
    </div>
  `;

  const input = root.querySelector("input")!;
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value) {
      procesarLetra(input.value.toUpperCase());
      input.value = "";
    }
  });

  root.querySelector("#pista")!.addEventListener("click", () => {
    mostrarMensaje(juego.categoria());
  });

  root.querySelectorAll("#teclado button").forEach((boton) => {
    boton.addEventListener("click", () => procesarLetra(boton.textContent!));
  });

  render();

  function procesarLetra(letra: string) {
    if (!juego.entradaValida(letra)) {
      mostrarMensaje("Entrada inválida");
    } else if (juego.letraRepetida(letra)) {
      mostrarMensaje("Letra ya ingresada");
    } else {
      juego.adivinar(letra);
      render();
    }
  }

  function render() {
    root.querySelector('[data-testid="word"]')!.textContent = juego.palabraEnmascarada();
    root.querySelector('[data-testid="lives"]')!.textContent = String(juego.vidas());
    mostrarMensaje(juego.gano() ? "GANASTE" : juego.perdio() ? "PERDISTE" : "");
    const dibujo = root.querySelector('[data-testid="hangman-parts"]')!;
    dibujo.setAttribute("data-parts", String(juego.errores()));
    dibujo.innerHTML = dibujoAhorcado(juego.errores());
    root.querySelectorAll("#teclado button").forEach((boton) => {
      (boton as HTMLButtonElement).disabled = juego.letraRepetida(boton.textContent!);
    });
  }

  function mostrarMensaje(texto: string) {
    root.querySelector('[data-testid="message"]')!.textContent = texto;
  }
}