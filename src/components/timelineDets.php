<?php
// Retrieve data from the database and return it as JSON

    header("Access-Control-Allow-Origin: *");


    header('Content-Type: application/json');

    // Connect to the database and query the table
    $db = new PDO('mysql:host=localhost;dbname=fitnessfest', 'root', '');
    $query = $db->query('SELECT * FROM timeline where endDate <= CURDATE() order by startDate');
    $data = $query->fetchAll(PDO::FETCH_ASSOC);
    $query2 = $db->query('SELECT * FROM timeline where endDate > CURDATE() order by startDate');
    $data2 = $query2->fetchAll(PDO::FETCH_ASSOC);
    $final = array_merge($data2, $data);
    echo json_encode($final);
?>
