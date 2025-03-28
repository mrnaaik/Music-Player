'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/images/Cheliya Cheliya.jpg",
    posterUrl: "./assets/images/Cheliya Cheliya.jpg",
    title: "Cheliya Cheliya",
    album: "ఖుషి",
    year: 2001,
    artist: "Pawan Kalyan | Bhumika Chawla",
    musicPath: "./assets/music/Cheliya Cheliya.mp3",
  },
  {
    backgroundImage: "./assets/images/Vaalu Kanuladaanaa.jpg",
    posterUrl: "./assets/images/Vaalu Kanuladaanaa.jpg",
    title: "Vaalu Kanuladaanaa",
    album: "PREMIKULA ROJU",
    year: 1999,
    artist: "Kunal & Sonali Bendre",
    musicPath: "./assets/music/Vaalu Kanuladaanaa.mp3",
  },
  {
    backgroundImage: "./assets/images/Ola Olaala Ala.jpg",
    posterUrl: "./assets/images/Ola Olaala Ala.jpg",
    title: "Ola Olaala Ala",
    album: "ORANGE",
    year: 2010,
    artist: "Ramcharan & Genelia",
    musicPath: "./assets/music/Ola Olaala Ala.mp3",
  },
  {
    backgroundImage: "./assets/images/Satyam Emito.jpg",
    posterUrl: "./assets/images/Satyam Emito.jpg",
    title: "Satyam Emito",
    album: "ATHIDHI",
    year: 2007,
    artist: "Mahesh Babu & Amrita Rao",
    musicPath: "./assets/music/Satyam Emito.mp3",
  },
  {
    backgroundImage: "./assets/images/Vastha Nee Venuka.jpg",
    posterUrl: "./assets/images/Vastha Nee Venuka.jpg",
    title: "Vastha Nee Venuka",
    album: "NANI",
    year: 2004,
    artist: "Mahesh Babu | Ameesha Patel",
    musicPath: "./assets/music/Vastha Nee Venuka.mp3",
  },
  {
    backgroundImage: "./assets/images/Hrudayam Hemachandra.jpg",
    posterUrl: "./assets/images/Hrudayam Hemachandra.jpg",
    title: "Hrudayam",
    album: "PARUGU",
    year: 2008,
    artist: "Allu Arju | Sheela Kaur",
    musicPath: "./assets/music/Hrudayam Hemachandra.mp3",
  },
  {
    backgroundImage: "./assets/images/Theluse Theluse.jpg",
    posterUrl: "./assets/images/Theluse Theluse.jpg",
    title: "Theluse Theluse",
    album: "MOOGA MANASULU",
    year: 2013,
    artist: "Mahesh Kanakala| Surbhi Singhwal",
    musicPath: "./assets/music/Theluse Theluse.mp3",
  },
  {
    backgroundImage: "./assets/images/Sapta Sagaralu Dhaati.jpg",
    posterUrl: "./assets/images/Sapta Sagaralu Dhaati.jpg",
    title: "Sapta Sagaralu Dhaati",
    album: "SAPTA SAGARALU DHAATI",
    year: 2023,
    artist: "Rakshit Shetty | Rukmini Vasanth",
    musicPath: "./assets/music/Sapta Sagaralu Dhaati.mp3",
  },
  {
    backgroundImage: "./assets/images/Aahista Aahista.jpg",
    posterUrl: "./assets/images/Aahista Aahista.jpg",
    title: "Aahista Aahista",
    album: "Bachna Ae Haseeno",
    year: 2008,
    artist: "Ranbir Kapoor|Deepika Padukone",
    musicPath: "./assets/music/Aahista Aahista.mp3",
  },
  {
    backgroundImage: "./assets/images/Villain Yaaru.jpg",
    posterUrl: "./assets/images/Villain Yaaru.jpg",
    title: "Villain Yaaru",
    album: "LEO",
    year: 2024,
    artist: "Thalapathy Vijay | Trisha",
    musicPath: "./assets/music/Villain Yaaru.mp3",
  },
  {
    backgroundImage: "./assets/images/Ratata.jpg",
    posterUrl: "./assets/images/Ratata.jpg",
    title: "Ratata",
    album: "LEO",
    year: 2024,
    artist: "Thalapathy Vijay | Trisha",
    musicPath: "./assets/music/Ratata.mp3",
  },
  {
    backgroundImage: "./assets/images/Heer Aasmani.jpg",
    posterUrl: "./assets/images/Heer Aasmani.jpg",
    title: "Heer Aasmani",
    album: "FIGTER",
    year: 2024,
    artist: "Hrithik Roshan | Deepika Padukone",
    musicPath: "./assets/music/Heer Aasmani.mp3",
  },
  {
    backgroundImage: "./assets/images/Dilnashin Dilnashin.jpg",
    posterUrl: "./assets/images/Dilnashin Dilnashin.jpg",
    title: "Dilnashin Dilnashin",
    album: " Aashiq Banaya Aapne",
    year: 2005,
    artist: "K.K _Himesh_Emraan H | Tanushree,Sonu S",
    musicPath: "./assets/music/Dilnashin Dilnashin.mp3",
  },
  {
    backgroundImage: "./assets/images/Judai Best.jpg",
    posterUrl: "./assets/images/Judai Best.jpg",
    title: "Judai Best",
    album: "JANNAT",
    year: 2008,
    artist: "Kamran Ahmed",
    musicPath: "./assets/music/Judai Best.mp3",
  },
  {
    backgroundImage: "./assets/images/Porkanda Singam.jpg",
    posterUrl: "./assets/images/Porkanda Singam.jpg",
    title: "Porkanda Singam",
    album: "VIKRAM",
    year: 2022,
    artist: "Kamal Haasan | Vijay Sethupathi | Fahadh Faasil",
    musicPath: "./assets/music/Porkanda Singam.mp3",
  },
];
     
/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
