Classificador de Nível de Herói

Aplicação web simples em HTML + CSS + JavaScript que classifica o nível de um herói com base no seu XP e exibe a mensagem:

“O Herói de nome {nome} está no nível de {nível}.”

Projeto pensado para praticar variáveis, operadores, estruturas de decisão e manipulação básica de DOM.

🎯 Objetivo

Dado um nome e um valor de XP, classificar o herói segundo as faixas:

Ferro: XP ≤ 1.000

Bronze: 1.001–2.000

Prata: 2.001–5.000

Ouro: 5.001–7.000

Platina: 7.001–8.000

Ascendente: 8.001–9.000

Imortal: 9.001–10.000

Radiante: XP ≥ 10.001

📌 Tratamento de limites: para evitar lacunas, este projeto considera 1000 como Ferro e segue com os demais limites fechados acima (ex.: até 2000 é Bronze).

✨ Funcionalidades

Entrada de nome e XP via formulário.

Cálculo e exibição do nível em tempo real (sem recarregar a página).

Validação: impede nome vazio e XP inválido/≤ 0.

Visual moderno: gradiente, card com efeito glass, foco acessível, suporte a modo escuro (via prefers-color-scheme) e redução de movimento (via prefers-reduced-motion).


HTML5 para a marcação

CSS3 (variáveis, gradientes, glassmorphism, media queries de acessibilidade)

JavaScript (DOM + lógica de classificação)

