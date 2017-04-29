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
  for (idx=0; idx<tracks.lenght; idx++){
    var trackHtml='<div class="row song-row">' +
      '<div class="col-lg-1 col-xs-1"> <a href="https://p.scdn.co/mp3-preview/22bf10aff02db272f0a053dff5c0063d729df988?cid=null"><i class="fa fa-play-circle-o fa-2x"></i></a></div> ' +
      '<div class="col-lg-4 col-xs-4">Stairway To Heaven</div>' +
      '<div class="col-lg-3 col-xs-3">Led Zeppelin</div>' +
      '<div class="col-lg-2 col-xs-2">Led Zeppelin IV (Deluxe Edition)</div>' +
      '<div class="col-lg-2 col-xs-2">76</div> </div>';
    $('#song-list').append(trackHtml);
  }
};

/*
  Given a search term as a string, query the Spotify API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  /*console.log( $.ajax("https://api.spotify.com/v1/search?type=track&q="+title));*/
  renderTracks($.ajax("https://api.spotify.com/v1/search?type=track&q="+title));
};
