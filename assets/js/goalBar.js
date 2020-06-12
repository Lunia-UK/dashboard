var canvas = document.getElementById("goalBar");
var ctx = canvas.getContext("2d");
// First circle
ctx.beginPath();
ctx.lineWidth = 10;
ctx.arc(160, 160, 100, 0, 2 * Math.PI);
ctx.strokeStyle = "#00B0FF33";
ctx.shadowColor = "#00B0FF20";
ctx.shadowBlur = 1;
ctx.shadowOffsetX = -4;
ctx.shadowOffsetY = 4;
ctx.stroke(); 
ctx.beginPath();
ctx.lineWidth = 10;
ctx.arc(160, 160, 100, 0, 0.4 * (2 * Math.PI)) ;
ctx.strokeStyle = "#00B0FF";
ctx.stroke(); 
// Second circle
ctx.beginPath();
ctx.lineWidth = 10;
ctx.arc(160, 160, 80, 0, 2 * Math.PI);
ctx.strokeStyle = "#FFA20033";
ctx.shadowColor = "#FFA20020";
ctx.shadowBlur = 1;
ctx.shadowOffsetX = -4;
ctx.shadowOffsetY = 4;
ctx.stroke(); 
ctx.beginPath();
ctx.lineWidth = 10;
ctx.arc(160, 160, 80, 0, 0.35 * (2 * Math.PI)) ;
ctx.strokeStyle = "#FFA200";
ctx.stroke(); 
// Third circle
ctx.beginPath();
ctx.lineWidth = 10;
ctx.arc(160, 160, 60, 0, 2 * Math.PI);
ctx.strokeStyle = "#C75EC333";
ctx.shadowColor = "#C75EC320";
ctx.shadowBlur = 1;
ctx.shadowOffsetX = -4;
ctx.shadowOffsetY = 4;
ctx.stroke(); 
ctx.beginPath();
ctx.lineWidth = 10;
ctx.arc(160, 160, 60, 0, 0.25 * (2 * Math.PI)) ;
ctx.strokeStyle = "#C75EC3";
ctx.stroke(); 