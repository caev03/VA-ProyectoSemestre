## Visual Analytics
# Base de Datos Electoral - CEDE
Autores:  
Camilo Escobar Velásquez  
David Ricardo Mayorga  
Felipe Matè Porras


**WHAT:**
Los datos constan principalmente de diferentes tablas que estan agrupadas en 2 grupos principales: Registro de votaciones tanto regionales como de las principales ciudades y tablas de acompañamiento .

Los registros de votaciones constan principalmente de tablas divididas por año y cargo al que aspiraron: asamblea, consejo, alcaldía, gobernación, cámara, senado y presidencia.  
Ahora cada tabla tiene los sigueintes atributos:  
- año en curso (ordenado cuantitativo)
- id de tipo de elección (ordenado ordinal)
- id del departamento (categórico)
- id del municipio (ordenado ordinal)
- nombre del municipio (categorico)
- id del partido (categórico)
- número en el tarjeton del candidato (ordenado ordinal)
- nombres y apellidos del candidato (categóricos)
- cantidad de votos obtenidos (cuantitativo)
- cargo obtenido: 1 o nulo en caso contrario (categórico)

Finalmente, al ser datos de las votaciones el dataset es estatico, puede aumentar con el tiempo, pero los datos obtenidos no cambian una vez publicados.



**WHY:**   
T1: Entretener a los usuarios que tengan poco interés sobre política y aprendan de ella.
T1.1: Encontrar patrones entre los candidatos electos por tipo elección según el nombre o el apellido.
T1.2: Localizar por nombre o apellido el porcentaje de efectividad de elecciones.
  

**HOW:**  
    
***V1*** - Presentar tendencias en la relación entre cantidad de canditados electos sobre la cantidad total de candidatos con un nombre dado o en la relación entre candidatos electos
****Marca****: Lineas  
****Canales****: Color, Posición Horizontal, Posición horizontal  
![](https://raw.githubusercontent.com/caev03/VA-ProyectoSemestre/master/T1-V1.png)

V2 - familia especifica en colombia a lo largo del tiempo  
**Marca**: Areas  
**Canales**: Posición ( Ubicación geografica ), Color ( Cociente #CandidatosElegidos / # Candidatos ), Area ( #Candidatos )  
![](https://raw.githubusercontent.com/caev03/VA-ProyectoSemestre/master/T1-V2.png)

 - T2 - Cargos políticos previos de los congresistas
 
V1 - Modismo de coordenadas paralelas  
**Marcas**: Lineas para la vida política de congresista  
**Canales**  
Posición en eje y: cargo politico dividido en senador, representante a la cámara, gobierno, alcaldía, gobernación o consejo.  
Posición en eje x: año en que ocupó dicho cargo.  
Color (Matiz) - corriente politica.  
![](https://raw.githubusercontent.com/caev03/VA-ProyectoSemestre/master/T2-V1.jpg)


## Bibliografía
* Tamara MUNZNER: Visualization Analysis and Design AK Peters 2014.
* Colin WARE: Visual Thinking for Design. Morgan Kaufman, 2008.




