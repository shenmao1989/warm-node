var routers = [
    { 'address': '67.215.242.138', 'port': 6881},//router.bittorrent.com:6881
    { 'address': '67.215.242.139', 'port': 6881},//router.bittorrent.com:6881
    { 'address': '91.121.60.42', 'port': 6881},//dht.transmissionbt.com:6881
    { 'address': '124.238.9.183', 'port': 54312},
    { 'address': '31.170.186.124', 'port': 43180},
    { 'address': '85.164.53.220', 'port': 51413},
    { 'address': '213.114.203.38', 'port': 52169},
    { 'address': '112.145.144.121', 'port': 51413},
    { 'address': '115.137.106.71', 'port': 50012},
    { 'address': '213.108.75.171', 'port': 51653},
    { 'address': '178.70.188.251', 'port': 50521},
    { 'address': '94.171.242.162', 'port': 53791},
    { 'address': '211.168.0.250', 'port': 54456},
    { 'address': '79.33.72.165', 'port': 10060},
    { 'address': '24.161.72.49', 'port': 51413},
    { 'address': '173.170.81.29', 'port': 51413},
    { 'address': '91.156.109.11', 'port': 51412},
    { 'address': '93.27.110.110', 'port': 52418},
    { 'address': '5.50.14.96', 'port': 6890},
    { 'address': '1.22.114.150', 'port': 60330},
    { 'address': '205.217.255.71', 'port': 53708},
    { 'address': '186.152.252.63', 'port': 58872},
    { 'address': '178.61.46.173', 'port': 43239},
    { 'address': '178.122.199.4', 'port': 49001},
    { 'address': '54.247.69.34', 'port': 11009},
    { 'address': '111.172.149.200', 'port': 21581},
    { 'address': '77.20.49.146', 'port': 1024},
    { 'address': '50.7.193.186', 'port': 9840},
    { 'address': '37.76.186.137', 'port': 43720},
    { 'address': '115.66.117.101', 'port': 35038},
    { 'address': '14.138.42.185', 'port': 49696}
]
var DHT = require('dht');
for(var i = 0; i < 1000; i++){
    var dht = new DHT.DHT(51414 + i);

    // DHT.debug = true;

    // for bootstrapping you need to know a node which already is in the dht
    dht.start();
    dht.bootstrap(routers);
}

//var id = DHT.util.hex2buf("640FE84C613C17F663551D218689A64E8AEBEABE");
////var id = DHT.util.hex2buf("05153F611B337A378F73F0D32D2C16D362D06BA5");
//dht.lookup(id, function (peers, finished) {
////    dht.announce(id, 51414);
//	console.log("Found more peers: %j", peers);
//	if (finished) console.log("Lookup done");
//});

