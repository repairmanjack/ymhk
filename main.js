let restoreRepeatStateHandlerExists = false

for (const [method, selector] of Object.entries({
    'play': '.player-controls__btn_play',
    'pause': '.player-controls__btn_pause',
    'previoustrack': '.player-controls__btn_prev',
    'nexttrack': '.player-controls__btn_next'
})) {
    navigator.mediaSession.setActionHandler(method, () => {
        let repeatElement = document.querySelector('.player-controls__btn_repeat'),
            repeatOne = repeatElement && repeatElement.classList.contains('player-controls__btn_repeat_state2');

        document.querySelector(selector).dispatchEvent(new Event('click'));

        if (repeatOne && !restoreRepeatStateHandlerExists && ['nexttrack', 'previoustrack'].includes(method)) {
            restoreRepeatStateHandlerExists = true;
            document.querySelector('.progress__line').addEventListener('transitionstart', () => {
                restoreRepeatStateHandlerExists = false;
                repeatElement.dispatchEvent(new Event('click'));
            }, {once: true});
        }
    });
}