let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}
Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};

function saveData(e){
    if (e.keyCode == 13){
        xhr=new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
             jsonData = xhr.responseText;
             //arrData = JSON.parse(jsonData);
             console.log(jsonData);
            }
        }
        title = prompt("Title :");
        hour = prompt("Hour :", "18:00");
        
        strDay = e.target.parentNode.innerHTML;
        strDay = strDay.substring(0,strDay.indexOf("<"));
        strMonthAndYear = document.getElementById("monthAndYear").innerHTML;
        dateTime = new Date(strDay + " " + strMonthAndYear + " " + hour);
        xhr.open("GET","saveData.php?date=" + dateTime.toMysqlFormat() + "&title=" + title + "&description=" + e.target.innerHTML,true);
        xhr.send();
    }
}

function loadData(dateBegin, dateEnd){
    xhr=new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
             jsonData = xhr.responseText;
             //arrData = JSON.parse(jsonData);
             console.log(jsonData);
            }
        }
        xhr.open("GET","loadData.php?dateBegin=" + dateBegin.toMysqlFormat() + "&dateEnd= " + dateEnd.toMysqlFormat(),true);
        xhr.send();
}

function deleteData(e){
    xhr=new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
             jsonData = xhr.responseText;
             //arrData = JSON.parse(jsonData);
             console.log(jsonData);
            }
        }
        xhr.open("GET","deleteData.php?date=" + e.target.innerHTML,true);
        xhr.send();
}

function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    dateBegin = new Date((month + 1) + " 1 " +  year);
    dateEnd = new Date((month + 1) + " "  + daysInMonth + " " + year);
    loadData(dateBegin, dateEnd);
    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                cell.classList.add("cell");
                let div = document.createElement("div");
                div.classList.add("divText");
                div.contentEditable = true;
                div.addEventListener("blur", saveData);
                div.addEventListener("keypress", saveData);
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                cell.appendChild(div);
                row.appendChild(cell);
                date++;
            }
        }

        tbl.appendChild(row); // appending each row into calendar body.
    }
}