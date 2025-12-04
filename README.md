# 🔴 4 en Línea (Connect 4) 🟡

Este es mi desarrollo del clásico juego "4 en Línea" (o Conecta 4).

Es un proyecto que parece simple visualmente, pero lo elegí porque quería desafiarme con la **lógica de programación**, el manejo de **matrices** y los algoritmos de detección de victoria.

## 💡 ¿Cómo funciona?

Es el juego clásico de estrategia para dos jugadores:
1.  Turnos alternados (Rojo vs. Amarillo).
2.  Al hacer clic en una columna, la ficha "cae" hasta la posición libre más baja.
3.  El juego detecta automáticamente si alguien conectó 4 fichas (horizontal, vertical o diagonal).

## 🛠️ Tecnologías que usé

* **[React / JavaScript / TypeScript]**: Para toda la lógica de estado.
* **CSS / Estilos**: Para la grilla del tablero y las animaciones de las fichas.
* **pnpm**: Para la gestión eficiente de dependencias. 💛
* **Vite**: Para el entorno de desarrollo rápido.

## 🤯 El mayor desafío: La Lógica

Este proyecto fue un gran ejercicio mental. Lo más difícil (y de lo que más aprendí) fue **el algoritmo para detectar al ganador**.

No basta con verificar filas y columnas; tuve que implementar una lógica que revisa el tablero en 4 direcciones después de cada jugada:
1.  **Horizontal** (➖)
2.  **Vertical** (⬇️)
3.  **Diagonal Principal** (↘️)
4.  **Diagonal Invertida** (↙️)

*Nota de aprendizaje: Al principio intenté revisar todo el tablero en cada turno, pero luego optimicé para revisar solo alrededor de la última ficha jugada (o lo que hayas implementado).*

## 🚀 ¿Cómo jugar en tu compu?

1.  **Clona el repo**:
    ```bash
    git clone https://github.com/lauzubiri/connect-4-react.git
    ```

2.  **Instala las dependencias** (con pnpm):
    ```bash
    cd 4-en-linea
    pnpm install
    ```

3.  **Arranca el juego**:
    ```bash
    pnpm dev
    ```

4.  Abre el navegador en el puerto que te indique y ¡reta a alguien a jugar!

---

### 🔮 Próximos pasos (Ideas para la v2)
* [ ] Agregar una IA básica para jugar contra la computadora.
* [ ] Mejorar las animaciones de caída de las fichas.
* [ ] Agregar un marcador de puntaje persistente.

---

Desarrollado por **Taro**. 🧉
