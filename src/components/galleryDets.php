<?php
    header("Access-Control-Allow-Origin: *");


    header('Content-Type: application/json');

    $db = new PDO('mysql:host=localhost;dbname=fitnessfest', 'root', '');
    $query = $db->query('SELECT * FROM gallery');
    $data = $query->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
?>
