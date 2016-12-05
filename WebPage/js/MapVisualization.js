var currentYear = 1972
var currentOption = 1
var coo = null
var deeptoos = null

var colorScale = d3.scale.linear()
    .domain([0, 1])
    .range(["#fff", "#0000ff"])

var dicti = {"1958":1958,"1960":1962,"1962":1964,"1964":1966,"1966":1968
    ,"1968":1970,"1970":1972,"1972":1974,"1974":1976,"1976":1978
    ,"1978":1980,"1980":1982,"1982":1984,"1984":1986,"1986":1988
    ,"1988":1990,"1990":1991,"1992":1992,"1994":1994,"1996":1997
    ,"1998":1998,"2000":2000,"2002":2002,"2004":2003,"2006":2006
    ,"2008":2007,"2010":2010}
d3.select('#slider-items').call(d3.slider().axis(d3.svg.axis().ticks(27)).min(1958).max(2010).step(2).on('slide',function (evt, value) {
  render(value);
}));

$('#opt1').click(function () {
    currentOption = 1;
    $(this).prop('checked', true);
    $('#opt2').prop('checked', false);
    render(currentYear);
});
$('#opt2').click(function () {
    currentOption = 2
    $(this).prop('checked', true);
    $('#opt1').prop('checked', false);
    render(currentYear);
})

// arreglarEje()

function render(value){
    currentYear = value
    d3.select("#mapSvg").html("")
    d3.select("#mapSvg").selectAll("*").remove();
    ejecutar()
}
var width = 600,
    height = 600;

var projection = d3.geo.mercator()
    .scale(1500)
    .translate([width / 2, height / 2])
    .center([-61,42.5])
    .rotate([2,3,2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#svgDiv");
    // .on("click", reset);

var g = svg.append("g")
    .attr("id","mapSvg")
    .style("stroke-width", "1.5px");

function ready(error, co, departamento){
    if(error) throw error;
    console.log(departamento)
    console.log(departamento[0])
    g.selectAll(".mpio")
        .data(topojson.feature(co, co.objects.depts).features)
        .enter().append("path")
        .attr("class", function(d) { return "mpios" + "_" + d.properties.dpt; })
        .attr("id", "feature")
        .attr("d", path)
        .style("fill", function(d) { return pintar(d, departamento[0])})
        .on("click", function (d) { clicked( this, d, co) });

    g.append("path")
        .datum(topojson.mesh(co, co.objects.depts, function(a, b) { return a !== b; }))
        .attr("d", path)
        .attr("class", "depto-borde");
}

function pintar(d, departamento){
    for (var i=0; i < departamento.length; i++){
        if(d.properties.dpt == departamento[i].name_dpto){
            return colorScale(1-departamento[i].value)
        }
    }
}


function arreglarEje(){
    $(".tick text").each(function(index,value){
        var s = $(this).text().replace(",","")
        console.log(s+"-"+dicti[s])
    })
}

function ejecutar(){
    if(currentOption == 1){
        d3.queue()
            .defer(d3.json, "http://localhost:3000/mapColombia")
            .defer(d3.json, "http://localhost:3000/colombianMapFOption/ESCOBAR:"+dicti[currentYear])
            .await(ready)
    }
    else{
        d3.queue()
            .defer(d3.json, "http://localhost:3000/mapColombia")
            // .defer(d3.json, "http://localhost:3000/dptos/"+dicti[currentYear]+":"+currentOption)
            .await(ready)
    }
}
ejecutar()