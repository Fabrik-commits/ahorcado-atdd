# Lista de Unit Tests por AT

## AT1 — Iniciar partida
- Al crearse con "GATO", `palabraEnmascarada()` devuelve `"_ _ _ _"`
- Al crearse, `vidas()` devuelve `6`

## AT2 — Acertar letra
- Al adivinar una letra presente en la palabra, `palabraEnmascarada()` la revela en su posición
- Al adivinar una letra correcta, `vidas()` no se descuenta

AT3 — Paso 2: lista de UTs
Al adivinar una letra que no está en la palabra, vidas() se descuenta en 1 (de 6 pasa a 5)
Al adivinar una letra que sí está en la palabra, vidas() sigue igual (esto ya lo cubrimos en AT2 — no lo repetimos)

AT4 — Paso 2: lista de UTs

Para saber si mostrar "GANASTE", el dominio necesita poder decir si el juego terminó y si ganó. La lógica mínima:

Al adivinar todas las letras de la palabra, gano() devuelve true
Mientras falten letras por adivinar, gano() devuelve false

AT5 — Paso 2: lista de UTs
Al agotar las 6 vidas (todas las adivinanzas fallidas), perdio() devuelve true
Mientras queden vidas, perdio() devuelve false

- Al perder, `palabraEnmascarada()` revela la palabra completa

## AT6 — Letra repetida
- `letraRepetida("A")` es `false` antes de intentarla
- Después de adivinar "A", `letraRepetida("A")` es `true`

## AT7 — Entrada inválida
- `entradaValida("1")` es `false`
- `entradaValida("A")` es `true`

