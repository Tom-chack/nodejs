//2. Գրել ծրագիր որ աշխատացնելիս console-ում կարտածի IPv4 IP հասցեն(os.networkInterfaces()):

const os = require('os');
console.log(os.networkInterfaces()['Беспроводная сеть'][1].address);