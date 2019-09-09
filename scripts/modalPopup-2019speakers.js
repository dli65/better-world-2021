var offsetTop = $(window).height() * 0.1;

$("a[rel*=leanModal]").leanModal({ top : offsetTop, overlay : 0.4, closeButton: ".modal_close" });

var speakerInfo = {
  'barbara-london-name': 'Barbara London',
  'barbara-london-company': 'Curator and Writer',
  'barbara-london-bio': "Barbara London is a curator and writer who founded the video and media exhibition and collection programs at The Museum of Modern Art, where she worked between 1973 and 2013. The exhibitions Ms. London organized include one-person shows with media pioneers Nam June Paik, Bill Viola, Steina Vasulka,,and Laurie Anderson. She was the first U.S. curator to showcase the work of Asian artists Zhang Peili, Song Dong, Teiji and Yang Fudong. She also organized the Media City Seoul exhibition in 2000. Ms. London was the first to integrate the Internet as part of curatorial practice. This includes Stir-fry (1994); Internyet (1998); and dot.jp  (1999.) Ms. London has been an adjunct professor in the Yale Graduate Department of Fine Art for ten years, and is a consultant with the Kadist Foundation. She has just completed Video/Art, the First Fifty Years, a book that Phaidon will publish in January 2020.",
  'barbara-london-img': 'url(images/2019/speakers/barbara-london.jpg)',
  'tendernet-name': 'tendernet',
  'tendernet-company': '',
  'tendernet-bio': "tendernet is a collective of female-identifying artists, writers, engineers, researchers, designers, educators and activists whose work explores speculative design, networked devices, surveillance, and privacy through an intersectional feminist framework. Most recently, the collective has led workshops, produced zines, given talks, and written on topics as diverse as: feminist interfaces and critical design, IoT and privacy, alternatives to Alexa voice assistants, the surveillance of female bodies, and self-tracking disciplinary power. tendernet consists of Zoe Bachman, Katrina Peterson, and Becca Ricks.",
  'tendernet-img': 'url(images/2019/speakers/tendernet.jpg)',
  'danny-chapman-name': 'Danny Chapman',
  'danny-chapman-company': 'Designer',
  'danny-chapman-bio': "Danny Chapman has over fourteen years experience designing digital services for government. During that time, he has worked on government design projects at the Obama White House, the state governments of Hawaii, Kansas, Wisconsin, Rhode Island, and Pennsylvania. His career in government design began in 2004 working as designer, then later as creative director for RI.gov (the official website for all things Rhode Island government). In 2012-2013, he served as a member of the inaugural class of Presidential Innovation Fellows at the Obama White House. Since then, Danny has gone on to help build the design team at Ad Hoc (https://adhoc.team) — a startup focused on building and maintaining government digital services. Ad Hoc is currently focused on healthcare.gov, and VA.gov — a platform of human centered digital services for Veterans.",
  'danny-chapman-img': 'url(images/2019/speakers/danny-chapman.jpg)',
  'karen-krolak-name': 'Karen Krolak',
  'karen-krolak-company': 'Dictionary of Negative Space',
  'karen-krolak-bio': "Karen Krolak is a free range collaborator based in Boston, MA. Since 2000, she has been the co-founder/Artistic Director of Monkeyhouse, an award winning nonprofit that connects communities through choreography. She earned her BA in Linguistics at Northwestern University and her MFA in Interdisciplinary Arts at Sierra Nevada College.  Her ongoing project, the Dictionary of Negative Space (www.dictionaryofnegativespace.com), has been featured in exhibitions in Nevada, Louisiana, Massachusetts and Korea, as well as in dance collaborations with Monkeyhouse and Scott McPheeters. Recently, she was awarded an I-ARE residency at the Dance Complex in Cambridge, MA and a Newton Cultural Council Grant to become the first artist in residence at the Newton Cemetery in Newton, MA. She will be a presenter at the 2019 New Media Art Conference at the CICA Museum in Gimpo, Korea and was also invited to present at the 14th International Conference on the Social Context on Death, Dying, and Disposal in Bath, England.",
  'karen-krolak-img': 'url(images/2019/speakers/karen-krolak.jpg)',
  'deroy-peraza-name': 'Deroy Peraza',
  'deroy-peraza-company': 'HYPERAKT',
  'deroy-peraza-bio': "Deroy was born in Havana, Cuba, grew up in Miami, fell in love with design in Barcelona and is living the dream in Brooklyn. A founding partner and creative director at Hyperakt, a purpose-driven design studio, he has nearly two decades of experience working for large brands with global impact, small ones with big hearts, and everything in between. His work has been featured in many places, he has lectured at prominent universities, but most importantly, he has always been obsessed with using design in service of creating a more vibrant, inclusive and equitable society.",
  'deroy-peraza-img': 'url(images/2019/speakers/deroy-peraza.jpg)',
  'irene-alvarado-name': 'Irene Alvarado',
  'irene-alvarado-company': 'Google Creative Lab',
  'irene-alvarado-bio': "Irene Alvarado is a creative technologist and UX designer at Google Creative Lab. She works across the domains of computer science and design to explore how emerging technologies will shape new products, services, and creative tools. Previously Irene worked as a UX engineer at Mapzen, helping create open-source maps, and as a developer on Terrapattern, a visual search tool for satellite imagery. She studied Computer Science at Columbia University and Human Computer Interaction at Carnegie Mellon.",
  'irene-alvarado-img': 'url(images/2019/speakers/irene-alvarado.jpg)',
  'alex-chen-name': 'Alex Chen',
  'alex-chen-company': 'Designer, Writer, and Martial Artist',
  'alex-chen-bio': "Alex is a designer, writer, and martial artist based in Chicago. By day, they are designing audio configuration software, specializing in user research, customer journeys, and accessibility. On the side, they write about how design and tech relate directly to ethics and oppression, with a focus on queer and trans, disabled, and POC (people of color) experiences. When they’re not working or sleeping, you can find them in the gym training martial arts. They got their BFA in Industrial Design at RISD (Rhode Island School of Design) in 2015 and have been practicing focused self-care ever since.",
  'alex-chen-img': 'url(images/2019/speakers/alex-chen.jpg)',
  //  'pinar-guvenc-name': 'Pinar Guvenc',
  //  'pinar-guvenc-company': 'Open Style Lab',
  //  'pinar-guvenc-bio': "Established in 2014, Open Style Lab (OSL) is 501(c)3 organization dedicated to creating functional wearable solutions for people of all abilities without compromising on style. We team designers, engineers, and occupational therapists to conceive and build accessible wearables that address the needs with and for people with disabilities. Our mission is for all people to have access to style, regardless of cognitive & physical ability.",
  //  'pinar-guvenc-img': 'url(images/2019/speakers/pinar-guvenc.jpg)',
  'brendan-ciecko-name': 'Brendan Ciecko',
  'brendan-ciecko-company': 'Cuseum',
  'brendan-ciecko-bio': "Brendan Ciecko is the founder and CEO of Cuseum, a platform that helps museums and cultural organizations engage their visitors, members, and patrons. Ciecko has been building technology since the age of 11 and has been recognized by Inc. Magazine as being one of America’s top entrepreneurs under 30. Ciecko has been featured in The New York Times, WIRED, Fast Company, Entrepreneur, TechCrunch, VentureBeat, Esquire, and PC Magazine for his work in design, technology, and business. In addition, Ciecko currently sits on the Steering Committee of the Museum Council at the Museum of Fine Arts, Boston, the Digital Advisory Board at the Neue Galerie New York, and the Community Advisory Board for the Massachusetts International Festival of the Arts. He holds 4 patents in the area of mobile technology.",
  'brendan-ciecko-img': 'url(images/2019/speakers/brendan-ciecko.jpg)',
  'kevin-yoo-name': 'Kevin Yoo',
  'kevin-yoo-company': 'WearWorks',
  'kevin-yoo-bio': "Kevin is a born entrepreneur with a heavy focus in Product Design and Sustainability. Combined with passion for human-centric innovation and background in haptics. He has a keen sense for new growth in business, the market and technology.  Kevin expands fearlessly.",
  'kevin-yoo-img': 'url(images/2019/speakers/kevin-yoo.png)',
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
``
function clickable(elt) {
  return elt.attr('href') !== '#';
}
