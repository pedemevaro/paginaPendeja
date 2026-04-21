$(document).ready(function(){

    inicializar();

    $("#btnSI").click(function(){
        clickSI();
    });

    $("#btnNO").click(function(){
        clickNO();
    });

});

function inicializar(){
    $("#btnSI").text("Por supuesto");
    $("#btnNO").text("Contigo no bicho");

    $("#btnSI").css({
        top: "40%",
        left: "60%",
    });

    $("#btnNO").css({
        top: "40%",
        left: "30%",
    });

    $("#labelTexto").text("¿ME QUIERES?");

    $("#labelTexto").css({
        top: "20%",
        left: "42%",
    });
    
    $("#txtValor").text("1");

    $("#imagenGusano").css({display: "none"});
}

function clickSI(){
    $("#labelTexto").text("Así me gusta, sumisa cual gusano");

    $("#labelTexto").css({
        left: "35%",
    });

    $("#btnSI").css({display: "none"});
    $("#btnNO").css({display: "none"});
    $("#imagenGusano").css({display: "inline-block"});
}

function clickNO(){
    alert("Creo que te has equivocado de botón")
}
