export class Ahorcado {
  private palabra: string;
  private vidasRestantes: number = 6;
  private letrasAdivinadas: Set<string> = new Set();

  constructor(palabra: string) {
    this.palabra = palabra;
  }

  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map((letra) => (this.letrasAdivinadas.has(letra) ? letra : "_"))
      .join(" ");
  }

  vidas(): number {
    return this.vidasRestantes;
  }

  adivinar(letra: string): void {
    if (this.palabra.includes(letra)) {
      this.letrasAdivinadas.add(letra);
    } else {
      this.vidasRestantes--;
    }
  }

}