const ROOT          =  "resources/";
const IMG_ROOT      =  ROOT + "img/";
const SOUND_ROOT    =  ROOT + "sound/";

const PATHS = {
    cardBGs: [
                IMG_ROOT + "cards/card_back0.png",
                IMG_ROOT + "cards/card_back1.png",
                IMG_ROOT + "cards/card_back2.png",
                IMG_ROOT + "cards/card_back3.png",
                IMG_ROOT + "cards/card_back4.png",
                IMG_ROOT + "cards/card_back5.png",
                IMG_ROOT + "cards/card_back6.png",
                IMG_ROOT + "cards/card_back7.png"
            ],
    cardFG:      IMG_ROOT + "cards/card_front.png",
    retryBtn:    IMG_ROOT + "endscreen/retryBtn.png",
    sceneBG:     IMG_ROOT + "startscreen/background.png",
    startBtn:    IMG_ROOT + "startscreen/startBtn.png",
    settingsBtn: IMG_ROOT + "startscreen/settingsbtn.png",
    quitBtn:     IMG_ROOT + "startscreen/quitBtn.png",
    knob:        IMG_ROOT + "settingsscreen/knob.png",
    checkmark:   IMG_ROOT + "settingsscreen/checkbox.png",
    checked:     IMG_ROOT + "settingsscreen/checkbox_checked.png",
    flipSound:   SOUND_ROOT + "cardflip.mp3",
    successSound:SOUND_ROOT + "success.mp3"
};

const STYLE = new PIXI.TextStyle({
    fontFamily: 'Helvetica',
    fontSize: 30,
    fontWeight: 'bold',
    fill: ['#ffffff', '#ffffff'],
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440
});

const ALT_STYLE = JSON.parse(JSON.stringify(STYLE));
ALT_STYLE._fontSize = 30;

const ALT_STYLE2 = JSON.parse(JSON.stringify(STYLE));
ALT_STYLE2._fontSize = 25;

const ALT_STYLE3 = JSON.parse(JSON.stringify(STYLE));
ALT_STYLE3._fontSize = 15;
