<?php

include 'conexao.php';

$data = json_decode(
    file_get_contents("php://input")
);

$id = $data->id;
$nome = $data->nome;
$preco = $data->preco;

$sql = "UPDATE exerc02_produtos
SET nome='$nome',
preco='$preco'
WHERE id=$id";

$conn->query($sql);

echo json_encode([
    "mensagem" => "Produto atualizado"
]);

?>