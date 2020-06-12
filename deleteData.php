<?php 
    require_once 'include/db.php';
    $sql = "DELETE FROM calendar WHERE date = $_GET["date"]";
?>