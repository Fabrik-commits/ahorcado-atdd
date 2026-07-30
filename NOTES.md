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

