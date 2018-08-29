function handleInput() {
  var title = document.getElementById("inputEmail").value;
  sendToServer(title)
}
document.getElementById('input').onclick = handleInput;


function sendToServer(){
  $.ajax({
  //The URL to process the request
    'url' : '/titles',
    'type' : 'GET',
    'data' : {
      'title' : title
    },
    'success' : function(data) {
      if (data == "success") {
        alert('request sent!');
      }
    }
  });
}
