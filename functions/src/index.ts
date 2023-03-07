/* eslint-disable camelcase */
import * as functions from "firebase-functions";
import {checkRssFeed} from "./medium";
import {checkFeaturedRepos} from "./github";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

exports.checkRssFeed = functions.https.onCall(checkRssFeed);
exports.checkFeaturedRepos = functions.https.onCall(checkFeaturedRepos);
