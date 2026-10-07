// ===== DADOS GERAIS DO SITE (contato, textos, foto) =====
export const SITE = {
  brand: 'GV.FILMS_',
  slogan: 'Conteúdo que valoriza sua marca',
  instagram: 'https://www.instagram.com/gv.films_/',
  // CONFIRMAR ANTES DE PUBLICAR: o número informado (+55 41 998901-5669) tem um dígito a mais.
  // Formato exigido: 55 + DDD + 9 dígitos (13 números, só dígitos). Vazio/inválido => botões levam ao Instagram.
  whatsappNumber: '',
  whatsappMessage: 'Olá, Guilherme! Conheci seu trabalho pelo site e gostaria de conversar sobre um projeto.',
  // FOTO DO GUILHERME: coloque o arquivo em /public e informe o caminho (ex.: '/guilherme.jpg'). Vazio = solução tipográfica.
  photo: '',
};
export const waLink = (msg = SITE.whatsappMessage) =>
  /^55\d{11}$/.test(SITE.whatsappNumber)
    ? `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`
    : SITE.instagram;
export const NAV = [['Início', '#inicio'], ['Trabalhos', '#trabalhos'], ['Serviços', '#servicos'], ['Sobre', '#sobre'], ['Contato', '#contato']];
export const SERVICES = [
  { n: '01', t: 'PRODUÇÃO AUDIOVISUAL', d: 'Vídeos pensados para transmitir a essência do seu negócio com criatividade, técnica e identidade.' },
  { n: '02', t: 'REELS & CONTEÚDO DIGITAL', d: 'Conteúdos dinâmicos e envolventes para fortalecer sua presença nas redes sociais.' },
  { n: '03', t: 'SOCIAL MEDIA', d: 'Planejamento e criação de conteúdo para construir uma comunicação mais consistente e profissional.' },
];
