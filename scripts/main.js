$(document).ready(function(){
var inputbox = $(".item-textbox");

//Add items in To Do List
	$(".addItem").on("click", function(){
		if(inputbox.val()){
			$(".my-list").append("<li><label><input type='checkbox'/>"+ inputbox.val() + "</label></li>");
			inputbox.val("");
		}
		else{
			alert("Enter Item Text");
		}
	});
	//Removed selected items
	$(".removeItem").on("click", function(){
		if($(':checked').length>0){
			$("li").has(':checked').each(function(index,item){
				$(this).remove();
			})
		}
		else{
			alert("Select Items to Delete");
		}
	});
});