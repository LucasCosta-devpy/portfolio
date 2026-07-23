# Portfólio — Lucas dos Santos Costa

Portfólio interativo + currículo profissional de um **Desenvolvedor Back-End** (Go · Python), com
foco em sistemas orientados a eventos, integrações de alta escala, mensageria, observabilidade e
reconhecimento facial em tempo real.

> Feito em **HTML + CSS + JavaScript puro** — sem frameworks, sem dependências externas, sem build.
> Funciona só abrindo o arquivo no navegador ou hospedando no GitHub Pages.

## Arquivos

| Arquivo          | O que é                                                                 |
|------------------|-------------------------------------------------------------------------|
| `index.html`     | Portfólio interativo (hero animado, pipeline VisionFlow clicável, stack, projetos com filtro, clientes, trajetória, contato, tema claro/escuro). |
| `curriculo.html` | Currículo profissional em página A4, com botão **Baixar PDF**.          |
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
- **Clientes:** array `clients`.
- **Experiência (portfólio):** array `tl`.
- **Currículo:** o conteúdo é HTML direto em `curriculo.html`.
- **Cores/tema:** bloco `:root { ... }` no topo do `<style>` de cada arquivo.

### (Opcional) Adicionar as imagens dos diagramas

Se quiser exibir os diagramas de arquitetura (VisionFlow / VisionHub) como imagem, crie uma pasta
`assets/img/` e coloque os PNGs lá — depois adicione um `<img>` no card correspondente.

---

**Contato** · lucas_dscosta@hotmail.com · [LinkedIn](https://www.linkedin.com/in/lucas-costa-24078)
