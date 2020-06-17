input = document.querySelector("#titleAddNote");
textarea = document.querySelector("#textAddNote");
textarea.addEventListener("keypress", addnote);
function addnote(e){
    if(e.keyCode == 13){
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
               input.value = "";
               textarea.value= "";
            }
        }
        
        title = input.value;
        text = textarea.value;
    xhr.open("GET","assets/php/saveDataAddNote.php?title=" + title + "&text=" + text, true);
    xhr.send(); 
    }
}