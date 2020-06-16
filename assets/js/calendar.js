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

function toMySqlFormat(dateToChange) {
    return dateToChange.getFullYear() + "-" +
    twoDigits(1 + dateToChange.getMonth()) + "-" +
    twoDigits(dateToChange.getDate()) + " " +
    twoDigits(dateToChange.getHours()) + ":" +
    twoDigits(dateToChange.getMinutes()) + ":" +
    twoDigits(dateToChange.getSeconds());
    //"00:00:00";
}

function el(id) {
    with(document) {
        return getElementById(id)||querySelector(id);
    }
}

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
        xhr.open("GET","saveData.php?date=" + toMySqlFormat(dateTime) + "&title=" + title + "&description=" + e.target.innerHTML,true);
        xhr.send();
    }
}

function loadData(dateBegin, dateEnd){
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            jsonData = xhr.response;
            arrData = JSON.parse(jsonData);
            table = el("calendar");
            console.log(arrData);
            console.log(dateBegin.getDay());
            intDay = 1;
            boolDay = false;
            for(i=0;i<table.rows.length;i++) {
                if(i>0){
                    for(z=0; z<table.rows[i].cells.length; z++) {
                        if(i==1 && z == dateBegin.getDay()) {
                            boolDay = true;
                        }
                        if(boolDay) {
                            table.rows[i].cells[z].innerHTML = intDay; 
                            intDay++;
                            divGlobal = document.createElement("div");
                            divGlobal.classList.add("divGlobal");
                            divGlobal.id = "divGlobal" + intDay;
                            table.rows[i].cells[z].appendChild(divGlobal);
                        }
                    }
                }
            }
            tdList=document.getElementsByTagName("td");
            for(i=0;i<arrData.length;i++) {
                eventDay=document.createElement("div");
                eventDay.id=arrData[i][0];
                eventDay.classList.add("eventDay");
                dateToday=new Date(arrData[i][2]);
                pTime=document.createElement("span");
                pTime.innerHTML=twoDigits(dateToday.getHours())+":"+twoDigits(dateToday.getMinutes()) + " ";
                pTitle=document.createElement("span");
                pTitle.innerHTML=arrData[i][1];
                eventDay.appendChild(pTime);
                eventDay.appendChild(pTitle);
                for(z=0;z<tdList.length;z++) {
                    if(tdList[z].innerHTML.indexOf(dateToday.getDate())==0) {
                        tdList[z].firstChild.nextSibling.appendChild(eventDay);
                    }
                }
            }
        }
    }
    dateBeginSqlFormat = toMySqlFormat(dateBegin);
    dateEndSqlFormat = toMySqlFormat(dateEnd);
    xhr.open("GET","loadData.php?dateBegin=" + dateBeginSqlFormat + "&dateEnd= " + dateEndSqlFormat,true);
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

function monthsDays(monthData){  
    var d=new Date(
        monthData.getFullYear(),
        monthData.getMonth()+1,
        0
    );
    return d.getDate();
}

function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    dateBegin = new Date(year + "-"+ (month + 1 ) + "-1");
    dateEnd = new Date(year + "-" + (month + 1) + "-"  + monthsDays(dateBegin));
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