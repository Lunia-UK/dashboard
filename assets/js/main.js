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
            //t1 = performance.now();
            //console.log("L'appel à faireQuelqueChose a pris " + (t1 - t0) + " millisecondes.")
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
                //aClose.addEventListener('click', deleteData);
                li.appendChild(aClose);
                ul.appendChild(li);
            }
            break;
    
        case "saveData":
            
        break;

        case "loadData":
        
        break;
        default:
            break;
    }
}
    window.onload = function (){
    getData('loadData','../php/manageData.php',['objectif']);
    window.setTimeout("getData('loadData','../php/manageData.php',['daily_task'])", 12000)
    };


    