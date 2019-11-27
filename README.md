# Request Router

A purpose-built, narrowly-helpful tool for forwarding JSON GET requests to work around CORS.

Once you've cloned, install dependencies:
```
npm install
```

To run this server:
```
npm start
```

Then, make requests to this proxy server like so:
```
curl http://localhost:1001/https://pds-gamma.jpl.nasa.gov/services/search/search?q=ocams&wt=json
```