var offsetTop = $(window).height() * 0.1;

$("a[rel*=leanModal]").leanModal({ top : offsetTop, overlay : 0.4, closeButton: ".modal_close" });

var bioInfo = {
  'adrian-name' : 'Adrian Hernandez',
  'annie-name' : 'Annie Wang',
  'sofia-name'  : 'Sofia di Lodovico', 
  'ella-name' : 'Ella Harris',
  'michelle-name' : 'Michelle Yuan',
  'moe-name' : 'Moe Levandoski',
  'nikki-name' : 'Nikki Sohn',
  'alyssa-name' : 'Alyssa Marie Loo',
  'helen-name' : 'Helen Peng',
  'parker-name' : 'Parker Ljung',
  'sophie-name' : 'Sophie Ljung',
  'grace-name' : 'Grace Zhao',
  'hadley-name' : 'Hadley Dalton',
  'selena-name' : 'Selena Yang',
  'alexis-name' : 'Alexis Reid',
  'truman-name' : 'Truman Lesak',
  'bright-name' : 'Bright Tsagli',
  'christine-name': 'Christine Jeong',
  'nicole-name' : 'Nicole Kim',
  'angela-name' : 'Angela Akoto',
  'delora-name' : 'Delora Li',

  'adrian-img' : 'url(images/team2021/adrian_serious.jpg)',
  'annie-img' : 'url(images/team2021/Annie_Wang_Serious.jpeg)',
  'sofia-img' : 'url(images/team2021/Sofia_serious.png)',
  'ella-img' : 'url(images/team2021/ella_serious.jpeg)',
  'michelle-img' : 'url(images/team2021/michelle_serious.jpeg)',
  'moe-img' : 'url(images/team2021/Moe_Serious.jpg)',
  'nikki-img' : 'url(images/team2021/nikki_serious.jpeg)',
  'alyssa-img' : 'url(images/team2021/Alyssa_Loo_Serious.jpeg)',
  'helen-img' : 'url(images/team2021/helen_peng_serious.jpeg)',
  'parker-img' : 'url(images/team2021/Parker_Ljung_Serious.jpg)',
  'sophie-img' : '',
  'grace-img' : 'url(images/team2021/Grace_Zhao_Serious.jpeg)',
  'hadley-img' : 'url(images/team2021/hadley_serious.jpg)',
  'selena-img' : 'url(images/team2021/selena_serious.jpeg)',
  'alexis-img' : 'url(images/team2021/Alexis_Serious.jpg)',
  'truman-img' : 'url(images/team2021/Truman_Serious.jpeg)',
  'bright-img' : 'url(images/team2021/bright_serious.jpeg)',
  'christine-img' : 'url(images/team2021/Christine_Jeong_Serious.JPG)',
  'nicole-img' : '',
  'angela-img' : 'url(images/team2021/Angela_Akoto_Serious.JPG)',
  'delora-img' : 'url(images/team2021/Delora_Li_Serious.jpeg)',

  'adrian-bio' : "Adrian is a senior at Brown studying environmental engineering. While he enjoys the wetter weather in Providence, he was raised in warm, dry Southern California. He really enjoys reading, drawing, and learning about sciency stuff. His favorite cosmic body is the moon.",
  'annie-bio' : "Annie is a senior at Brown studying Economics and Art History. While she grew up in Shanghai, China, she went to a high school in the middle of nowhere in Connecticut. Annie really enjoys traveling, exploring cafes and restaurants, and visiting art musuems.",
  'sofia-bio' : "Sofia is an industrial design junior at RISD. She is interested in creating useful, sustainable, and human-centered design. A fashion fanatic, Sofia loves oversized earrings and never leaves her dorm without her to-do list and a sketchbook.",
  'ella-bio' : "Ella is a senior at Brown studying English and Science, Technology, and Society. Ella is interested in learning about sustainable design, reading poetry, and making art of many kinds. They love eating high-effort foods like pomegranates, pistachios, and artichokes.",
  'michelle-bio' : "Michelle is a junior at Brown studying Biology and Literary Arts. She is from New Jersey and has lived in the Northeast most of her life, but still copes poorly with winter weather. In her free time she likes to paint, scroll through Etsy, and listen to true crime podcasts. Her favorite time of day is dawn.",
  'moe-bio' : "Moe is a senior at brown studying visual art and environmental studies. Their favorite place to be is in the studio with their oil paints, but when they're not painting, they're taking long walks through Providence, baking cookies for their housemates, and trying to read instead of watching telenovelas.",
  'nikki-bio' : "Nikki is a junior at Brown studying Design/Computer Science. Although from sunny Los Angeles, she is in love with Providence weather (especially the snow). She also enjoys dancing and snacking on her favorite foods (applesauce and goldfish).",
  'alyssa-bio' : "Alyssa is a second-year at Brown studying Linguistics and Computer Science. Hailing from sunny Singapore, Alyssa has developed a difficult relationship with Providence snow. Feed her coffee and biscuits for friendship points.",
  'helen-bio' : "Helen is a junior at Brown studying Cognitive Science interested in Human-Centered Design. She grew up in Mississippi and does not enjoy winters in PVD. She does however, enjoy eating oranges, drawing random people, and is currently weighing the pros and cons of owning a pet rat.",
  'parker-bio' : "Parker is a senior at Brown studying Computer Science & Economics. He's pretty simple: he likes to debate trivial things and draw Pokemon. He hopes to be a teacher and someday make his way into educational policy. In other words, he'd rather deal with kids than adults.",
  'sophie-bio' : "Sophie is a junior at Brown studying Computer Science/Women's Health. She cares a lot about equity in health care, and she hopes to design solutions for a more progressive and inclusive future in this field.  She can bake a mean strawberry rhubarb pie.",
  'grace-bio' : "Grace is a junior at Brown from Dallas, Texas, studying Economics and Visual Art. She is interested in human-centered design and entrepreneurship. Grace loves drawing pet portraits commissions, drinking tea, and playing tennis in her free time.",
  'hadley-bio' : "Hadley is a junior studying Computer Science at Brown and Illustration at RISD. She is interested in interaction design, virtual reality, and AI. In her free time she likes to learn tiktok dances and enjoy the cold East Coast weather since she's from Arizona.",
  'selena-bio' : "Selena is a junior studying Industrial Design and Computation and Technology at RISD. She is interested in human centered design and designing for space. In her free time she walks with her highly energetic dog, learns to sew, and watches Barbie movies with her roommate.",
  'alexis-bio' : "Alexis is a senior at RISD. She is from Maryland about 20 mins from D.C. She loves painting and cuddling with her cat. Win her heart with pickles.",
  'truman-bio' : "Truman is a senior studying graphic design at the Rhode Island School of Design. Through his studies, he hopes to develop a unique approach to visual communication through practical experience, research, and critique. Some of his favorite activities include learning plant names, reading music reviews, and cuffing his pant legs.",
  'bright-bio' : "Bright Tsagli is a current junior studying Business Economics and Public Policy and a member of the Resumed Undergraduate Experience (RUE) program. As a global citizen, he calls Ghana and Germany home. Last year, Bright served on Better World’s Community Public Relations team, and he is excited to return this year to serve in the same role. He is curious about how the world and his current subject interest include Math, public policy, economics, and data science to understand better how the world’s resources, from both the public and private sectors, could be allocated more efficiently to prevent poverty-related issues.",
  'christine-bio' : "Christine is a sophomore at Brown studying Applied Mathematics. Made in Ohio, Christine was raised in South Korea and came to Georgia to suffer in 90 degrees summers. Her biggest accomplishment over quarantine was reading Harry Potter series for the first time and finishing Grey's Anatomy in a month. ",
  'nicole-bio' : "Nicole is a senior at Brown studying Computer Science. She is interested in designing for accessibility. Also a comedy lover, Nicole enjoys watching SNL, writing jokes, and scrolling through Twitter.",
  'angela-bio' : "Angela is a senior at Brown studying Computer Science with a particular interest in UI/UX and accessibility in design. She grew up in the warm and lively city of Accra in Ghana and enjoys building lavish mansions for her Sims. She also loves baking, watching series and anime in her free time  as well as playing her carefully collated Westlife playlist on repeat, which attributes to 70% of her sleep deprivation (because every song deserves at least 3 replays).",
  'delora-bio' : "Delora is a junior at Brown studying Computer Science and Human-Centered Design. She is from Seattle, Washington, and is very interested in storytelling and accessibility within design, especially the industry of UIUX. Delora enjoys taking walks, and baking or cooking food (especially oatmeal)!",

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
