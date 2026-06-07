<?php

include 'conexao.php';

$sql = "SELECT * FROM exerc02_produtos";

$result = $conn->query($sql);

$dados = [];

while($row = $result->fetch_assoc()) {
    $dados[] = $row;
}

echo json_encode($dados);

?>