document.addEventListener("DOMContentLoaded", function() {
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".texto-resultado");

    const perguntas = [
        {
            enunciado: "Como você lida com desafios inesperados?",
            alternativas: [
                { texto: "Procuro inovar e encontrar uma solução criativa.", tipo: "visionario" },
                { texto: "Analiso a situação antes de agir.", tipo: "estrategico" },
                { texto: "Motivo minha equipe a superar juntos.", tipo: "inspirador" },
                { texto: "Resolvendo de forma direta e objetiva.", tipo: "pratico" },
                { texto: "Busco aprender com a situação e crescer.", tipo: "reflexivo" },
                { texto: "Evito ao máximo qualquer conflito.", tipo: "cauteloso" }
            ]
        },
        {
            enunciado: "Qual estilo de liderança combina mais com você?",
            alternativas: [
                { texto: "Gosto de inovar e mudar o jogo.", tipo: "visionario" },
                { texto: "Prefiro planejar tudo com cuidado.", tipo: "estrategico" },
                { texto: "Meu foco é motivar as pessoas.", tipo: "inspirador" },
                { texto: "Sou prático e direto na abordagem.", tipo: "pratico" },
                { texto: "Sempre mantenho um ambiente equilibrado.", tipo: "mediador" },
                { texto: "Meu objetivo é garantir que todos estejam confortáveis.", tipo: "empático" }
            ]
        }
    ];

    let atual = 0;
    let escolhas = {};

    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
        }

        caixaPerguntas.textContent = perguntas[atual].enunciado;
        caixaAlternativas.innerHTML = "";

        perguntas[atual].alternativas.forEach(alternativa => {
            const botao = document.createElement("button");
            botao.textContent = alternativa.texto;
            botao.addEventListener("click", () => respostaSelecionada(alternativa.tipo));
            caixaAlternativas.appendChild(botao);
        });
    }

    function respostaSelecionada(tipo) {
        escolhas[tipo] = (escolhas[tipo] || 0) + 1;
        atual++;

        if (atual < perguntas.length) {
            mostraPergunta();
        } else {
            setTimeout(mostraResultado, 500); // Pequeno atraso para evitar erro de exibição prematura
        }
    }

    function mostraResultado() {
        const tipoEscolhido = Object.keys(escolhas).reduce((a, b) => escolhas[a] > escolhas[b] ? a : b);

        const resultadoTexto = {
            "visionario": "Você é um **líder visionário**! Seu foco está em inovação e transformar ideias em realidade.",
            "estrategico": "Você é um **líder estratégico**! Prefere analisar todas as opções antes de tomar uma decisão importante.",
            "inspirador": "Você é um **líder inspirador**! Sua motivação é guiar e motivar os outros a alcançar grandes objetivos.",
            "pratico": "Você é um **líder prático**! Seu foco está em resolver problemas de forma objetiva e eficiente.",
            "mediador": "Você é um **líder mediador**! Sua prioridade é equilibrar opiniões e garantir harmonia na equipe.",
            "empático": "Você é um **líder empático**! Seu foco está em cuidar do bem-estar dos outros e criar um ambiente acolhedor."
        };

        caixaResultado.innerHTML = `<p>${resultadoTexto[tipoEscolhido]}</p>`;
    }

    mostraPergunta();
});
