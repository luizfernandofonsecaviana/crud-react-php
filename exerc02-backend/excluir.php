<?php

include 'conexao.php';

$data = json_decode(
    file_get_contents("php://input")
);

$id = $data->id;

$sql = "DELETE FROM exerc02_produtos
WHERE id=$id";

$conn->query($sql);

echo json_encode([
    "mensagem" => "Produto excluído"
]);

?>