var Trackster = {};

$(document).ready(function() {
  $('#search-button').click(function() {
    Trackster.searchTracksByTitle($('#search-input').val());
  });
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  $('#song-list').empty();
  for (var idx=0; idx < tracks.length; idx++){
    var track = tracks[idx];
    var trackHtml='<div class="row song-row">' +
      '<div class="col-lg-1 col-xs-1"> <a href="' + track.preview_url  +'"><i class="fa fa-play-circle-o fa-2x"></i></a></div> ' +
      '<div class="col-lg-4 col-xs-4">' + track.name + '</div>' +
      '<div class="col-lg-3 col-xs-3">' + track.artists[0].name + '</div>' +
      '<div class="col-lg-2 col-xs-2">' + track.album.name + '</div>' +
      '<div class="col-lg-2 col-xs-2">' + track.popularity + '</div> </div>';
    $('#song-list').append(trackHtml);
  }
};

/*
  Given a search term as a string, query the Spotify API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search?type=track&q=' + title,
    success: function(response) {
      Trackster.renderTracks(response.tracks.items);
    }
  });
};
