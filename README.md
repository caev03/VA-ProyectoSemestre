![](https://raw.githubusercontent.com/caev03/VA-ProyectoSemestre/master/ReadMeImages/DISCBanner.JPG)

# Tools For Enjoy Election Data From Colombia Since 1958. 

### Presented by:

* :chart_with_downwards_trend: [Camilo Andrés Escobar Velásquez][LinkCamilo]
* :bar_chart: [Felipe Matè Porras][LinkFelipe]
* :chart_with_upwards_trend: [David Ricardo Mayorga][LinkDavid]

## Index

1. [Project Context](https://github.com/caev03/VA-ProyectoSemestre#project-context)
2. [Live Demo](https://github.com/caev03/VA-ProyectoSemestre#live-demo)
3. [Problem Description](https://github.com/caev03/VA-ProyectoSemestre#problem-description)
4. [Project Description](https://github.com/caev03/VA-ProyectoSemestre#project-description)
  1. [Who](https://github.com/caev03/VA-ProyectoSemestre#who)
  2. [What](https://github.com/caev03/VA-ProyectoSemestre#what)
  3. [Why](https://github.com/caev03/VA-ProyectoSemestre#why)
  4. [How](https://github.com/caev03/VA-ProyectoSemestre#how)
5. [Insights](https://github.com/caev03/VA-ProyectoSemestre#insights)
6. [Paper](https://github.com/caev03/VA-ProyectoSemestre#paper)
7. [Bibliography](https://github.com/caev03/VA-ProyectoSemestre#bibliography)

## Project Context

This project is developed as a course project for the [Visual Analytics][VisualAnalyticsPage] Class taught at [Universidad de los Andes][Uniandes] by [John Alexis **GUERRA**][LinkJohn] and [Jose Tiberio **HERNANDEZ**][LinkTiberio].

## Live Demo

### Video

### Project Page
[Visit the project Page][ProjectPage]

## Problem Description

In the last few years voting abstention is a big problem for colombian politics, only the 38% of the people who can vote did it in the last voting that Colombia had. [\[1\]](http://www.bbc.com/mundo/noticias-america-latina-37539590) [\[2\]](https://www.wilsoncenter.org/sites/default/files/voting_for_peace_wwc-fip_final_english.pdf) One of the theories that explain this is that the people is not interested enough in politics and is giving the opportunity to the 38% of the population to decide the future of the country. Therefore, in order to reduce this percentage Monica Pachon ( Dean of the Faculty of Political Science, Government and International Relations at Rosary University ) and a group of researchers collected the information of the elections in Colombia since 1958 for the different political positions so they can via Data Visualization generate an interested in politics.  
.  
![](https://raw.githubusercontent.com/caev03/VA-ProyectoSemestre/master/ReadMeImages/VotingAbstention.JPG)  

## Project Description

## Who

### The principal stakeholders of the project are:

* **Monica Pachon** - Dean of the Faculty of Political Science, Government and International Relations at Rosary University 
* **John Guerra** - Teacher of Visual Analytics Class at Universidad de los Andes 
* **Tiberio Hernandez** - Teacher of Visual Analytics Class at Universidad de los Andes 

## What:

The election database collected by Monica Pachon has a few tables that represent Municipalities, Political Parties, Departments and Election Type ( Presidency, Mayoralty, ... ) using a name and an id for each row.

muni_id | muni_name | - | party_id |party_name | - | elect_type_id | elect_type_name
---|---|---|---|---|---|---|---
1 | Bogotá D.C | - | 3 | Liberal Party | - | 555 | Presidency
5 | Medellín | - | 4 | Conservative Party | - | 845 | Mayoralty
...|...| - |...|...| - |...|...

Additionally, it has a table that represents the votes acquired by a candidate in a municipality running for a specific position when was part of a specific political party. The columns extracted from the data base are:

* year ( sorted - quantitative )
* election type Id ( sorted - ordinal)
* Department Id ( categorical )
* Municipality Id ( sorted - ordinal )
* Party Id ( categorical )
* Position inside Voting Card ( sorted - ordinal)
* Complete name of candidate ( categorical )
* Amount of votes ( quantitative )
* Won the election: 1 ( true ) or 0 ( false )

year|elect_type|dept_id|muni_id|party_id|code_list|first_lastName|second_lastname|name         |votes|seats
--- |----------|-------|-------|--------|---------|--------------|---------------|-------------|-----|-----
2010|555       |55     |1      |3       |1        |"Sanabria"    |"Ordoñez"      |"Daniel"     |200  |0
... |...       |...    |...    |...     |...      |...           |...            |...          |...  |...
2011|845       |68     |5      |4       |2        |"Cobos"       |"Triana"       |"Jose Andrés"|150  |1
... |...       |...    |...    |...     |...      |...           |...            |...          |...  |...

## Why

### T1: Entretener a los usuarios que tengan poco interés sobre política y aprendan de ella.
* T1.1: Encontrar patrones entre los candidatos electos por tipo elección según el nombre o el apellido.
* T1.2: Localizar por nombre o apellido el porcentaje de efectividad de elecciones.
  

## How

### Viz 1 - Elegibility Of "\<Name/Lastname\>" In Colombia Throughout History

![](https://raw.githubusercontent.com/caev03/VA-ProyectoSemestre/master/ReadMeImages/Vis1.jpg)  
Show trends of elegibility of a person by its name shown in two different scenarios allowing the user to move over the years using a scroll bar:

1. Amount of candidates elected with that name over the amount of candidates with that name by each department  
2. Amount of candidates elected with that name over the amount of candidates by each department  
  
**Marks:** Areas ( Departments )  
**Channels:** Saturation ( Choosen relation value )

## Insights:

## Paper:

## Bibliography
* Tamara MUNZNER: Visualization Analysis and Design AK Peters 2014.
* Colin WARE: Visual Thinking for Design. Morgan Kaufman, 2008.

[ProjectPage]:http://caev03.github.io/VA-ProyectoSemestre
[VisualAnalyticsPage]:http://johnguerra.co/classes/isis_4822_fall_2016/
[LinkJohn]:http://johnguerra.co/
[LinkTiberio]:https://sistemasacademico.uniandes.edu.co/~jhernand/dokuwiki/doku.php
[LinkCamilo]:https://github.com/caev03
[LinkFelipe]:https://github.com/f94f
[LinkDavid]:https://github.com/damayor
[Uniandes]:http://www.uniandes.edu.co


