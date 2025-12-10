window.addEventListener("load", () => {
  const bg = document.querySelector(".background-video");
  if (!bg) return;
  if (bg.paused) {
    bg.play().catch(() => {});
  }
});

// constants
const audio = document.getElementById("audio-player");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const progress = document.getElementById("progress");
const trackTitle = document.getElementById("track-title");

// tracks
const tracks = [
    { title: "SPATIALAUDIO", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/SPATIALAUDIO.mp3" },
    { title: "TITANIUM", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/TITANIUM.mp3" },
    { title: "MORNINGSTAR", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/MORNINGSTAR.mp3" },
    { title: "ATMOS", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/ATMOS.mp3" },
    { title: "INDIGO", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/INDIGO.mp3" },
    { title: "EROSION", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/EROSION.mp3" },
    { title: "loophole", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/loophole.mp3" },
    { title: "ALLEGIANCE", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/ALLEGIANCE.mp3" },
    { title: "GLOW", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/GLOW.mp3" },
    { title: "LIABILITY", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/LIABILITY.mp3" }
];

// load first track
let currentTrack = 0;

function loadTrack(index) {
    currentTrack = index;
    audio.src = tracks[index].file;
    if (trackTitle) {
        trackTitle.textContent = tracks[index].title;
    }
    progress.value = 0;
}

loadTrack(currentTrack);

// autoplay
audio.addEventListener("ended", () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
});

// buttons functionality
// play
playButton.addEventListener("click", () => {
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault();

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
});

// prev
prevButton.addEventListener("click", () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
});

// next
nextButton.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
});

// progress bar
audio.addEventListener("timeupdate", () => {
    if(!audio.duration) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.value = percent;
});

progress.addEventListener("input", () => {
    if(!audio.duration) return;
    const newTime = (progress.value / 100) * audio.duration;
    audio.currentTime = newTime;
});


function setProgressFill(percent) {
    progress.style.background = `
      linear-gradient(
        to right,
        #5e5566 0%,
        #5e5566 ${percent}%,
        rgba(255,255,255,0.12) ${percent}%,
        rgba(255,255,255,0.12) 100%
      )
    `;
  }

  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.value = percent;
    setProgressFill(percent);
  });
  
  progress.addEventListener("input", () => {
    if (!audio.duration) return;
    const newTime = (progress.value / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgressFill(progress.value);
  });

  const mainVolumeSlider = document.getElementById("main-volume-slider");
  const mainVolumeValue  = document.getElementById("main-vol-value");
  const mainVolumeIcon   = document.getElementById("main-vol-icon");
  
  let mainLastVolume = 80;
  
  const savedMainVol = localStorage.getItem("mainVolume");
  if (savedMainVol !== null) {
    mainLastVolume = Number(savedMainVol);
    mainVolumeSlider.value = mainLastVolume;
  }
  
  audio.volume = mainLastVolume / 100;
  mainVolumeValue.textContent = mainLastVolume;
  updateMainVolIcon(mainLastVolume);
  
  mainVolumeSlider.addEventListener("input", () => {
    const v = Number(mainVolumeSlider.value);
    audio.volume = v / 100;
    audio.muted = v === 0;
    mainVolumeValue.textContent = v;
  
    if (v > 0) mainLastVolume = v;
  
    localStorage.setItem("mainVolume", v);
    updateMainVolIcon(v);
  });
  
  mainVolumeIcon.addEventListener("click", () => {
    if (!audio.muted && audio.volume > 0) {
      audio.muted = true;
      mainVolumeSlider.value = 0;
      mainVolumeValue.textContent = "0";
      updateMainVolIcon(0);
    } else {
      audio.muted = false;
      mainVolumeSlider.value = mainLastVolume;
      audio.volume = mainLastVolume / 100;
      mainVolumeValue.textContent = mainLastVolume;
      updateMainVolIcon(mainLastVolume);
    }
  });

function updateMainVolIcon(v) {
  if (audio.muted || v === 0) mainVolumeIcon.src = "images/vol/vol_mute.png";
  else if (v < 35) mainVolumeIcon.src = "images/vol/vol_state_1.png";
  else if (v < 70) mainVolumeIcon.src = "images/vol/vol_state_2.png";
  else mainVolumeIcon.src = "images/vol/vol_state_3.png";
}


