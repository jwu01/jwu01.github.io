// var d = [["range", ["Range[4]", "{1, 2, 3, 4}"], ["Range[1.2, 2.2, 0.15]", "{1.2, 1.35, 1.5, 1.65, 1.8, 1.95, 2.1}"]],
//          ["table", ["Table[i^2, {i, 5}]", "{1, 4, 9, 16, 25}"], ["Table[f[i], {i, 0, 10, 2}]", "{f[0], f[2], f[4], f[6], f[8], f[10]}"], ["Table[x, 10]", "{x, x, x, x, x, x, x, x, x, x}"]],
//          ["graph", ["Plot[y = x^2, {x, 1, 10}]", "<img src=\"img/plot.PNG\">"], ["Plot3D[Sin[5 x]*Cos[5 y], {x, -1, 1}, {y, -2, 2}]", "<img src=\"img/plot.PNG\">"], ["PolarPlot[Cos[0.95θ, {θ, 0, 40Pi}]","<img src=\"img/POLAR.PNG\">"]],
//          ["index", ["{1, 4, 9, 16, 25}[[2]]", "4"], ["{1, 4, 9, 16, 25}[[-2]]", "16"], ["{1, 4, 9, 16, 25}[[1;;3]]", "{1, 4, 9}"]]
//
//        ];

var generateElement = function(div, input, output, num){
  div.appendChild(document.createElement("hr"));

  var line = document.createElement("div");
  var tag = document.createElement("inout");
  tag.innerHTML = "&nbsp;&nbsp;&nbsp;In[" + num + "]:= ";
  line.appendChild(tag);
  tag = document.createElement("b");
  tag.innerHTML = input;
  line.appendChild(tag);
  div.appendChild(line);

  if (output){

    line = document.createElement("div");
    tag = document.createElement("inout");
    tag.innerHTML = "Out[" + num + "]:= ";
    line.appendChild(tag);
    tag = document.createElement("b");
    tag.innerHTML = output;
    line.appendChild(tag);
    div.appendChild(line);
  }
}

var removeChildren = function(nodes){
  while (nodes.length > 0)
    nodes[nodes.length - 1].remove();
}

// var div, l;
// for (let k in d){
//   (function(){
//     div = document.getElementById(k + "Ex");
//     l = d[k]
//     document.getElementById(k).addEventListener('click', function(){
//       // console.log(v);
//       if (div.childNodes.length == 0){
//         for (var i = 0; i < l.length; i ++)
//           generateElement(div, l[i][0], l[i][1], i);
//       }
//       else
//         removeChildren(div.childNodes);
//     });
//   }());
// }
//
// var div;
//
// d.forEach(function(k, i){
//   console.log(k);
//   console.log(i);
//   div = document.getElementById(k[0] + "Ex");
//   document.getElementById(k[0]).addEventListener('click', function(){
//     // console.log(v);
//     if (div.childNodes.length == 0){
//       for (var i = 0; i < k[1].length; i ++)
//         generateElement(div, k[1][i][0], k[1][i][1], i);
//     }
//     else
//       removeChildren(div.childNodes);
//   });
// });
document.getElementById("range").addEventListener('click', function(){
  var div = document.getElementById("rangeEx");
  if (div.childNodes.length == 0){
    generateElement(div, "Range[4]", "{1, 2, 3, 4}", 1);
    generateElement(div, "Range[1.2, 2.2, 0.15]", "{1.2, 1.35, 1.5, 1.65, 1.8, 1.95, 2.1}", 2);
  }
  else
    removeChildren(div.childNodes);
});

document.getElementById("table").addEventListener('click', function(){
  var div = document.getElementById("tableEx");
  if (div.childNodes.length == 0){
    generateElement(div, "Table[i^2, {i, 5}]", "{1, 4, 9, 16, 25}", 1);
    generateElement(div, "Table[f[i], {i, 0, 10, 2}]", "{f[0], f[2], f[4], f[6], f[8], f[10]}", 2);
    generateElement(div, "Table[x, 10]", "{x, x, x, x, x, x, x, x, x, x}", 3)
  }
  else
    removeChildren(div.childNodes);
});

document.getElementById("index").addEventListener('click', function(){
  var div = document.getElementById("indexEx");
  if (div.childNodes.length == 0){
    generateElement(div, "{1, 4, 9, 16, 25}[[2]]", "4", 1);
    generateElement(div, "{1, 4, 9, 16, 25}[[-2]]", "16", 2);
    generateElement(div, "{1, 4, 9, 16, 25}[[1;;3]]", "{1, 4, 9}", 3)
  }
  else
    removeChildren(div.childNodes);
});

document.getElementById("graph").addEventListener('click',function(){
  var div = document.getElementById("graphEx");
  if (div.childNodes.length == 0){
    generateElement(div, "Plot[x^2, {x, 1, 10}]", "<img src=\"img/plot.PNG\">",1);
    generateElement(div, "Plot3D[Sin[5 x]*Cos[5 y], {x, -1, 1}, {y, -2, 2}]","<img src=\"img/plot3D.PNG\">", 2);
    generateElement(div, "PolarPlot[Cos[0.95θ], {θ, 0, 40Pi}]","<img src=\"img/POLAR.PNG\">", 3);
  }
  else
    removeChildren(div.childNodes);
});

document.getElementById("arith").addEventListener('click',function(){
  var div = document.getElementById("arithEx");
  if (div.childNodes.length == 0){
    generateElement(div, "2^10", "1024",1);
    generateElement(div, "10 + 5 + 54","69", 2);
    generateElement(div, "3 * 6","18", 3);
  }
  else
    removeChildren(div.childNodes);
});

document.getElementById("conv").addEventListener('click',function(){
  var div = document.getElementById("convEx");
  if (div.childNodes.length == 0){
    generateElement(div, "N[1/7]", "0.142857",1);
    generateElement(div, "N[1/7, 3]","0.143", 2);
    generateElement(div, "BaseForm[33, 2]","100001<sub>2</sub>", 3);
  }
  else
    removeChildren(div.childNodes);
});

document.getElementById("assign").addEventListener('click',function(){
  var div = document.getElementById("assignEx");
  if (div.childNodes.length == 0){
    generateElement(div, "x = a + b", "a + b",1);
    generateElement(div, "1 + x^2", "1 + (a + b)^2", 2);
    generateElement(div, "r := Random[]", null, 3);
    generateElement(div, "{r, r, r}","{0.964064, 0.486256, 0.148899}", 4);
  }
  else
    removeChildren(div.childNodes);
});

document.getElementById("func").addEventListener('click',function(){
  var div = document.getElementById("funcEx");
  if (div.childNodes.length == 0){
    generateElement(div, "f[x_] := Expand[x^2]", null,1);
    generateElement(div, "f[a + b]", "a<sup>2</sup> + 2ab + b<sup>2</sup>", 2);
    generateElement(div, "g := Function[{u, v}, u^2 + v^4]", null, 3);
  }
  else
    removeChildren(div.childNodes);
});

document.getElementById("solve").addEventListener('click',function(){
  var div = document.getElementById("solveEx");
  if (div.childNodes.length == 0){
    generateElement(div, "Solve[x^2 - 4x + 3 == 0, x]", "{{x -> 1}, {x -> 3}}",1);
    generateElement(div, "Solve[x + y == 7 && x - y == 1, {x, y}, Integers]", "{{x -> 4, y -> 3}}", 2);
  }
  else
    removeChildren(div.childNodes);
});

document.getElementById("limit").addEventListener('click',function(){
  var div = document.getElementById("limitEx");
  if (div.childNodes.length == 0){
    generateElement(div, "Limit[Sin[x]/x, x -> 0]", "1",1);
    generateElement(div, "Limit[RealAbs[x]/x, x -> 0]", "Indeterminate", 2);
    generateElement(div, "MinLimit[RealAbs[x]/x, x -> 0]", "-1", 3);
  }
  else
    removeChildren(div.childNodes);
});

document.getElementById("diff").addEventListener('click',function(){
  var div = document.getElementById("diffEx");
  if (div.childNodes.length == 0){
    generateElement(div, "f[x_] := Sin[x] + x^2", null, 1);
    generateElement(div, "f'[x]", "2x + Cos[x]", 2);
    generateElement(div, "D[e^2x, {x, 2}]", "4e<sup>2x</sup>", 3);
  }
  else
    removeChildren(div.childNodes);
});

document.getElementById("int").addEventListener('click',function(){
  var div = document.getElementById("intEx");
  if (div.childNodes.length == 0){
    generateElement(div, "Integrate[3x^2 + Sin[x], x]", "x<sup>3</sup> - Cos[x]", 1);
    generateElement(div, "Integrate[Sin[x], {x, 0, Pi}]", "2", 2);
  }
  else
    removeChildren(div.childNodes);
});

document.getElementById("entity").addEventListener('click',function(){
  var div = document.getElementById("entityEx");
  if (div.childNodes.length == 0){
    generateElement(div, 'EntityList["Planet"]', '<img src="img/entList.PNG"></img>', 1);
    generateElement(div, 'EntityValue[Entity["Country", "UnitedStates"], "Flag"]', '<img src="img/us.PNG"></img>', 2);
    generateElement(div,'Entity["Person", "StephenWolfram::j276d"]["Image"]', '<img src ="img/stephen.PNG"></img>',3);
  }
  else
    removeChildren(div.childNodes);
});

document.getElementById("pos").addEventListener('click',function(){
  var div = document.getElementById("posEx");
  if (div.childNodes.length == 0){
    generateElement(div, 'GeoDistance[Entity["City", {"NewYork", "NewYork", "UnitedStates"}], Entity["City", {"LosAngeles", "California", "UnitedStates"}]]', '2432.07 mi', 1);
    generateElement(div, 'GeoPosition[Entity["Building", "EiffelTower::5h9w8"]]', 'GeoPosition[{48.8583,2.29444}]', 2);
    generateElement(div, 'GeoNearest["Country", GeoPosition[{0, 0}], 5]','<img src="img/nearest.PNG"></img>', 3);
  }
  else
    removeChildren(div.childNodes);
});


document.getElementById("map").addEventListener('click',function(){
  var div = document.getElementById("mapEx");
  if (div.childNodes.length == 0){
    generateElement(div, 'GeoListPlot[{Entity["Country", "Iceland"], Entity["Country", "France"], Entity["Country", "Italy"]}]', '<img src="img/geoPlot.PNG"></img>', 1);
    generateElement(div, 'GeoGraphics[GeoPath[{Entity["City", {"NewYork", "NewYork", "UnitedStates"}],["City", {"Tokyo", "Tokyo", "Japan"}]}]]]', '<img src="img/path.PNG"></img>', 2);
  }
  else
    removeChildren(div.childNodes);
});
