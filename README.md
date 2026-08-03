<div align="center">

# `</>` Meu Portfólio

**Portfólio pessoal — React, TypeScript e Vite**

Desenvolvido do zero, sem template pronto: design próprio, tema dark/light, animações e uma constelação interativa mostrando como as tecnologias que uso se conectam entre si.

<br/>

<a href="https://meu-portfolio-bruno-oliveira.vercel.app">
  <img src="https://img.shields.io/badge/▶_LIVE_PREVIEW-ffb86b?style=for-the-badge&labelColor=0b0b14&color=ffb86b" alt="Live Preview" width="220" />
</a>

<br/><br/>

<img src="https://img.shields.io/badge/React-0b0b14?style=flat-square&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/TypeScript-0b0b14?style=flat-square&logo=typescript&logoColor=3178C6" />
<img src="https://img.shields.io/badge/Vite-0b0b14?style=flat-square&logo=vite&logoColor=B73BFE" />
<img src="https://img.shields.io/badge/CSS_Modules-0b0b14?style=flat-square&logo=css3&logoColor=3abfae" />

</div>

<br/>

<div align="center">
<img width="1909" height="938" alt="image" src="https://github.com/user-attachments/assets/776d4c20-81db-48e0-ac27-b8a16624d54c" />
</div>

<br/><br/>

## Sobre o projeto

Sou estudante de Análise e Desenvolvimento de Sistemas e venho estudando React e TypeScript por conta própria — esse portfólio nasceu como um jeito de aplicar tudo isso na prática, ao invés de ficar só em exercício de curso. Cada seção foi pensada e construída pra também mostrar processo, não só resultado: da escolha da paleta de cores até a lógica de cada componente.

O objetivo é duplo: servir como cartão de visitas pra quem quiser me conhecer profissionalmente, e como registro de aprendizado — um projeto que reflete onde estou hoje como desenvolvedor front-end, buscando minha primeira oportunidade de estágio.

<br/>

## Funcionalidades

- Dark / light mode com persistência no `localStorage` e detecção automática da preferência do sistema operacional na primeira visita
- Terminal animado no Hero, digitando e apagando diferentes frases em loop, simulando um prompt de sistema real
- Constelação de skills interativa — passe o mouse sobre uma tecnologia e veja, via SVG, quais outras se conectam a ela (âmbar para o que uso no dia a dia, azul-esverdeado para ferramentas de apoio)
- Cards de projetos em zigue-zague, alternando a posição da imagem a cada item, com screenshot, descrição, stack e link direto pro repositório
- Formulário de contato de verdade, integrado via Formspree e enviado com `fetch` — sem reload de página, com feedback de status (enviando / enviado / erro)
- Totalmente responsivo, do celular ao desktop, com breakpoints pensados por seção
- Sistema de design com tokens CSS — cores, tipografia, espaçamento e easing centralizados em variáveis, então trocar a paleta inteira é questão de editar um único arquivo

<br/>

## Stack

| Categoria | O que uso | Por quê |
|---|---|---|
| **Core** | React + TypeScript | Componentização e tipagem forte, evitando bugs bobos em tempo de desenvolvimento |
| **Build** | Vite | Dev server rápido e build otimizado, sem a complexidade de configurar Webpack manualmente |
| **Estilo** | CSS Modules | Escopo automático por componente, sem risco de uma classe vazar e afetar outra seção |
| **Ícones** | Font Awesome | Biblioteca de ícones consistente, carregada via CDN |
| **Formulário** | Formspree | Backend de formulário sem precisar montar servidor próprio |
| **Deploy** | Vercel | Deploy automático a cada push, zero configuração manual |

<br/>

## Design

A paleta foge do clichê "fundo preto + neon" — usa âmbar e azul-esverdeado como cores de destaque, com um fundo de "auroras" desfocadas ao invés de grid ou ruído genérico. A tipografia combina três fontes com papéis bem definidos: uma display geométrica pros títulos, uma sans-serif pro corpo do texto, e uma monoespaçada pra tudo que remete a código — labels, tags de tecnologia, rótulos de formulário.

Todo esse sistema vive centralizado em variáveis CSS no `index.css`, incluindo os dois temas (dark e light), o que significa que qualquer componente novo só precisa consumir essas variáveis, sem redefinir cor nenhuma por conta própria.

<br/>

## Rodando localmente

```bash
# clona o repositório
git clone https://github.com/SBrunoli/meu-portfolio.git

# entra na pasta do projeto
cd meu-portfolio

# instala as dependências
npm install

# roda o servidor de desenvolvimento
npm run dev
```

O projeto abre em `http://localhost:5173`. Pra gerar a versão de produção:

```bash
npm run build
npm run preview
```

<br/>

## Estrutura do projeto

```
src/
  components/
    Header/       → navegação + toggle de tema
    Hero/          → terminal animado + apresentação
    About/         → texto sobre mim + painel de fatos rápidos
    Stack/         → constelação de skills interativa
    Projects/       → cards de projetos em zigue-zague
    Journey/        → timeline de formação
    Contact/        → formulário funcional + links diretos
    Footer/
  contexts/
    ThemeContext.tsx → lógica do dark/light mode
  index.css           → tokens globais (cores, tipografia, espaçamento)
  App.tsx
  main.tsx
```

<br/>

## Contato

Estou em busca de estágio na área de desenvolvimento front-end. Se você tem uma oportunidade — ou só quer trocar uma ideia sobre o projeto — me chama:

<div align="center">

<a href="mailto:br.oli.ribeiro@gmail.com">
  <img src="https://img.shields.io/badge/Email-0b0b14?style=flat-square&logo=gmail&logoColor=ffb86b" />
</a>
<a href="https://www.linkedin.com/in/bruno-de-oliveira-profissional">
  <img src="https://img.shields.io/badge/LinkedIn-0b0b14?style=flat-square&logo=linkedin&logoColor=3abfae" />
</a>
<a href="https://github.com/SBrunoli">
  <img src="https://img.shields.io/badge/GitHub-0b0b14?style=flat-square&logo=github&logoColor=f1eee6" />
</a>

</div>

<br/>

<div align="center">
<sub>Feito com React, TypeScript & muito café ☕</sub>
</div>
