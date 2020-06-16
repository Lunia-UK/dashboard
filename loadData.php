<?php 
    require_once 'include/db.php';
    $sql = "SELECT id, title, date, description FROM calendar WHERE date > '".$_GET["dateBegin"]."' AND date < '".$_GET["dateEnd"]."'";
    $result = $mysqli->query($sql);
    $arrData = $result->fetch_all();
    $arrData = json_encode($arrData);
    echo $arrData;
?>