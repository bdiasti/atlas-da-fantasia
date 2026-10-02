'use strict';
// Search links deliberately target titles and authors rather than a changing offer.
const materialLink=(label,url)=>({label,url});
function book(title,author,note='',query=''){
 const term=query||`${title} ${author}`;
 return {kind:'Livro',title,byline:author,note,links:[
  materialLink('Buscar na Amazon','https://www.amazon.com.br/s?i=stripbooks&k='+encodeURIComponent(term)),
  materialLink('Mercado Livre','https://lista.mercadolivre.com.br/'+encodeURIComponent(term.replace(/\s+/g,'-')))
 ]};
}
function screen(title,kind,year,note='',source='',query=''){
 const links=[materialLink('Onde assistir no Brasil','https://www.justwatch.com/br/busca?q='+encodeURIComponent(query||title))];
 if(source)links.push(materialLink('Sobre esta obra',source));
 return {kind,title,byline:String(year),note,links};
}
function game(title,note='',url=''){
 return {kind:'Jogo',title,byline:'PC · confira os requisitos na loja',note,links:[materialLink(url?'Ver na Steam':'Buscar na Steam',url||'https://store.steampowered.com/search/?term='+encodeURIComponent(title))]};
}
function resource(kind,title,byline,note,links){return {kind,title,byline,note,links};}
const materials={
 roots:[
  book('Odisseia','Homero','Uma porta de entrada para a tradição épica grega.'),
  resource('Filme','A Odisseia','2026 · Christopher Nolan','Adaptação cinematográfica da Odisseia de Homero, com Matt Damon como Ulisses. Na consulta de onde assistir, escolha a versão de 2026 dirigida por Nolan.',[
   materialLink('Trailer oficial','https://www.youtube.com/watch?v=f_bKjZeJBBI'),
   materialLink('Onde assistir no Brasil','https://www.justwatch.com/br/busca?q='+encodeURIComponent('A Odisseia')),
   materialLink('Site oficial do filme','https://www.odysseymovie.com/')
  ]),
  book('Mitologia Nórdica','Neil Gaiman','Reconto contemporâneo para conhecer os mitos; não é a fonte antiga das obras do mapa.'),
  book('Dicionário do Folclore Brasileiro','Luís da Câmara Cascudo','Leitura de apoio para explorar outra tradição cultural.')
 ],
 epic:[
  book('Beowulf','J. R. R. Tolkien','Procure a tradução e os comentários de Tolkien; confira o idioma da edição.'),
  book('Edda Poética','','Uma das fontes para conhecer a mitologia nórdica.'),
  book('Kalevala','Elias Lönnrot','Epopeia finlandesa que influenciou o legendário de Tolkien.')
 ],
 fairy:[
  book('Contos de Grimm','Jacob Grimm Wilhelm Grimm','Coletâneas de contos tradicionais; confira se a edição é integral ou adaptada.'),
  book('Contos de fadas','Hans Christian Andersen','Outro caminho clássico da literatura de contos de fadas.')
 ],
 wonder:[
  book('Livro das Mil e Uma Noites','Mamede Mustafa Jarouche','Uma entrada no maravilhoso. A busca inclui o tradutor brasileiro.'),
  book('Os Deuses de Pegāna','Lord Dunsany','Para passar do repertório tradicional à mitologia inventada.','Lord Dunsany Gods Pegana')
 ],
 morris:[
  book('The Well at the World’s End','William Morris','O Poço no Fim do Mundo. Busca pelo título original; confira o idioma.'),
  book('The Wood Beyond the World','William Morris','Outra obra do autor. Busca pelo título original em inglês.')
 ],
 macdonald:[
  book('A Princesa e o Goblin','George MacDonald','Uma entrada mais curta na fantasia do autor.'),
  book('Phantastes','George MacDonald','Para explorar a fantasia de MacDonald voltada ao leitor adulto.')
 ],
 aliceoz:[
  book('Alice no País das Maravilhas','Lewis Carroll','Primeiro livro de Alice.'),
  book('O Mágico de Oz','L. Frank Baum','Primeiro livro da série de Oz.'),
  screen('Alice no País das Maravilhas','Filme',1951,'Animação da Disney; escolha a versão de 1951 na busca.'),
  screen('O Mágico de Oz','Filme',1939,'Adaptação musical clássica; escolha a versão de 1939.')
 ],
 dunsany:[
  book('The Gods of Pegana','Lord Dunsany','Os Deuses de Pegāna. Busca pelo título original.'),
  book('A Filha do Rei de Elfland','Lord Dunsany','Também publicado como The King of Elfland’s Daughter.','Lord Dunsany King Elfland Daughter')
 ],
 tolkien:[
  book('O Hobbit','J. R. R. Tolkien','Comece por esta aventura antes de entrar em O Senhor dos Anéis.'),
  book('O Senhor dos Anéis','J. R. R. Tolkien','A saga principal; busque volume único ou os três volumes.'),
  book('O Silmarillion','J. R. R. Tolkien','Para aprofundar a mitologia e as eras antigas da Terra-média.'),
  screen('O Senhor dos Anéis: A Sociedade do Anel','Filme',2001,'Primeiro filme da trilogia de Peter Jackson.'),
  screen('O Hobbit: Uma Jornada Inesperada','Filme',2012,'Primeiro filme da trilogia de O Hobbit.'),
  screen('O Senhor dos Anéis: Os Anéis de Poder','Série',2022,'Adaptação televisiva ambientada na Segunda Era.')
 ],
 narnia:[
  book('O Leão, a Feiticeira e o Guarda-Roupa','C. S. Lewis','Primeiro livro publicado; uma boa entrada na série.'),
  book('As Crônicas de Nárnia','C. S. Lewis','Para encontrar a coleção completa.'),
  screen('As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa','Filme',2005,'Primeiro filme da trilogia cinematográfica.')
 ],
 lovecraft:[
  book('A Busca Onírica por Kadath','H. P. Lovecraft','Também aparece como A Busca Onírica por Kadath Desconhecida.','Lovecraft Kadath'),
  book('A Chave de Prata','H. P. Lovecraft','Procure também coletâneas que incluam este conto.')
 ],
 tao:[
  book('Lao Tzu: Tao Te Ching','Ursula K. Le Guin','Versão de Le Guin em inglês; confira o idioma.'),
  book('Tao Te Ching','Lao-Tsé','Alternativa para procurar traduções em português.'),
  book('Ishi in Two Worlds','Theodora Kroeber','Contexto antropológico ligado à família de Le Guin. Em inglês.')
 ],
 earthsea:[
  book('O Feiticeiro de Terramar','Ursula K. Le Guin','Comece pelo primeiro romance de Terramar.'),
  book('As Tumbas de Atuan','Ursula K. Le Guin','Segundo romance da série.'),
  screen('Contos de Terramar','Filme',2006,'Animação do Studio Ghibli; adaptação livre, com diferenças em relação aos livros.')
 ],
 brooks:[
  book('A Espada de Shannara','Terry Brooks','Primeiro romance publicado da série.'),
  book('As Pedras Élficas de Shannara','Terry Brooks','Livro que inspirou a primeira temporada da adaptação.','Terry Brooks Elfstones Shannara'),
  screen('The Shannara Chronicles','Série',2016,'A adaptação começa em uma etapa diferente da ordem de publicação dos livros.')
 ],
 jordan:[
  book('O Olho do Mundo','Robert Jordan','Primeiro volume de A Roda do Tempo.'),
  book('A Grande Caçada','Robert Jordan','Segundo volume da série.'),
  screen('A Roda do Tempo','Série',2021,'Adaptação de The Wheel of Time.')
 ],
 williams:[
  book('The Dragonbone Chair','Tad Williams','Primeiro volume de Memory, Sorrow and Thorn; busca pelo título original.'),
  book('Stone of Farewell','Tad Williams','Segundo volume da trilogia original. Confira idioma e divisão dos volumes.')
 ],
 sanderson:[
  book('Mistborn: O Império Final','Brandon Sanderson','Primeiro livro da primeira trilogia de Mistborn.'),
  book('Elantris','Brandon Sanderson','Outra porta de entrada para o Cosmere.'),
  book('O Caminho dos Reis','Brandon Sanderson','Primeiro volume de Os Relatos da Guerra das Tempestades.')
 ],
 historical:[
  book('Um Espelho Distante','Barbara W. Tuchman','História do século XIV; Martin a cita entre suas leituras de pesquisa.'),
  book('Life in a Medieval Castle','Joseph Gies Frances Gies','Vida cotidiana medieval. Busca pelo título em inglês.')
 ],
 druon:[
  book('O Rei de Ferro','Maurice Druon','Primeiro volume de Os Reis Malditos.'),
  book('Os Reis Malditos','Maurice Druon','Para localizar os outros volumes e coleções.'),
  screen('Les Rois maudits','Série',2005,'Adaptação francesa; há também uma versão de 1972. Consulte a disponibilidade brasileira.')
 ],
 martin:[
  book('A Guerra dos Tronos','George R. R. Martin','Primeiro volume de As Crônicas de Gelo e Fogo.'),
  book('Fogo & Sangue','George R. R. Martin','História da dinastia Targaryen que serve de base a House of the Dragon.'),
  screen('Game of Thrones','Série',2011,'Adaptação televisiva da saga principal.'),
  screen('House of the Dragon','Série',2022,'Série também conhecida como A Casa do Dragão.')
 ],
 folk:[
  book('Contos de Grimm','Jacob Grimm Wilhelm Grimm','Leia as histórias tradicionais antes de suas releituras.'),
  book('O Último Desejo','Andrzej Sapkowski','Para observar a releitura dos contos nas primeiras histórias de Geralt.')
 ],
 witcher:[
  book('O Último Desejo','Andrzej Sapkowski','Comece pelos contos de Geralt.'),
  book('A Espada do Destino','Andrzej Sapkowski','Continue por esta coletânea antes da saga de romances.'),
  screen('The Witcher','Série',2019,'Adaptação televisiva dos livros.'),
  game('The Witcher 3: Wild Hunt','Uma história nos jogos, distinta da adaptação para televisão.','https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/')
 ],
 pulp:[
  book('Conan','Robert E. Howard','Procure coletâneas dos contos originais de Howard.'),
  book('Swords and Deviltry','Fritz Leiber','Coletânea de Fafhrd e do Gatuno Cinzento; título original.'),
  book('A Terra Moribunda','Jack Vance','Uma referência para o sistema de magia de D&D.','Jack Vance Dying Earth'),
  book('Elric de Melniboné','Michael Moorcock','Uma entrada no ciclo de Elric.'),
  screen('Conan, o Bárbaro','Filme',1982,'Adaptação cinematográfica; escolha a versão de 1982.')
 ],
 wargames:[
  book('Little Wars','H. G. Wells','Texto histórico sobre jogos de miniaturas. Confira o idioma.'),
  book('Playing at the World','Jon Peterson','História dos jogos que antecederam e ajudaram a formar o RPG. Em inglês.')
 ],
 chainmail:[
  resource('Manual','Chainmail','Gary Gygax · Jeff Perren','Busque a edição histórica do manual; normalmente em inglês.',[materialLink('Buscar no DriveThruRPG','https://www.drivethrurpg.com/en/browse?keyword=Chainmail')]),
  resource('Manual','Blackmoor — Supplement II','D&D original','O suplemento de 1975 é posterior à campanha que deu origem ao cenário.',[materialLink('Buscar no DriveThruRPG','https://www.drivethrurpg.com/en/browse?keyword=Blackmoor%20Supplement%20II')]),
  book('Playing at the World','Jon Peterson','Para entender o contexto histórico de Chainmail e Blackmoor.')
 ],
 dnd:[
  book('Dungeons & Dragons Livro do Jogador','','Manual para jogar; confira a edição e o idioma antes de comprar.','Dungeons Dragons Livro do Jogador'),
  screen('Dungeons & Dragons: Honra Entre Rebeldes','Filme',2023,'Uma aventura cinematográfica ambientada em Forgotten Realms.'),
  resource('Vídeo','Como começar em D&D','Tutoriais em vídeo','Busca por tutoriais em português.',[materialLink('Buscar no YouTube','https://www.youtube.com/results?search_query=Dungeons+Dragons+como+jogar+iniciantes+portugues')])
 ],
 dragonlance:[
  book('Dragons of Autumn Twilight','Margaret Weis Tracy Hickman','Primeiro volume das Crônicas de Dragonlance; também conhecido como Dragões do Crepúsculo do Outono.'),
  book('Dragonlance Chronicles','Margaret Weis Tracy Hickman','Para localizar a trilogia original; confira o idioma.')
 ],
 realms:[
  book('Homeland','R. A. Salvatore','Primeiro livro da trilogia do Elfo Negro; início da história de Drizzt.'),
  game('Baldur’s Gate 3','Uma porta de entrada jogável para Forgotten Realms.','https://store.steampowered.com/app/1086940/Baldurs_Gate_3/'),
  screen('Dungeons & Dragons: Honra Entre Rebeldes','Filme',2023,'Aventura ambientada no cenário dos Reinos Esquecidos.')
 ],
 baldurs:[
  game('Baldur’s Gate 3','Uma entrada contemporânea na série.','https://store.steampowered.com/app/1086940/Baldurs_Gate_3/'),
  game('Baldur’s Gate: Enhanced Edition','Para conhecer o primeiro jogo em sua edição remasterizada.'),
  game('Baldur’s Gate II: Enhanced Edition','Continuação da aventura clássica.')
 ],
 computer:[
  resource('Jogo','Ultima','Série clássica para PC','Compare as edições disponíveis no catálogo da GOG.',[materialLink('Buscar na GOG','https://www.gog.com/en/games?query=Ultima')]),
  game('Wizardry: Proving Grounds of the Mad Overlord','Remake do primeiro Wizardry; confira a edição na loja.'),
  game('Wizardry 8','Outro ponto de entrada na série clássica.')
 ],
 dragonquest:[
  game('DRAGON QUEST III HD-2D Remake','Nova apresentação de um clássico da série.'),
  game('DRAGON QUEST XI S: Echoes of an Elusive Age','Uma aventura independente para conhecer a série.')
 ],
 warhammer:[
  game('Total War: WARHAMMER III','Estratégia ambientada no universo de Warhammer Fantasy.','https://store.steampowered.com/app/1142710/Total_War_WARHAMMER_III/'),
  game('Warhammer: Vermintide 2','Ação cooperativa no universo de fantasia.'),
  book('Trollslayer','William King','Primeira coletânea de Gotrek e Felix; confira o idioma.'),
  book('Warhammer The Old World Rulebook','','Para o jogo de miniaturas; não confundir com Warhammer 40,000.')
 ],
 warcraft:[
  resource('Jogo','Warcraft III: Reforged','Blizzard · PC','Estratégia em tempo real no universo Warcraft.',[materialLink('Ver na Blizzard','https://shop.battle.net/pt-br/product/warcraft-iii')]),
  resource('Jogo','World of Warcraft','Blizzard · PC','MMORPG; confira os requisitos de acesso e assinatura na loja.',[materialLink('Ver na Blizzard','https://shop.battle.net/pt-br/family/world-of-warcraft')]),
  book('Warcraft: O Último Guardião','Jeff Grubb','Romance ambientado no universo dos jogos.'),
  screen('Warcraft: O Primeiro Encontro de Dois Mundos','Filme',2016,'Adaptação cinematográfica do universo Warcraft.')
 ]
};

// Screen adaptations and related retellings. Sources checked on 2026-09-21.
// These recommendations belong to a branch; they do not add influence edges.
const screenAdditions={
 roots:[
  screen('Fúria de Titãs','Filme',1981,'Releitura do mito de Perseu, com criaturas em stop motion de Ray Harryhausen. Escolha a versão de 1981.','https://en.wikipedia.org/wiki/Clash_of_the_Titans_(1981_film)'),
  screen('Fúria de Titãs','Filme',2010,'Nova versão da aventura de Perseu, com Sam Worthington. Recria livremente a mitologia grega.','https://en.wikipedia.org/wiki/Clash_of_the_Titans_(2010_film)'),
  screen('Fúria de Titãs 2','Filme',2012,'Continuação do filme de 2010; também chamado Wrath of the Titans.','https://en.wikipedia.org/wiki/Wrath_of_the_Titans'),
  screen('Jasão e os Argonautas','Filme',1963,'A busca pelo velocino de ouro em uma adaptação livre da tradição dos argonautas.','https://en.wikipedia.org/wiki/Jason_and_the_Argonauts_(1963_film)'),
  screen('Hércules','Filme',1997,'Animação musical da Disney. Uma reinvenção bem livre dos mitos, com Pégaso, Hades e o Olimpo.','https://movies.disney.com/hercules'),
  screen('O Sangue de Zeus','Série',2020,'Animação adulta com uma história original situada na mitologia grega. Título original: Blood of Zeus.','https://www.netflix.com/title/81001988'),
  screen('Percy Jackson e o Ladrão de Raios','Filme',2010,'Adaptação do romance de Rick Riordan, que transporta os deuses gregos para o mundo contemporâneo.','https://en.wikipedia.org/wiki/Percy_Jackson_%26_the_Olympians:_The_Lightning_Thief'),
  screen('Percy Jackson e o Mar de Monstros','Filme',2013,'Segundo filme da versão com Logan Lerman; adapta o segundo livro de Riordan.','https://en.wikipedia.org/wiki/Percy_Jackson:_Sea_of_Monsters'),
  screen('Percy Jackson e os Olimpianos','Série',2023,'Nova adaptação dos livros, começando por O Ladrão de Raios. É uma versão independente dos filmes.','https://en.wikipedia.org/wiki/Percy_Jackson_and_the_Olympians_(TV_series)'),
  screen('Ragnarok','Série',2020,'Série norueguesa que reimagina deuses e gigantes nórdicos em uma cidade contemporânea.','https://en.wikipedia.org/wiki/Ragnarok_(TV_series)'),
  screen('Cidade Invisível','Série',2021,'Fantasia brasileira de Carlos Saldanha que traz entidades do folclore para uma investigação contemporânea.','https://en.wikipedia.org/wiki/Invisible_City_(TV_series)'),
  screen('O Segredo de Kells','Filme',2009,'Animação que reúne arte medieval e imaginário irlandês. Título original: The Secret of Kells.','https://en.wikipedia.org/wiki/The_Secret_of_Kells'),
  screen('A Canção do Oceano','Filme',2014,'Animação inspirada no folclore irlandês, especialmente nas selkies. Título original: Song of the Sea.','https://en.wikipedia.org/wiki/Song_of_the_Sea_(2014_film)'),
  screen('Wolfwalkers','Filme',2020,'Animação da tradição de fantasia irlandesa, sobre pessoas cujos espíritos assumem a forma de lobos.','https://en.wikipedia.org/wiki/Wolfwalkers')
 ],
 epic:[
  screen('A Lenda de Beowulf','Filme',2007,'Robert Zemeckis adapta livremente o poema medieval em animação com captura de movimentos. Roteiro de Neil Gaiman e Roger Avary.','https://en.wikipedia.org/wiki/Beowulf_(2007_film)'),
  screen('A Lenda do Cavaleiro Verde','Filme',2021,'David Lowery revisita a lenda arturiana de Sir Gawain. Também encontrado como The Green Knight.','https://a24films.com/films/the-green-knight'),
  screen('Excalibur','Filme',1981,'A versão de John Boorman para Arthur e os cavaleiros da Távola Redonda, baseada livremente em Thomas Malory.','https://en.wikipedia.org/wiki/Excalibur_(film)'),
  screen('Merlin','Série',2008,'Releitura das lendas arturianas que acompanha Merlin e Arthur ainda jovens. Procure a série da BBC.','https://en.wikipedia.org/wiki/Merlin_(2008_TV_series)'),
  screen('A Espada Era a Lei','Filme',1963,'Animação da Disney sobre o jovem Arthur e Merlin, baseada no romance de T. H. White.','https://movies.disney.com/the-sword-in-the-stone')
 ],
 fairy:[
  screen('Branca de Neve e os Sete Anões','Filme',1937,'Adaptação animada da Disney do conto registrado pelos irmãos Grimm.','https://movies.disney.com/snow-white-and-the-seven-dwarfs'),
  screen('Cinderela','Filme',1950,'Animação clássica que reelabora a tradição do conto de Cinderela. Escolha a versão de 1950.','https://movies.disney.com/cinderella-1950'),
  screen('A Bela e a Fera','Filme',1991,'A versão musical animada da Disney para o conto francês. Escolha a animação de 1991.','https://movies.disney.com/beauty-and-the-beast'),
  screen('A Pequena Sereia','Filme',1989,'Animação inspirada no conto de Hans Christian Andersen, com mudanças importantes no enredo e no desfecho.','https://movies.disney.com/the-little-mermaid'),
  screen('Enrolados','Filme',2010,'Releitura animada de Rapunzel, conto presente na coletânea dos irmãos Grimm.','https://movies.disney.com/tangled'),
  screen('Frozen: Uma Aventura Congelante','Filme',2013,'Fantasia musical livremente inspirada em A Rainha da Neve, de Andersen.','https://movies.disney.com/frozen'),
  screen('Malévola','Filme',2014,'Releitura de A Bela Adormecida pelo ponto de vista da personagem que lança a maldição.','https://movies.disney.com/maleficent'),
  screen('Caminhos da Floresta','Filme',2014,'Adaptação do musical Into the Woods, que entrelaça Cinderela, Rapunzel, Chapeuzinho Vermelho e João e o Pé de Feijão.','https://movies.disney.com/into-the-woods'),
  screen('Once Upon a Time','Série',2011,'Série que cruza personagens dos contos de fadas com uma cidade do nosso mundo.','https://en.wikipedia.org/wiki/Once_Upon_a_Time_(TV_series)'),
  screen('Grimm','Série',2011,'Fantasia policial que transforma motivos dos contos e do folclore em casos investigados no presente.','https://en.wikipedia.org/wiki/Grimm_(TV_series)'),
  screen('A Princesa Prometida','Filme',1987,'Adaptação do livro de William Goldman que brinca com as convenções dos contos de fadas e das aventuras de capa e espada.','https://en.wikipedia.org/wiki/The_Princess_Bride_(film)'),
  screen('Labirinto: A Magia do Tempo','Filme',1986,'Fantasia original de Jim Henson, com goblins e uma jornada por um reino mágico. Aqui entra pela afinidade com o imaginário feérico.','https://www.henson.com/labyrinth/')
 ],
 wonder:[
  screen('Aladdin','Filme',1992,'Animação musical que reinventa a história de Aladim e da lâmpada maravilhosa.','https://movies.disney.com/aladdin'),
  screen('Aladdin','Filme',2019,'Releitura com atores da animação de 1992, dirigida por Guy Ritchie.','https://movies.disney.com/aladdin-2019'),
  screen('O Ladrão de Bagdá','Filme',1940,'Aventura de gênios, feitiços e tapetes voadores no imaginário das Mil e Uma Noites. Escolha a versão de 1940.','https://en.wikipedia.org/wiki/The_Thief_of_Bagdad_(1940_film)'),
  screen('Simbad e a Princesa','Filme',1958,'Aventura com criaturas em stop motion. Título original: The 7th Voyage of Sinbad; usa o herói da tradição de Simbad em uma história cinematográfica.','https://en.wikipedia.org/wiki/The_7th_Voyage_of_Sinbad')
 ],
 macdonald:[
  screen('A Princesa e o Goblin','Filme',1991,'Animação que adapta diretamente o romance de George MacDonald. Título original: The Princess and the Goblin; algumas edições usam anos de lançamento posteriores.','https://en.wikipedia.org/wiki/The_Princess_and_the_Goblin_(film)','The Princess and the Goblin')
 ],
 aliceoz:[
  screen('Alice no País das Maravilhas','Filme',2010,'Tim Burton cria uma nova aventura com os personagens de Lewis Carroll e uma Alice já adulta.','https://movies.disney.com/alice-in-wonderland-2010'),
  screen('Alice Através do Espelho','Filme',2016,'Continuação da versão de 2010, com uma história cinematográfica própria.','https://movies.disney.com/alice-through-the-looking-glass'),
  screen('O Mundo Fantástico de Oz','Filme',1985,'Return to Oz combina elementos de outros livros de L. Frank Baum; tem um tom mais sombrio que o musical de 1939.','https://movies.disney.com/return-to-oz'),
  screen('Oz: Mágico e Poderoso','Filme',2013,'Uma história de origem cinematográfica para o Mágico, ambientada no universo de Oz.','https://movies.disney.com/oz-the-great-and-powerful'),
  screen('Wicked','Filme',2024,'Primeira parte da adaptação do musical. Sua linhagem passa pelo romance de Gregory Maguire, que reimagina o mundo de Oz.','https://en.wikipedia.org/wiki/Wicked_(2024_film)'),
  screen('Wicked: Parte II','Filme',2025,'Continuação de Wicked (2024), adaptando o segundo ato do musical. Título original: Wicked: For Good.','https://en.wikipedia.org/wiki/Wicked:_For_Good')
 ],
 tolkien:[
  screen('O Senhor dos Anéis: As Duas Torres','Filme',2002,'Segundo filme da trilogia de Peter Jackson. Assista depois de A Sociedade do Anel.','https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(film_series)'),
  screen('O Senhor dos Anéis: O Retorno do Rei','Filme',2003,'Conclusão da trilogia de Peter Jackson; vem depois de As Duas Torres.','https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(film_series)'),
  screen('O Hobbit: A Desolação de Smaug','Filme',2013,'Segundo filme da trilogia de O Hobbit, depois de Uma Jornada Inesperada.','https://en.wikipedia.org/wiki/The_Hobbit_(film_series)'),
  screen('O Hobbit: A Batalha dos Cinco Exércitos','Filme',2014,'Conclusão da trilogia de O Hobbit dirigida por Peter Jackson.','https://en.wikipedia.org/wiki/The_Hobbit_(film_series)'),
  screen('O Senhor dos Anéis: A Guerra dos Rohirrim','Filme',2024,'Anime sobre Helm Mão-de-Martelo e o passado de Rohan, anterior à Guerra do Anel.','https://www.warnerbros.com/movies/lord-rings-war-rohirrim'),
  screen('O Senhor dos Anéis','Filme',1978,'Animação de Ralph Bakshi que adapta apenas parte da saga. Escolha a versão animada de 1978.','https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(1978_film)'),
  screen('The Hobbit','Filme',1977,'Especial animado da Rankin/Bass que adapta O Hobbit. Uma versão anterior à trilogia de Peter Jackson.','https://en.wikipedia.org/wiki/The_Hobbit_(1977_film)'),
  screen('The Return of the King','Filme',1980,'Telefilme animado da Rankin/Bass. Faz parte de uma produção diferente da animação de Ralph Bakshi.','https://en.wikipedia.org/wiki/The_Return_of_the_King_(1980_film)')
 ],
 narnia:[
  screen('As Crônicas de Nárnia: Príncipe Caspian','Filme',2008,'Segundo filme da trilogia cinematográfica, depois de O Leão, a Feiticeira e o Guarda-Roupa.','https://movies.disney.com/the-chronicles-of-narnia-prince-caspian'),
  screen('As Crônicas de Nárnia: A Viagem do Peregrino da Alvorada','Filme',2010,'Terceiro filme da trilogia, adaptando a jornada marítima de Caspian, Lúcia, Edmundo e Eustáquio.','https://en.wikipedia.org/wiki/The_Chronicles_of_Narnia:_The_Voyage_of_the_Dawn_Treader')
 ],
 lovecraft:[
  screen('The Call of Cthulhu','Filme',2005,'Adaptação independente de O Chamado de Cthulhu, filmada no estilo do cinema mudo. Uma entrada no horror cósmico do autor.','https://en.wikipedia.org/wiki/The_Call_of_Cthulhu_(film)'),
  screen('A Cor que Caiu do Espaço','Filme',2019,'Adaptação de A Cor que Veio do Espaço, com Nicolas Cage. Horror cósmico, fora do ciclo onírico destacado na árvore.','https://en.wikipedia.org/wiki/Color_Out_of_Space_(film)'),
  screen('O Gabinete de Curiosidades de Guillermo del Toro','Série',2022,'Antologia de horror. Os episódios O Modelo de Pickman e Sonhos na Casa da Bruxa adaptam contos de Lovecraft.','https://en.wikipedia.org/wiki/Guillermo_del_Toro%27s_Cabinet_of_Curiosities')
 ],
 earthsea:[
  screen('Legend of Earthsea','Série',2004,'Minissérie em duas partes, também chamada Earthsea. Adaptação livre dos livros, com diferenças profundas em relação à obra de Le Guin.','https://en.wikipedia.org/wiki/Earthsea_(miniseries)','Earthsea')
 ],
 martin:[
  screen('O Cavaleiro dos Sete Reinos','Série',2026,'A Knight of the Seven Kingdoms adapta as aventuras de Dunk e Egg, anteriores aos acontecimentos de Game of Thrones.','https://en.wikipedia.org/wiki/A_Knight_of_the_Seven_Kingdoms_(TV_series)')
 ],
 folk:[
  screen('O Labirinto do Fauno','Filme',2006,'Fantasia sombria original de Guillermo del Toro que dialoga com o imaginário dos contos de fadas; não é uma adaptação de Sapkowski.','https://en.wikipedia.org/wiki/Pan%27s_Labyrinth'),
  screen('O Conto dos Contos','Filme',2015,'Adaptação de contos do Pentamerone, de Giambattista Basile. Outra vertente dos contos maravilhosos, com tom adulto.','https://en.wikipedia.org/wiki/Tale_of_Tales_(2015_film)')
 ],
 witcher:[
  screen('The Witcher: Lenda do Lobo','Filme',2021,'Animação sobre Vesemir, mentor de Geralt. Expansão do universo da série, também chamada Nightmare of the Wolf.','https://en.wikipedia.org/wiki/The_Witcher:_Nightmare_of_the_Wolf'),
  screen('The Witcher: A Origem','Série',2022,'Minissérie derivada ambientada muito antes de Geralt. Título original: Blood Origin.','https://en.wikipedia.org/wiki/The_Witcher:_Blood_Origin'),
  screen('The Witcher: Sereias das Profundezas','Filme',2025,'Animação que adapta livremente Um Pequeno Sacrifício, conto de A Espada do Destino. Título original: Sirens of the Deep.','https://en.wikipedia.org/wiki/The_Witcher:_Sirens_of_the_Deep')
 ],
 pulp:[
  screen('Conan, o Destruidor','Filme',1984,'Continuação de Conan, o Bárbaro (1982), novamente com Arnold Schwarzenegger.','https://en.wikipedia.org/wiki/Conan_the_Destroyer'),
  screen('Conan, o Bárbaro','Filme',2011,'Nova versão do herói de Robert E. Howard, desta vez com Jason Momoa.','https://en.wikipedia.org/wiki/Conan_the_Barbarian_(2011_film)'),
  screen('Guerreiros de Fogo','Filme',1985,'Red Sonja, com Brigitte Nielsen e Arnold Schwarzenegger. Outra aventura de espada e feitiçaria; não é Conan 3.','https://en.wikipedia.org/wiki/Red_Sonja_(1985_film)'),
  screen('Solomon Kane: O Caçador de Demônios','Filme',2009,'Adaptação de outro herói criado por Robert E. Howard, com James Purefoy.','https://en.wikipedia.org/wiki/Solomon_Kane_(film)')
 ],
 dnd:[
  screen('Caverna do Dragão','Série',1983,'A animação Dungeons & Dragons, sobre jovens que chegam a um mundo de fantasia.','https://en.wikipedia.org/wiki/Dungeons_%26_Dragons_(TV_series)'),
  screen('Dungeons & Dragons: A Aventura Começa Agora','Filme',2000,'Primeira adaptação cinematográfica da marca, com uma aventura própria. É independente de Honra Entre Rebeldes.','https://en.wikipedia.org/wiki/Dungeons_%26_Dragons_(2000_film)','Dungeons & Dragons'),
  screen('Dungeons & Dragons: Wrath of the Dragon God','Filme',2005,'Segundo filme da série cinematográfica iniciada em 2000, com uma nova aventura.','https://en.wikipedia.org/wiki/Dungeons_%26_Dragons:_Wrath_of_the_Dragon_God'),
  screen('Dungeons & Dragons: The Book of Vile Darkness','Filme',2012,'Terceiro filme da série anterior a Honra Entre Rebeldes, com uma história de fantasia sombria.','https://en.wikipedia.org/wiki/Dungeons_%26_Dragons_3:_The_Book_of_Vile_Darkness'),
  screen('A Lenda de Vox Machina','Série',2022,'Animação adulta que adapta a primeira campanha de Critical Role. A ligação com D&D passa pelas partidas de RPG que deram origem à história.','https://en.wikipedia.org/wiki/The_Legend_of_Vox_Machina')
 ],
 dragonlance:[
  screen('Dragonlance: Dragons of Autumn Twilight','Filme',2008,'Animação que adapta o primeiro romance das Crônicas de Dragonlance, de Margaret Weis e Tracy Hickman.','https://en.wikipedia.org/wiki/Dragonlance:_Dragons_of_Autumn_Twilight')
 ],
 dragonquest:[
  screen('Dragon Quest: Your Story','Filme',2019,'Animação baseada em Dragon Quest V. Estreou no Japão em 2019 e internacionalmente em 2020.','https://en.wikipedia.org/wiki/Dragon_Quest:_Your_Story'),
  screen('Dragon Quest: The Adventure of Dai','Série',2020,'Anime baseado no mangá derivado de Dragon Quest. Escolha a adaptação de 2020, diferente da versão clássica conhecida como Fly.','https://en.wikipedia.org/wiki/Dragon_Quest:_The_Adventure_of_Dai_(2020_TV_series)')
 ],
 warhammer:[
  screen('Hammer and Bolter','Série',2021,'Antologia animada com histórias de Age of Sigmar e Warhammer 40.000. Os episódios de Age of Sigmar exploram fantasia; são de um cenário distinto de The Old World.','https://en.wikipedia.org/wiki/Hammer_and_Bolter')
 ]
};
for(const [id,entries] of Object.entries(screenAdditions))materials[id].push(...entries);
