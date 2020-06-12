<?php 
    require_once 'include/db.php';
    $sql = "SELECT title FROM calendar WHERE date > $_GET["dateBegin"] AND date < $_GET["dateEnd"]";
    $result = $mysqli->query($sql);
    print_r($result->fetch_all());
?>