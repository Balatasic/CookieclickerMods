// autoClickMod.js

// Prüfen, ob das Spiel geladen ist
if (typeof Game !== 'undefined') {
    // Einfach alle 2 Sekunden klicken
    setInterval(function() {
        Game.ClickCookie();
    }, 2000);
    console.log("AutoClick Mod aktiviert! 🍪");
} else {
    console.log("Spiel noch nicht geladen – Mod startet beim Laden.");
}
