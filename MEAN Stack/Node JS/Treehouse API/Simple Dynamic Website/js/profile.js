import {EventEmitter} from "events";
import https from "https";
import http from "http";
import util from "util";

/**
 * An EventEmitter to get a Treehouse students profile.
 * @param username
 * @constructor
 */
function Profile(username) {

    EventEmitter.call(this);

    const profileEmitter = this;

    //Connect to the API URL (https://teamtreehouse.com/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
        let body = "";

        if (response.statusCode !== 200) {
            request.abort();
            //Status Code Error
            profileEmitter.emit("error", new Error(`There was an error getting the profile for ${username}. (${http.STATUS_CODES[response.statusCode]})`));
        }

        //Read the data
        response.on('data', chunk => {
            body += chunk;
            profileEmitter.emit("data", chunk);
        });

        response.on('end', () => {
            if(response.statusCode === 200) {
                try {
                    //Parse the data
                    const profile = JSON.parse(body);
                    profileEmitter.emit("end", profile);
                } catch (error) {
                    profileEmitter.emit("error", error);
                }
            }
        }).on("error", error => {
            profileEmitter.emit("error", error);
        });
    });
}

util.inherits( Profile, EventEmitter );

export default Profile;
