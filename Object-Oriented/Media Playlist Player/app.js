/*
* app js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

const playlist = new Playlist();

const hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
const walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

const playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

const playButton = document.getElementById("play");
playButton.onclick = () => {
  playlist.play();
  playlist.renderInElement(playlistElement);
}

const nextButton = document.getElementById("next");
nextButton.onclick = () => {
  playlist.next();
  playlist.renderInElement(playlistElement);
}

const stopButton = document.getElementById("stop");
stopButton.onclick = () => {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
