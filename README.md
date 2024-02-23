# Farrago-js

This is a local development tool to pair with Webflow development which makes it easier to work with custom JS code in the editor, and also a cleaner way to host the production code

Motivation: Working on our 'agency' page - I reached the 10,000 character limit on custom code so had to find an alternative
This not only solved that problem, letting us host the script on github, but also is an infinitely better developer experience.

## IMPORTANT
There are two modes when using this repo.

1. Development mode (running a local server and testing on the .webflow.io domain)
2. Production mode (pushing files to repo and importing to main domain)

Whilst working in development mode: Do *not* publish the site to main domain, this will cause unexpected issues

## How to use
Whilst developing: Your custom code will be written in the 'app.js' file ONLY
There might be a way of doing this different but for now, our server which is executed using parcel, is only publishing the app.js file

run `npm start` or `bun start` to run local server

in webflow: rather than coding inside the editor, paste the following script tag in during development:

```
<!-- [Local Development via Parcel.js] -->
<script defer src="http://localhost:1234/app.js"></script>
```

When you are ready to push to production: Move your JS code to a new file inside the 'pages' folder & create a PR to the main branch of this repo.

When the code is live on GitHub: you can replace the script tag:
```
<!-- [Production: Connected to Github via JsDelivr]>
<script defer src="https://cdn.jsdelivr.net/gh/pat-mw/farrago-js/pages/[module_name].js"></script>
```

Code away! You no longer need to re-publish the site every time you make changes to your script. Now, just reload the .webflow.io site, or reload the code, and see your changes update in realtime.

Take advantage of the power that VSCode has to offer with whatever extensions help your workflow.

Happy coding

:)


## NOTES
Whilst this is infinitely better than programming in the Webflow Editor: there are definitely upgrades we can make 
to make this even better.

1. Use NPM to deliver scripts instead of Github 
-- better for privacy as this repo can then be private
-- better for performance due to NPMs global distribution network
-- better for versioning: allows us to easily roll-back to previous versions of the script without having to rollback the repo.


2. Going beyong this: A great option is to use Finsweet's developer-starter: 
https://github.com/finsweet/developer-starter

Benefits include:
- Typescript support for a more robust programming experience
- Automatic minification of code built-in to the build pipeline (meaning higher performance)
- Built in tools made specifically for common webflow use-cases.

This is an upgrade we will make at a later date. For now, this provides a parallel alternative for simple js scripts.
