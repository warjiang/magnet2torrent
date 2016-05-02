var should = require('chai').should(),
	magnet2torrent = require('../index');

describe('magnet2torrenturl', function(){
	it('get magnet name & torrenturl',function(){
		var magnetInfo = magnet2torrent('magnet:?xt=urn:btih:A74085E6F278818C7B28A4D8BEAB2C6806E03298&dn=NHDT469 プチ裸出 VOL.8 立花里子&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.publicbt.com:80&tr=udp://tracker.ccc.de:80&tr=udp://tracker.publicbt.com:80/announce');
		magnetInfo['name'].should.equal('NHDT469 プチ裸出 VOL.8 立花里子');
		magnetInfo['torrentUrl'].should.equal('http://bt.box.n0808.com/A7/98/A74085E6F278818C7B28A4D8BEAB2C6806E03298.torrent');
	})
})