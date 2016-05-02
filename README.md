# magnet2torrent
conver magnet link to torrent
# usage
1. you can get magnet link from website like http://www.torrentkitty.me,and search anything you like.Click detail button to get magnet link
2. npm install magnet2torrenturl --save
3. coding
```
var magnet2torrent = require('magnet2torrent')
var magnetInfo = magnet2torrent('magnet:?xt=urn:btih:A74085E6F278818C7B28A4D8BEAB2C6806E03298&dn=NHDT469 プチ裸出 VOL.8 立花里子&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.publicbt.com:80&tr=udp://tracker.ccc.de:80&tr=udp://tracker.publicbt.com:80/announce');
console.log(magnetInfo['name'])//name indicate the torrent name
console.log(magnetInfo['torrentUrl']) //you can copy torrent url and paste in browser to download the torrent
```
