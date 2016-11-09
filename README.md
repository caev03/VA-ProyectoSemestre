![](https://raw.githubusercontent.com/caev03/VA-ProyectoSemestre/master/ReadMeImages/DISCBanner.JPG)

# Tools For Enjoy Election Data From Colombia Since 1958.

###Presented by:
* [Camilo Andrés Escobar Velásquez](https://github.com/caev03)
* [Felipe Matè Porras](https://github.com/f94f)
* [David Ricardo Mayorga](https://github.com/damayor)

##Problem Description

In the last few years voting abstention is a big problem for colombian politics, only the 38% of the people who can vote did it in the last voting that Colombia had. [\[1\]](http://www.bbc.com/mundo/noticias-america-latina-37539590) [\[2\]](https://www.wilsoncenter.org/sites/default/files/voting_for_peace_wwc-fip_final_english.pdf) One of the theories that explain this is that the people is not interested enough in politics and is giving the opportunity to the 38% of the population to decide the future of the country. Therefore, in order to reduce this percentage Monica Pachon ( Dean of the Faculty of Political Science, Government and International Relations at Rosary University ) and a group of researchers collected the information of the elections in Colombia since 1958 for the different political positions so they can via Data Visualization generate an interested in politics.
![](https://raw.githubusercontent.com/caev03/VA-ProyectoSemestre/master/ReadMeImages/VotingAbstention.JPG)  


##Who:
The principal stakeholders of the project are:
* Monica Pachon - Dean of the Faculty of Political Science, Government and International Relations at Rosary University 
* John Guerra - Teacher of Visual Analitycs Class at Universidad de los Andes 
* Tiberio Hernandez - Teacher of Visual Analitycs Class at Universidad de los Andes 

##What:

The election database collected by Monica Pachon has a few tables that represent Municipalities, Political Parties, Departments and Election Type ( Presidency, Mayoralty, ... ) using a name and an id for each row.

Municipality_Id | Municipality_Name | - | PoliticalParty_Id | PoliticalParty_Name | - | ElectionType_Id | ElectionType_Name
---|---|---|---|---|---|---|---
1 | Bogotá D.C | - | 3 | Liberal Party | - | 555 | Presidency
5 | Medellín | - | 4 | Conservative Party | - | 845 | Mayoralty
...|...| - |...|...| - |...|...

Additionally, it has a table that represents the votes acquired by a candidate in a municipality running for a specific position when was part of a specific political party. The columns extracted from the data base are:

- year ( sorted - quantitative )
- election type Id ( sorted - ordinal)
- Department Id ( categorical )
- Municipality Id ( sorted - ordinal )
- Party Id ( categorical )
- Position inside Voting Card ( sorted - ordinal)
- Complete name of candidate ( categorical )
- Amount of votes ( quantitative )
- Won the election: 1 ( true ) or 0 ( false )

year|electionType|Department_Id|Municipality_Id|Party_Id|Code_List|First_LastName|Second_Lastname|Name|Votes|Seats
---|---|---|---|---|---|---|---|---|---|---
2010|1|55|1|555|3|"Sanabria"|"Ordoñez"|"Daniel"|200|0
2011|5|68|5|845|4|"Cobos"|"Triana"|"Jose Andrés"|150|1

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




