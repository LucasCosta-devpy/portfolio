# Portfólio — Lucas dos Santos Costa

Portfólio interativo + currículo profissional de um **Desenvolvedor Back-End** (Go · Python), com
foco em sistemas orientados a eventos, integrações de alta escala, mensageria, observabilidade e
reconhecimento facial em tempo real.

> Feito em **HTML + CSS + JavaScript puro** — sem frameworks, sem dependências externas, sem build.
> Funciona só abrindo o arquivo no navegador ou hospedando no GitHub Pages.

## Arquivos

| Arquivo          | O que é                                                                 |
|------------------|-------------------------------------------------------------------------|
| `index.html`     | Portfólio interativo (hero animado, pipeline VisionFlow clicável, stack, projetos com filtro, frentes de atuação, método de entrega com diagrama de Git flow, clientes, trajetória, contato, tema claro/escuro). |
| `curriculo.html` | Currículo profissional em página A4, com botão **Baixar PDF**.          |
| `i18n.js`        | Idiomas do site (PT · EN · ES): motor de tradução + dicionário. Usado pelas duas páginas. |
| `README.md`      | Este arquivo.                                                            |

## Ver localmente

Só dar **duplo clique** em `index.html`. O botão *Baixar PDF* na página do currículo abre a janela
de impressão — escolha **“Salvar como PDF”**.

## Publicar no GitHub Pages (grátis)

1. Crie um repositório no GitHub. Dica: se o nome for `seu-usuario.github.io`, o site vai para a raiz
   do seu domínio. Qualquer outro nome também funciona (fica em `seu-usuario.github.io/nome-do-repo`).
2. Suba os arquivos desta pasta:
   ```bash
   git init
   git add .
   git commit -m "portfólio + currículo"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Build and deployment → Source: `Deploy from a branch`** →
   branch `main` / pasta `/ (root)` → **Save**.
4. Aguarde ~1 min. O site fica no ar em `https://SEU-USUARIO.github.io/SEU-REPO/`.

## Como editar

Todo o conteúdo dinâmico do portfólio (projetos, clientes, stack, timeline, estágios do pipeline)
está em **arrays JavaScript no fim do `index.html`** — fáceis de achar e alterar. Por exemplo, para
adicionar um projeto, é só acrescentar um objeto no array `projects`.

- **Adicionar/editar projetos:** array `projects` em `index.html`.
- **Editar o pipeline VisionFlow:** array `stages` em `index.html`.
- **Traduções:** veja a seção "Idiomas" abaixo (arquivo `i18n.js`).
- **Frentes de atuação:** array `areas` (cada item vira uma linha do quadro "atuação").
- **Método de entrega:** arrays `gitSteps` (etapas do caminho do código) e `practices` (cards de práticas). O diagrama de branches é um `<svg class="gf">` direto no HTML, dentro de `#metodo`.
- **Clientes:** array `clients`.
- **Experiência (portfólio):** array `tl`.
- **Currículo:** o conteúdo é HTML direto em `curriculo.html`.
- **Cores/tema:** bloco `:root { ... }` no topo do `<style>` de cada arquivo.

### Idiomas (PT · EN · ES)

O texto em **português fica no próprio HTML/JS** (é a fonte da verdade). As traduções ficam em
[`i18n.js`](i18n.js), no array `ROWS`, uma linha por texto: `[português, inglês, espanhol]`.

- **Mudou um texto em português?** Atualize a linha correspondente em `ROWS`. O português precisa ser
  idêntico ao da página (espaços extras não contam); se não for, aquele texto aparece em português
  nos outros idiomas.
- **Texto novo?** Adicione uma linha em `ROWS`. Texto repetido em vários lugares usa a mesma linha.
- **Texto que não muda** (nome de tecnologia, marca): pode ficar fora do `ROWS`, ou entrar só com o português: `['Redis']`.
- **Parágrafos com negrito/link** dentro do HTML precisam do atributo `data-i18n` no elemento
  (`<p data-i18n>`); a chave é o HTML interno do parágrafo.
- **Conteúdo montado por JS** (projetos, atuação, método, clientes, trajetória) passa por `T('texto')` no
  `index.html` e é redesenhado ao trocar de idioma.
- **Descobrir o que falta traduzir:** abra o site no idioma desejado e rode `I18N.missing()` no console
  do navegador. O que aparecer e não for nome técnico é tradução pendente.
- O idioma escolhido fica salvo no navegador. Link direto: `index.html?lang=en` ou `?lang=es`.
  O currículo também muda de idioma, e o PDF sai no idioma ativo.

### (Opcional) Adicionar as imagens dos diagramas

Se quiser exibir os diagramas de arquitetura (VisionFlow / VisionHub) como imagem, crie uma pasta
`assets/img/` e coloque os PNGs lá — depois adicione um `<img>` no card correspondente.

---

**Contato** · lucas_dscosta@hotmail.com · [LinkedIn](https://www.linkedin.com/in/lucas-costa-24078)
