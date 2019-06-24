var offsetTop = $(window).height() * 0.1;

$("a[rel*=leanModal]").leanModal({ top : offsetTop, overlay : 0.4, closeButton: ".modal_close" });

var speakerInfo = {
  'ayako-name': 'Ayako Maruyama',
  'ayako-company': 'Design Studio for Social Intervention',
  'ayako-bio': "Ayako is a Filipina-Japanese who has been working, studying, teaching and biking around in Providence and Boston since 2006. Inspired by living around the world with her family, she focuses on design, urbanism and education towards positive social contributions. She teaches Experience of Public Engagement at RISD and taught The Role of Architecture in Creating a Sense of Place at @bostonu where she completed a Master of City Planning degree. Ayako has been part of the @ds4si based in Boston, MA since 2012. Ayako's work, focused on community engagement and social justice, includes DS4SI projects like the Social Emergency Response Centers (SERCs) that have occurred in over 20 cities nationally and internationally, as well as leading the production of the @goboston2030 Visioning Lab, an unprecedented public space for Boston residents to express their vision for the City’s 15-year transportation plan. Ayako has cooked for and organized micro-grant community dinners like FeastMass with her friends and also serves on the Board of Directors for GAIA Vaccine Foundation, a non-profit organization based in Providence doing work in Mali towards HIV/ AIDS education, prevention, access to care and vaccination.",
  'ayako-img': 'url(images/2018/speakers/ayako-maruyama.jpg)',
  
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
