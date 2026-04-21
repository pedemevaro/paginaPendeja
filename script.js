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
    $("#btnNO").text("Ahora mismo no");

    $("#btnSI").css({
        top: "40%",
        left: "60%",
    });

    $("#btnNO").css({
        top: "40%",
        left: "11%",
    });

    $("#labelTexto").text("¿ME QUIERES?");

    $("#labelTexto").css({
        top: "20%",
        left: "22%",
    });
    
    $("#txtValor").text("1");

    $("#imagenGusano").css({display: "none"});
}

function clickSI(){
    $("#labelTexto").text("Así me gusta, sumisa cual gusano");

    $("#labelTexto").css({
        left: "12%",
    });

    $("#btnSI").css({display: "none"});
    $("#btnNO").css({display: "none"});
    $("#imagenGusano").css({display: "inline-block"});
}

function clickNO(){
    //$("#labelTexto").text("Creo que te has equivocado de botón. Repito. ¿Me quieres?");
    console.log("Entra en NO");

    let valor = $("#txtValor").text();

    console.log(valor);

    switch (valor) {
        case "1":
            $("#btnSI").css({
                "font-size": "1.3em",
                left: "55%"
            });

            $("#btnNO").css({
                "font-size": "0.9em"
            });

            $("#txtValor").text("2");

            break;

        case "2":
            $("#btnSI").css({
                "font-size": "1.6em",
                left: "50%"
            });

            $("#btnNO").css({
                "font-size": "0.7em"
            });

            $("#txtValor").text("3");

            break;

        case "3":
            $("#btnSI").css({
                "font-size": "1.9em",
                left: "45%"
            });

            $("#btnNO").css({
                "font-size": "0.5em"
            });

            $("#txtValor").text("4");

            break;

        case "4":
            $("#btnSI").css({
                "font-size": "2.1em",
                left: "40%"
            });

            $("#btnNO").css({
                "font-size": "0.4em"
            });

            $("#txtValor").text("5");

            break;

        case "5":
            $("#btnSI").css({
                "font-size": "3em",
                left: "15%"
            });

            $("#btnNO").css({
                top: "9%"
            });

            $("#txtValor").text("6");

            break;

        case "6":

            $("#btnNO").css({
                top: "32%",
                left: "65%"
            });

             $("#txtValor").text("7");

            break;

        case "7":

            $("#btnNO").css({
                top: "59%",
                left: "34%"
            });

             $("#txtValor").text("8");

            break;
    }

    
}
