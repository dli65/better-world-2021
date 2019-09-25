var offsetTop = $(window).height() * 0.1;

$("a[rel*=leanModal]").leanModal({ top : offsetTop, overlay : 0.4, closeButton: ".modal_close" });

var speakerInfo = {
  'barbara-london-name': 'Barbara London',
  'barbara-london-company': 'Curator and Writer',
  'barbara-london-bio': "Barbara London is a curator and writer who founded the video and media exhibition and collection programs at The Museum of Modern Art, where she worked between 1973 and 2013. The exhibitions Ms. London organized include one-person shows with media pioneers Nam June Paik, Bill Viola, Steina Vasulka, Joan Jonas, Shigeko Kubota, Peter Campus, Gary Hill, and Laurie Anderson. She was the first U.S. curator to showcase the work of Asian artists Zhang Peili, Song Dong, Teiji Furuhashi, Feng Mengbo, and Yang Fudong. Her thematic projects have included Video from Tokyo to Fukui and Kyoto; New Video from China; Anime!; Looking at Music, parts 1-3; Music Video: the Industry and Its Fringes; and Soundings: A Contemporary Score at MoMA. She also organized the Media City Seoul exhibition in 2000.Ms. London was the first to integrate the Internet as part of curatorial practice. This includes Stir-fry (1994); Internyet (1998); and <a href='http://www.moma.org/dotjp/'>dot.jp</a> (1999.) Ms. London has been an adjunct professor in the Yale Graduate Department of Fine Art for ten years, and is a consultant with the Kadist Foundation. She has just completed Video/Art, the First Fifty Years, a book that Phaidon will publish in January 2020. Her writings have appeared in numerous catalogs and publications, including ArtForum, Yishu, Leonardo, Art Asia Pacific, Art in America, Modern Painter, and Image Forum. Her honors include: Getty Research Institute scholar, 2016; a Courage Award by Eyebeam, 2016; Gertrude Contemporary Residency, Melbourne, 2012; Dora Maar House Residency, Menerbes, 2010; a CEC Artslink award in Poland, 2003; a Japanese government Bunkacho Fellowship, 1992-93; and a National Endowment for the Arts Fellowship, 1988-89.",
  'barbara-london-img': 'url(images/2019/speakers/barbara-london.jpg)',

  'tendernet-name': 'Zoe Bachman &#38; Becca Ricks',
  'tendernet-company': 'tendernet',
  'tendernet-bio': "tendernet is a collective of female-identifying artists, writers, engineers, researchers, designers, educators and activists whose work explores speculative design, networked devices, surveillance, and privacy through an intersectional feminist framework. Most recently, the collective has led workshops, produced zines, given talks, and written on topics as diverse as: feminist interfaces and critical design, IoT and privacy, alternatives to Alexa voice assistants, the surveillance of female bodies, and self-tracking & disciplinary power. tendernet consists of Zoe Bachman, Katrina Peterson, and Becca Ricks.",
  'tendernet-img': 'url(images/2019/speakers/tendernet.jpg)',

  'karen-krolak-name': 'Karen Krolak',
  'karen-krolak-company': 'Dictionary of Negative Space',
  'karen-krolak-bio': "Karen Krolak is a free range collaborator based in Boston, MA. Since 2000, she has been the co-founder/Artistic Director of Monkeyhouse, an award winning nonprofit that connects communities through choreography. She earned her BA in Linguistics at Northwestern University and her MFA in Interdisciplinary Arts at Sierra Nevada College.  Her ongoing project, <a href='http://www.dictionaryofnegativespace.com'>the Dictionary of Negative Space</a>, has been featured in exhibitions in Nevada, Louisiana, Massachusetts and Korea, as well as in dance collaborations with Monkeyhouse and Scott McPheeters. Recently, she was awarded an I-ARE residency at the Dance Complex in Cambridge, MA and a Newton Cultural Council Grant to become the first artist in residence at the Newton Cemetery in Newton, MA. She will be a presenter at the 2019 New Media Art Conference at the CICA Museum in Gimpo, Korea and was also invited to present at the 14th International Conference on the Social Context on Death, Dying, and Disposal in Bath, England.",
  'karen-krolak-img': 'url(images/2019/speakers/karen-krolak.jpg)',

  'danny-chapman-name': 'Danny Chapman',
  'danny-chapman-company': 'Ad Hoc',
  'danny-chapman-bio': "Danny Chapman has over fourteen years experience designing digital services for government. During that time, he has worked on government design projects at the Obama White House, the state governments of Hawaii, Kansas, Wisconsin, Rhode Island, and Pennsylvania. His career in government design began in 2004 working as designer, then later as creative director for RI.gov (the official website for all things Rhode Island government). In 2012-2013, he served as a member of the inaugural class of Presidential Innovation Fellows at the Obama White House. Since then, Danny has gone on to help build the design team at <a href='https://adhoc.team'>Ad Hoc</a> — a startup focused on building and maintaining government digital services. Ad Hoc is currently focused on healthcare.gov, and VA.gov — a platform of human centered digital services for Veterans.",
  'danny-chapman-img': 'url(images/2019/speakers/danny-chapman.jpg)',

  'deroy-peraza-name': 'Deroy Peraza',
  'deroy-peraza-company': 'HYPERAKT',
  'deroy-peraza-bio': "Deroy was born in Havana, Cuba, grew up in Miami, fell in love with design in Barcelona and is living the dream in Brooklyn. A founding partner and creative director at Hyperakt, a purpose-driven design studio, he has nearly two decades of experience working for large brands with global impact, small ones with big hearts, and everything in between. His work has been featured in many places, he has lectured at prominent universities, but most importantly, he has always been obsessed with using design in service of creating a more vibrant, inclusive and equitable society.",
  'deroy-peraza-img': 'url(images/2019/speakers/deroy-peraza.jpg)',

  'irene-alvarado-name': 'Irene Alvarado',
  'irene-alvarado-company': 'Google Creative Lab',
  'irene-alvarado-bio': "Irene Alvarado is a creative technologist and UX designer at Google Creative Lab. She works across the domains of computer science and design to explore how emerging technologies will shape new products, services, and creative tools. Previously Irene worked as a UX engineer at Mapzen, helping create open-source maps, and as a developer on Terrapattern, a visual search tool for satellite imagery. She studied Computer Science at Columbia University and Human Computer Interaction at Carnegie Mellon.",
  'irene-alvarado-img': 'url(images/2019/speakers/irene-alvarado.jpg)',

  'alex-chen-name': 'Alex Chen',
  'alex-chen-company': 'Web Accessibility Designer',
  'alex-chen-bio': "Alex is a designer, writer, and martial artist based in Chicago. By day, they are designing audio configuration software, specializing in user research, customer journeys, and accessibility. On the side, they write about how design and tech relate directly to ethics and oppression, with a focus on queer and trans, disabled, and POC (people of color) experiences. When they’re not working or sleeping, you can find them in the gym training martial arts. They got their BFA in Industrial Design at RISD (Rhode Island School of Design) in 2015 and have been practicing focused self-care ever since.",
  'alex-chen-img': 'url(images/2019/speakers/alex-chen.jpg)',

  'pinar-guvenc-name': 'Pinar Guvenc',
  'pinar-guvenc-company': 'Open Style Lab &#38; Eray Carbajo',
  'pinar-guvenc-bio': "After earning her BSc in Industrial Engineering from Bilkent University and MSc in Economics & Finance from Southern Illinois University, Pinar worked at New York Grant Company as a Senior Consultant, specializing in economic incentives and grants for real estate development, job creation and technology innovation. In 2013, she co-founded New York Functional Furniture – an e-commerce platform for functional furniture designed in NYC. She set up the corporate and logistical infrastructure in NYC and managed the business operations. After its showroom opening in NYC January 2015, the company was acquired by Lazzoni USA, an international furniture manufacturer and retailer. <br/>In 2014, she co-founded Sponge Inc., a clean-tech innovation firm, developing unique materials to provide effective environmental clean up for the oil & gas industry, along with applications in construction and manufacturing. Since its launch, it has won three international awards, and has been accepted to EU’s Climate KIC Accelerator in Netherlands and Google’s Plug and Play Incubator in California, USA. <br/>Since early 2015, Pinar manages business operations and commercialization efforts at Eray/Carbajo, an international architecture and design studio based in NYC and Istanbul. Understanding the value of strategic collaborations, she built and teaches a strategic collaboration workshop series for Made in NYC initiative and Pratt Center for Community Development. Pinar also serves on the board of directors of Open Style Lab, a nonprofit organization originated at MIT, based in Parsons New School, with the purpose of making style accessible to people of all abilities.",
  'pinar-guvenc-img': 'url(images/2019/speakers/pinar-guvenc.jpg)',

  'brendan-ciecko-name': 'Brendan Ciecko',
  'brendan-ciecko-company': 'Cuseum',
  'brendan-ciecko-bio': "Brendan Ciecko is the founder and CEO of Cuseum, a platform that helps museums and cultural organizations engage their visitors, members, and patrons. Ciecko has been building technology since the age of 11 and has been recognized by Inc. Magazine as being one of America’s top entrepreneurs under 30. Ciecko has been featured in The New York Times, WIRED, Fast Company, Entrepreneur, TechCrunch, VentureBeat, Esquire, and PC Magazine for his work in design, technology, and business. In addition, Ciecko currently sits on the Steering Committee of the Museum Council at the Museum of Fine Arts, Boston, the Digital Advisory Board at the Neue Galerie New York, and the Community Advisory Board for the Massachusetts International Festival of the Arts. He holds 4 patents in the area of mobile technology.",
  'brendan-ciecko-img': 'url(images/2019/speakers/brendan-ciecko.jpg)',

  'kevin-yoo-name': 'Kevin Yoo',
  'kevin-yoo-company': 'WearWorks',
  'kevin-yoo-bio': "Kevin Yoo is a serial entrepreneur with a background in industrial design from Pratt Institute. Yoo has gained international recognition and awards for pushing sustainability, design and technical innovations forward. Winning competitions such as the Bauhaus Award, German Design Award, National Science Foundation and more. He focuses on social and positive impacts at large scale, yet working closely with the end users to generate long lasting, meaningful products. Yoo has fully patented several technologies and designs, which includes a novel wearable for precise navigation utilizing only the sense of touch called the Wayband. The Wayband made history in 2017, by guiding the first blind man run in the NYC marathon, completely unassisted. We were featured by some of the most prestigious channels, such as front page in The NewYork Times the day of the marathon, a Discovery Channel Documentary and TED Talk showcasing the future of wearables. He is the founder of <a href='https://www.wear.works/'>WearWorks</a>, a haptic design company and <a href='https://www.pewterfurniture.com/'>PewterCollection</a>, making sustainable one-off furniture from reclaimed wood. Yoo has <a href='https://www.metmuseum.org/blogs/in-season/2015/a-tasty-take-on-medieval-rosary-beads'>exhibited</a> at the Metropolitan Museum for merging art and technology utilizing state of the art, edible 3D-printing techniques to experience art through taste for those who are visually impaired. Recently exhibiting at the CooperHewitt for 1 year for assistive technology, Yoo encourages products that help people.",
  'kevin-yoo-img': 'url(images/2019/speakers/kevin-yoo.png)',

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
  'miya-osaki-company': 'SVA',
  'miya-osaki-bio': "Miya Osaki is the chair of the Design For Social Innovation MFA program at School of Visual Arts. In addition, Miya is the founding partner at Diagram a New York-based, women- and minority-owned healthcare design studio. Miya brings her skills in interaction design, human-centered research, storytelling, and behavior design to create experiences aiming to better outcomes and enable patients to better improve their health, wellbeing, care, and quality of life. She is also the co-host of the podcast, Yah, No, focused on the intersection of design, business, and healthcare. Prior to Diagram, Miya served as Director of Experience Design at Johnson & Johnson’s Global Strategic Design Office creating innovative solutions chronic conditions such as diabetes, cardiovascular disease and chronic pain. She is a pioneer recipient of the DesignMatters Fellowship at Art Center College of Design where she collaborated with the UNICEF Innovation Team. A west-coast native, Miya currently lives in Brooklyn, NY.",
  'miya-osaki-img': 'url(images/2019/speakers/miya-osaki.jpg)',
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
