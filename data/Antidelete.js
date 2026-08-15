const fs = require('fs');
const path = './data/antidelete.json';

if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify({}));
}

async function setAntideleteStatus(jid, status) {
    let data = JSON.parse(fs.readFileSync(path));
    data[jid] = status;
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

async function getAntideleteStatus(jid) {
    let data = JSON.parse(fs.readFileSync(path));
    return data[jid] || false;
}

module.exports = { setAntideleteStatus, getAntideleteStatus };
