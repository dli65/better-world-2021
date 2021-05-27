var offsetTop = $(window).height() * 0.1;

$("a[rel*=leanModal]").leanModal({ top : offsetTop, overlay : 0.4, closeButton: ".modal_close" });

var bioInfo = {
  'adrian-name' : 'Adrian Hernandez',
  'annie-name' : 'Annie Wang',
  'sofia-name'  : 'Sofia di Lodovico', 
  'ella-name' : 'Ella Harris',
  'michelle-name' : 'Michelle Yuan',
  'moe-name' : 'Moe Levandoski',

  'erica-name'    : 'Erica Silver',
  'erica-s-name'    : 'Erica Silver',
  'tristan-name'  : 'Tristan Harris',
  'tina-name'	  : 'Tina Yang',
  'emilia-name'	  : 'Emilia K Mann',
  'sammy-name'	  : 'Sammy Randall',
  'cherilyn-name' : 'Cherilyn Tan',
  'niyoshi-name'  : 'Niyoshi Parekh',
  'sylvia-name'   : 'Sylvia Atwood',
  'rhythm-name'   : 'Rhythm Rastogi',
  'ella-name'     : 'Ella Harris',
  'xinru-name'    : 'Xinru Li',
  'isabel-name'   : 'Isabel Scanlon',
  'jonathan-name' : 'Jonathan Katz',
  'aishwarya-name': 'Aishwarya Bagaria',
  'stella-name'   : 'Stella Li',
  'sophia-name'   : 'Sophia Meng',
  'christie-name' : 'Christie Zhong',
  'claire-name'   : 'Claire Chen',
  'christine-name': 'Christine Wang',
  'briana-name'   : 'Briana Das',
  'megan-name'    : 'Megan Kasselberg',
  'malery-name'   : 'Malery Nguyen',
  'arjun-name'    : 'Arjun Shah',
  'grace-name'    : 'Grace Wilkins',
  'lauren-name'   : 'Lauren MIlan Rausaw',

  'adrian-img' : 'url(images/team2021/adrian_serious.jpg)',
  'annie-img' : 'url(images/team2021/Annie_Wang_Serious.jpeg)',
  'sofia-img' : 'url(images/team2021/Sofia_serious.png)',
  'ella-img' : 'url(images/team2021/ella_serious.jpeg)',
  'michelle-img' : 'url(images/team2021/michelle_serious.jpeg)',
  'moe-img' : 'url(images/team2021/Moe_Serious.jpg)',

  'erica-img'     : 'url(images/team2019/chair_erica.jpg)',
  'erica-s-img'     : 'url(images/team2019/chair_erica.jpg)',
  'tristan-img'   : 'url(images/team2019/chair_tristan.jpg)',
  'tina-img'	  : 'url(images/team2019/chair_tina.jpg)',
  'emilia-img'	  : 'url(images/team2019/con_emilia.jpg)',
  'sammy-img'	  : 'url(images/team2019/con_sammy.jpg)',
  'cherilyn-img'  : 'url(images/team2019/con_cherilyn.jpg)',
  'niyoshi-img'   : 'url(images/team2019/con_niyoshi.jpg)',
  'sylvia-img'    : 'url(images/team2019/ce_sylvia.jpg)',
  'rhythm-img'    : 'url(images/team2019/ce_rhythm.jpg)',
  
  'xinru-img'     : 'url(images/team2019/dev_xinru.jpg)',
  'isabel-img'    : 'url(images/team2019/dev_isabel.jpg)',
  'jonathan-img'  : 'url(images/team2019/dev_jonathan.jpg)',
  'aishwarya-img' : 'url(images/team2019/ope_aishwarya.jpg)',
  'stella-img'    : 'url(images/team2019/ope_stella.jpg)',
  'sophia-img'    : 'url(images/team2019/gra_sophia.jpg)',
  'christie-img'  : 'url(images/team2019/gra_christie.jpg)',
  'claire-img'    : 'url(images/team2019/web_claire.jpg)',
  'christine-img' : 'url(images/team2019/web_christine.jpg)',
  'briana-img'    : 'url(images/team2019/pr_briana.jpg)',
  'megan-img'     : 'url(images/team2019/pr_megan.jpg)',
  'malery-img'    : 'url(images/team2019/pr_malery.jpg)',
  'arjun-img'     : 'url(images/team2019/soc_arjun.jpg)',
  'grace-img'     : 'url(images/team2019/soc_grace.jpg)',
  'lauren-img'    : 'url(images/team2019/soc_lauren.jpg)',

  'adrian-bio' : "Adrian is a junior at Brown studying environmental engineering. While he enjoys the wetter weather in Providence, he was raised in warm, dry Southern California. He really enjoys reading, drawing, and learning about sciency stuff. His favorite cosmic body is the moon.",
  'annie-bio' : "Annie is a junior at Brown studying Economics and Art History. While she grew up in Shanghai, China, she went to a high school in the middle of nowhere in Connecticut. Annie really enjoys traveling, exploring cafes and restaurants, and visiting art musuems.",
  'sofia-bio' : "Sofia is an industrial design sophopmore at RISD. She is interested in creating useful, sustainable, and human-centered design. A fashion fanatic, Sofia loves oversized earrings and never leaves her dorm without her to-do list and a sketchbook.",
  'ella-bio' : "Ella is a junior at Brown studying English and Science, Technology, and Society. Ella is interested in learning about sustainable design, reading poetry, and making art of many kinds. They love eating high-effort foods like pomegranates, pistachios, and artichokes.",
  'michelle-bio' : "Michelle is a sophomore at Brown studying Biology and Literary Arts. She is from New Jersey and has lived in the Northeast most of her life, but still copes poorly with winter weather. In her free time she likes to paint, scroll through Etsy, and listen to true crime podcasts. Her favorite time of day is dawn.",
  'moe-bio' : "Moe is a junior at brown studying visual art and environmental studies. Their favorite place to be is in the studio with their oil paints, but when they're not painting, they're taking long walks through Providence, baking cookies for their housemates, and trying to read instead of watching telenovelas.",

  'erica-bio'      : "Born in Korea and raised in Seattle, Erica is a Graphic Design student at Rhode Island School of Design. Her works focus on blurring the lines between fine art and commercial design, where the traditional and new media meet to create meaningful design. She’s also passionate about the artists’ role in politics. When not crying over InDesign, Erica can be spotted petting random stranger's pet.",
  'erica-s-bio'    : "Born in Korea and raised in Seattle, Erica is a Graphic Design student at Rhode Island School of Design. Her works focus on blurring the lines between fine art and commercial design, where the traditional and new media meet to create meaningful design. She’s also passionate about the artists’ role in politics. When not crying over InDesign, Erica can be spotted petting random stranger's pet.",
  'tristan-bio'    : "Tristan is in the class of 2020 at Brown and studies Economics and the History of Art. He enjoys exploring how multi-disciplinary strategies can sustain value for both institutions and individuals via the strategies of design. He is particularly interested in art that utilizes interventions into dominating systems as a means of critique. Raised in Florida, he enjoys running (but not up College Hill) and wishes that it was possible for Brown and RISD to relocate somewhere warmer during the winter.",
  'tina-bio'      : "Tina is in the class of 2020 studying neuroscience at Brown. She is interested in how understanding neurobiology can lead to improvements in mental health awareness, treatment, and education. She loves bad puns and Atlanta sweet tea. In her free time, she enjoys illustrating funky bones. Ask her about her dog!",
  'emilia-bio'	  : "Emilia is in the Brown|RISD Dual Degree Program class of 2021. She is doing an independent concentration at Brown and majoring in Apparel at RISD; her particular interest is the intersection between biology, technology, and fashion. Emilia has an unconditional love for labradors (especially her own doggo, Chai Latte), black turtlenecks, and boba.",
  'sammy-bio'	  : "Sammy is a Public Policy concentrator at Brown (Class of 2020). She is particularly interested in sustainable, human-centered design, both in the traditional design sense (particularly urban planning!) and through law and policy. Even more so, Sammy loves any sort of cute animal (she will cry watching dog videos) and any baked good that incorporates raspberry.",
  'cherilyn-bio'  : "Cherilyn is a sophomore at Brown, from Malaysia, hoping to pursue an independent concentration in Arts, Design and Social Change, in which public policy, music, the arts, design and psychology intersect to work towards a social cause. She is passionate about human-centered design and using music as a tool in education and healthcare. She enjoys cozy conversations, window seats, jazz and misses roti canai (a Malaysian dish)! She loves notebooks a little too much.",
  'niyoshi-bio'   : "Niyoshi is a first-year at Brown who wants to do an independent concentration in human-centred design. She is interested in exploring the intersections of human behaviour, design thinking, computer science and psychology. Her spirit animal is a polar bear, essentially a combination of a labrador and a snowman. If you see her around campus, give her some food because she's always hungry!",
  'sylvia-bio'    : "Sylvia is a first year at Brown who is from Wilmington, North Carolina. She is planning on concentrating in Visual Arts and potentially Environmental Studies. She is interested in all forms of art, including painting, sculpture, digital design, and writing. She was born in Rome, Italy and then moved to Mexico City. She is always open to TV recommendations (preferably true crime or cooking shows).",
  'rhythm-bio'    : "Rhythm is a Brown'22 student from India who wishes to concentrate in Social Sciences and a form of the arts. She wants to explore the nature of barriers and is always excited to find design that informs social justice and activism. When she isn’t drinking copious amounts of coffee milk, she can be found hoarding cute stationery and reading psychological thrillers. ",
  
  'xinru-bio'     : "Born in Beijing and raised just outside of Chicago, Xinru is a member of Brown's class of 2022 studying Music and Economics. She is particularly interested in exploring the way art affects the human condition, and spreading a greater appreciation of the fine arts in her community. Her favorite things include violas, cake, audiobooks, and violas.",
  'isabel-bio'    : "Born and raised in San Francisco, Isabel is an Architecture student in the Brown class of 2021. She is interested in environmentally sustainable design and finding ways in which design and urban planning can facilitate equality in urban areas. When not on campus, she can be found in the closest Muji or on public transportation where she can avoid the fact that she can’t drive.",
  'jonathan-bio'  : "Jonathan is a New York City native and a member of Brown’s class of 2022. While studying economics and art history, he enjoys understanding how the artistic/creative minds behind design connect with their markets and consumers. He can be found buried in the stacks of the Atheneum or hunting for art prints at Providence Flea.",
  'aishwarya-bio' : "Aishwarya is studying Industrial Design along with a concentration in Nature, Culture, and Sustainability Studies at RISD in the class of 2021. She is interested in creating useful, functional, and sustainable products that promote interaction amongst users. Feel free to approach her if you're ever looking for a food buddy!",
  'stella-bio' : "Stella is a Computer Science concentrator in Brown's class of 2022 hailing from New York (but not the city!). Beyond software design and algorithms, she is also interested in art, music, linguistics, computer science education, food, neuroscience, and the bridge between human and digital minds. Tell her about your research, your favorite artists, or your go-to Providence eateries!",
  'sophia-bio'    : "Sophia is a loyal (Northern) Californian studying Visual Arts and Computer Science at Brown (c/o 2020). She loves user-centric design, fun editorial illustrations, wordplay, the Adobe Illustrator pen tool, and ingesting media that makes her cry. She failed her driver's test four times.",
  'christie-bio'  : "Orignally from North Carolina, Christie is studying graphic design at RISD in the class of 2021. She is interested in the interdisciplinary nature of design, and will never be caught designing without color. When not in the Design Center, she can be found scaring herself from watching Criminal Minds",
  'claire-bio'    : "Originally from Shanghai, Claire studies Computer Science and Modern Culture and Media at Brown in the class of 2020. She is interested in how technology, art and media theory can help us make better and more innovative products. She can be found near hot pots or bubble tea places.",
  'christine-bio' : "Christine Wang is a sophomore at Brown studying computer science and music. She is interested in how computer science can be used for social good and how music makes us feel all the feels. She grew up in Philadelphia and will always have a soft spot for alt rock and cheese steaks. OMNOMNOmnommm",
  'briana-bio'    : "Originally from the San Francisco Bay Area, Briana is a member of the class of 2021 at Brown University. She is interested in working at the intersection of human behavior and visual art with an intention of pursuing a degree in psychology as well as creating an independent concentration in design and innovation. A passionate doodler and outdoor explorer, she can be found backpacking with her family or raiding a local Trader Joe’s.",
  'megan-bio'     : "A southern belle from Nashville, Tennessee, Megan is a member of the class of 2020 at Brown University studying English and Behavioral Decision Sciences. She can be found in the Ratty eating pasta or on Amtrak, treking to and from New York to see her very soft cat Angus.",
  'malery-bio'    : "Malery is always making things more complicated than they need be, otherwise she is a simple person. She could always go for more sunshine and more hours in each day so she can do more things she loves: drawing, hiking, reading, dancing, eating pumpkin pie... She's also concentrating in architecture and is in the class of 2021 at Brown.",
  'arjun-bio'     : "Arjun is an undergraduate student at RISD in the class of 2021. He is majoring in Industrial Design. He is exceedingly excited about the relationship between computer science and industrial design and aims to understand the infinite possibilities better when the two are combined. He now suggests that you re-read this bio while imagining that Morgan Freeman is narrating.",
  'grace-bio'     : "Grace Wilkins a Neuroscience major and a member Brown University's class of 2020. She is interested in design especially as it applies to scientific communication & illustration. At present, she is likely on the hunt for some Knead Donuts with a Blue State coffee in one hand and the New York Times crossword in the other.",
  'lauren-bio'    : "Lauren Milan is an undergraduate student in RISD's class of 2021. She is unafraid to challenge conventionalities and add her own unique perspective to the craft. As an Atlanta native, Lauren developed a passion for working on film sets. When she wasn't in school or on set, she taught herself animtation techniques, read books on neuroscience, and studied Mandarin Chinese. She aims to combine her passion for language, design, and animation to make impactful and innovative work. ",
  
  'erica-link'    : 'http://ericasilver.com',
  'niyoshi-link'  : 'http://niyoshiparekh.com',
  'sophia-link'   : 'http://sophiameng.com',
  'christie-link' : 'https://www.christiezhong.com/',
  'briana-link'   : 'http://www.brianadas.com/',
  'malery-link'   : 'https://www.linkedin.com/in/malery/',
  

  'blocks-name'	  : 'Blocks, Bytes and Bars',
  'interplay-name': 'Interplay',
  'blocks-img'	  : 'url(images/themes/blocks.png)',
  'interplay-img' : 'url(images/themes/interplay.png)',
  'blocks-link'		: 'http://betterworldxdesign.com/conference_2017.html',
	'interplay-link': 'http://www.core77.com/gallery/56525/From-Pneumatic-Inflatables-to-Designing-for-Healthcare-Better-World-by-Design-2016',
};

function populateModal(elt) {
	var id = elt.parent().attr('id');
  if (id.endsWith("-d")) {
    id = id.slice(0, -2);
  }
	console.log(id);

	var name = bioInfo[id + '-name'];
	var img = bioInfo[id + '-img'];
	var bio = bioInfo[id + '-bio'];
	var link = bioInfo[id + '-link'];

	var modal = $("#modalPopup");

	modal.find('.personImg').css('background-image', img);
	modal.find('.name').html(name);
	modal.find('.name').attr('href', link);
	modal.find('.bio').html(bio);
    
}

function populateModalNoLink(elt) {
	var id = elt.parent().attr('id');
	console.log(id);

	var name = bioInfo[id + '-name'];
	var img = bioInfo[id + '-img'];
	var bio = bioInfo[id + '-bio'];
	var link = bioInfo[id + '-link'];

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
