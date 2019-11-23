const {displayCountdown} = require("./views");

const timer = seconds => {
    // Your code here...
    setInterval(function () {
        let min = Math.floor(seconds / 60);
        let sec = Math.floor(seconds % 60);

        if (min < 10) min = `0${min}`;
        if (sec < 10) sec = `0${sec}`;

        seconds--;

        displayCountdown(`${min} : ${sec}`);
        if (seconds < 0) {
            clearInterval(this);
        }
    }, 100)
};

module.exports = {
    timer
};

