<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
    <title>Dashboard</title>
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
    <main>
        <div class="distance">
            <h2>Distance</h2>
            <canvas width="1350" height="200" id="myChart"></canvas>
        </div>
        <div class="alert">
            <div class="containerAlert">
                <img class="bell" src="assets/svg/bell.svg" alt="Bell">
            </div>
            
        </div>
        <div class="calendar"></div>
        <div class="daily"></div>
        <div class="objective"></div>
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
        <div class="daily_sport"></div>
        <div class="note"></div>
    </main>
    <script src="assets/js/distance.js"></script>
    <script src="assets/js/sleep.js"></script>
    <script src="assets/js/sport.js"></script>
</body>
</html>