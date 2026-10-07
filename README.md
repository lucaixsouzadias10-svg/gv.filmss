# GV FILMS — site

Vite + React + Tailwind + Framer Motion. Estático, pronto para o Netlify.

## Rodar
    npm install
    npm run dev        # desenvolvimento
    npm run build      # gera /dist

## Deploy (Netlify)
Suba o projeto para um repositório no GitHub e importe no Netlify (o `netlify.toml` já define `npm run build` e a pasta `dist`). Também dá para arrastar a pasta `dist` no painel.

## Adicionar, trocar ou remover vídeos
1. Coloque o MP4 autorizado em `public/videos/` e a capa em `public/posters/`.
2. Edite **só** `src/data/works.js` (src, poster, title, category, instagram). O 1º item é o destaque; 5 itens fecham o grid do desktop.
3. Exportação sugerida (vertical, leve):
   `ffmpeg -i entrada.mov -vf scale=720:-2 -c:v libx264 -crf 26 -preset slow -c:a aac -b:a 128k -movflags +faststart saida.mp4`
   Capa: `ffmpeg -i saida.mp4 -frames:v 1 capa.jpg`

Sem `src`, o card mostra a capa com "ASSISTIR NO INSTAGRAM ↗" (se houver link) ou um placeholder identificado.

## Áudio
Todos os vídeos iniciam mudos. Ao ativar o som no desktop, o volume começa em 15% (slider disponível). Só um vídeo toca por vez e só um tem som. No iOS o volume é pelos botões do aparelho.

## Contato, textos e foto
`src/data/site.js`: número de WhatsApp, mensagem pré-preenchida, Instagram e foto (`photo: '/guilherme.jpg'`, arquivo em `public/`).

## CONFIRMAR ANTES DE PUBLICAR
- **WhatsApp**: o número informado (+55 41 998901-5669) tem um dígito a mais. Preencha `whatsappNumber` (55 + DDD + 9 dígitos, só números). Enquanto vazio, os botões levam ao Instagram.
- Autorização do Guilherme (e de clientes que aparecem) para cada vídeo.
- Imagem de compartilhamento 1200×630 e `og:url` em `index.html`.
- Foto do Guilherme (opcional).
