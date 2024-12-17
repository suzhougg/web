$(document).ready(function(){
    setSidebar();
    setNode();
});

function setSidebar()
{
    $('.doc-detail-sidebar li').click(function() {
    	if (!$(this).has('.file').length) $(this).nextUntil(".li1").slideToggle(300);
    })
}

function setNode()
{
	var treeArray = [];
	$('.doc-detail-content .content').children().each(function(index, element) {
		var tagName = $(this).get(0).tagName;
		if (tagName.substr(0, 1) == "H") {
			treeArray.push({
				id: $(this).attr('id'),
             	name: $(this).text(),
            	level: tagName.substr(1, 1)
            });
		}
	})
	if (!treeArray.length) return false;
	var array = [];
	treeArray.map(function(item) {
        array.push(item['level']);
    });
	var min_lavel = Math.min.apply(null, array);
	array.sort(function(a, b) {return a - b});
	$.unique(array);
	var str = '<ul>';
	for (var i = 0; i < treeArray.length; i++) {
		var ident = ($.inArray(treeArray[i].level, array)) + 1;
		str += '<li class="li'+ident+'" onclick="scrollToNode(\'#'+treeArray[i].id+'\');">'+treeArray[i].name+'</li>';
	}
	str += '</ul>';
	$('.doc-detail-node .box').html(str);
}

function scrollToNode(ele, speed = 300)
{
  	if (!ele) {
    	$("html, body").animate({scrollTop: 0}, speed);
  	} else {
    	if(ele.length > 0) $("html, body").animate({scrollTop: $(ele).offset().top - $('.doc-navbar').height()}, speed);
  	}
}