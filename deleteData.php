<?php 
    require_once 'include/db.php';
    $sql = "DELETE FROM calendar WHERE id = '".$_GET["id"]."'";
    $result = $mysqli->query($sql);
?>