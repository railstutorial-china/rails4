var tutorialScript = {
	init: function() {
		this.relocateNavigation();
	},

	relocateNavigation: function() {
		navi = $('.navigation');
		navi_content = $('.navigation').clone();
		if(navi.length > 0) {
			navi.remove();

			if($('.footnotes').length > 0) {
				navi_content.insertBefore('.footnotes');
			} else {
				navi_content.appendTo('.main');
			}
		}
	}

};

$(document).ready(function(){
	tutorialScript.init();
});
