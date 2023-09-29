//GETTING FROM HTML

let aname=document.getElementById('name');
let aartist=document.getElementById('artist');
let aimg=document.getElementById('img');
let slide=document.getElementById('inp');
let song_duration=document.getElementById('duration');
let song_tduration=document.getElementById('tduration');
let slide_position;
let play=document.getElementById("play");
let c=0,x=0;

//CREATING AUDIO

let track_song=document.createElement('audio');
track_song.src='song/song1.mp3';
aimg.src='img/spb.jpg';

//AUDIO DETAILS

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
// DURATION
track_song.addEventListener("timeupdate",dur);

//CHANGING DURATION BY RANGE SLIDER

function change_duration(){
    slide_position=track_song.duration*(slide.value/100);
    track_song.currentTime = slide_position;
}

// SONG DURATION AND CURRENT DURATION

function dur(){
    let time ;
    if(track_song.duration){
        let min = Math.floor(track_song.currentTime/60);
        let sec = Math.floor(track_song.currentTime - min * 60);

        let tmin = Math.floor(track_song.duration/60);
        let tsec = Math.floor(track_song.duration - tmin * 60);

        if(min<10){
            min = '0' + min;
        }
        if(sec<10){
            sec = '0' + sec;
        }
        if(tmin<10){
            tmin = '0' + tmin;
        }
        if(tsec<10){
            tsec = '0' + tsec;
        }
        time = min + ':' + sec;
        song_tduration.innerHTML= tmin + ':' + tsec;
    }
    else{
        time = '00' + ':' + '00';
    }
    song_duration.innerHTML =time;
    
    if(track_song.currentTime === track_song.duration){
        next_song();
    }
    
}

let a=1;
function rangeslider(){
    slide.value=a;
    a+=1;
}

// PLAYING SONG

let interval;
function play_song(){
    c++;
    if(c%2!=0){
        track_song.play();
        play.innerHTML='<ion-icon name="pause-outline"></ion-icon>'
        interval = setInterval(rangeslider,1000);
    }
    else{
        play.innerHTML='<ion-icon name="play-outline"></ion-icon>'
        track_song.pause();
        clearInterval(interval);
    }
}

//NEXT SONG

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

//PREVIOUS SONG

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
