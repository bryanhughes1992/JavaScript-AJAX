//#### ASSIGNMENT 5 - STORE HOURS ####

window.onload = function() {
    //Store the 'Old City Hall' Radio button as a variable
    var oldCityHall = document.forms.siteHours[0];
    //Store the 'Yonge Street' Radio button as a variable
    var yongeStreet = document.forms.siteHours[1];
    //Store the 'Union Station' Radio button as a variable
    var unionStation = document.forms.siteHours[2];

    function initAll() {
        //Store the 'Schedule' text area as a variable
        var scheduleTable = document.getElementById('schedTbl');

        oldCityHall.onclick = getTxtFile;

        function getTxtFile() {
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

            xhr.open("GET", "sched1.txt", true);

            xhr.send(null);
        }
    }
};