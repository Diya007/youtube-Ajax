$(function(){
	$("#search-key").submit(function(event){
		event.preventDefault();
		requestLink();
	})
})

function requestLink(){
		var item = $("#keyWords").val();
		var parama={
				part:'snippet',
				key:'AIzaSyBlpPh_6snu64y_Q2O7OAubiS2DSM1hWZY',
				q:item
			}
		url="https://www.googleapis.com/youtube/v3/search",

		$.getJSON(url,parama,function(data){
			showResult(data.items)
		})
}

function showResult(result){
	var img = ""
	

	$.each(result,function(index,value){
		//build an image tag with src = thumbnial's url
		var url1 = value.snippet.thumbnails.default.url
		var url2 = 'https://www.youtube.com/watch?v='+value.id.videoId
		img +='<a href='+url2+'><img src ='+url1+'></a>'
		
	})
	//show all the results at a time, add all the url to img
	$("#show-key").html(img)
}

