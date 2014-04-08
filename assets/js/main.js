function triggerAnimation() {
	$('.animation').removeClass().addClass('animation');
	$('.active .animation').each(function() {
		$this = $(this);
		$this.addClass($this.attr('data-animation'));
	});
}

function initMap(){
	createMap();
	setMapEvent();
	addMapControl();
}

function createMap(){
	var map = new BMap.Map("map");
	var point = new BMap.Point(114.025974,22.546054);
	map.centerAndZoom(point,12);
	window.map = map;
}

function setMapEvent(){
	map.enableDragging();
	map.enableScrollWheelZoom();
	map.disableDoubleClickZoom();
	map.enableKeyboard();
}

function addMapControl(){
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	map.addControl(ctrl_ove);
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
}

$(function() {
	$('body').removeClass('loading').addClass('loaded');

	$('.main').onepage_scroll({
		afterMove: triggerAnimation
	});
	
	triggerAnimation();
	
	initMap();
});