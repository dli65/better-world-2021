var offsetTop = $(window).height() * 0.1;

$("a[rel*=leanModal]").leanModal({ top : offsetTop, overlay : 0.4, closeButton: ".modal_close" });

var speakerInfo = {
  'emiliano-lopez-name': 'Emiliano Lopez',
  'emiliano-lopez-company': 'Project Protocol',
  'emiliano-lopez-bio': "Emiliano Lopez is a justice advocate and an artist based in Los Angeles, CA. He is the founder of Project Protocol, an app that allows people on parole to anonymously rate their parole officers.He has a passion for art and social justice. His artwork was included in Future IDs at Alcatraz (2018-2019), an exhibition about justice reform and second chances.",
  'emiliano-lopez-img': 'url(images/2021/speakers/emiliano_lopez.jpeg)',

  'anna-lee-name': 'Anna Lee',
  'anna-lee-company': 'Lioness',
  'anna-lee-bio': "Anna Lee, is a technical co-founder of Lioness, the women-led sexual wellness company that built the world's first and only smart vibrator that improves understanding of sexual pleasure and orgasms through biofeedback data and science. Anna was previously a mechanical engineer at Amazon, launching the Amazon Dash Button’s original concept and the Kindle Voyage Page Press Technology.  She has most recently been named Forbes 30 Under 30 as well as Paper Magazine's Asian Women Creators You Need to Know. She is a big advocate in Lioness’s mission to expand understanding and research in sexual health, and destigmatize female sexuality.Anna has a B.S in Mechanical Engineering from UC Berkeley and currently resides in the Bay Area.",
  'anna-lee-img': 'url(images/2021/speakers/anna_lee.jpg)',

  'ti-chang-name': 'Ti Chang',
  'ti-chang-company': 'CRAVE',
  'ti-chang-bio': "Ti Chang is a design activist-entrepreneur bridging modern design and activism. She is co-founder and VP of Design of CRAVE, a San Francisco-based company specializing in aesthetic pleasure products. Ti leads the design vision for the company’s full line of products which has won international design awards and has led CRAVE to mainstream partnerships with the likes of Nordstrom, MoMA Design Store, Goop, and Saint Laurent. Ti is featured in the award-winning documentary “The Dilemma of Desire” released in 2020. Ti is best known for her design of the Vesper vibrator necklace in 2014, an iconic necklace that symbolizes female empowerment and creating conversations to normalize pleasure. Ti holds an M.A. in Design Products from the Royal College of Art in London and a B.S. in Industrial Design from the Georgia Institute of Technology. ",
  'ti-chang-img': 'url(images/2021/speakers/ti_chang.jpg)',

  'kelly-rakowski-name': 'Kelly Rakowski',
  'kelly-rakowski-company': 'Lex',
  'kelly-rakowski-bio': "Kell Rakowski is the founder and CEO of Lex a social app designed for and by LGBTQ to connect with friends and their community everywhere. Kell has lived and worked in NYC for 16 years. Her first position out of art school was book designer at Todd Oldham Studio, where she designed the famed Charley Harper monograph. Later, she became photo director at the architecture/design magazine Metropolis. She taught herself hand weaving and co-founded the studio New Friends, designing rugs for Anthropologie and Urban Outfitters. 7 years ago she created an Instagram account Herstory where she infamously posted a 1970s photo of a woman wearing a tee shirt reading 'The Future is Female', thrusting the phrase into popular culture. She believes The Future is Queer. Kell has written for Vogue, interviewing her hero, photographer Joan E. Biren. Lex (fka Personals) was profiled in The New York Times.",
  'kelly-rakowski-img': 'url(images/2021/speakers/kelly_rakowski.jpg)',

  'yindi-pei-name': 'Yindi Pei',
  'yindi-pei-company': 'DAHLIA',
  'yindi-pei-bio': "Yindi is an abolitionist and a craftsperson settling on Ohlone land. In their paid work, Yindi designs for DAHLIA, the digital housing portal for the city and county of San Francisco. They spend most of their un-paid time thinking deeply about cultivating caring communities on rematriated land and “rest as resistance”. Yindi's most recent collaboration is with their fellow speakers on Project Protocol, an app that allows people on parole to anonymously rate their parole officers and an organization that seeks to uplift the voices of those impacted by mass supervision.",
  'yindi-pei-img': 'url(images/2021/speakers/yindi_pei.jpg)',

  'stephanie-yim-name': 'Stephanie Yim',
  'stephanie-yim-company': 'Public Policy Lab',
  'stephanie-yim-bio': "Stephanie Yim is a multidisciplinary designer focused at the intersection of community-centered design and civic tech. She practices her work through a lens of racial equity, decolonization, and care. As a senior designer at Public Policy Lab, Stephanie partners with government agencies and non-profit organizations to design improved ways to deliver public services to at-risk communities.Prior to Public Policy Lab, Stephanie cofounded Good Call, NYC’s first centralized arrest support hotline, and has experience designing in financial tech, education, housing, and the criminal justice system. Stephanie holds a B.S. in Human-Computer Interaction and Decision Science from Carnegie Mellon University. She is a proud native of Queens, New York and daughter to immigrant parents. ",
  'stephanie-yim-img': 'url(images/2021/speakers/stephanie_yim.JPG)',

  'es-braziel-name': 'Es Braziel',
  'es-braziel-company': '',
  'es-braziel-bio': "Driven by my background in cultural anthropology and experiences living on four continents, I explore the intersection of design, bias, and ethics in technology through research and strategy. I honed my craft conducting market strategy with clients including Google, Facebook, PlayStation, and Snap before becoming a Senior Design Researcher at Microsoft, where I worked on the future of web experiences and responsible product innovation. My most recent collaboration is with the fellow speakers on Project Protocol, an app that allows people on parole to anonymously rate their parole officers and an organization that seeks to uplift the voices of those impacted by mass supervision.",
  'es-braziel-img': 'url(images/2021/speakers/es-braziel.png)',

  'lucia-monge-name': 'Lucia Monge',
  'lucia-monge-company': '',
  'lucia-monge-bio': "Lucia Monge is a Peruvian artist whose work explores the way humans position ourselves within the natural world and relate to other living beings, especially plants. Some of her recent projects include adapting and re-performing Darwin's experiments with climbing plants, mycoremediation rituals in urban tree pits, a 'fungi broadcast' about deforestation in Peru, and sending potato seeds to space as messengers for non-colonial visions of space travel. For the past ten years she has organized Plantón Móvil, a yearly 'walking forest' performance that has led to the creation of public green areas in cities such as Lima, London, Providence, Minneapolis, and New York. Monge has shown her work internationally, including at the Museum of Contemporary Art in Lima, Queens Museum, Whitechapel Gallery, and the United Nations Climate Change Conference. She holds an MFA from Rhode Island School of Design and a BFA from Universidad Católica del Perú.",
  'lucia-monge-img': 'url(images/2021/speakers/lucia_monge.jpg)',

  'nu-goteh-name': 'Nu Goteh',
  'nu-goteh-company': 'Room for Magic',
  'nu-goteh-bio': "Nu Goteh is a multi-disciplinary creative & designer who works in audio, visual, and written mediums. He is the co-founder of the strategy and design studio, Room for Magic, and co-founder and creative director of partner publication, Deem Journal. Additionally, Nu is a professor at Parsons School of Design, leading a course entitled Design Dichotomies which explores the intersection of design and society. Nu’s practice is informed by his love for counter/subculture(s), his background as a Liberian-born refugee, and his lifelong dedication to building platforms that enable communities to engage in shared experiences.",
  'nu-goteh-img': 'url(images/2021/speakers/nu_goteh.jpg)',

  'niki-franco-name': 'Niki Franco',
  'niki-franco-company': '(F)empower',
  'niki-franco-bio': "Niki Franco is an abolitionist community organizer, writer, and facilitator of spaces for collective study. Seeking to disrupt the institutionalized bureaucratic frameworks of academia and transactional ways in which relationships exist under capitalism, her work experiments with truth-telling, radical history and thought, and revolutionary imagination.  She also curates educational and cultural programming that navigates the current urgency on global solidarity, environmental and ancestral preservation, and strategies on building emotional and intellectual capacities to dismantle systems of oppression that inform and deform our current lives. She is the host of 'Getting to the Root of It with Venus Roots', a podcast that leans into conversations with artists, theorists, and organizers.  She is currently based in Miami, where she serves as the Political Education Director for (F)empower MIA and Civic Engagement Organizer for Power U Center for Social Change.  From 2009-2021, Niki served as a co-founding director for (F)empower's Miami Community Bail Fund.",
  'niki-franco-img': 'url(images/2021/speakers/niki_franco.jpg)',

  'lukas-bentel-name': 'Lukas Bentel',
  'lukas-bentel-company': 'MSCHF',
  'lukas-bentel-bio': "Lukas Bentel is the Chief Creative Director of MSCHF––a conceptual art collective and brand known for its interventions that engage fashion, art, tech and capitalism across a variety of mediums.With MSCHF, Bentel has had success producing a wide range of digitally native artworks and viral products, from “Satan Shoes,” sneakers created for Lil Nas X to “Severed Spots”, a project that destroyed a Hirst artwork by democratizing it. His works have been featured in The New York Times, The Wall Street Journal, TIME, VICE, CNN, The Washington Post, Vanity Fair, The Guardian, ArtNet, the BBC, and many more international publications.From 2014-2018, Bentel co-led Hello Velocity, an artist group and studio whose creations include “Bitelabs”, “The McMass Project” and “Genecoin”. Fast Co awarded these three projects 'The Best Art on the Internet'.Fun fact: Lukas graduated from RISD and Brown University with degrees in Furniture Design and Multimedia Electronic Music Experiments.",
  'lukas-bentel-img': 'url(images/2021/speakers/lukas_bentel.png)',

  'kevin-wiesner-name': 'Kevin Wiesner',
  'kevin-wiesner-company': 'MSCHF',
  'kevin-wiesner-bio': "Kevin Wiesner is the Chief Creative Director of MSCHF––a conceptual art collective and brand known for its interventions that engage fashion, art, tech and capitalism across a variety of mediums.With MSCHF, Wiesner has had success producing a wide range of digitally native artworks and viral products, from “Satan Shoes,” sneakers created for Lil Nas X to “Severed Spots”, a project that democratized a Damien Hirst artwork by destroying it. His works have been featured in The New York Times, The Wall Street Journal, TIME, VICE, CNN, The Washington Post, Vanity Fair, The Guardian, ArtNet, the BBC, and many more international publications.From 2014-2018, Wiesner co-led Hello Velocity, an artist group and studio whose creations include “Bitelabs”, “The McMass Project” and “Genecoin”. Fast Co awarded these three projects “The Best Art on the Internet”.",
  'kevin-wiesner-img': 'url(images/2021/speakers/kevin_wiesner.jpg)',

  'haus-of-glitter-name': 'The Haus of Glitter Dance Company',
  'haus-of-glitter-company': 'The Haus of Glitter Dance Company',
  'haus-of-glitter-bio': "The Haus of Glitter Dance Company (based in Providence, RI) works, through movement and choreography, to shift the energetic center of the universe towards Queer Feminist BIPOC Liberation. In the work we share and co-create with audiences, we strive to embody ancestral liberation, healing and love in every step and every breath of our creative process and pedagogy. Our choreography aims to reach beyond the stage and into the streets; into our homes; into our institutions; into our hearts.At the intersection of Queer-Affirming Feminist BIPoC cultural preservation + spacekeeping, historical intervention, social practice, concert dance, public spectacle, immersive interdisciplinary performance theatre, and protest/performance art, The Haus of Glitter Dance Company primarily performs Contemporary and Traditional West-African/Afrobeats, House, Vogue, Breakdance, Hip Hop, Drag, Theatre of the Oppressed, and loves collaborating with musicians, dancers, installation artists, performance artists, makers, multimedia artists, historians, and activist communities.",
  'haus-of-glitter-img': 'url(images/2021/speakers/glitter_dance.JPG)',

  'akanksha-deo-name': 'Akanksha Deo',
  'akanksha-deo-company': 'IKEA of Sweden AB',
  'akanksha-deo-bio': "Akanksha Deo Sharma, born in 1991 in New Delhi, graduated from India’s National Institute of Fashion Technology, started working at IKEA as an in-house Designer in 2017 and has been listed under Forbes India 30 under 30 list for year 2020. A fashion designer by qualification and a visual artist, she specializes in textiles and craft. Her most recent project with IKEA - Förändring, a collection which turns rice harvest residue into a new renewable source of material has won Elle Decor EDIDA India award and has been exhibited at the Design Museum, London. Her work has been featured in Forbes, Dezeen, Design Boom, FRAME, Architectural Digest, Elle Decor and Vogue amongst others. Form, function, quality, sustainability and affordability are common denominators in her work — because leaving a positive impact on people and the planet is her driving force. Inquisitive by nature, Deo seeks to understand — and address — the ways in which society is evolving. ",
  'akanksha-deo-img': 'url(images/2021/speakers/akanksha-deo.jpg)',
};

function populateModal(elt) {
  var id = elt.parent().attr('id');
  if (id.endsWith("-d")) {
    id = id.slice(0, -2);
  }
  console.log(id);

  var name = speakerInfo[id + '-name'];
  var img = speakerInfo[id + '-img'];
  var bio = speakerInfo[id + '-bio'];
  var link = speakerInfo[id + '-link'];

  var modal = $("#modalPopup");

  modal.find('.personImg').css('background-image', img);
  modal.find('.name').html(name);
  modal.find('.name').attr('href', link);
  modal.find('.bio').html(bio);
}

function populateModalNoLink(elt) {
  var id = elt.parent().attr('id');
  if (id.endsWith("-d")) {
    id = id.slice(0, -2);
  }
  console.log(id);

  var name = speakerInfo[id + '-name'];
  var img = speakerInfo[id + '-img'];
  var bio = speakerInfo[id + '-bio'];
  var link = speakerInfo[id + '-link'];

  var modal = $("#modalPopupNoLink");

  modal.find('.personImg').css('background-image', img);
  modal.find('.nameNoLink').html(name);
  modal.find('.nameNoLink').attr('href', link);
  modal.find('.bio').html(bio);
}

function clickable(elt) {
  return elt.attr('href') !== '#';
}
