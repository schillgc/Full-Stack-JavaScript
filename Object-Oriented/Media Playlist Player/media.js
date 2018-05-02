/*
* media js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

class Media {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
    this.isPlaying = false;
  }

  play() {
    this.isPlaying = true;
  }

  stop() {
    this.isPlaying = false;
  }
}
