$("button").click(function(){
    $.post("/titles",
    {
        titles: "Test Title",
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});