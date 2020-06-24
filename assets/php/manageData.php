<?php
require_once '../../include/db.php';
switch ($_POST["dataSource"]) {
    case 'loadData':
        $arrData = json_decode($_POST["arrData"]);
        $sql = "SELECT id, element FROM " . $arrData[0];
        $resultDaily = $mysqli->query($sql);
        $arrDataDaily = $resultDaily->fetch_all();
        $arrDataDaily = json_encode($arrDataDaily);
        echo $arrDataDaily;
        break;
    case 'saveData':
        /*for($i=0;$i<count($_POST["arrData"]);$i++){
            $_POST["arrData"][$i];
        };*/
        $arrData = json_decode($_POST["arrData"]);
        $sql = "INSERT INTO daily_task (element) VALUES ('". $arrData ."')";
        $mysqli->query($sql);
    break; 

    case 'deleteData':
        $arrData = json_decode($_POST["arrData"]);
        $sql = "DELETE FROM daily_task WHERE id = '". $arrData ."'";
        $result = $mysqli->query($sql);
}
exit();
?>