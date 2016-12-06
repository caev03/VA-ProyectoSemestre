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
  1. [Who - Stakeholder and interested persons](https://github.com/caev03/VA-ProyectoSemestre#who)
  2. [What - Data Structure](https://github.com/caev03/VA-ProyectoSemestre#what)
  3. [Why - What is the purpose of the project](https://github.com/caev03/VA-ProyectoSemestre#why)
  4. [How - How the problem is going to be solved](https://github.com/caev03/VA-ProyectoSemestre#how)
    * [Viz 1 - Elegibility Of "\<Name/Lastname\>" In Colombia Throughout History](https://github.com/caev03/VA-ProyectoSemestre#viz-1---elegibility-of-namelastname-in-colombia-throughout-history)
    * [Viz 2 - Distribution of "\<Name/lastname\>" In Colombian Politics Throughout History](https://github.com/caev03/VA-ProyectoSemestre#viz-2---distribution-of-namelastname-in-colombian-politics-throughout-history)
    * [Viz 3 - Distribution of Political Power by Name/Lastname in Colombia Throughout History](https://github.com/caev03/VA-ProyectoSemestre#viz-3---distribution-of-political-power-by-namelastname-in-colombia-throughout-history)
5. [Insights](https://github.com/caev03/VA-ProyectoSemestre#insights)
6. [Paper](https://github.com/caev03/VA-ProyectoSemestre#paper)
7. [Bibliography](https://github.com/caev03/VA-ProyectoSemestre#bibliography)

## Project Context

This project is developed as a course project for the [Visual Analytics][VisualAnalyticsPage] Class taught at [Universidad de los Andes][Uniandes] by [John Alexis **GUERRA**][LinkJohn] and [Jose Tiberio **HERNANDEZ**][LinkTiberio].

## Live Demo

### Video

[![Final project video](https://raw.githubusercontent.com/caev03/VA-ProyectoSemestre/master/portadaProyecto.JPG)][VideoDemo]

### Project Page
[Visit the project Page][ProjectPage]

### Presentation

[See the project presentation][ProjectPresentation]

## Problem Description

Along the history of colombia has existed a problem because people is losing interest in politics or they are not even acquired it, this represents a concern because this could affect the elections. Therefore, it exist a need in giving the people a way to get interested to politics, that's why with the colaboration of Monica Pachon ( Dean of the Faculty of Political Science, Government and International Relations at Universidad del Rosario ) we have build a tool that allow the user to interact with the election data starting at 1958 to 2010, but not the usual way. This project is build as a tool for users to enjoy this information avoiding to show usual visualization.

## Project Description

## Who

### The principal stakeholders of the project are:

* **Monica Pachon** - Dean of the Faculty of Political Science, Government and International Relations at Universidad del Rosario 
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

### T1: Make the users who have little interest in politics enjoy it and learn from it.
* T1.1: Discover patterns among the candidates elected by the type of election according to the name or last name.
* T1.2: Locate by name or surname the percentage of effectiveness of elections.
  

## How

### Viz 1 - Distribution of Political Power by "\<Lastname\>" in Colombia Throughout History

![](https://raw.githubusercontent.com/caev03/VA-ProyectoSemestre/master/ReadMeImages/VisWebPage1.png)  
Show the amount of positions obtained througtout Colombian history grouped by name or last name. Allowing to the user, to notice which one is the name or lastname with more positions by each year.
  
**Marks:** Lines  
**Channels:** Horizontal and Vertical position, Angle, Color Hue

### Viz 2 - Elegibility Of "\<Lastname\>" In Colombia Throughout History

![](https://raw.githubusercontent.com/caev03/VA-ProyectoSemestre/master/ReadMeImages/VisWebPage2.png)  
Show trends of elegibility of a person by its name shown in two different scenarios allowing the user to move over the years using a scroll bar:

1. Amount of candidates elected with that name over the amount of candidates with that name by each department  
2. Amount of candidates elected with that name over the amount of candidates by each department  
  
**Marks:** Areas ( Departments )  
**Channels:** Saturation ( Choosen relation value )

### Viz 3- Distribution of "\<Lastname\>" In Colombian Politics Throughout History

![](https://raw.githubusercontent.com/caev03/VA-ProyectoSemestre/master/ReadMeImages/VisWebPage3.png)  
Show the amount of people with a specific name/lastname that occupied a specific position by year.
  
**Marks:** Lines  
**Channels:** Horizontal and Vertical position, Angle, Color Hue



## Insights:
After the construction of the 3 visualizations new insights emerge:
 * Which are the most effective families throughout history?
 * What are the most remarkable years in the displacement of a "family"?
 * In what year was the political awakening for certain "families"?
 * There are families that share a similar story?
 * Which are the last names that have exerted positions with greater power.

## Paper:

[See the project paper][ProjectPaper]
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
[VideoDemo]:https://youtu.be/ITpm59GMgKM
[ProjectPresentation]:https://caev03.github.io/VA-ProyectoSemestre/Presentacion/
[ProjectPaper]:https://github.com/caev03/VA-ProyectoSemestre/blob/master/tools-enjoy-election.pdf

