function update() {
	$('#title').text(Inffuse.project.get('title','What do you say?'));
	$('#button1').text(Inffuse.project.get('button1','Love it'));
	$('#button2').text(Inffuse.project.get('button2','Hate it'));
}

$(function(){
	Inffuse.ready(update);
	Inffuse.on('data-changed',update);
});