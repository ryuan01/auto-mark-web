# auto-mark-web

## installation and development set-up

```bash
git clone git@github.com:ryuan01/auto-mark-web.git
# if you haven't installed npm dependency do the following
npm install
yarn dev
```

could install react-devetools for chrome extension for better debugging experience.
Remember to allow access to file URLs

## Ports used
3000: default for reactjs

5000: used for back-end express

## Debug using curl
```bash
curl -i http://localhost:5000/api/hello

# it should return a basic json string
# with content-type being json as well   
```
