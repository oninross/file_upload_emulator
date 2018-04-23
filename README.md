# Phantasos - File upload emulator

Emulate a file upload server with node. It doesn't really save the files to the server, it just helps front-enders spin up a server quickly to emulate file uploading without the need of waiting the endpoint to be built.

## Initilising

Just run `npm install` or `yarn install` in your command line or terminal to install the needed node modules.  Once that is done, run `node server`.  The terminal should return `Express server listening on port 8888 in development mode`.  Hit `Ctrl + C` anytime in the terminal to shut down the server.

In your frontend codes, you can simply call the API endpoint `/XX.XX.XX.XXX:8888/upload` so simulate the file upload. `XX.XX.XX.XXX` is the IP Address of your local machine so that your ajax or XMLHttpRequest can hit the server.