# language: es
Característica: Fallar letra

  Escenario: El jugador falla una letra
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "Z"
    Entonces se ve la palabra "_ _ _ _"
    Y se ven 5 vidas