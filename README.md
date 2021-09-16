# P5JS
Alguns códigos em P5.js.  
Programei essas simulações simples enquanto estudava esse tema pela primeira vez.  

# Temas abordados em cada simulação
### As descrições a seguir estão em ordem de complexidade, do projeto mais simples até o mais complexo. Assim, é possível perceber uma cronologia no aprendizado dos conceitos.

# <a href="https://github.com/ribe3iro/P5JS/tree/main/chuva">Chuva<a>
### Simulação de chuva
Uma simples simulação de chuva infinita.  
Primeira experiência que eu tive com controle de bordas da tela.

# <a href="https://github.com/ribe3iro/P5JS/tree/main/explosao">Explosão</a>
### Simulação de fogos de artifício
Ao clicar na tela, ocorre uma espécie de explosão de fogos de artifício no local.  
Foi interessante pra testar o controle de múltiplas partículas.

# <a href="https://github.com/ribe3iro/P5JS/tree/main/vetor">Vetor</a>
### Visualização da soma e da subtração entre vetores
Uma simples visualização de 2 vetores sendo somados e subtraídos, sendo possível manipular 1 deles através do mouse.  
Me ajudou na percepção dos vetores no espaço, já que esse assunto era bastante novo pra mim.

# <a href="https://github.com/ribe3iro/P5JS/tree/main/nuvem">Nuvem</a>
### Simulação de um céu com núvens
Um céu azul com nuvens brancas passando.  
Primeira experiência com "Perlin Noise".

# <a href="https://github.com/ribe3iro/P5JS/tree/main/ondas">Ondas</a>
### Traça uma linha pontilhada com "ruído" na tela
Experiência simples pra continuar treinando "Perlin Noise".

# <a href="https://github.com/ribe3iro/P5JS/tree/main/senoides">Senóides</a>
### Visualização das funções seno e cosseno
O objetivo era visualizar um pouco o comportamento das funções seno e cosseno alterando os argumentos dentro do código.  
Se ficar interessando, recomendo testar diferentes argumentos nos lugares sinalizados no código.

# <a href="https://github.com/ribe3iro/P5JS/tree/main/steering">Steering</a>
### Simula uma espécie de perseguição mais orgânica e realista
O objetivo era fazer a bola seguir o mouse de uma maneira menos "dura" e robotizada.  
Foi a minha maneira de testar os conceitos de "Steering Behaviors" que eu andava estudando.  
Se tiver interesse, o Daniel Shiffman tem uma playlist (https://youtu.be/4zhJlkGQTvU) e um livro (https://natureofcode.com/book/chapter-6-autonomous-agents/) abordando tudo sobre esse assunto.

# <a href="https://github.com/ribe3iro/P5JS/tree/main/ameba">Ameba</a>
### Tenta simular um movimento através do lançamento de tentáculos
Quanto mais longe o mouse fica da "ameba", mais tentáculos ela lança para se deslocar para o local, o que prejudica sua precisão.

# <a href="https://github.com/ribe3iro/P5JS/tree/main/snake">Snake</a>
### Uma espécie de releitura do jogo "snake"
Primeira tentativa de jogo.  
Foi importante pra treinar alguns conceitos de movimentação através do teclado e de gravação de histórico (pra guardar as posições anteriores da cobra e desenhar o corpo).

# <a href="https://github.com/ribe3iro/P5JS/tree/main/cell_game">Cell Game</a>
### Tenta simular uma espécie de seleção natural
Células herbívoras e carnívoras são geradas com características aleatórias (raio de percepção, velocidade, tamanho e força ao manobrar).  
O objetivo é que as células com melhores características sejam naturalmente selecionadas e sobrevivam por mais tempo.

### Regras:

Células herbívoras:
  - Azuis  
  - Vão buscar as células verdes (surgem aleatoriamente) para se alimentar  
  - Ao se alimentar, duplicam em 2 células idênticas à original  
  - Vão fugir de células carnívoras  

Células carnívoras:
  - Vermelhas  
  - Vão perseguir as células herbívoras para se alimentar  
  - Ao se alimentar, duplicam em 2 células idênticas à original  

Obs.:  
- Se não comerem por um certo tempo, as células morrem de fome
- No conflito entre 2 células, vence a que tiver maior tamanho
