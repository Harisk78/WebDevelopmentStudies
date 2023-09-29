let aname=document.getElementById('name');
let aartist=document.getElementById('artist');
let aimg=document.getElementById('img');
let slide=document.getElementById('inp');

let play=document.getElementById("play");

let c=0;

let track_song=document.createElement('audio');
track_song.src='song/song1.mp3';
aimg.src='img/spb.jpg';

let index=0;
let song_list=[
    {
        name:'Kadhal Rojave',
        artist:'S.P.B',
        song:'song/song1.mp3',
        img:'img/spb.jpg'
    },
    {
        name:'Kathi Coin Fight BGM',
        artist:'Aniruth',
        song:'song/song2.mp3',
        img:'img/ani.jpg'
    },
    {
        name:'Naan Aval Illai',
        artist:'Karthik',
        song:'song/song3.mp3',
        img:'img/karthik.jpg'
    }
]
function play_song(){
    c++;
    if(c%2!=0){
        track_song.play();
        play.innerHTML='<ion-icon name="pause-outline"></ion-icon>'
    }
    else{
        play.innerHTML='<ion-icon name="play-outline"></ion-icon>'
        track_song.pause();
    }
}


function next_song(){
    c=1;
    index+=1;
    if(index>=song_list.length){
        index=0;
    }
    track_song.src=song_list[index].song;
    track_song.play();
    play.innerHTML='<ion-icon name="pause-outline"></ion-icon>'

    aname.innerHTML=song_list[index].name;
    aartist.innerHTML=song_list[index].artist;
    aimg.src=song_list[index].img;
    slide.value=0;
}

function prev_song(){
    c=1;
    index-=1;
    if(index<0){
        index=song_list.length-1;
    }
    if(index>=song_list.length){
        index=0;
    }
    track_song.src=song_list[index].song;
    track_song.play();
    play.innerHTML='<ion-icon name="pause-outline"></ion-icon>'

    aname.innerHTML=song_list[index].name;
    aartist.innerHTML=song_list[index].artist;
    aimg.src=song_list[index].img;
    slide.value=0;
}

function change_duration(){
    slide_position=track_song.duration*(slide.value/100);
    track_song.currentTime = slide_position;
}


