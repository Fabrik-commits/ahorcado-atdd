export class Ahorcado {
  private palabra: string;
  private vidasRestantes: number = 6;
  private letrasAdivinadas: Set<string> = new Set();
  private letrasIntentadas: Set<string> = new Set();

  constructor(palabra: string) {
    this.palabra = palabra;
  }

palabraEnmascarada(): string {
    if (this.perdio()) {
      return this.palabra;
    }
    return this.palabra
      .split("")
      .map((letra) => (this.letrasAdivinadas.has(letra) ? letra : "_"))
      .join(" ");
  }

  vidas(): number {
    return this.vidasRestantes;
  }

  adivinar(letra: string): void {
    this.letrasIntentadas.add(letra);
    if (this.palabra.includes(letra)) {
      this.letrasAdivinadas.add(letra);
    } else {
      this.vidasRestantes--;
    }
  }

  gano(): boolean {
    return [...this.palabra].every((letra) => this.letrasAdivinadas.has(letra));
  }

  perdio(): boolean {
    return this.vidasRestantes === 0;
  }

  letraRepetida(letra: string): boolean {
    return this.letrasIntentadas.has(letra);
  }

  entradaValida(letra: string): boolean {
    return /^[A-ZÑ]$/.test(letra);
  }

  errores(): number {
    return 6 - this.vidasRestantes;
  }

}