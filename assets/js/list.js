let tableItems = [
   {
      nome: "vscode",
      categoria: "Editor de código online",
      descricao: "Versão online do visual studio code da microsoft",
      site: "https://vscode.dev/",
      add: "XX/XX/XXXX"
   },
   {
      nome: "fronteditor",
      categoria: "Editor de código online",
      descricao: "Um bom editor de código online com comportamento igual ao vscode",
      site: "https://fronteditor.dev/",
      add: "XX/XX/XXXX"
   },
   {
      nome: "codepen",
      categoria: "Editor de código online",
      descricao: "O Codepen é um editor de código online desenvolvido pela...",
      site: "https://codepen.io/pen/",
      add: "XX/XX/XXXX"
   },
   {
      nome: "readme.so",
      categoria: "Editor de código online",
      descricao: "Com o readme.so é possível gerar um readme.md para o github de forma fácil",
      site: "https://readme.so/pt/editor/",
      add: "XX/XX/XXXX"
   },
   {
      nome: "icomoon.io",
      categoria: "SVG/Imagens",
      descricao: "Com o icomooon você pode importar o css para utilizar os svgs disponíveis na página",
      site: "https://icomoon.io/app/#/select",
      add: "XX/XX/XXXX"
   },
   {
      nome: "badges para GITHUB",
      categoria: "Repositórios",
      descricao: "Melhor repositório de badges para utilizar no profile do github, só copiar e colar",
      site: "https://github.com/iuricode/readme-template/blob/main/badges/badges.md",
      add: "XX/XX/XXXX"
   },
   {
      nome: "image extractor",
      categoria: "SVG/Imagens",
      descricao: "Extrai imagens e svg do site que você quiser",
      site: "https://extract.pics/",
      add: "XX/XX/XXXX"
   },
   {
      nome: "cdnjs",
      categoria: "Import data",
      descricao: "Site que contém diversos links cdn para importar, Ex.: fonte awesome, bootstrap e etc...",
      site: "https://cdnjs.com/",
      add: "XX/XX/XXXX"
   },
   {
      nome: "css battle",
      categoria: "praticar programação online",
      descricao: "site para praticar online a linguagem css, com desafios",
      site: "https://cssbattle.dev/",
      add: "XX/XX/XXXX"
   },
   {
      nome: "use animations",
      categoria: "SVG/Imagens",
      descricao: "Animações com svg",
      site: "https://useanimations.com/",
      add: "XX/XX/XXXX"
   },
   {
      nome: "making css",
      categoria: "Gerador de código",
      descricao: "Gerador de transition para css",
      site: "https://makingcss.com/transition",
      add: "XX/XX/XXXX"
   },
   {
      nome: "frontpush",
      categoria: "links para desenvolimento frontend",
      descricao: "links para auxiliar no desenvolvimento frontend",
      site: "https://frontpush.notion.site/frontpush/Notion-FrontPUSH-2-0-ff857f2b78234a6981d1e4d40874a6cc",
      add: "XX/XX/XXXX"
   },
   {
      nome: "free-css",
      categoria: "Templates html/css",
      descricao: "Site com templates gratuítos de páginas para fazer download",
      site: "https://www.free-css.com/free-css-templates",
      add: "XX/XX/XXXX"
   },
   {
      nome: "Edrawmind",
      categoria: "Mapa mental",
      descricao: "Site para fazer mapas mentais",
      site: "https://www.edrawmind.com/online/create?lang=pt",
      add: "XX/XX/XXXX"
   },
   {
      nome: "ProgramaThor",
      categoria: "Vagas para DEVS",
      descricao: "Site para encontrar vagas de emprego para desenvolvedores",
      site: "https://programathor.com.br/",
      add: "XX/XX/XXXX"
   },
   {
      nome: "Picsum",
      categoria: "Gerador de fotos",
      descricao: "Site para gerar uma imagem aleatória para seu projeto, o seguinte endereço: https://picsum.photos/1920/1080 vai gerar uma foto de 1920X1080",
      site: "https://picsum.photos/",
      add: "XX/XX/XXXX"
   },
   {
      nome: "Simpleicons",
      categoria: "SVG/Imagens",
      descricao: "Site com vários SVGS, é só clicar em cima da imagem para copiar o código SVG e colar no seu projeto",
      site: "https://simpleicons.org/",
      add: "XX/XX/XXXX"
   },
   {
      nome: "Fakenamegenerator",
      categoria: "Gerador de nomes",
      descricao: "Site para gerar nomes aleatórios para testar os cadastros no seu projeto",
      site: "https://pt.fakenamegenerator.com/gen-random-br-br.php",
      add: "XX/XX/XXXX"
   },
   {
      nome: "Freewha",
      categoria: "Hospedagem Free",
      descricao: "Hospedagem PHP/Mysql de graça para testar/hospedar seu projeto",
      site: "https://freewha.com/",
      add: "XX/XX/XXXX"
   },
   {
      nome: "Shields",
      categoria: "Badges",
      descricao: "Site para gerar badges personalizadas, muito bom para colocar no perfil do github",
      site: "https://shields.io/",
      add: "XX/XX/XXXX"
   },
   {
      nome: "Sqliteonline",
      categoria: "Treinar SQL online",
      descricao: "Site para treinar comandos SQL online",
      site: "https://sqliteonline.com/",
      add: "19/12/2022"
   },
   {
      nome: "Brandcolors",
      categoria: "Paleta de cores",
      descricao: "Site com o código hexadeximal utilizado nas mais diversas empresas",
      site: "https://brandcolors.net/",
      add: "20/12/2022"
   },
   {
      nome: "Coolors",
      categoria: "Paleta de cores",
      descricao: "Site com gerador de paleta de cores, é só ir apertando espaço para gerar uma nova paleta de cores",
      site: "https://coolors.co/generate",
      add: "20/12/2022"
   },
   {
      nome: "HTML5UP",
      categoria: "Templates html/css",
      descricao: "Site com templates html/css para sites",
      site: "https://html5up.net/",
      add: "20/12/2022"
   },
   {
      nome: "TEMPLATEMO",
      categoria: "Templates html/css",
      descricao: "Site com templates html/css para sites",
      site: "https://templatemo.com/",
      add: "20/12/2022"
   },
   {
      nome: "FREEHTML5",
      categoria: "Templates html/css",
      descricao: "Site com templates html/css para sites",
      site: "https://freehtml5.co/",
      add: "20/12/2022"
   },
   {
      nome: "HTMLXCSS3",
      categoria: "Templates html/css",
      descricao: "Site com templates html/css para sites",
      site: "https://www.html5xcss3.com/",
      add: "20/12/2022"
   },
   {
      nome: "W3Layouts",
      categoria: "Templates html/css",
      descricao: "Site com templates html/css para sites",
      site: "https://w3layouts.com/",
      add: "20/12/2022"
   },
   {
      nome: "OnePageLove",
      categoria: "Templates html/css",
      descricao: "Site com templates html/css para sites",
      site: "https://onepagelove.com/",
      add: "20/12/2022"
   },
   {
      nome: "BootsWhatch",
      categoria: "Templates html/css",
      descricao: "Site com templates bootstrap para sites",
      site: "https://bootswatch.com/",
      add: "20/12/2022"
   },
   {
      nome: "Tooplate",
      categoria: "Templates html/css",
      descricao: "Site com templates html/css para sites",
      site: "https://www.tooplate.com/",
      add: "20/12/2022"
   },
   {
      nome: "ThemeWagon",
      categoria: "Templates html/css",
      descricao: "Site com templates html/css para sites",
      site: "https://themewagon.com/",
      add: "20/12/2022"
   },
   {
      nome: "Whatismyscreenresolution",
      categoria: "Responsividade",
      descricao: "Site para testar as resoluções de sites em diversos dispositivos",
      site: "http://whatismyscreenresolution.net/multi-screen-test",
      add: "20/12/2022"
   },
   {
      nome: "Pravatar",
      categoria: "SVG/Imagens",
      descricao: "Site para gerar fotos aleatórias que você pode colocar no seu site",
      site: "https://pravatar.cc/",
      add: "16/01/2023"
   },
   {
      nome: "Frontendpractice",
      categoria: "Desafios",
      descricao: "Desafios de projetos front end para desenvolver",
      site: "https://www.frontendpractice.com/projects",
      add: "30/01/2023"
   },
   {
      nome: "Botão de whatsapp",
      categoria: "Gerador de código",
      descricao: "Gerador de botão para whatsapp",
      site: "https://adamante.com.br/whatsapp-site-botao/",
      add: "31/01/2023"
   },
   {
      nome: "Botão de whatsapp",
      categoria: "Gerador de código",
      descricao: "Gerador de botão para whatsapp",
      site: "https://www.cupcom.com.br/whatsapp",
      add: "07/02/2023"
   },
   {
      nome: "Botão de whatsapp",
      categoria: "Gerador de código",
      descricao: "Gerador de botão para whatsapp",
      site: "https://crmpiperun.com/tools/wa-button/",
      add: "07/02/2023"
   },
   {
      nome: "freepik",
      categoria: "SVG/Imagens",
      descricao: "banco de imagens gratuito mais conhecido da internet. No Freepik você encontra imagens, arquivos em PSD, vetores e ícones.",
      site: "https://br.freepik.com/",
      add: "07/02/2023"
   },
   {
      nome: "unsplash",
      categoria: "SVG/Imagens",
      descricao: "é um dos melhores bancos de imagens gratuito. Suas imagens tem um estilo diferenciado e você pode usá-las para fins comerciais ou não comerciais",
      site: "https://unsplash.com/",
      add: "07/02/2023"
   },
   {
      nome: "https://feathericons.com/",
      categoria: "SVG/Imagens",
      descricao: "Um dos melhores sites de SVGs",
      site: "https://feathericons.com/",
      add: "12/02/2023"
   },
   {
      nome: "Iconer",
      categoria: "SVG/Imagens",
      descricao: "Na minha opnião o melhor site para icones SVG",
      site: "https://iconer.app/",
      add: "15/02/2023"
   },
   {
      nome: "iconscout",
      categoria: "SVG/Imagens",
      descricao: "Coleção de icones e svgs e imagens",
      site: "https://iconscout.com/",
      add: "19/02/2023"
   },
   {
      nome: "undraw",
      categoria: "SVG/Imagens",
      descricao: "Coleção de imagens SVG",
      site: "https://undraw.co/",
      add: "19/02/2023"
   },
   {
      nome: "svgrepo",
      categoria: "SVG/Imagens",
      descricao: "Site com vários svg para baixar",
      site: "https://www.svgrepo.com/",
      add: "19/02/2023"
   },
   {
      nome: "macropik",
      categoria: "SVG/Imagens",
      descricao: "Site com várias ilustrações para download",
      site: "https://macropik.com/",
      add: "19/02/2023"
   },
   {
      nome: "animista",
      categoria: "Gerador de código",
      descricao: "Site para gerar códigos css para animações",
      site: "https://animista.net/",
      add: "19/02/2023"
   },
   {
      nome: "angrytools",
      categoria: "ferramentas online",
      descricao: "conjunto de ferramentas para programadores para imagens e gerar código css entre outros",
      site: "https://angrytools.com/",
      add: "19/02/2023"
   },
];

let example = [
   {
      nome: "",
      categoria: "",
      descricao: "",
      site: "",
      add: "XX/XX/XXXX"
   },
];