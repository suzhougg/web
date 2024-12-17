$(document).ready(function(){});

setFootLocation();

function setFootLocation()
{
	if ($('.foot').length < 1) return false;
	// 网页正文全文高度
	var contentHeight = document.body.scrollHeight;
	// 可视窗口高度，不包括浏览器顶部工具栏
    var winHeight = window.innerHeight;
	if (contentHeight < winHeight) {
        $('.foot').addClass('absolute-bottom');
    } else {
        $('.foot').removeClass('absolute-bottom');
    }
}


function jump(url)
{
	window.location.href = url;
}

/**
 * Validate is int
 * @param string val
 * @return boolean
 */
function isRealInt(val = '')
{
	if (val == '') return false;
	var reg = /^[0-9]*$/;
	if (!reg.test(val)) return false;
	return true;
}