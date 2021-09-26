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


  'clare-stanton-name': 'Clare Stanton',
  'clare-stanton-company': 'Alterspace',
  'clare-stanton-bio': "Clare Stanton is part of the team at the Library Innovation Lab at Harvard Law School. LIL is a group of tinkerers and builders exploring the intersection of libraries, technology, and the law via a series of open-source projects. Clare leads outreach and communications for Perma.cc: a platform that allows scholars, lawyers, journalists, anyone, to preserve their citations from the web so they do not fall victim to linkrot. She has her MLIS from Simmons School of Library and Information Science, and before working at LIL she ran logistics for Clay Christensen&#39;s Forum for Growth and Innovation at the Harvard Business School.",
  'clare-stanton-img': 'url(images/2019/speakers/clare-stanton.jpg)',

  'anastasia-aizman-name': 'Anastasia Aizman',
  'anastasia-aizman-company': 'Alterspace',
  'anastasia-aizman-bio': "Anastasia Aizman is a designer and lead creative technologist at the Library Innovation Lab at Harvard Law School. Library Innovation Lab explores the intersection of libraries, law, and technology with varyingly Very Serious and not-so-serious open-source projects. Anastasia spends most of her days on Caselaw Access Project, which makes 360 years of United States case law available for free online to anyone. Before LIL, Anastasia worked as a designer and art director in advertising firms, non-profits, and small design shops. Anastasia has a BA in Social Inquiry from Eugene Lang and a BFA in Communication Design from Parsons at the New School University.",
  'anastasia-aizman-img': 'url(images/2019/speakers/anastasia-aizman.jpg)',

  'matthew-battles-name': 'Matthew Battles',
  'matthew-battles-company': 'Alterspace',
  'matthew-battles-bio': "Matthew Battles is a maker and thinker whose work merges literary, scholarly, and artistic forms of inquiry. His writing on the cultural dimensions of science and technology appears such venues as The American Scholar, The Atlantic, Harper’s Magazine, and The New York Times. His most recent book, TREE, was published by Bloomsbury in 2017. At metaLAB, Matthew advances a creative research agenda exploring the dark abundance of collections in libraries and museums; technology’s impact on our experience of art, culture, and the natural world; and the conditions of culture and experience in the context of deep time. This work takes varied form in writing, video, and multimedia installation.",
  'matthew-battles-img': 'url(images/2019/speakers/matthew-battles.jpg)',

  'molly-surno-name': 'Molly Surno',
  'molly-surno-company': 'Art Director | Elsewhere Brooklyn',
  'molly-surno-bio': "Molly Surno is an artist and curator using her eclectic background to create dynamic and community driven cultural programs. Surno is the Art Director of Brooklyn's favorite new music venue, Elsewhere, where she run an in house art program called Landscape. <br/> Graduating with an MFA in Visual Art at Columbia University she blends visual art, film, music, food, and technology to create performances and happenings. We of Me, her large scale sound performance, was exhibited at the Getty Museum in 2017 and as part of BAM's Next Wave in the fall of 2015. To date this was the Getty’s most ambitious performance as part of their efforts to bring in new audiences through creative programming. She has also been a resident of Recess, Pioneer Works, Steeprock Arts, and Watershed. In 2008 she founded  her nomadic performance series Cinema 16, which pairs contemporary musicians with experimental films. Named after the New York-based avant-garde film society in 1947 and inspired by Maya Deren's Greenwich Village exhibition of experimental films, Cinema 16 has shown at the Metropolitan Museum of Art, The Kitchen, MoMA/PS1, Museum of Moving Image, among others. Surno has brought thousands of people together to experience avant garde cinema, performance, and music in each of these establishments. She’s curated video artworks for the “Spotlight” version of the 2017 novel The Minefield Girl. Spotlight is a brand new format debuted by Spotify, the streaming service, this past January. For this project, 18 artists were commissioned to create original videos for each of the chapter headings of the novel. Surno has worked for team that created TEDx and as the first Outreach Director for Kickstarter.  She consults on cultural research, curating, and creative programming for brands and organizations such as Kickstarter, Spotify, Sonos, Clif Bar, MANGO, Legoland, WhatShouldWeDo, among others.",
  'molly-surno-img': 'url(images/2019/speakers/molly-surno.jpg)',

  'dhairya-pujara-name': 'Dhairya Pujara',
  'dhairya-pujara-company': 'Ycenter',
  'dhairya-pujara-bio': "Dhairya Pujara is the Founder, CEO at Ycenter. Dhairya has designed and delivered programs and keynotes on the topics of Innovation, Entrepreneurship and Creative Problem Solving. In 2015, Dhairya was awarded an O1A Visa by the US Government - a visa reserved for individuals of extra-ordinary abilities. He was a contributor at The HuffPost, ex-curator for World Economic Forum's Global Shaper Philadelphia HUB and an Entrepreneur-in-Residence at 1776. <br/> Ycenter is a Global Design Thinking Enterprise. It offers collaborative, hands on and sector agnostic programs with measurable impact. It has successfully completed Design Thinking workshops in reputed universities like Wharton and Stanford and co-created solutions with reputed organizations in 10 countries across 4 continents.",
  'dhairya-pujara-img': 'url(images/2019/speakers/dhairya-pujara.jpg)',

  'miya-osaki-name': 'Miya Osaki',
  'miya-osaki-company': 'SVA Director',
  'miya-osaki-bio': "Miya Osaki is the chair of the Design For Social Innovation MFA program at School of Visual Arts. In addition, Miya is the founding partner at Diagram a New York-based, women- and minority-owned healthcare design studio. Miya brings her skills in interaction design, human-centered research, storytelling, and behavior design to create experiences aiming to better outcomes and enable patients to better improve their health, wellbeing, care, and quality of life. She is also the co-host of the podcast, Yah, No, focused on the intersection of design, business, and healthcare. Prior to Diagram, Miya served as Director of Experience Design at Johnson & Johnson’s Global Strategic Design Office creating innovative solutions chronic conditions such as diabetes, cardiovascular disease and chronic pain. She is a pioneer recipient of the DesignMatters Fellowship at Art Center College of Design where she collaborated with the UNICEF Innovation Team. A west-coast native, Miya currently lives in Brooklyn, NY.",
  'miya-osaki-img': 'url(images/2019/speakers/miya-osaki.jpg)',

  'taylor-cook-name': 'Taylor Cook',
  'taylor-cook-company': 'Program Manager at the Service Design Lab | Office of Design & Delivery at the City of Austin',
  'taylor-cook-bio': "I am the Program Manager for the City of Austin’s Service Design Lab in the office Office of Design and Delivery. We lead City departments and stakeholders through design thinking to understand resident needs and develop solutions with and for our end users. Prior to joining the City, I was the founding Executive Director of Farmshare Austin and a healthcare policy consultant for the Texas Health and Human Services Commission where I worked on IT procurement and health information technology projects. I havea B.A. in Economics and Political Science from Hollins University in Roanoke, Virginia and an M.A. in Economics and Master of Public Administration from the University of Montana.",
  'taylor-cook-img': 'url(images/2019/speakers/taylor-cook.jpg)',

  'christopher-luedtke-name': 'Christopher Luedtke',
  'christopher-luedtke-company': 'Service Designer | Office of Design & Delivery at the City of Austin',
  'christopher-luedtke-bio': "I currently work for the City of Austin as a Service Designer in the Office of Design and Delivery. My goal is to make public services accessible, equitable, functional, and transparent. I began my career as a case manager for Homeless Outreach Stabilization Transition (HOST) doing street outreach to vulnerable populations in Seattle and after completing my Masters in Clinical Psychology, I worked with child protective services. Over-time, policies changed, a vote defunded another budget, and caseload sizes changed the person in front of me into a number. I gravitated to design because I found that the discipline has grown from a practice focused mainly on an aesthetic to one with a clear focus on the person or group of people who use a product/service. It's a way for us all to think together- to work as one and make a difference in the lives of the users and our communities as a whole.",
  'christopher-luedtke-img': 'url(images/2019/speakers/christopher-luedtke.jpg)',

  'jiayi-dong-name': 'Jiayi (Jai) Dong',
  'jiayi-dong-company': 'SVA DSI',
  'jiayi-dong-bio': "Jiayi Dong is a service designer and strategist in sustainable and ethical fashion who currently resides in New York City. She has a BS degree in Business Management and Entrepreneurship and an MFA degree in Design for Social Innovation. Jiayi has a strong passion for leveraging resources to find the best solutions. Through the lens of social design, she continues to explore innovative business opportunities. She is the founder of The Slow Hands’ Lab, a program to help Su Embroidery artists increase their economic opportunities and have their value acknowledged by pairing them in collaboration with contemporary designers. Outside of the office, Jiayi is an avid reader and traveler. On weekends, you might find her at the local bookstore or waiting in the check-in line at JFK Airport.",
  'jiayi-dong-img': 'url(images/2019/speakers/jiayi-dong.jpeg)',

  'zach-narva-name': 'Zach Narva',
  'zach-narva-company': 'SVA DSI',
  'zach-narva-bio': "Zach Narva is a strategist and designer based in Boston, MA with a background in visual and UX design. Interested primarily in mission-driven work, Zach has designed solutions in the food access, healthcare, and gender equity spaces. During his time at the School of Visual Arts MFA program in Design for Social Innovation MFA, Zach focused intently on developing services and resources for the LGBTQ+ community. His thesis project—Camp Sharon & Karen—built a curriculum and created a new learning environment for parents of trans and gender-nonconforming kids, offering space to address uncertainty and find new ways to demonstrate support. In his free time, Zach enjoys hosting dinner parties, photography, and smashing the patriarchy.",
  'zach-narva-img': 'url(images/2019/speakers/zach-narva.JPG)',

  'rutvika-gupta-name': 'Rutvika Gupta',
  'rutvika-gupta-company': 'SVA DSI',
  'rutvika-gupta-bio': "Rutvi Gupta is a designer and researcher focused on inclusive, community-centered, and compassionate design. With a BFA in Industrial Design and an MFA in Design for Social Innovation, Rutvi is passionate about co-creating with communities and using design as a tool to build capacity. She is currently a designer and researcher at Nava, a Public Benefit Corporation that partners with government agencies to positively transform how millions of people experience government. For the past two years, Rutvi has been working at various organizations, like the NYC Mayor’s Office of Economic Opportunity, and a start-up exploring ways society can be reimagined and more equitable. She is also the co-founder of a start-up aiming to positively impact the Indian textile industry and the livelihoods of artisans. Born and raised in the Midwest and India, Rutvi currently lives in New York City and can be found constantly searching for the best cup of chai.",
  'rutvika-gupta-img': 'url(images/2019/speakers/rutvika-gupta.jpg)',

  'joao-caeiro-name': 'Joao Caeiro',
  'joao-caeiro-company': 'RootStudio',
  'joao-caeiro-bio': "Born in Lisbon, Portugal, Joao Boto Caeiro studied fine arts at the Lisbon Architecture School, founded RootStudio with his business partner Fulvio Capurso. RootStudio began with community service and social impact projects in rural areas of Oaxaca. After a 10-year practice through the present time, Rootstudio’s organic evolution extends across a myriad of disciplines and includes many collaborations. An integral component of the studio is the investigation and use of low tech and sustainable techniques and processes in design and building. Rootstudio’s portfolio encompasses both public and private work, including museums, universities, housing, landscapes, gardens, and sculpture.",
  'joao-caeiro-img': 'url(images/2019/speakers/joao-caeiro.jpg)',

  'luciana-rodrigues-name': 'Luciana Rodrigues',
  'luciana-rodrigues-company': 'SVA DSI',
  'luciana-rodrigues-bio': "Luciana Rodrigues is a strategy designer with a passion for working within the healthcare space. Upon recently completing her MFA in Design for Social Innovation, Lu sought out opportunities that would allow her to bring her talents in design research together with her passion for working with creating a more equitable healthcare system. Lu is beginning a position with the Siebel Center for Design in Champaign-Urbana, Illinois as a senior strategy designer, leading a team on a project focused on rural healthcare and improving the outcomes of the 75 and up community living within towns of 5,000 to 15,000 people. Born and raised in the DC area as the daughter of two incredibly hardworking immigrants from Brazil, Lu is in the process of moving to Champaign-Urbana and as a self-proclaimed concert aficionado, can usually be found anywhere that there is live music involved.",
  'luciana-rodrigues-img': 'url(images/2019/speakers/luciana-rodrigues.JPG)',

  'ceara-oleary-name': "Ceara O'Leary",
  'ceara-oleary-company': 'Detroit Collaborative Design Center',
  'ceara-oleary-bio': "Ceara O’Leary, AIA, is the Co-Executive Director at the Detroit Collaborative Design Center (DCDC), where she leads collaborative community design and planning projects citywide. She is also a Professor of Practice at the University of Detroit Mercy School of Architecture, teaching public interest design and community development courses. Ceara joined the DCDC in 2012 as an Enterprise Rose Architectural Fellow. She speaks nationally on DCDC’s work and community design and development and is the current Chair of the AIA Housing and Community Development Knowledge Community Advisory Group. In 2015 Ceara was named a “Top Urban Innovator” by Next City Vanguard and completed a fellowship with the ULI Larsen Center for Leadership. Previously, Ceara worked as a Community Designer with bcWORKSHOP and a Public Design Intern at the Gulf Coast Community Design Studio in Biloxi, Mississippi. Ceara graduated from the University of California, Berkeley with Masters degrees in Architecture and City & Regional Planning and she earned her undergraduate degree from Brown University.",
  'ceara-oleary-img': 'url(images/2019/speakers/ceara-oleary.jpg)',

  'julia-kowalski-name': 'Julia Kowalski',
  'julia-kowalski-company': 'Detroit Collaborative Design Center',
  'julia-kowalski-bio': "Julia Kowalski is a designer and project manager at the Detroit Collaborative Design Center (DCDC). She holds a Master of Architecture from the University of Detroit Mercy School of Architecture. She is continually inspired by Samuel Mockbee's decree, \"proceed + be bold!\" This boldness, coupled with compassion, is lived out through her work at the DCDC. Additionally, Julia was granted a Challenge Detroit Fellowship for 2016-2017. This has prompted her to dive deeper into the City of Detroit and further explore how design can be a tool that catalyzes social and individual change.",
  'julia-kowalski-img': 'url(images/2019/speakers/julia-kowalski.jpg)',
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
