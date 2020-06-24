onmessage=function(e) {
	xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function() {
		if(this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			postMessage({
				dataSource:e.data.dataSource,
				arrData:e.data.arrData,
				jsonData:JSON.parse(xhr.response)
			});
		}
	}
	xhr.open("POST",e.data.path,true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("dataSource="+e.data.dataSource+"&arrData="+JSON.stringify(e.data.arrData));
}
