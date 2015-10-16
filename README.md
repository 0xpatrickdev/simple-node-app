#Simple Node.js App

a node.js app created in the "build a simple dynamic site with nodejs" team treehouse tutorial.  Would recommend [checking it](http://teamtreehouse.com/library/build-a-simple-dynamic-site-with-nodejs).

In this app we:
* requested dynamic data via an http request
* created a simple routing system to navigate between templates
* created a rendering engine to inject dynamic data, serve files, and merge templates
* worked extensively with the Node.js api, learning necessary syntax and common use cases


### Useful Links

[Node.js Docs](https://nodejs.org/api/all.html)

[HTTP Header Fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)

[MME Types](http://www.sitepoint.com/web-foundations/mime-types-complete-list/) (need a better link)

### Things to Note
The `quizzes` and `quizzes2` directories can be ignored. They house my notes and/or prior versions of the files.


#Node.js CLI App
The `cli-version` folders contains a command line version of the app.  No HTML/CSS is rendered, just the response from the http.get request(s).

Test it out by running `node app.js chalkers` from the root of the cli app.  You can search multiple users at a time by appending the usernames with a space (`node app.js chalkers patrickcooney3`).

Note that the users with the least amount of data will be returned first, regardless of the order the usernames are entered.  Each request will be handled on a separate thread, so the results will post as they are finished.

This highlights the asynchronus, non-blocking nature of node, while also being a pretty cool (fast) way to make a CLI app.