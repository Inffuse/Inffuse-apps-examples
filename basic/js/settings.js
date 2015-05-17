function onChange(){
	Inffuse.project.set('title',$('#title').val());
	Inffuse.project.set('button1',$('#button1').val());
	Inffuse.project.set('button2',$('#button2').val());
}

$(function(){
	Inffuse.ready(function(){
		$('#title').val(Inffuse.project.get('title','What do you say?'));
		$('#button1').val(Inffuse.project.get('button1','Love it'));
		$('#button2').val(Inffuse.project.get('button2','Hate it'));

		$('#title').keyup(onChange);
		$('#button1').keyup(onChange);
		$('#button2').keyup(onChange);
	});
});