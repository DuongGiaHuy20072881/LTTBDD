const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";

function getData() {
    $.ajax({ method: "GET", url: urlBacon, dataType: "json" })
        .done(function(data) {
            console.log(data);
            document.getElementById('text').value = data.title;
        })
        .fail(function() { console.log("no good"); });
}
getData();