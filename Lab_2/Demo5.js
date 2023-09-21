 // Update a user
        var url = 'https://jsonplaceholder.typicode.com/todos';
        var data = {};
        data.firstname = "JohnUpdated";
        data.lastname = "SnowUpdated";
        var json = JSON.stringify(data);

        var xhr = new XMLHttpRequest();
        xhr.open("PUT", url + '/12', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            var users = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(users);
            } else {
                console.error(users);
            }
        }
        xhr.send(json);
