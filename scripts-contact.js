window.addEventListener("load", () => {
    const bg = document.querySelector(".background-video");
    if (!bg) return;
    if (bg.paused) {
      bg.play().catch(() => {});
    }
  });

// Helper: open external links in new tab
const openExternal = (url) => {
    window.open(url, "_blank", "noopener");
};

// MAIL
const mailBtn = document.querySelector(".mail");
if (mailBtn) {
    mailBtn.addEventListener("click", () => {
        window.location.href = 
            "mailto:frvxure@gmail.com?subject=Beat%20Inquiry&body=Hi%20frvxure,";
    });
}

// INSTAGRAM
const igBtn = document.querySelector(".instagram");
if (igBtn) {
    igBtn.addEventListener("click", () => {
        openExternal("https://instagram.com/frvxure"); 
    });
}

// TIKTOK
const ttBtn = document.querySelector(".tiktok");
if (ttBtn) {
    ttBtn.addEventListener("click", () => {
        openExternal("https://www.tiktok.com/@1frvxure");
    });
}

// BEATSTARS
const bsBtn = document.querySelector(".beatstars");
if (bsBtn) {
    bsBtn.addEventListener("click", () => {
        openExternal("https://www.beatstars.com/frvxure");
    });
}

// SPOTIFY
const spBtn = document.querySelector(".spotify");
if (spBtn) {
    spBtn.addEventListener("click", () => {
        openExternal("https://open.spotify.com/artist/3pj8xmNfPd46S2GGE2etrk?si=EAOLj_MeT-WwmlXxMNqgzg");
    });
}

// DISCORD
const dcBtn = document.querySelector(".discord");
if (dcBtn) {
    dcBtn.addEventListener("click", () => {
        openExternal("https://discord.gg/55kubaa#6986");
    });
}

// PINTEREST
const ptBtn = document.querySelector(".pinterest");
if (ptBtn) {
    ptBtn.addEventListener("click", () => {
        openExternal("https://www.pinterest.com/frvxure");
    });
}

// LINKTREE
const ltBtn = document.querySelector(".linktree");
if (ltBtn) {
    ltBtn.addEventListener("click", () => {
        openExternal("https://linktr.ee/frvxure");
    });
}

