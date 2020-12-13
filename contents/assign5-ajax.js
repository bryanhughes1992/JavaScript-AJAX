//#### ASSIGNMENT 5 - STORE HOURS ####
window.onload = function() {
    //Store the 'Old City Hall' Radio button as a variable
    var oldCityHall = document.forms.siteHours[0];
    //Store the 'Yonge Street' Radio button as a variable
    var yongeStreet = document.forms.siteHours[1];
    //Store the 'Union Station' Radio button as a variable
    var unionStation = document.forms.siteHours[2];

    //Store the 'Schedule' text area as a variable
    var scheduleTable = document.getElementById('schedTbl');

    //When there is a change made to 'oldCityHall', fire this function
    oldCityHall.onchange = function () {
        //IF the 'oldCityHall' isn't checked, do nothing
        if (!oldCityHall.checked) {
            return;
        }

        //set 'xhr' to a new HTTP request

        // RAN OUT OF TIME FOR COMMENTING FURTHER, SORRY SEAN :)
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4){
                if(xhr.status === 200) {
                    scheduleTable.innerHTML = xhr.responseText;
                } else {
                    alert("Connection was unsuccessful");
                }
            }
        };

        xhr.open("GET", `sched${oldCityHall.value}.txt`, true);

        xhr.send(null);
    };

    yongeStreet.onchange = function () {
        if (!yongeStreet.checked) {
            return;
        }
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4){
                if(xhr.status === 200) {
                    scheduleTable.innerHTML = xhr.responseText;
                } else {
                    alert("Connection was unsuccessful");
                }
            }
        };

        xhr.open("GET", `sched${yongeStreet.value}.txt`, true);

        xhr.send(null);
    };

    unionStation.onchange = function () {
        if (!unionStation.checked) {
            return;
        }
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4){
                if(xhr.status === 200) {
                    scheduleTable.innerHTML = xhr.responseText;
                } else {
                    alert("Connection was unsuccessful");
                }
            }
        };

        xhr.open("GET", `sched${unionStation.value}.txt`, true);

        xhr.send(null);
    };
};