## Visual Analytics
# Base de Datos Electoral - CEDE
Autores:  
Camilo Escobar Velásquez  
David Ricardo Mayorga  
Felipe Matè Porras


**WHAT:**
Los datos constan principalmente de diferentes tablas que estan agrupadas en 2 grupos principales: Registro de votaciones tanto regionales como de las principales ciudades y tablas de acompañamiento .

Los datos estan representados en tablas cuya granularidad es cantidad de votos recibidos por un candidato en una fecha en una mesa ubicada en un punto de votación de la localidad/región dada para una curul mientras pertenecia a un partido politico especifico.

Estos datos estan conformados por atributos de tipo categoricos cómo los nombres de las localidades/regiones, nombre del candidato, nombre de la curul a la que se presenta, nombre del partido politico y atributos de tipo cuantitativo como la cantidad de votos y la fecha de la votación y estan organizados secuencialmente. Finalmente, al ser datos de las votaciones el dataset es estatico, puede aumentar con el tiempo, pero los datos obtenidos no cambian una vez publicados.

**WHY:**   
T1 - Descubrir y localizar las dinastías politicas identificadas por el apellido en cada región y su movimiento entre regiones al cabo de los años (features) 
T2: Presentar y localizar los cargos politicos (features) de los congresistas antes de ocupar dicho cargo.

**HOW:**  

 - T1 - Dinastias politicas
V1 - sumar la cantidad de personas con un apllido específico que se pretanron en ese año.
Line Chart!

selecciona familia y ->

V2 - familia especifica en colombia a lo largo del tiempo
marcas
lineas - denotación familiar
esfera: 

canales:
para el sitio - mapa geografico
radio de la esfera -  cantidad de candidatos por familia
shape - para el tipo de cargo?
Alcaldia, Congreso: camara y senado, gobierno, gobernacion
saturacion -  sobre si la familia gano
slider para el tiempo

 - T2 - Cargos políticos previos de los congresistas
 
V1 -  seleccionar interactivamente al congresista que quiero ver.

V2 - mapa de colombia con slider del tiempo abajo, se localiza dependiendo el departamento
shape - tipo de cargo
hue - partido politico






## Bibliografía
* Tamara MUNZNER: Visualization Analysis and Design AK Peters 2014.
* Colin WARE: Visual Thinking for Design. Morgan Kaufman, 2008.




