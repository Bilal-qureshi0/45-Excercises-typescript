function makeAlbum(Artist, Album_Title, tracks) {
    var album = { 'Artist': Artist, 'Album_Title': Album_Title };
    if (tracks) {
        var album_1 = tracks;
        console.log(Artist, Album_Title, tracks);
    }
    ;
}
;
makeAlbum('Rumours', 'Fleetwood Mac', 11);
makeAlbum('Thriller', 'Michael Jackson', 9);
makeAlbum('Abbey Road', 'The Beatles', 17);
