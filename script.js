document.addEventListener("DOMContentLoaded", function() {
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");

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
        },
        {
            enunciado: "O que te motiva a liderar?",
            alternativas: [
                { texto: "Criar algo novo e impactante.", tipo: "visionario" },
                { texto: "Tomar decisões bem planejadas.", tipo: "estrategico" },
                { texto: "Ajudar os outros a alcançar seus objetivos.", tipo: "inspirador" },
                { texto: "Obter resultados rápidos e eficazes.", tipo: "pratico" },
                { texto: "Facilitar o trabalho em equipe e resolver conflitos.", tipo: "mediador" },
                { texto: "Garantir que todos se sintam valorizados.", tipo: "empático" }
            ]
        },
        {
            enunciado: "Qual estratégia você usa para tomar decisões difíceis?",
            alternativas: [
                { texto: "Busco sempre inovar e sair da zona de conforto.", tipo: "visionario" },
                { texto: "Analiso todos os fatores antes de decidir.", tipo: "estrategico" },
                { texto: "Confio na minha intuição e sentimentos.", tipo: "inspirador" },
                { texto: "Prefiro decidir de forma lógica e eficiente.", tipo: "pratico" },
                { texto: "Converso com todos antes de decidir.", tipo: "mediador" },
                { texto: "Evito decisões impulsivas e prefiro esperar o momento certo.", tipo: "cauteloso" }
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
            mostraResultado();
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
            "empático": "Você é um **líder empático**! Seu foco está em cuidar do bem-estar dos outros e criar um ambiente acolhedor.",
            "reflexivo": "Você é um **líder reflexivo**! Prefere aprender com cada situação antes de agir.",
            "cauteloso": "Você é um **líder cauteloso**! Sempre busca tomar decisões seguras e evitar riscos desnecessários."
        };

        caixaResultado.innerHTML = `<p>${resultadoTexto[tipoEscolhido]}</p>`;
    }

    mostraPergunta();
});
