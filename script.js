function generate() {
var triesPerSecond = 1 //self explanatory
getGiftCode = function () {
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 16; i++){
        code = dict.charAt(Math.floor(Math.random() * dict.length));
    }
    console.log('[GEN] http://discord.gift/' + code);
}
getGiftCode();
document.getElementById('stop').addEventListener("click", stop);
function stop() {
  clearInterval(gInterval);
  clearInterval(interval)
}
var gInterval = setInterval(() => {getGiftCode();}, (1/triesPerSecond) * 1000);
document.getElementById('generate').addEventListener("click", generate);
