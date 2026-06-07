<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json");

$conn = new mysqli(
    "localhost",
    "root",
    "",
    "exerc02_db"
);

if ($conn->connect_error) {
    die("Erro na conexão");
}

?>