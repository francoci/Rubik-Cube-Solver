# Rubik-Cube-Solver
Aplicación desarrollada como parte de mi tesina. La misma hace uso de la libreria cube.js desarrollada por Petri Lehtinen para la representación interna del cubo y su resolución usando el algoritmo de Kociemba.

Modo de uso
Para cubos previamente desordenados

1. Cada cara del cubo Rubik tiene un color asignado. Identifique el color de las mismas tomando como referencia el 'cubie' que se encuentra en el centro de cada cara.

2. Oriente su cubo de manera que la cara frontal sea la azul, y la superior la amarilla.

3. Seleccione un color, haciendo click en el mismo en el panel de la derecha.

4. Basándose en su cubo, proceda a pintar los 'cubies' de cada cara, clickeando sobre los mismos.

5. Haga click en el botón 'Resolver'.


Para cambiar el color seleccionado, solo haga click sobre cualquier otro color del panel. Si se equivoca en algún 'cubie', puede repintarlos seleccionando el color correcto en el panel y luego haciendo click sobre el 'cubie' a modificar.


Para generar y resolver cubos aleatorios

1. Haga click en el botón 'Random'.

2. Haga click en 'Resolver'.


Notación de la resolución

La notación usada en la resolución es la notación Singmaster. La siguiente es una breve explicación de la misma.

Cada cara tiene asignada una letra, a saber:

- Cara frontal (Front):   F (Azul)
- Cara trasera (Back):    B (Verde)
- Cara superior (Up):     U (Amarilla)
- Cara inferior (Down):   D (Blanca)
- Cara derecha (Right):   R (Roja)
- Cara izquierda (Left):  L (Naranja)

La aplicación toma como cara frontal la cara azul y como superior, la amarilla. Las demás caras se ordenan correspondientemente.

Cada movimiento tiene asignada una cara, una cantidad de giros (90° o 180°) y una dirección (horaria o anti-horaria).

Un giro simple (90°) se denota de la siguiente manera: 
	
	- letra identificatoria de cara. Para un giro anti-horario, se agrega un apostrofe tras la letra.

	  EJ: F  -> Giro cara frontal (Azul) de 90° en sentido horario.
          F' -> Giro cara frontal (Azul) de 90° en sentido anti-horario.


Un giro doble (180°) se denota de la siguiente manera: 
	
	- letra identificatoria de cara, seguida del número 2. Para un giro anti-horario, se agrega un apostrofe tras la letra.

	  EJ: B2  -> Giro cara trasera (Verde) de 180° en sentido horario.
          B2' -> Giro cara trasera (Verde) de 180° en sentido anti-horario.


Cada movimiento se concatena en la resolución, por EJ: F B' R2 D2' implica un giro simple horario de la cara frontal, un giro
simple anti-horario de la cara trasera, un giro doble horario de la cara derecha y un giro doble anti-horario de la cara inferior.

------------------------------------------------------------------------------------------------------------------------------------

Cube.js fue desarrollada por Petri Lehtinen y el acceso y utilización de la misma se da dentro del contexto de la licencia MIT. El texto a continuación se corresponde con el de la licencia.

Copyright <YEAR> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
