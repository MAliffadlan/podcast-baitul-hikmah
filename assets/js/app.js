// media controllers
const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

// record player animation
const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");

// playing song
const songName = document.querySelector("#song-name");
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");
const musicbox = document.querySelector("#musicbox");

// control button images
let playImg = "./assets/images/play.svg";
let pauseImg = "./assets/images/pause.svg";

// default controls
playPause.src = playImg;
let isPlaying = true;

const songList = [
    {
        name: "01. EPS 1 Mengagumkan Guru & Kitab (UST Faishol & Wiwit)",
        source: "./assets/music/01. EPS 1 MENGAGUMKAN GURU & KITAB (UST Faishol & wiwit).mp3",
        cover: "./assets/images/chillhop.jpg"
    },
    {
        name: "02. EPS 2 Hukum Barang Temuan (UST Faishol & Indah)",
        source: "./assets/music/02. EPS 2 Hukum Barang Temuan (UST Faishol & indah).mp3",
        cover: "./assets/images/mundur alon.jpg"
    },
    {
        name: "03. EPS 3 Meninggalkan Rukun Sholat (UST Faishol & Indah)",
        source: "./assets/music/03. EPS 3 MENINGGALKAN RUKUN SOLAT (UST Faishol & indah).mp3",
        cover: "./assets/images/chillhop-2.jpg"
    },
    {
        name: "04. EPS 4 Sejarah Sholat (UST Rohman & Danu)",
        source: "./assets/music/04. EPS 4 SEJARAH SOLAT (UST Rohman & Danu).mp3",
        cover: "./assets/images/chillhop-3.jpg"
    },
    {
        name: "05. EPS 5 Peristiwa Fathu Makkah (UST Rohman & Danu)",
        source: "./assets/music/05. EPS 5 PERISTIWA FATHU MAKKAH ( UST Rohman & Danu).mp3",
        cover: "./assets/images/dewa satu.jpg"
    },
    {
        name: "06. EPS 6 Ciri-Ciri Baligh (UST Syukron & Akbar)",
        source: "./assets/music/06. EPS 6 CIRI CIRI BALIGH ( UST SYUKRON & AKBAR).mp3",
        cover: "./assets/images/chillhop-4.jpg"
    },
    {
        name: "07. EPS 7 Indah Berbagi Dibulan Suci Ramadhan (UST Syukron & Akbar)",
        source: "./assets/music/07. EPS 7 INDAH BERBAGI DIBULAN SUCI RAMADHAN ( UST SYUKRON & AKBAR).mp3",
        cover: "./assets/images/damai kami sepanjang hari.jpg"
    },
    {
        name: "08. EPS 8 Larangan Bullying Dalam Islam (UST Syukron & Akbar)",
        source: "./assets/music/08. EPS 8 LARANGAN BULLYING DALAM ISLAM ( UST SYUKRON & AKBAR).mp3",
        cover: "./assets/images/be a music.png"
    },
    {
        name: "09. EPS 9 Ibadah Ringan Di Bulan Suci Ramadhan (GUS Farda & Razan)",
        source: "./assets/music/09. EPS 9 IBADAH RINGAN DI BULAN SUCI RAMADHAN ( GUS FARDA & RAZAN ).mp3",
        cover: "./assets/images/Bruno Mars It will ran.jpg"
    },
    {
        name: "10. EPS 10 Tata Cara Sholat Jama Dalam Perjalanan (GUS Farda & Razan)",
        source: "./assets/music/10. EPS 10 TATA CARA SOLAT JAMA DALAM PERJALANAN ( GUS FARDA & RAZAN).mp3",
        cover: "./assets/images/bukan mudah bagiku.jpg"
    },
    {
        name: "11. EPS 11 Macam-Macam Syukur (UST Syukron & Akbar)",
        source: "./assets/music/11. EPS 11 MACAM MACAM SYUKUR ( UST SYUKRON & AKBAR).mp3",
        cover: "./assets/images/alone.png"
    },
    {
        name: "12. EPS 12 Kisah Nabi-Nabi Dengan Hewan (USTZH Marwah & Wizna)",
        source: "./assets/music/12. EPS 12 KISAH NABI-NABI DENGAN HEWAN (USTZH MARWAH & WIZNA ).mp3",
        cover: "./assets/images/alone.png"
    },
    {
        name: "13. EPS 13 Jalan Rizki Manusia (UST Rohman & Zakaha)",
        source: "./assets/music/13. EPS 13 JALAN RIZKI MANUSIA (UST ROHMAN & ZAKAHA ).mp3",
        cover: "./assets/images/alone.png"
    },
    {
        name: "14. EPS 14 Etika Kodhil Hajat (UST Rohman & Zakaha)",
        source: "./assets/music/14. EPS 14 ETIKA KODHIL HAJAT (UST ROHMAN & ZAKAHA).mp3",
        cover: "./assets/images/alone.png"
    },
    {
        name: "15. EPS 15 Hal-Hal Yang Menyebabkan Mandi Besar (UST Syukron & Akbar)",
        source: "./assets/music/15. EPS 15 HAL HAL YANG MENYEBABKAN MANDI BESAR (UST SYUKRON & AKBAR).mp3",
        cover: "./assets/images/alone.png"
    },
    {
        name: "16. EPS 16 Peran Khodijah & Fatimah Dalam Perjuangan Agama Islam (USTZH Marwah & Wizna)",
        source: "./assets/music/16. EPS 16 PERAN KHODIJAH & FATIMAH DALAM PERJUANGAN AGAMA ISLAM (USTZH MARWAH & WIZNA).mp3",
        cover: "./assets/images/alone.png"
    },
    {
        name: "17. EPS 17 Kisah Nabi Hud (UST Rohman & Azmi)",
        source: "./assets/music/17. EPS 17 KISAH NABI HUD (UST ROHMAN & AZMI).mp3",
        cover: "./assets/images/alone.png"
    },
    {
        name: "",
        source: "./assets/music/",
        cover: "./assets/images/chillhop-2.jpg"
    }
       
];
// helper function
function createEle(ele) {
    return document.createElement(ele);
}
function append(parent, child) {
    return parent.append(child);
}
// creating track list
const ul = createEle('ul')
function createPlayList() {
    songList.forEach((song) => {
        let h3 = createEle('h3');
        let li = createEle('li');

        li.classList.add("track-item");
        h3.innerText = song.name;
        append(li,h3);
        append(ul,li)
    })
    append(musicbox, ul);
}

let songIndex = 0;
// preloaded song
loadMusic(songList[songIndex]);


function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    songName.innerText = songList[songIndex].name;
    audio.src = songList[songIndex].source;
}

function playSong() {
    playPause.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");

    audio.play();
}

function pauseSong() {
    playPause.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");

    audio.pause();
}

function nextPlay() {
    songIndex++;
    if(songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadMusic(songList[songIndex]);
    playSong()
}

function backPlay() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadMusic(songList[songIndex]);
    playSong()
}
function playHandler() {
    isPlaying = !isPlaying;
    //console.log("Change: ",isPlaying)
    isPlaying ? pauseSong() : playSong();
}


// player event 
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()