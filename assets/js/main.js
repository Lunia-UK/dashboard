function getData(dataSource,path,arrData) {
    ajaxWorker.postMessage({dataSource:dataSource,path:path,arrData:arrData});
}

function loadData(){
    
}
var requestInProgress=false;
var ajaxWorker=new Worker("assets/js/ajaxWorker.js");
ajaxWorker.onmessage=function(e) {
    switch (e.data.dataSource) {
        case "loadData":
            jsonData = e.data.jsonData;
            arrData=e.data.arrData;
            console.log(arrData);
            ul = document.querySelector("#" + arrData[0]);
            console.log(arrData[0]);
            for(i=0;i<jsonData.length;i++){
                li = document.createElement("li");
                li.id = jsonData[i][0];
                li.innerHTML = jsonData[i][1];
                aClose=document.createElement("a");
                aClose.innerHTML="X";
                aClose.id=jsonData[i][0];
                aClose.classList.add("deletedEvent");
                aClose.addEventListener('click', deleteData);
                li.appendChild(aClose);
                ul.appendChild(li);
            }
            break;
    
        case "saveData":
            clearData()
            loadData();
        break;

        case "deleteData":
        
        break;
        default:
            break;
    }
}
    window.onload = function (){
    getData('loadData','../php/manageData.php',['objectif']);
    window.setTimeout("getData('loadData','../php/manageData.php',['daily_task'])", 120)
    };

    function checkEnterKey(e){
        if(e.keyCode == 13){
            element = input.value;
            getData('saveData','../php/manageData.php', element)  
        }
    }
    input = document.querySelector("#dailyTaskInput");
    input.addEventListener("keypress", checkEnterKey);

    function deleteData(e){
        id = e.target.id;
        getData('deleteData','../php/manageData.php', id)
    }