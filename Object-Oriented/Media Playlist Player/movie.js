/*
* movie js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

class Movie {
  constructor(title, artist, duration) {
    Media.call(this, title, duration);
    this.artist = artist;
  }

  toHTML() {
    let htmlString = '<li';
    if (this.isPlaying) {
      htmlString += 'class="current"';
    }
    htmlString += '>';
    htmlString += this.title;
    htmlString += ' - '
    htmlString += this.artist;
    htmlString += '<span class="duration">'
    htmlString += this.duration;
    htmlString += '</span></li>';
    return htmlString;
  }
}

Movie.prototype = Object.create(Media.prototype);
