<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
    <title>Dashboard</title>
    <style>
        
    </style>
</head>
<body>
    <header></header>
    <aside>
        <nav>
            <a href=""><img src="assets/svg/home.svg" alt="Home"/></a>
            <a href=""><img src="assets/svg/calendar.svg" alt="Calendar"/></a>
            <a href=""><img src="assets/svg/bike.svg" alt="Sport"/></a>
            <a href=""><img src="assets/svg/tasks.svg" alt="Tasks"/></a>
            <a href=""><img src="assets/svg/project.svg" alt="Projects"/></a>
            <a href=""><img src="assets/svg/challenge.svg" alt="Challenge"/></a>
            <a href=""><img src="assets/svg/note.svg" alt="Notes"/></a>
            <a href=""><img src="assets/svg/sleep.svg" alt="Sleep"/></a>
        </nav>
    </aside>
    <main class="mainHomne">
        <div class="distance">
            <h2>Distance</h2>
            <canvas width="1350" height="200" id="myChart"></canvas>
        </div>
        <div class="alert">
            <div class="containerAlert">
                <img class="bell" src="assets/svg/bell.svg" alt="Bell">
            </div>
            
        </div>
        <div class="calendar">
            <img src="assets/svg/calendarContainer.svg" alt="">
        </div>
        <div class="daily">
            <input type="text">
            <ul class=toDoList>
                <li>Fermer les portes</li>
                <li>Arronser les plantes</li>
                <li>Nourir le chat</li>
            </ul>
        </div>
        <div class="objective">
            <input type="text">
                <ul class=toDoList>
                    <li>6000 pas</li>
                    <li>8h</li>
                </ul>
        </div>
        <div class="calc"></div>
        <div class="sleep">
            <h2 class="center">Sleep</h2>
            <canvas width="450" height="230" id="sleepChart"></canvas>
        </div>
        <div class="sport">
            <div class="containerGraphSkills">
                <div class="containerSkills">
                    <div class="skills bike"></div>
                    <img src="assets/svg/blueBike.svg" alt="Blue bike"/>
                </div> 
                <div class="containerSkills">
                    <div class="skills walking"></div>
                    <img src="assets/svg/walking.svg" alt="Walking"/>
                </div>
                <div class="containerSkills">
                    <div class="skills medit"></div>
                    <img src="assets/svg/medit.svg" alt="Meditation"/>
                </div> 
                <div class="containerSkills">
                    <div class="skills running"></div>
                    <img src="assets/svg/running.svg" alt="Running"/>
                </div> 
            </div>
        </div>
        <div class="daily_sport">
            <canvas id="goalBar" width="290" height="290"></canvas>
            <p class="goalBartitle">Steps</p>
            <p class="goalBartitle">Time</p>
            <p class="goalBartitle">Distance</p>
        </div>
        <div class="note">
            <img src="assets/svg/noteContainer.svg" alt="">
        </div>
    </main>
    <script src="assets/js/distance.js"></script>
    <script src="assets/js/sleep.js"></script>
    <script src="assets/js/sport.js"></script>
    <script src="assets/js/goalBar.js"></script>
</body>
</html>