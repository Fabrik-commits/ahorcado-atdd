import { describe, it, expect } from "vitest";
import { Ahorcado } from "../src/domain/Ahorcado";

describe("Ahorcado", () => {
  it("al crearse con GATO, la palabra enmascarada es _ _ _ _", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
  });
  it("al crearse, tiene 6 vidas", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.vidas()).toBe(6);
  });
  it("al adivinar A en GATO, la palabra enmascarada es _ A _ _", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("A");
    expect(juego.palabraEnmascarada()).toBe("_ A _ _");
  });
  it("al adivinar una letra correcta, las vidas no se descuentan", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("A");
    expect(juego.vidas()).toBe(6);
  });
  it("al adivinar Z en GATO (letra ausente), las vidas bajan a 5", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("Z");
    expect(juego.vidas()).toBe(5);
  });
  it("mientras falten letras por adivinar, gano() es false", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("G");
    expect(juego.gano()).toBe(false);
  });
  it("al adivinar todas las letras de GATO, gano() es true", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("G");
    juego.adivinar("A");
    juego.adivinar("T");
    juego.adivinar("O");
    expect(juego.gano()).toBe(true);
  });
  it("mientras queden vidas, perdio() es false", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("E");
    expect(juego.perdio()).toBe(false);
  });
  it("al agotar las 6 vidas, perdio() es true", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("E");
    juego.adivinar("I");
    juego.adivinar("U");
    juego.adivinar("B");
    juego.adivinar("C");
    juego.adivinar("D");
    expect(juego.perdio()).toBe(true);
  });
  it("al perder, la palabra enmascarada se revela completa", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("E");
    juego.adivinar("I");
    juego.adivinar("U");
    juego.adivinar("B");
    juego.adivinar("C");
    juego.adivinar("D");
    expect(juego.palabraEnmascarada()).toBe("G A T O");
  });
});