let webManifest = {
    "name": "mObywatel Web",
    "short_name": "mObywatel",
    "theme_color": "#f5f6fb",
    "background_color": "#f5f6fb",
    "display": "standalone",
    "icons": [
        {
            "src": "https://i.imgur.com/n4zJhma.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "https://i.imgur.com/n4zJhma.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
};

let manifestElem = document.createElement('link');
manifestElem.setAttribute('rel', 'manifest');
manifestElem.setAttribute('href', 'data:application/manifest+json;base64,' + btoa(JSON.stringify(webManifest)));
document.head.prepend(manifestElem);
