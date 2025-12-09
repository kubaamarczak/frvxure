window.addEventListener("load", () => {
    const bg = document.querySelector(".background-video");
    if (!bg) return;
    if (bg.paused) {
      bg.play().catch(() => {});
    }
  });

const stashPlayer = document.getElementById("audio-player-stash");
const stashContainer = document.getElementById("playlist-stash");

const stashTracks = [
    { title: "loophole", bpm: "148", key: "D#MIN", len: "1:57", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/loophole.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/loophole.mp3", buy: "https://bsta.rs/Eqc8A" },
    { title: "TITANIUM", bpm: "146", key: "C#MIN", len: "1:58", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/TITANIUM.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/TITANIUM.mp3", buy: "" },
    { title: "ALLEGIANCE", bpm: "134", key: "D#MIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/ALLEGIANCE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/ALLEGIANCE.mp3", buy: "" },
    { title: "SPATIALAUDIO", bpm: "146", key: "GMIN", len: "2:52",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/SPATIALAUDIO.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/SPATIALAUDIO.mp3", buy: "" },
    { title: "MORNINGSTAR", bpm: "141", key: "C#MIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/MORNINGSTAR.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/MORNINGSTAR.mp3", buy: "" },
    { title: "SVTURN", bpm: "141", key: "CMIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/SVTURN.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/SVTURN.mp3", buy: "" },
    { title: "BLADE", bpm: "139", key: "DMIN", len: "2:05",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/BLADE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/BLADE.mp3", buy: "" },
    { title: "LILAC", bpm: "146", key: "FMIN", len: "2:00",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/LILAC.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/LILAC.mp3", buy: "" },
    { title: "ARMORY", bpm: "144", key: "D#MIN", len: "2:00",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/ARMORY.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/ARMORY.mp3", buy: "https://bsta.rs/jpZV0" },
    { title: "GLOW", bpm: "141", key: "D#MIN", len: "1:56",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/GLOW.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/GLOW.mp3", buy: "" },
    { title: "LIABILITY", bpm: "145", key: "C#MIN", len: "2:05",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/LIABILITY.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/LIABILITY.mp3", buy: "" },
    { title: "INDIGO", bpm: "143", key: "G#MIN", len: "2:03",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/INDIGO.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/INDIGO.mp3", buy: "" },
    { title: "COUPE", bpm: "142", key: "C#MIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/COUPE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/COUPE.mp3", buy: "" },
    { title: "TRIMSTEP", bpm: "138", key: "C#MIN", len: "2:51",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/TRIMSTEP.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/TRIMSTEP.mp3", buy: "" },
    { title: "HURTING", bpm: "142", key: "D#MIN", len: "2:06",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HURTING.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HURTING.mp3", buy: "" },
    { title: "DARKK w/ cvni", bpm: "136", key: "FMIN", len: "2:14",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/DARKK.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/DARKK.mp3", buy: "" },
    { title: "KKOUNT", bpm: "142", key: "DMIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/KKOUNT.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/KKOUNT.mp3", buy: "" },
    { title: "FAINT", bpm: "141", key: "DMIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FAINT.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FAINT.mp3", buy: "" },
    { title: "FALSENRTVE", bpm: "137", key: "DMIN", len: "2:10",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FALSENRTVE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FALSENRTVE.mp3", buy: "" },
    { title: "CAGE", bpm: "144", key: "D#MIN", len: "2:00", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/CAGE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/CAGE.mp3", buy: "" },
    { title: "TRAP", bpm: "143", key: "CMIN", len: "2:00", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/TRAP.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/TRAP.mp3", buy: "" },
    { title: "lowrider", bpm: "140", key: "D#MIN", len: "2:20",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/lowrider.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/lowrider.mp3", buy: "" },
    { title: "tripwire", bpm: "140", key: "C#MIN", len: "2:17",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/tripwire.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/tripwire.mp3", buy: "" },
    { title: "ANGELWING", bpm: "142", key: "EMIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ANGELWING.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ANGELWING.mp3", buy: "https://bsta.rs/t8UTC" },
    { title: "fallout", bpm: "156", key: "DMIN", len: "1:51",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/fallout.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/fallout.mp3", buy: "" },
    { title: "FLOWERS", bpm: "142", key: "C#MIN", len: "2:31", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FLOWERS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FLOWERS.mp3", buy: "" },
    { title: "ERASE", bpm: "140", key: "DMIN", len: "2:03",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ERASE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ERASE.mp3", buy: "" },
    { title: "CULPRIT", bpm: "137", key: "D#MIN", len: "2:06",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/CULPRIT.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/CULPRIT.mp3", buy: "" },
    { title: "dystopia", bpm: "150", key: "CMIN", len: "1:55", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/dystopia.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/dystopia.mp3", buy: "https://bsta.rs/wJp3f" },
    { title: "4DASPEAKERS", bpm: "143", key: "D#MIN", len: "2:01", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/4DASPEAKERS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/4DASPEAKERS.mp3", buy: "" },
    { title: "LIONS", bpm: "136", key: "D#MIN", len: "2:07",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/LIONS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/LIONS.mp3", buy: "" },
    { title: "MARTYR", bpm: "149", key: "D#MIN", len: "1:49",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/MARTYR.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/MARTYR.mp3", buy: "" },
    { title: "HOPE", bpm: "134", key: "DMIN", len: "2:09",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HOPE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HOPE.mp3", buy: "" },
    { title: "hikkup", bpm: "143", key: "CMIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/hikkup.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/hikkup.mp3", buy: "" },
    { title: "NEWSKOOL", bpm: "141", key: "D#MIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/NEWSKOOL.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/NEWSKOOL.mp3", buy: "" },
    { title: "RELIC", bpm: "131", key: "C#MIN", len: "2:15",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/RELIC.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/RELIC.mp3", buy: "" },
    { title: "SANDTAN", bpm: "142", key: "DMIN", len: "1:56",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SANDTAN.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SANDTAN.mp3", buy: "" },
    { title: "BATS", bpm: "128", key: "C#MIN", len: "2:15",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/BATS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/BATS.mp3", buy: "https://bsta.rs/Wj7Gt" },
    { title: "flowstate", bpm: "141", key: "DMIN", len: "2:07", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/flowstate.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/flowstate.mp3", buy: "" },
    { title: "sippin", bpm: "127", key: "CMIN", len: "2:17", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/sippin.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/sippin.mp3", buy: "" },
    { title: "SWAG", bpm: "142", key: "C#MIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SWAG.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SWAG.mp3", buy: "" },
    { title: "OPUS", bpm: "144", key: "D#MIN", len: "2:00",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/OPUS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/OPUS.mp3", buy: "" },
    { title: "BOLTACTION", bpm: "142", key: "CMIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/BOLTACTION.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/BOLTACTION.mp3", buy: "" },
    { title: "ROOM4$", bpm: "133", key: "FMIN", len: "2:12",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ROOM4$.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ROOM4$.mp3", buy: "" }, 
    { title: "HIGHER", bpm: "141", key: "DMIN", len: "1:56",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HIGHER.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HIGHER.mp3", buy: "" },
    { title: "RAPID", bpm: "144", key: "CMIN", len: "2:00",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/RAPID.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/RAPID.mp3", buy: "" }, 
    { title: "SKKELETON", bpm: "143", key: "CMIN", len: "1:54",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SKKELETON.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SKKELETON.mp3", buy: "" },
    { title: "stunned", bpm: "138", key: "D#MIN", len: "2:05",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/stunned.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/stunned.mp3", buy: "https://bsta.rs/5H8sh" }, 
    { title: "HIATUS", bpm: "145", key: "DMIN", len: "2:25",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HIATUS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HIATUS.mp3", buy: "" }, 
    { title: "ghost", bpm: "143", key: "EMIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ghost.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ghost.mp3", buy: "" }, 
    { title: "cursed", bpm: "147", key: "C#MIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/cursed.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/cursed.mp3", buy: "" }, 
    { title: "VOLATILE", bpm: "143", key: "DMIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/VOLATILE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/VOLATILE.mp3", buy: "" }
];

// mechanism add tracks
stashTracks.forEach((track, index) => {
    const item = document.createElement("div");
    item.classList.add("track");

    item.dataset.index = index;

    item.innerHTML = `
    <div class="track-number">
        <span class="num-text">${index + 1}</span>
    </div>
    <div class="track-title">${track.title}</div>
    <div class="track-bpm">${track.bpm}</div>
    <div class="track-key">${track.key}</div>
    <div class="track-length" data-index="${index}">
        ${track.len}
        <div class="stash-progress-bg"></div>
        <div class="stash-progress" id="stash-progress-${index}"></div>
    </div>
    <button class="stash-play-button" data-index="${index}">▶</button>
    `;

    stashContainer.appendChild(item);
});

let currentTrackIndex = null;

// button play/pause
stashContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".stash-play-button");
    if (!btn) return;

    const index = Number(btn.dataset.index);

    // gleicher Track
    if (currentTrackIndex === index) {
        if (stashPlayer.paused) {
            stashPlayer.play();
        } else {
            stashPlayer.pause();
        }
        updateUIState();
        return;
    }

    // anderer Track
    currentTrackIndex = index;
    stashPlayer.src = stashTracks[index].file;
    stashPlayer.play();
    updateUIState();
});

// TRACK ENDET
stashPlayer.addEventListener("ended", () => {
    currentTrackIndex = null;
    stashPlayer.pause();
    updateUIState();
});

const volumeSlider = document.getElementById("stash-volume-slider");
const volumeValue  = document.getElementById("stash-vol-value");
const volumeIcon   = document.getElementById("stash-vol-icon");

let lastVolume = 80; // fallback, falls nie was gespeichert wurde

// gespeicherte Lautstärke laden
const savedVol = localStorage.getItem("stashVolume");
if (savedVol !== null) {
  lastVolume = Number(savedVol);
  volumeSlider.value = lastVolume;
}

stashPlayer.volume = lastVolume / 100;
volumeValue.textContent = lastVolume;
updateVolIcon(lastVolume);

// Slider -> Lautstärke
volumeSlider.addEventListener("input", () => {
  const v = Number(volumeSlider.value);
  stashPlayer.volume = v / 100;
  stashPlayer.muted = (v === 0); // wenn Slider 0, auch muted
  volumeValue.textContent = v;
  localStorage.setItem("stashVolume", v);

  if (v > 0) lastVolume = v;  // merken für unmute
  updateVolIcon(v);
});

// Icon -> Mute/Unmute toggle
volumeIcon.addEventListener("click", () => {
  if (!stashPlayer.muted && stashPlayer.volume > 0) {
    // MUTE
    stashPlayer.muted = true;
    volumeSlider.value = 0;
    volumeValue.textContent = "0";
    updateVolIcon(0);
  } else {
    // UNMUTE
    stashPlayer.muted = false;
    const restore = lastVolume || 80;
    stashPlayer.volume = restore / 100;
    volumeSlider.value = restore;
    volumeValue.textContent = restore;
    updateVolIcon(restore);
    localStorage.setItem("stashVolume", restore);
  }
});

function updateVolIcon(v) {
  if (stashPlayer.muted || v === 0) volumeIcon.src = "images/vol/vol_mute.png";
  else if (v < 35) volumeIcon.src = "images/vol/vol_state_1.png";
  else if (v < 70) volumeIcon.src = "images/vol/vol_state_2.png";
  else volumeIcon.src = "images/vol/vol_state_3.png";
}

// UI LOGIK
function updateUIState() {

    // ALLE ZEILEN RESETTEN
    document.querySelectorAll('.track').forEach(row => {
        row.classList.remove('active');
        const btn = row.querySelector('.stash-play-button');
        btn.textContent = "▶";

        // Bars entfernen
        const bars = row.querySelector('.playing-bars');
        if (bars) bars.remove();
    });

    if (currentTrackIndex === null) return;

    const currentRow = document.querySelector(`.track[data-index="${currentTrackIndex}"]`);
    if (!currentRow) return;

    const btn = currentRow.querySelector('.stash-play-button');

    // TRACK SPIELT
    if (!stashPlayer.paused) {
        currentRow.classList.add("active");
        btn.textContent = "❚❚";

        // Bars hinzufügen
        if (!currentRow.querySelector('.playing-bars')) {
            const bars = document.createElement("div");
            bars.classList.add("playing-bars");
            bars.innerHTML = `<span></span><span></span><span></span>`;
            currentRow.querySelector(".track-number").appendChild(bars);
        }
    }

    // TRACK PAUSIERT
    else {
        currentRow.classList.remove("active");
        btn.textContent = "▶";
    }
};

// progress bar & track length functionality
stashPlayer.addEventListener("timeupdate", () => {
    if (currentTrackIndex === null) return;

    const progressEl = document.getElementById(`stash-progress-${currentTrackIndex}`);
    if (!progressEl || !stashPlayer.duration) return;

    const percent = (stashPlayer.currentTime / stashPlayer.duration) * 100;
    progressEl.style.transform = `translateX(-50%) scaleX(${percent / 100})`;
});

const progressEl = document.getElementById(`stash-progress-${currentTrackIndex}`);
if (progressEl) progressEl.style.transform = "translateX(-50%) scaleX(0)";

const oldProgress = document.getElementById(`stash-progress-${currentTrackIndex}`);
if (oldProgress) oldProgress.style.transform = "translateX(-50%) scaleX(0)";


// modal functionality
const modalOverlay = document.getElementById("modal-overlay");
const modalBox = document.getElementById("modal-box");
const modalClose = document.getElementById("modal-close");

// Modal öffnen
function openModal(title, info) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-info").innerHTML = info;

    modalOverlay.classList.add("active");
}

// Modal schließen
modalClose.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
});

// Overlay-Klick schließt Modal
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
    }
});

stashContainer.addEventListener("click", (e) => {
    const row = e.target.closest(".track");
    if (!row) return;
  
    // Wenn der Klick auf dem Play-Button war -> Modal NICHT öffnen
    if (e.target.closest(".stash-play-button")) return;
  
    const index = Number(row.dataset.index);
    const track = stashTracks[index];
  
    // Inhalt fürs Modal bauen (du kannst das später erweitern)
    const infoHtml = `
    <div><strong>BPM:</strong> ${track.bpm ?? "-"}</div>
    <div><strong>Key:</strong> ${track.key ?? "-"}</div>
    <div><strong>Length:</strong> ${track.len ?? "-"}</div>
    <div class="modal-actions">
    ${track.free ? `<a class="modal-btn modal-btn-free" href="${track.free}" download>free (non-profit)</a>` : ""}
    ${track.buy ? `<a class="modal-btn modal-btn-buy" href="${track.buy}" target="_blank" rel="noopener noreferrer">buy on beatstars</a>` : ""}
    </div>
    <p class="modal-license">Free use for non-profit projects only. Commercial release requires a license on BeatStars. Credit: prod. by frvxure.</p>
    `;
  
    openModal(track.title, infoHtml);
  });


