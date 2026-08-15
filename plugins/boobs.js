const { cmd } = require('../arslan');

cmd({
    pattern: "boobs",
    alias: ["xgirl"],
    desc: "Get random anime girl image",
    category: "nsfw",
    react: "🔞",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    try {
        await reply("*👑 HASI-XMD ANIME GIRL 👑*");
    } catch (e) {
        reply("❌ Error fetching image.");
    }
});
