# Deploying on cPanel

This guide will help to deploy the Next.js application on cPanel with custom 

## Prerequisites

1. **cPanel Access**: Ensure you have access to cPanel.
2. **Create the server.js**: Create the server.js for entery point.


## Steps to Deploy


### I. First time deployement 

 1. setup and add the below code on your `server.js`.

```javascript
    const { createServer } = require("http");
    const { parse } = require("url");
    const next = require("next");

    const dev = process.env.NODE_ENV !== "production";
    const hostname = "localhost";
    const port = process.env.port || 3000;
    const app = next({ dev, hostname, port });
    const handle = app.getRequestHandler();

    app.prepare().then(() => {
        createServer(async (req, res) => {
        try {
        
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        if (pathname === "/a") {
            await app.render(req, res, "/a", query);
        } else if (pathname === "/b") {
            await app.render(req, res, "/b", query);
        } else {
            await handle(req, res, parsedUrl);
        }
        } catch (err) {
        console.error("Error occurred handling", req.url, err);
        res.statusCode = 500;
        res.end("internal server error");
        }
        })
        .once("error", (err) => {
        console.error(err);
        process.exit(1);
        })
        .listen(port, () => {
        console.log(`> Ready on http://${hostname}:${port}`);
        });
    });
```
 2. Ensure your `package.json` has the correct scripts:
```json
   {
     "scripts": {
       "build": "next build",
       "start": "NODE_ENV=production node server.js" //add this line for production purpose
     }
   }
```
 3. make sure to include  `"type": "commonjs"` on the `package.json` attributes:
```json
     {
         "name": "skyhub",
         "type": "commonjs", // make sure to include this
         "version": "0.1.0",
         "private": true,
     }
```

 4. Run the build command locally to make sure there are no issues:
```bash
    yarn run build
```

 5. Upload the Project via File Manager:

    * Compress the whole project file excluding the node_modules and the .gitignore
    * Upload the zipped file using cPanel's File Manager.
    * Extract the files in your desired directory (e.g., public_html/myapp).

 6. Set Up Node.js Application
    * In cPanel, go to the "Setup Node.js App" section.

    * Click Create Application and fill in the following:

        * Node.js version: Choose a version compatible with your Next.js app, 18 is recommended in our case.
        * Application mode: Production.
        * Application root: Point to your app directory "myapp" in our case.
        * Application startup file: Enter server.js .
        * create the app
        * After creating the app,stop app then click Run NPM Install to install the dependencies and start it back again.

            **done**

### II. Updates on the deployment

 1. Make sure to check everything is the same here too, from step 1 to 5 from the above `First time deployement` and also make sure to remove the exisitng code on your **"myapp"** directory and only extract the new one.
 2. Go to the **"Setup Node.js App"** setion on cPanel and go to the already running app.
 3. Stop the application, click Run NPM Install, then start it back again which will restart it.