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
    { title: "SPATIALAUDIO", bpm: "146", key: "GMIN", len: "2:52",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/SPATIALAUDIO.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/SPATIALAUDIO.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/SPATIALAUDIO_cover.png" },
    { title: "TITANIUM", bpm: "146", key: "C#MIN", len: "1:58", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/TITANIUM.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/TITANIUM.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/TITANIUM_cover.png" },
    { title: "MORNINGSTAR", bpm: "141", key: "C#MIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/MORNINGSTAR.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/MORNINGSTAR.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/MORNINGSTAR_cover.png" },
    { title: "ATMOS", bpm: "136", key: "D#MIN", len: "2:07",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/ATMOS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/ATMOS.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/ATMOS_cover.png" },
    { title: "INDIGO", bpm: "143", key: "G#MIN", len: "2:03",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/INDIGO.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/INDIGO.mp3", buy: "https://bsta.rs/R92k3", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/INDIGO_cover.png" },
    { title: "EROSION", bpm: "147", key: "DMIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/EROSION.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/EROSION.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/EROSION_cover.png" },
    { title: "loophole", bpm: "148", key: "D#MIN", len: "1:57", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/loophole.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/loophole.mp3", buy: "https://bsta.rs/Eqc8A", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/loophole_cover.png" },
    { title: "ALLEGIANCE", bpm: "134", key: "D#MIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/ALLEGIANCE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/ALLEGIANCE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/ALLEGIANCE_cover.png" },
    { title: "GLOW", bpm: "141", key: "D#MIN", len: "1:56",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/GLOW.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/GLOW.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/GLOW_cover.png" },
    { title: "LIABILITY", bpm: "145", key: "C#MIN", len: "2:05",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/LIABILITY.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/LIABILITY.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/LIABILITY_cover.png" },
    { title: "LIONS", bpm: "136", key: "D#MIN", len: "2:07",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/LIONS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/LIONS.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/LIONS_cover.png" },
    { title: "SOUNDSCAPE", bpm: "140", key: "CMIN", len: "2:07",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SOUNDSCAPE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SOUNDSCAPE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/SOUNDSCAPE_cover.png" },
    { title: "UNLEASH", bpm: "138", key: "DMIN", len: "2:05",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/UNLEASH.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/UNLEASH.mp3", buy: "https://bsta.rs/I6DYl", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/UNLEASH_cover.png" },
    { title: "KALEIDOSCOPE", bpm: "136", key: "DMIN", len: "2:07",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/KALEIDOSCOPE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/KALEIDOSCOPE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/KALEIDOSCOPE_cover.png" },
    { title: "HURTING", bpm: "142", key: "D#MIN", len: "2:06",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HURTING.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HURTING.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/HURTING_cover.png" },
    { title: "TRIMSTEP", bpm: "138", key: "C#MIN", len: "2:51",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/TRIMSTEP.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/TRIMSTEP.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/TRIMSTEP_cover.png" },
    { title: "SHAPESHIFT", bpm: "133", key: "C#MIN", len: "2:09",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SHAPESHIFT.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SHAPESHIFT.mp3", buy: "https://bsta.rs/7W4jc", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/SHAPESHIFT_cover.png" },
    { title: "RAINDROPS", bpm: "142", key: "C#MIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/RAINDROPS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/RAINDROPS.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/RAINDROPS_cover.png" },
    { title: "BLEEDOUT", bpm: "152", key: "D#MIN", len: "1:47",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/BLEEDOUT.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/BLEEDOUT.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/BLEEDOUT_cover.png" },
    { title: "lowrider w/ flipgod", bpm: "140", key: "D#MIN", len: "2:20",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/lowrider.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/lowrider.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/lowrider_cover.png" },
    { title: "PEAKK", bpm: "145", key: "D#MIN", len: "1:52",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/PEAKK.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/PEAKK.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/PEAKK_cover.png" },
    { title: "GAMEOVER", bpm: "139", key: "C#MIN", len: "2:04",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/GAMEOVER.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/GAMEOVER.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/GAMEOVER_cover.png" },
    { title: "DARKK w/ 404cvninotfound", bpm: "136", key: "FMIN", len: "2:14",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/DARKK.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/DARKK.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/DARKK_cover.png" },
    { title: "tripwire", bpm: "140", key: "C#MIN", len: "2:17",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/tripwire.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/tripwire.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/tripwire_cover.png" },
    { title: "ICE", bpm: "138", key: "D#MIN", len: "2:05",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ICE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ICE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/ICE_cover.png" },
    { title: "fallout w/ papej", bpm: "156", key: "DMIN", len: "1:51",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/fallout.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/fallout.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/fallout_cover.png" },
    { title: "GUIDANCE", bpm: "143", key: "D#MIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/GUIDANCE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/GUIDANCE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/GUIDANCE_cover.png" },
    { title: "KKLAY", bpm: "141", key: "D#MIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/KKLAY.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/KKLAY.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/KKLAY_cover.png" },
    { title: "WORMHOLE", bpm: "133", key: "DMIN", len: "2:09",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/WORMHOLE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/WORMHOLE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/WORMHOLE_cover.png" },
    { title: "FLAWED", bpm: "146", key: "D#MIN", len: "2:11",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FLAWED.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FLAWED.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/FLAWED_cover.png" },
    { title: "TREND", bpm: "145", key: "DMIN", len: "1:52",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/TREND.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/TREND.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/TREND_cover.png" },
    { title: "BLADE", bpm: "139", key: "DMIN", len: "2:05",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/BLADE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/BLADE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/BLADE_cover.png" },
    { title: "OLYMP", bpm: "153", key: "DMAJ", len: "2:22",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/OLYMP.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/OLYMP.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/OLYMP_cover.png" },
    { title: "WINDY", bpm: "135", key: "C#MIN", len: "2:08",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/WINDY.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/WINDY.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/WINDY_cover.png" },
    { title: "FORMULA1", bpm: "136", key: "C#MIN", len: "2:10",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FORMULA1.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FORMULA1.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/FORMULA1_cover.png" },
    { title: "ARMORY", bpm: "144", key: "D#MIN", len: "2:00",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ARMORY.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ARMORY.mp3", buy: "https://bsta.rs/jpZV0", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/ARMORY_cover.png" },
    { title: "SWORD", bpm: "142", key: "D#MIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SWORD.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SWORD.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/SWORD_cover.png" },
    { title: "COUPE", bpm: "142", key: "C#MIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/COUPE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/COUPE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/COUPE_cover.png" },
    { title: "SSNAKE", bpm: "145", key: "CMIN", len: "1:52",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SSNAKE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SSNAKE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/SSNAKE_cover.png" },
    { title: "FLOWERS", bpm: "142", key: "C#MIN", len: "2:31", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FLOWERS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FLOWERS.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/FLOWERS_cover.png" },
    { title: "ERASE", bpm: "140", key: "DMIN", len: "2:03",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ERASE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ERASE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/ERASE_cover.png" },
    { title: "dystopia", bpm: "150", key: "CMIN", len: "1:55", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/dystopia.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/dystopia.mp3", buy: "https://bsta.rs/wJp3f", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/dystopia_cover.png" },
    { title: "TRAP", bpm: "143", key: "CMIN", len: "2:00", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/TRAP.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/TRAP.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/TRAP_cover.png" },
    { title: "CAGE", bpm: "144", key: "D#MIN", len: "2:00", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/CAGE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/CAGE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/CAGE_cover.png" },
    { title: "MARTYR", bpm: "149", key: "D#MIN", len: "1:49",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/MARTYR.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/MARTYR.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/MARTYR_cover.png" },
    { title: "pilgrim", bpm: "132", key: "C#MIN", len: "2:13",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/pilgrim.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/pilgrim.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/pilgrim_cover.png" },
    { title: "FALSENRTVE", bpm: "137", key: "DMIN", len: "2:10",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FALSENRTVE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FALSENRTVE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/FALSENRTVE_cover.png" },
    { title: "ANGELWING", bpm: "142", key: "EMIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ANGELWING.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ANGELWING.mp3", buy: "https://bsta.rs/t8UTC", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/ANGELWING_cover.png" },
    { title: "BATS", bpm: "128", key: "C#MIN", len: "2:15",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/BATS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/BATS.mp3", buy: "https://bsta.rs/Wj7Gt", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/BATS_cover.png" },
    { title: "NEWSKOOL", bpm: "141", key: "D#MIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/NEWSKOOL.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/NEWSKOOL.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/NEWSKOOL_cover.png" },
    { title: "4DASPEAKERS", bpm: "143", key: "D#MIN", len: "2:01", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/4DASPEAKERS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/4DASPEAKERS.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/4DASPEAKERS_cover.png" },
    { title: "ABSENCE", bpm: "138", key: "C#MIN", len: "2:05",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ABSENCE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ABSENCE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/ABSENCE_cover.png" },
    { title: "ROOM4$", bpm: "133", key: "FMIN", len: "2:12",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ROOM4$.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ROOM4$.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/ROOM4$_cover.png" }, 
    { title: "MINUS", bpm: "141", key: "C#MIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/MINUS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/MINUS.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/MINUS_cover.png" },
    { title: "HIGHER", bpm: "141", key: "DMIN", len: "1:56",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HIGHER.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HIGHER.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/HIGHER_cover.png" },
    { title: "LILAC", bpm: "146", key: "FMIN", len: "2:00",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/LILAC.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/LILAC.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/LILAC_cover.png" },
    { title: "HIATUS", bpm: "145", key: "DMIN", len: "2:25",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HIATUS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HIATUS.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/HIATUS_cover.png" }, 
    { title: "FAINT", bpm: "141", key: "DMIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FAINT.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/FAINT.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/FAINT_cover.png" },
    { title: "KKOUNT", bpm: "142", key: "DMIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/KKOUNT.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/KKOUNT.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/KKOUNT_cover.png" },
    { title: "HOPE", bpm: "134", key: "DMIN", len: "2:09",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HOPE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/HOPE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/HOPE_cover.png" },
    { title: "ghost", bpm: "143", key: "EMIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ghost.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ghost.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/ghost_cover.png" }, 
    { title: "RAPID", bpm: "144", key: "CMIN", len: "2:00",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/RAPID.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/RAPID.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/RAPID_cover.png" }, 
    { title: "sippin", bpm: "127", key: "CMIN", len: "2:17", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/sippin.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/sippin.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/sippin_cover.png" },
    { title: "SKKELETON", bpm: "143", key: "CMIN", len: "1:54",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SKKELETON.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SKKELETON.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/SKKELETON_cover.png" },
    { title: "SVTURN", bpm: "141", key: "CMIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SVTURN.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SVTURN.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/SVTURN_cover.png" },
    { title: "SWAG", bpm: "142", key: "C#MIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SWAG.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SWAG.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/SWAG_cover.png" },
    { title: "stunned", bpm: "138", key: "D#MIN", len: "2:05",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/stunned.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/stunned.mp3", buy: "https://bsta.rs/5H8sh", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/stunned_cover.png" }, 
    { title: "OPUS", bpm: "144", key: "D#MIN", len: "2:00",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/OPUS.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/OPUS.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/OPUS_cover.png" },
    { title: "hikkup", bpm: "143", key: "CMIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/hikkup.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/hikkup.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/HIKKUP_cover.png" },
    { title: "BOLTACTION", bpm: "142", key: "CMIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/BOLTACTION.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/BOLTACTION.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/BOLTACTION_cover.png" },
    { title: "ERUPTION", bpm: "148", key: "C#MIN", len: "1:56",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ERUPTION.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/ERUPTION.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/ERUPTION_cover.png" },
    { title: "SABRETOOTH", bpm: "140", key: "D#MIN", len: "2:03",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SABRETOOTH.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SABRETOOTH.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/SABRETOOTH_cover.png" },
    { title: "VOLATILE", bpm: "143", key: "DMIN", len: "2:01",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/VOLATILE.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/VOLATILE.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/VOLATILE_cover.png" },
    { title: "KKILIMANJARO", bpm: "133", key: "D#MIN", len: "2:15",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/KKILIMANJARO.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/KKILIMANJARO.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/KKILIMANJARO_cover.png" },
    { title: "RELIC", bpm: "131", key: "C#MIN", len: "2:15",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/RELIC.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/RELIC.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/RELIC_cover.png" },
    { title: "SANDTAN", bpm: "142", key: "DMIN", len: "1:56",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SANDTAN.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/SANDTAN.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/SANDTAN_cover.png" },
    { title: "flowstate", bpm: "141", key: "DMIN", len: "2:07", file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/flowstate.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/flowstate.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/flowstate_cover.png" },
    { title: "CULPRIT", bpm: "137", key: "D#MIN", len: "2:06",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/CULPRIT.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/CULPRIT.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/CULPRIT_cover.png" },
    { title: "cursed", bpm: "147", key: "C#MIN", len: "2:02",  file: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/cursed.mp3", free: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/tracks/stash/cursed.mp3", buy: "", cover: "https://ir0s4zzcogc30ok6.public.blob.vercel-storage.com/cover_tracks/cursed_cover.png" }
];

// Now playing toast
const nowPlayingToast = document.getElementById("now-playing-toast");
const nowPlayingTitle = document.getElementById("now-playing-title");
let toastTimeout = null;

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

// Toast-Logik
function showNowPlaying(index) {
    if (!nowPlayingToast || !nowPlayingTitle) return;

    const displayNumber = String(index + 1).padStart(2, "0");
    const title = stashTracks[index]?.title || "";

    // z.B. "#12 – SPATIALAUDIO"
    nowPlayingTitle.textContent = `${displayNumber} - ${title}`;
    nowPlayingToast.classList.add("show");

    if (toastTimeout) clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
      nowPlayingToast.classList.remove("show");
    }, 10000); // 10s, kannst du anpassen
}

function updateMediaSessionForStash(index) {
    if (!('mediaSession' in navigator)) return;
    const track = stashTracks[index];
    if (!track) return;

    // Fallback, falls mal kein cover gesetzt ist
    const artwork = track.cover
    ? [{ src: track.cover, sizes: '512x512', type: 'image/png' }]
    : [{ src: 'images/cover.png', sizes: '512x512', type: 'image/png' }];
  
  
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: 'frvxure',
      album: 'beatstash',
      artwork
    });
  
    // Action-Handler für Hardware-Buttons
    navigator.mediaSession.setActionHandler('play', () => {
      stashPlayer.play();
    });
  
    navigator.mediaSession.setActionHandler('pause', () => {
      stashPlayer.pause();
    });
  
    navigator.mediaSession.setActionHandler('previoustrack', () => {
      if (currentTrackIndex === null) return;
      const prev = (currentTrackIndex - 1 + stashTracks.length) % stashTracks.length;
      playStashTrack(prev);
    });
  
    navigator.mediaSession.setActionHandler('nexttrack', () => {
      if (currentTrackIndex === null) return;
      const next = (currentTrackIndex + 1) % stashTracks.length;
      playStashTrack(next);
    });
}

// zentral: Track starten
function playStashTrack(index) {
    currentTrackIndex = index;
    stashPlayer.src = stashTracks[index].file;
    stashPlayer.currentTime = 0;
    stashPlayer.play();
    updateUIState();
    showNowPlaying(index);
    updateMediaSessionForStash(index);
}

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
    playStashTrack(index);
});

// Volume 
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

// AUTOPLAY: wenn Track endet -> nächster
stashPlayer.addEventListener("ended", () => {
    if (currentTrackIndex === null) return;
    const next = currentTrackIndex + 1;
  
    if (next < stashTracks.length) {
      playStashTrack(next);
    } else {
      playStashTrack(0); // wieder vorne anfangen
    }
});




