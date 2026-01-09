function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function log(msg) {
    const box = document.getElementById("logBox");
    box.innerHTML += msg + "<br>";
    box.scrollTop = box.scrollHeight;
}

setInterval(() => {
    document.getElementById("rssi").innerText = random(-95, -60) + " dBm";
    document.getElementById("snr").innerText = random(3, 12) + " dB";
    document.getElementById("pdr").innerText = random(90, 100) + "%";
}, 2000);

function simulateInterference() {
    document.getElementById("state").innerText = "Interference Detected";
    log("Interference detected on current channel");
}

function frequencyHop() {
    const freqs = ["865.1", "865.5", "865.7", "865.9"];
    const f = freqs[Math.floor(Math.random() * freqs.length)];
    document.getElementById("freq").innerText = f + " MHz";
    document.getElementById("state").innerText = "Frequency Hopping";
    log("AI triggered frequency hop → " + f + " MHz");
}

function nodeFailure() {
    document.getElementById("state").innerText = "Self-Healing Routing";
    log("Node unreachable → Routing enabled via relay node");
}
