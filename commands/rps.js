const jsh = require("discordjsh");
const gamecord = require("../../gamecord/src/index");

module.exports = {
    devOnly: true,
    data: new jsh.commandBuilder()
    .setName(`rps`)
    .setDescription(`Create an RPS game!`),
    async execute(int, client){
        await new gamecord.RPS().start(int.channel, int, true);
    }
}