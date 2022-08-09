function calculateDaysBetweenDates(begin, end) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var url = "http://localhost:8080/api/v1/users/login";
    var data = {
        "username": username,
        "password": password
    };
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            var token = json.token;
            var url = "http://localhost:8080/api/v1/users/daysBetweenDates";
            var data = {
                "token": token,
                "begin": begin,
                "end": end
            };
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var json = JSON.parse(xhr.responseText);
                    var days = json.days;
                    document.getElementById("days").innerHTML = days;
                }
            }
            xhr.send(JSON.stringify(data));
        }
    }
    xhr.send(JSON.stringify(data));
}

function matchHouses(step) {
	if (step === 0) {
    return 0
  } else if (step < 0 || typeof step !== "number") {
    return "The input (step) will always be a non-negative integer."
  } else {
    let a;
    a = (5 * step) + 1;
    return a;
  }
}

matchHouses(3);