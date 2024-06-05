<?php
session_start();
include 'db.php';

if (!isset($_SESSION['email'])) {
    header('Location: index.php');
    exit();
}

if (isset($_POST['addGasto'])) {
    $descricao = $_POST['descricao'];
    $valor = $_POST['valor'];
    $data = $_POST['data'];
    $categoria = $_POST['categoria'];
    $tipo = 'Débito';
    $conta_id = '1234567890'; // Exemplo de conta_id

    $query = "INSERT INTO transacao (descricao, valor, data, tipo, conta_id, categoria_nome) VALUES ('$descricao', '$valor', '$data', '$tipo', '$conta_id', '$categoria')";
    mysqli_query($conn, $query);
    echo "<script>alert('Gasto adicionado com sucesso');</script>";
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gastos</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <div class="container">
        <h1>Gastos</h1>
        <canvas id="gastosChart"></canvas>
        <form method="POST" action="">
            <input type="text" name="descricao" placeholder="Descrição" required>
            <input type="number" name="valor" placeholder="Valor" required>
            <input type="date" name="data" required>
            <input type="text" name="categoria" placeholder="Categoria" required>
            <button type="submit" name="addGasto">Adicionar Gasto</button>
        </form>
        <div class="gastos-list">
            <?php
            $query = "SELECT * FROM transacao WHERE tipo='Débito'";
            $result = mysqli_query($conn, $query);
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<div class='gasto-item'>";
                echo "<p>Descrição: " . $row['descricao'] . "</p>";
                echo "<p>Valor: " . $row['valor'] . "</p>";
                echo "<p>Data: " . $row['data'] . "</p>";
                echo "<p>Categoria: " . $row['categoria_nome'] . "</p>";
                echo "</div>";
            }
            ?>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>