(function($){

$(document).ready(function(){

	function addList(){
		var ul=$("<ul></ul>",{"class":"odpowiedz"})
		ul.appendTo($(".response"))
	}

	function removeData(){
		$("li").remove()
	}

	function addData(data){
		
		var ul = $("ul")
		if(!ul.length) { 
			addList()
			ul = $("ul") 
		}

		$.each(data, function(i, item){

			var text = "Name: "+item.name+", Username: "+item.username+", email: "+item.email+", Phone: "+item.phone
			var li = $("<li></li>",{
				"text" : text
			})
			
			ul.append(li)
			//console.log(text)
		})
		console.log(ul)

	}

	$("button").on("click",function(e){
		e.preventDefault();
		removeData()
		$.get("https://jsonplaceholder.typicode.com/users").done(function(data){
			addData(data)
			$("button").attr("disabled",true)

		})
	})

})
})(jQuery)