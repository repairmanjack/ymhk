for (const [method, selector] of Object.entries({
    'play': '.player-controls__btn_play',
    'pause': '.player-controls__btn_pause',
    'previoustrack': '.player-controls__btn_prev',
    'nexttrack': '.player-controls__btn_next'
})) {
    navigator.mediaSession.setActionHandler(method, () => {
        document.querySelector(selector).dispatchEvent(new Event('click'));
    });
}