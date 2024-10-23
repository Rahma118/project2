
for ( var i = 1 ; i<= 10 ; i++){
     document.getElementById("result").innerHTML += `<h3>Multiplication table of ${i}</h3>`
        for (var j = 1 ; j <= 10 ; j++){
         document.getElementById("result").innerHTML += ` ${j} x ${i}  = ${i*j} <br/>`
    }
       document.getElementById("result").innerHTML += `<hr>`
}