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

    $("#labelTexto").text("¿ME QUIERES? 🥰");

    $("#labelTexto").css({
        top: "20%",
        left: "16%",
    });
    
    $("#txtValor").text("1");

    $("#imagenGusano").css({display: "none"});
}

function clickSI(){
    $("#labelTexto").text("Así me gusta, sumisa cual gusana");

    $("#labelTexto").css({
        left: "12%",
    });

    $("#btnSI").css({display: "none"});
    $("#btnNO").css({display: "none"});
    $("#imagenGusano").css({display: "inline-block"});
    
}

function clickNO(){
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
                left: "45%"
            });

            $("#btnNO").css({
                "font-size": "0.7em"
            });

            $("#txtValor").text("3");

        break;

        case "3":
            $("#btnSI").css({
                "font-size": "1.9em",
                left: "40%"
            });

            $("#btnNO").css({
                "font-size": "0.5em"
            });

            $("#txtValor").text("4");

        break;

        case "4":
            $("#btnSI").css({
                "font-size": "2.1em",
                left: "35%"
            });

            $("#btnNO").css({
                "font-size": "0.4em"
            });

            $("#txtValor").text("5");

        break;

        case "5":
            $("#btnSI").css({
                "font-size": "3em",
                left: "5%"
            });

            $("#btnNO").css({
                top: "9%"
            });

            $("#btnSI").text("Por supuesto que sí, mi amor");

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
                top: "70%",
                left: "34%"
            });

             $("#txtValor").text("8");

        break;

        case "8":
            $("#labelAlert").text("Última oportunidad ehh");
            $("#divTemporal").show();

            $("#divTemporal").css({
                display: "block"
            });

            $("#overlay").fadeIn();
            $("#divTemporal").fadeIn();

            setTimeout(function() {
                $("#divTemporal").css({
                    display: "none"
                });

                $("#divTemporal").fadeOut();
                $("#overlay").fadeOut();
            }, 3000);

            $("#txtValor").text("9");
        break;

        case "9":
            $("#labelAlert").text("Esta si que es la última de verdad, la de antes era de prueba y la has fallado 😔");
            $("#divTemporal").show();

            $("#divTemporal").css({
                display: "block"
            });

            $("#overlay").fadeIn();
            $("#divTemporal").fadeIn();

            setTimeout(function() {
                $("#divTemporal").css({
                    display: "none"
                });

                $("#divTemporal").fadeOut();
                $("#overlay").fadeOut();
            }, 3000);

            $("#txtValor").text("10");
        break;

        case "10":
            $("#labelAlert").text("¿En serio merezco tanto rechazo? 👉👈");
            $("#divTemporal").show();

            $("#divTemporal").css({
                display: "block"
            });

            $("#overlay").fadeIn();
            $("#divTemporal").fadeIn();

            setTimeout(function() {
                $("#divTemporal").css({
                    display: "none"
                });

                $("#divTemporal").fadeOut();
                $("#overlay").fadeOut();
            }, 3000);

            $("#txtValor").text("11");
        break;

        case "11":
            $("#labelAlert").text("Esta es la última de la buena, si no le das a que si le doy yo 😡");
            $("#divTemporal").show();

            $("#divTemporal").css({
                display: "block"
            });

            $("#overlay").fadeIn();
            $("#divTemporal").fadeIn();

            setTimeout(function() {
                $("#divTemporal").css({
                    display: "none"
                });

                $("#divTemporal").fadeOut();
                $("#overlay").fadeOut();
            }, 3000);

            $("#txtValor").text("12");
        break;

        case "12":
            $("#labelAlert").text("PUES LE DOY YO, PAYASA");
            $("#divTemporal").show();

            $("#divTemporal").css({
                display: "block"
            });

            $("#overlay").fadeIn();
            $("#divTemporal").fadeIn();

            setTimeout(function() {
                $("#divTemporal").css({
                    display: "none"
                });

                $("#divTemporal").fadeOut();
                $("#overlay").fadeOut();

                setTimeout(animarClick, 1000);
            }, 3000);

        break;
    }

    
}

function animarClick() {

    let btn = $("#btnSI");
    let pos = btn.position();

    // 1. aparece en esquina
    $("#mano").css({
      top: "20px",
      left: "20px",
      opacity: 1
    });

    // 2. se mueve suavemente al botón
    $("#mano").animate({
      top: pos.top + 20,
      left: pos.left + 20
    }, 1000, function () {

      // 3. efecto de click visual
      $("#mano").css({
        transform: "scale(0.8)"
      });

      setTimeout(function () {
        $("#mano").css({
          transform: "scale(1)"
        });

        // 4. disparar click real
        btn.trigger("click");

        $("#mano").fadeOut(300);
      }, 200);

    });
  }
