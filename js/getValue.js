
var getValue = function(){
	title = $('#push_1')[0].value;
	Subtitle = $('#push_2')[0].value;
	PaperText = $('#push_3')[0].value;
	push = $('#push_type')[0].value
}
var pushValue = function(){
	$('#real_title')[0].innerHTML = title;
	$('#Subtitle')[0].innerHTML = Subtitle;
	$('#PaperText')[0].innerHTML = PaperText;
}