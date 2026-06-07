<?php

include 'conexao.php';

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$nome = trim($data["nome"]);
$preco = trim($data["preco"]);

if($nome == "" || $preco == ""){

    echo json_encode([
        "status" => "erro"
    ]);

    exit;
}

$sql = "INSERT INTO exerc02_produtos(nome, preco)
VALUES('$nome', '$preco')";

$conn->query($sql);

echo json_encode([
    "status" => "sucesso"
]);

?>