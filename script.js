var x;
var o;

function escolheuX(){
    document.getElementById("O").disabled = true;
    document.getElementById("JogoDaVelha").style.visibility = "visible";
    x = 1;
}

function escolheuO(){
    document.getElementById("X").disabled = true;
    document.getElementById("JogoDaVelha").style.visibility = "visible";
    x = 0;
}

function logicaDoGanhar(){

    var div1 = document.getElementById("div1").innerHTML;
    var div2 = document.getElementById("div2").innerHTML;
    var div3 = document.getElementById("div3").innerHTML;
    var div4 = document.getElementById("div4").innerHTML;
    var div5 = document.getElementById("div5").innerHTML;
    var div6 = document.getElementById("div6").innerHTML;
    var div7 = document.getElementById("div7").innerHTML;
    var div8 = document.getElementById("div8").innerHTML;
    var div9 = document.getElementById("div9").innerHTML;

    // --------------------------------------------------------------------------//

    if ((div1 == div2 && div2 == div3 && div1 != "")) {
        alert("Ganhou!");
        document.getElementById("div1").style.backgroundColor = "#63eb02";
        document.getElementById("div2").style.backgroundColor = "#63eb02";
        document.getElementById("div3").style.backgroundColor = "#63eb02";
    } 

    if ((div4 == div5 && div5 == div6 && div4 != "")){
        alert("Ganhou!");
        document.getElementById("div4").style.backgroundColor = "#63eb02";
        document.getElementById("div5").style.backgroundColor = "#63eb02";
        document.getElementById("div6").style.backgroundColor = "#63eb02";
    }

    if ((div7 == div8 && div8 == div9 && div7 != "")){
        alert("Ganhou!");
        document.getElementById("div7").style.backgroundColor = "#63eb02";
        document.getElementById("div8").style.backgroundColor = "#63eb02";
        document.getElementById("div9").style.backgroundColor = "#63eb02";
    }

    // --------------------------------------------------------------------------//
    
    if ((div1 == div4 && div4 == div7 && div1 != "")) {
        alert("Ganhou!");
        document.getElementById("div1").style.backgroundColor = "#63eb02";
        document.getElementById("div4").style.backgroundColor = "#63eb02";
        document.getElementById("div7").style.backgroundColor = "#63eb02";
    } 

    if ((div2 == div5 && div5 == div8 && div2 != "")){
        alert("Ganhou!");
        document.getElementById("div2").style.backgroundColor = "#63eb02";
        document.getElementById("div5").style.backgroundColor = "#63eb02";
        document.getElementById("div8").style.backgroundColor = "#63eb02";
    }

    if ((div3 == div6 && div6 == div9 && div3 != "")){
        alert("Ganhou!");
        document.getElementById("div3").style.backgroundColor = "#63eb02";
        document.getElementById("div6").style.backgroundColor = "#63eb02";
        document.getElementById("div9").style.backgroundColor = "#63eb02";
    }

    // --------------------------------------------------------------------------//
    

    if ((div1 == div5 && div5 == div9 && div1 != "")){
        alert("Ganhou!");
        document.getElementById("div1").style.backgroundColor = "#63eb02";
        document.getElementById("div5").style.backgroundColor = "#63eb02";
        document.getElementById("div9").style.backgroundColor = "#63eb02";
    }

    if ((div3 == div5 && div5 == div7 && div3 != "")){
        alert("Ganhou!");
        document.getElementById("div3").style.backgroundColor = "#63eb02";
        document.getElementById("div5").style.backgroundColor = "#63eb02";
        document.getElementById("div7").style.backgroundColor = "#63eb02";
    }
    
}

function jogar(div){

    if (x == 1) {
        document.getElementById(div).innerHTML = "X";
        document.getElementById(div).style.display = "flex";
        document.getElementById(div).style.justifyContent = "center";
        document.getElementById(div).style.alignItems = "center";
        x = 0;
    } else {
        document.getElementById(div).innerHTML = "O";
        document.getElementById(div).style.display = "flex";
        document.getElementById(div).style.justifyContent = "center";
        document.getElementById(div).style.alignItems = "center";
        x = 1;
    }

    logicaDoGanhar();
    
}