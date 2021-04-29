function start(){
   var value1 = document.getElementById("add1").value;
people.push(value1)
console.log(value1);
}
function sort(){
var sort1 = document.getElementById("a");
sort1.push(q);
var sort2 = document.getElementById("s");
sort2.push(w);
var sort3 = document.getElementById("d");
sort3.push(e);
var sort4 = document.getElementById("f");
sort4.push(r);
var sort5 = document.getElementById("people");
sort5.push(t);
}
function c(){
var s= document.getElementById("s1").value;
var found=0;
var j;
for (j=0; j<people.length; j++)
{
    if(s==people[j]){
        found=found+1;
    }
}
document.getElementById("p2").innerHTML="name found "+found+" time/s";
console.log("found name "+found+" time/s");
}