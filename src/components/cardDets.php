<?php
// Retrieve data from the database and return it as JSON

    header("Access-Control-Allow-Origin: *");


    header('Content-Type: application/json');

    // Connect to the database and query the table
    $db = new PDO('mysql:host=localhost;dbname=fitnessfest', 'root', '');
    $query = $db->query('SELECT * FROM announce');
    $data = $query->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);
?>
