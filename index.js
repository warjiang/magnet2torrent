// parse magnet as a obj
// such as 
// magnet:?xt=urn:btih:A74085E6F278818C7B28A4D8BEAB2C6806E03298&dn=NHDT469 プチ裸出 VOL.8 立花里子
// will be parsed as 
// {
// 	xt:'urn:btih:7642B6D0B5CF9D5CEA96EDE6692C047D0D9F1AB6',
// 	dn:'NHDT469 プチ裸出 VOL.8 立花里子',
// }
var parseQuery = function(magnet){
	var queryMsg = magnet.slice(8);
	var queryArray = queryMsg.split('&');
	var queryObj = {}
	for(var key in queryArray){
		var item = queryArray[key];
		var itemArray = item.split('=');
		queryObj[itemArray[0]] = itemArray[1];
	}
	return queryObj;
}

// get torrent url according to xt
var getTorrentUrl = function(xt){
	//var queryObj = parseQuery(magnet);
	//var xt = queryObj['xt'];
	var xt_arr = xt.split(':');
	var btih = xt_arr[xt_arr.length-1];
	var s1= btih.substr(0,2);
	var s2= btih.substr(btih.length-2);
	var torrent = "http://bt.box.n0808.com/" + s1 + "/" + s2 + "/" + btih + ".torrent";
	return torrent;
}

// parse magnet info such as filename and torrentUrl
var parseMagnet = function(magnet){
	var queryObj = parseQuery(magnet);
	//console.dir(queryObj)
	return {
		name : queryObj['dn'],
		torrentUrl : getTorrentUrl(queryObj['xt'])
	}
}

module.exports = parseMagnet;