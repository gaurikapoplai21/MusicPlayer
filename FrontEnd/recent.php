<!DOCTYPE html>
<head>
    <style>
        body {
            background-image: url('./images/liked_back.svg');
        }

        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            }

            td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            }

            tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>
</head>

<body>
<?php
require_once('../connect.php');
error_reporting(E_ERROR);
$query = mysqli_query($connect, "SELECT songs.title, artists.name
FROM playsong, songs, artists
WHERE playsong.song_id=songs.song_id AND playsong.artist_id=artists.artist_id
group by playsong.song_id
order by start_time DESC;  ") or die (mysqli_error($connect));
?>

<table>
            <tr>
                <td>Song name</td>
                <td>Artist</td>
            </tr>

<?php
while ($row = mysqli_fetch_array($query)) {?>
    <tr>
    <td><?php echo $row['title'];?></td>
    <td><?php echo $row['name'];?></td>
    </tr>
<?php  } ?>

</body>
</html>