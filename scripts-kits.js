window.addEventListener("load", () => {
    const bg = document.querySelector(".background-video");
    if (!bg) return;
    if (bg.paused) {
      bg.play().catch(() => {});
    }
  });

// === KIT PREVIEW MODAL ===

const previewBtn    = document.getElementById("kit-preview-btn");
const modalOverlay  = document.getElementById("kit-modal");
const modalClose    = document.getElementById("kit-modal-close");

function openKitModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.add("active");
}

function closeKitModal() {
  if (!modalOverlay) return;

  // Alles stoppen, wenn Modal zu
  const audios = modalOverlay.querySelectorAll("audio");
  audios.forEach(a => {
    a.pause();
    a.currentTime = 0;
  });

  const playBtns = modalOverlay.querySelectorAll(".kit-sample-play");
  playBtns.forEach(btn => {
    btn.textContent = "play";
    btn.classList.remove("active");
  });

  modalOverlay.classList.remove("active");
}

if (previewBtn && modalOverlay) {
  previewBtn.addEventListener("click", openKitModal);
}

if (modalClose) {
  modalClose.addEventListener("click", closeKitModal);
}

// Klick auf Overlay schließt Modal
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeKitModal();
    }
  });
}

// === SAMPLE PLAY/PAUSE LOGIK ===
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    const playBtn = e.target.closest(".kit-sample-play");
    if (!playBtn) return;

    const sampleId = playBtn.dataset.sample;
    const audio = document.getElementById(`kit-audio-${sampleId}`);
    if (!audio) return;

    // Zuerst alle anderen stoppen
    const allAudios = modalOverlay.querySelectorAll("audio");
    allAudios.forEach(a => {
      if (a !== audio) {
        a.pause();
        a.currentTime = 0;
      }
    });

    const allBtns = modalOverlay.querySelectorAll(".kit-sample-play");
    // alle Waveforms wieder neutral
    const allWaveforms = modalOverlay.querySelectorAll(".kit-waveform");
    allWaveforms.forEach(w => w.classList.remove("playing"));
    allBtns.forEach(btn => {
      if (btn !== playBtn) {
        btn.textContent = "play";
        btn.classList.remove("active");
      }
    });

    if (audio.paused) {
        audio.play();
        playBtn.textContent = "pause";
        playBtn.classList.add("active");
      
        // Waveform für dieses Sample finden
        const waveform = modalOverlay.querySelector(`.kit-sample[data-sample="${sampleId}"] .kit-waveform`);
        if (waveform) waveform.classList.add("playing");
      
    } else {
        audio.pause();
        playBtn.textContent = "play";
        playBtn.classList.remove("active");
      
        // Glow entfernen
        const waveform = modalOverlay.querySelector(`.kit-sample[data-sample="${sampleId}"] .kit-waveform`);
        if (waveform) waveform.classList.remove("playing");
    }

    // Wenn Audio zu Ende → Button resetten
    audio.addEventListener("ended", () => {
      playBtn.textContent = "play";
      playBtn.classList.remove("active");

      const waveform = modalOverlay.querySelector(`.kit-sample[data-sample="${sampleId}"] .kit-waveform`);
      if (waveform) waveform.classList.remove("playing");
    }, { once: true });
  });
}