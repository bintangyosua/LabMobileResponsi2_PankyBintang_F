<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$id = trim($data['id']);
$nama = trim($data['nama']);
$story = trim($data['story']);
http_response_code(201);
if ($nama != '' and $story != '') {
    $query = mysqli_query($con, "update mulan set nama='$nama',story='$story' where
id='$id'");
    $pesan = true;
} else {
    $pesan = false;
}
echo json_encode($pesan);
echo mysqli_error($con);
