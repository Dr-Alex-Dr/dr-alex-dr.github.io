var height = document.getElementById("header-back-img");
var style = getComputedStyle(height).height; 
var a = style.split("");
var b = '';
for (var i = 0; i <= a.length; i++) {
	if (a[i] == 'p' || a[i] == '.')
	{
		break;
	}
	b += a[i]
}

document.getElementsByClassName("container")[0].style.height = style;
var precent = Number(b) / 100

