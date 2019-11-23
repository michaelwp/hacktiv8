const crypto = require('crypto');

const hashingPassword = (password, secret) => {
    const hash = crypto.createHmac('sha256', secret)
        .update(password)
        .digest('hex');
    return hash;
};

module.exports = hashingPassword;