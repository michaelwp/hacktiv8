const {displayCountdown} = require("./views");

const timer = seconds =>
    new Promise((resolve, reject) => {
        setInterval(() => {
            let minute = Math.floor(seconds / 60);
            let second = Math.floor(seconds % 60);

            minute < 10 ? minute = `0${minute}` : minute;
            second < 10 ? second = `0${second}` : second;

            if (seconds < 0) {
                clearInterval();
                reject();
            } else {
                displayCountdown(`${minute} : ${second}`);
            }
            seconds--;
        }, 1000);
    });

module.exports = {
    timer
};
