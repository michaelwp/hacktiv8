const scoreLetter = (score) => {
    switch (true) {
        case (score > 85):
            return 'A';
        case score > 70:
            return "B";
        case score > 55:
            return "C";
        case score <= 55:
            return "E";
    }
};

module.exports = scoreLetter;