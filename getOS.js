module.exports = function getOS () {
    if (process.platform === 'darwin') return "mac";
    if (process.platform === 'win32') return "windows";
    if (process.platform === 'linux') return "linux";
};