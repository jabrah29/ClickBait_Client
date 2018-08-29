function handleInput() {
  var title = document.getElementById("inputEmail").value;
  sendToServer(title)
}
document.getElementById('input').onclick = handleInput;


function sendToServer(title){
	console.log("here")
	$.post(
	    "https://fe1a11af.ngrok.io/title",
	    {title : title},
	    function(data) {
	       alert('page content: ' + data);
	    }
	);
}
