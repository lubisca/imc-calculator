# 📟 Calculadora de IMC · [Project Study]

Este projeto foi desenvolvido com o objetivo principal de **testar meus conhecimentos e colocar em prática** os conceitos de Front-end que venho estudando. É o resultado da transição entre a teoria e a aplicação real de lógica de programação e design. 


<a target="blank" href="https://lubisca.github.io/imc-calculator/"><img src="https://raw.githubusercontent.com/lubisca/retro-badges/main/assets/ACCESE-ONLINE-button.png" height="28" alt="Acesse Online"></a>
## Por que este projeto?
Para consolidar meu aprendizado, decidi criar uma ferramenta funcional que me desafiasse em três frentes:

1.  **Lógica com JavaScript:** Manipulação do DOM para capturar dados, realizar cálculos e gerenciar estados da interface.
2.  **Estilização Autoral (CSS):** Criação de um layout do zero com a estética **Retro** (bordas sólidas, sombras rígidas e alto contraste).
3.  **Estrutura Semântica:** Organização de conteúdo usando tags HTML5 puras (como `dt` e `dd` para o FAQ).

## Desafios Superados

* **Manipulação Dinâmica (Feedback de Clique):** Utilizei a função `setTimeout` para adicionar e remover a classe `ativo` no botão de calcular. Isso cria uma resposta visual de "pressionado" que melhora a experiência do usuário.
* **Componente de FAQ (Accordion List):** Implementei uma lógica de acordeão utilizando `nextElementSibling` e `classList.toggle`. O desafio foi mapear os elementos da lista (`dt`) e garantir que o conteúdo relacionado fosse exibido/escondido corretamente ao clicar.
* **Encapsulamento de Funções:** O código foi organizado em funções específicas (`StartIMC` e `Iniaccordion`) para manter o escopo protegido e o script organizado.
* **Validação de Campos:** Implementação de uma verificação simples que impede o cálculo caso os campos de Nome, Peso ou Altura estejam vazios, exibindo um aviso direto na tela.

## Lógica de Cálculo
O sistema aplica a fórmula padrão do IMC e utiliza o método `.toFixed(1)` para garantir que o resultado seja amigável ao usuário:

$$IMC = \frac{peso}{altura^2}$$

## Tecnologias e Métodos
* **JavaScript (Vanilla):** `querySelector`, `addEventListener`, `classList.toggle`, `setTimeout`.
* **CSS3:** Estilização Retro/Neo-Brutalista, layouts baseados em Flexbox.
* **HTML5:** Estrutura de lista de definições para o FAQ.

---
