## Visual Analytics
# Tendencias en el aprovechamiento de los TLC en America
Autores:  
Camilo Escobar Velásquez  
David Ricardo Mayorga  
Felipe Matè Porras


**WHAT:**
Los datos constan principalmente de diferentes tablas que estan agrupadas en 2 grupos principales: Registro de votaciones tanto regionales como de las principales ciudades y tablas de acompañamiento .

Los datos estan representados en tablas cuya granularidad es cantidad de votos recibidos por un candidato en una fecha en una mesa ubicada en un punto de votación de la localidad/región dada para una curul mientras pertenecia a un partido politico especifico.

Estos datos estan conformados por atributos de tipo categoricos cómo los nombres de las localidades/regiones, nombre del candidato, nombre de la curul a la que se presenta, nombre del partido politico y atributos de tipo cuantitativo como la cantidad de votos y la fecha de la votación y estan organizados secuencialmente. Finalmente, al ser datos de las votaciones el dataset es estatico, puede aumentar con el tiempo, pero los datos obtenidos no cambian una vez publicados.

**WHY:**   
T1: Encontrar caracteristicas entre los comercios de los paises, para fomentar nuevos TLC.  
T2: Explorar los Tratados de Libre Comercio de los paises y los productos que ellos importan y exportan para descubrir una correlación.   
T3.1: Presentar y localizar los paises que hacen mayor uso de su TCL.   
T3.2: Localizar los paises que están desaprovechando sus TLCs al comerciar productos con paises sin TLC o con una tasa mayor.

**HOW:**  
La grafica cuenta de dos partes fundamentales. La primera grafica consta de un eje horiontal que cuenta con separadores para los diferentes años y sobre el que reposa para cada año un Treemap. Se busca que por medio de una selección realizada durante la interacción con la visualización se pueda escoger el dominio de los datos a mostrar (Importaciones o exportaciones). Es por esto, que el treemap al usar <b>areas</b> como marcas, nos permitira mostrar haciendo uso de <b>la respectiva posición y del área abarcada</b>, la inversión o gasto realizado por el país enfocada en los diferentes grupos de productos que se comercializan en America Latina. Adicionalmente, se haran uso del <b>matiz</b> que permita agrupar los diferentes tipos de productos.  Ahora bien, como todavía estos datos no se poseen por parte del cliente, se está realizando la suposición que dichos productos se encuentran organizados en una jerarquía de acuerdo a la industria que pertenecen.  
![](https://raw.githubusercontent.com/caev03/VA-ProyectoSemestre/master/how_ep1.png)  
## Bibliografía
* Tamara MUNZNER: Visualization Analysis and Design AK Peters 2014.
* Colin WARE: Visual Thinking for Design. Morgan Kaufman, 2008.




