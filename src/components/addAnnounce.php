<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="./Partials/favicon.ico" type="image/x-icon">
        <title>Bill Genie</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </head>
    <style>
        body{
            background-color: #d6f2ff;
            font-family: sans-serif;
        }
        .formBox{
            width: 40%;
        }
        .grouping input{
            width: 90%;
        }
        #cardets{
            width:100%;
            height:100%;
            background-color: rgba(0, 0, 0, 0.6);
        }
        .update{
            width:50%;
        }
        @media (max-width: 650px) {
            .update{
                width:90%;
            }
        }
    </style>
    <body>
        <div class="container">
            <div>
            <h2 class="py-3 font-monospace fw-bold text-center mt-4">Announcement</h2>
            <form class="mb-5 d-flex flex-wrap justify-content-evenly" action="./addAnnounce.php" method="post">
                <div class="mt-4 bg-light p-4 d-flex flex-column border border-dark shadow formBox rounded" style="min-width: 300px;">
                    <div class="my-2 d-flex flex-column justify-content-between">
                        <label>Image</label>
                        <input type="file" id="img" name="img" required>
                    </div>
                    <div class="my-2 d-flex flex-column justify-content-between">
                        <label>Customer mobile number</label>
                        <input type="text" name="mobile" maxlength="10" minlength="10">
                    </div>
                    <label class="my-3"><strong>Driver Details</strong></label>
                    <div class="my-2 d-flex flex-column justify-content-between">
                        <label>Driver Name</label>
                        <input type="text" name="dName">
                    </div>
                    <div class="my-2">
                        <div class="mb-2">
                            <label>Car model</label>
                            <button type="button" onclick="opencar()" class="mx-3 py-0 btn btn-danger">Add car</button>
                        </div>
                        <select id="setrate" name="setcar" class="form-select py-0" onchange="setRate()" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <?php
                                $search = "Select * from cars where uid = '$sesId'";
                                $result = mysqli_query($conn, $search);
                                $num = mysqli_num_rows($result);
                                if ($num) {
                                    for ($i=1; $i <= $num; $i++) {
                                        $row = mysqli_fetch_assoc($result);
                                        $id = $row['id'];
                                        $cName = $row['cName'];
                                        $cNo = $row['cNo'];
                                        $putRate = $row['rate'];
                                        echo '<option value="'.$id.'.'.$putRate.'" style="color:black;">'.$cName.' ('.$cNo.')</option>';
                                    }
                                }
                            ?>
                        </select>
                    </div>
                </div>
                <div class="mt-4 bg-light p-4 d-flex flex-column border border-dark shadow formBox rounded" style="min-width: 300px;">
                    <label class="mb-3"><strong>Trip Details</strong></label>
                    <div class="my-2 d-flex flex-column justify-content-between">
                        <label>Pickup address</label>
                        <input type="text" name="pAdd" class="stopValue">
                    </div>
                    <div id="stops"></div>
                    <div class="my-2 d-flex flex-column justify-content-between">
                        <label>Drop address</label>
                        <input type="text" name="dAdd" class="stopValue">
                    </div>
                    <div class="grouping d-flex justify-content-between">
                        <button type="button" onclick="addStop()" class="col-5 mt-2 mb-2 btn btn-danger shadow" style="max-width:300px">Add Stop</button>
                        <button type="button" onclick="distance()" class="col-5 mt-2 mb-2 btn btn-danger shadow" style="max-width:300px">Distance</button>
                    </div>
                    <div class="my-2 d-flex flex-column justify-content-between">
                        <label>Date</label>
                        <input type="date" name="date">
                    </div>
                    <div class="my-2 d-flex flex-column justify-content-between">
                        <label>Days</label>
                        <input type="number" name="days">
                    </div>
                    <div class="grouping d-flex justify-content-between">
                        <div class="my-2 d-flex flex-column justify-content-between">
                            <label>Per km rate</label>
                            <input type="number" name="rate" id="rate">
                        </div>
                        <div class="my-2 d-flex flex-column justify-content-between">
                            <label>Total Km</label>
                            <input type="number" name="tkm" id="tkm">
                        </div>
                    </div>
                    <div class="my-2 d-flex flex-column justify-content-between">
                        <label>Advance</label>
                        <input type="number" name="advance" value="0">
                    </div>
                    <label class="my-3"><strong>Charges</strong></label>
                    <div class="grouping d-flex flex-wrap justify-content-between">
                        <div class="my-2 d-flex flex-column justify-content-between" style="max-width: 25%;min-width: 85px">
                            <label>Toll total</label>
                            <input type="number" name="toll" value="0">
                        </div>
                        <div class="my-2 d-flex flex-column justify-content-between" style="max-width: 25%;min-width: 85px">
                            <label>Parking</label>
                            <input type="number" name="parking" value="0">
                        </div>
                        <div class="my-2 d-flex flex-column justify-content-between" style="max-width: 25%;min-width: 85px">
                            <label>Driver Food</label>
                            <input type="number" name="stay" value="0">
                        </div>
                        <div class="my-2 d-flex flex-column justify-content-between" style="max-width: 25%;min-width: 85px">
                            <label>Night halt</label>
                            <input type="number" name="halt" value="0">
                        </div>
                        <div class="my-2 d-flex flex-column justify-content-between" style="max-width: 25%;min-width: 85px">
                            <label>Overtime</label>
                            <input type="number" name="over" value="0">
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="text-center mb-4">    
                <button type="submit" class="col-5 mt-2 mb-5 btn btn-danger shadow" style="max-width:300px">Get Bill</button>
            </div>
            </form>
        </div>
        <div>
            <?php require "Partials/followUs.php"?>
        </div>
        <div class="position-fixed start-0 top-0" id="cardets">
            <div class="position-fixed start-50 top-50 translate-middle update">
                <form class="w-100 d-flex flex-column justify-content-center align-items-center" action="./carDets.php" method="post">
                    <div class="d-flex flex-column justify-content-center w-100 bg-light rounded border border-dark shadow p-4 pt-3" style="max-width:900px;">
                        <div class="d-flex justify-content-end">
                            <svg xmlns="http://www.w3.org/2000/svg" onclick="closeCar()" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" style="cursor: pointer;">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </div>
                        <div class="mb-2">
                            <label>Car model: </label>
                            <input type="text" class="w-100 form-control border border-dark" name="cName" required>
                        </div>
                        <div class="my-2">
                            <label>Car number: </label>
                            <input type="text" id="cNo" class="w-100 form-control border border-dark" name="cNo" maxlength="10" minlength="10" required>
                        </div>
                        <div class="my-2">
                            <label>Per km rate: </label>
                            <input type="number" class="w-100 form-control border border-dark" name="rate" required>
                        </div>
                        <button type="Submit" class="btn btn-danger col-5 mx-auto mt-3 mb-4">Add</button>
                    </div>
                </form>
            </div>
        </div>
    </body>
    <script>
        let box = document.getElementById('cardets');
        box.style.display = "none";
        let setRate = () =>{
            let setrate = document.getElementById('setrate');
            let obj = setrate.value;
            let ratings = obj.split('.');
            let rate = document.getElementById('rate');
            rate.value = ratings[1];
        }
        let closeCar = () => {
            let box = document.getElementById('cardets');
            box.style.display = "none";
        }
        let opencar = () => {
            let box = document.getElementById('cardets');
            box.style.display = "block";
        }
        let addStop = () => {
            let stops = document.getElementById("stops")
            let newStop = document.createElement('div')
            newStop.innerHTML = `<div class="my-2 d-flex flex-column justify-content-between">
                        <label>Stop address</label>
                        <div>
                            <input type="text" name="stop" style="width:90%;" class="stopValue">
                            <svg xmlns="http://www.w3.org/2000/svg" onclick="closeStop(this)" width="25" height="25" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" style="cursor:pointer;">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </div>
                    </div>`
            stops.appendChild(newStop)
        }
        let closeStop = (stopField) => {
            stopField = stopField.parentNode.parentNode.parentNode;
            let stops = document.getElementById("stops")
            stops.removeChild(stopField);
        }
    </script>
</html>