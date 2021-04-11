<?php
//String connection to the database
$connect = mysqli_connect("localhost","root","") or die ('<h2>Failed to connect to the web server.</h2>');
mysqli_select_db($connect, "music_db") or die ('<h2>Failed to connect to the database!</h2>');
?>