window.onload = () =>{
    const song_img_el = document.getElementById('song-image');
    const song_title_el = document.getElementById('song-title');
    const song_artist_el = document.getElementById('song-artist');
    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
    const prev_btn = document.getElementById('prev-btn');
    const next_btn = document.getElementById('next-btn');
    const audio_player = document.getElementById('music-player');

    let current_song_index;

    let songs = [
        {
             title:'Red',
             artist: 'Taylor Swift',
             song_path: 'music/song-1.mp3',
             img_path: 'media/song-1.png'

        },
        {
            title: 'Ready For It?',
            artist: 'Taylor Swift',
            song_path: 'music/song-2.mp3',
            img_path: 'media/song-2.png'

        },
        {
            title: 'Shake it off',
            artist: 'Taylor Swift',
            song_path: 'music/song-3.mp3',
            img_path: 'media/song-3.jpg'

        }
    ]

    play_btn.addEventListener('click',PlaySong);
    prev_btn.addEventListener('click',()=>ChangeSong());
    next_btn.addEventListener('click', () => ChangeSong(false));

    InitPlayer();

    function InitPlayer()
    {
        current_song_index = 0;
        UpdatePlayer();
    }
    function UpdatePlayer()
    {
        let song = songs[current_song_index];
        song_img_el.style = "background-image: url('" + song.img_path + "')";
        song_title_el.innerText = song.title;
        song_artist_el.innerText = song.artist;
        audio_player.src = song.song_path;

    }

    function PlaySong()
    {
        if(audio_player.paused)
        {
            audio_player.play();
            play_btn_icon.classList.remove('fa-play');
            play_btn_icon.classList.add('fa-pause');

        }
        else{
            audio_player.pause();
            play_btn_icon.classList.remove('fa-pause');
            play_btn_icon.classList.add('fa-play');

        }
    }

    function ChangeSong(next = true)
    {
        if(next)
        {
            current_song_index++;
            if(current_song_index > songs.length - 1)
            {
                current_song_index = 0;
            }
        }
        else
        {
            current_song_index--;
            if(current_song_index < 0)
            {
                current_song_index = songs.length - 1;
            }
        }
        UpdatePlayer();
        PlaySong();
    }


}