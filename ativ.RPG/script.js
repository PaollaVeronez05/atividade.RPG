
        var js_nome;
        var js_classe;
        var js_habilidade;
        var js_frase;

        function gerar (){
            js_nome = document.persona.p_nome.value;
            js_classe = document.persona.p_classe.value;

            js_habilidade = document.persona.p_habilidade.value;
           js_frase = `<p class ="frase"> Entre o caos e a lenda surge ${js_nome}!, ${js_classe} marcado por ${js_habilidade}.</p>`;




        document.getElementById("result").innerHTML = js_frase;result.style.display = "block";

        if (!js_nome || !js_classe || !js_habilidade) {
                document.getElementById("result").innerHTML =
                    "<strong> Por favor, preencha corretamente para gerar seu herói </strong>";
                return;

        }
    }
