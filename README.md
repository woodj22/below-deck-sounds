# below-deck-sounds

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Deployment
 run : 
 ```
 npm run deploy
 ```
 This will build the vue project, upload to s3 and then invlidate the cloudfront cache.

### Ivalidate the Cloudfront cache

```
aws cloudfront create-invalidation --distribution-id E1O7MIBF2488UR --paths "/*" --profile=joewood
```