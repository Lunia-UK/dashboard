<?php 
    require_once 'include/db.php';
    $sql = "INSERT INTO calendar (date, title, description) VALUES ('".$_GET["date"]."', '".$_GET["title"]."', '".$_GET["description"]."')";
?>