// Example Album
 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

// Test 1 Album
 var albumTest1 = {
     title: 'The BaseBall',
     artist: 'Babe Ruth',
     label: 'EM',
     year: '1920',
     albumArtUrl: 'assets/images/album_covers/19.png',
     songs: [
         { title: 'First Base', duration: '1:01' },
         { title: 'Second Base', duration: '5:01' },
         { title: 'Third Base', duration: '3:21'},
         { title: 'Home Run', duration: '3:14' },
         { title: 'Strike Out!!!', duration: '2:15'}
     ]
 };

// Test 2 Album
 var albumTest2 = {
     title: 'Skate Park Fun',
     artist: 'California Ride',
     label: 'EM',
     year: '1997',
     albumArtUrl: 'assets/images/album_covers/12.png',
     songs: [
         { title: 'No School', duration: '1:01' },
         { title: 'Skipped School', duration: '5:01' },
         { title: 'Got Kicked Out of School', duration: '3:21'},
         { title: 'No Job', duration: '3:14' },
         { title: 'Broken Arm', duration: '2:15'}
     ]
 };


var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];    
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 

var setCurrentAlbum = function(album) {
                 
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     albumSongList.innerHTML = '';
 
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };
 


 window.onload = function() {
 
    var setAlbumList = [albumPicasso, albumMarconi, albumTest1, albumTest2];
      
     var item = 0;
     
     setCurrentAlbum(setAlbumList[item]);
     
     albumImage.addEventListener("click", changeAlbum);
     
     function changeAlbum() {
         item++;
         setCurrentAlbum(setAlbumList[item]);
         if (item == setAlbumList.length - 1) {
             item = -1
         };
     };   
 };