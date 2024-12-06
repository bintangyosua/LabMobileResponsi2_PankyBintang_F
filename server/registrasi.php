<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$username = trim($data['username']);
$password = md5(trim($data['password']));
$query = mysqli_query($con, "insert into user (username, password) values ('$username', '$password')");
echo json_encode($pesan);
echo mysqli_error($con);

