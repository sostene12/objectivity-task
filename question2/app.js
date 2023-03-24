let urlsStore = [];
let count=1;

const generateShortUrl = (longUrl) =>{
    let shortUrl = `https://testing/${count}`;
    urlsStore.push({shortUrl,longUrl});
    count ++;
    return shortUrl;
};

const retrieveOriginalUrl = (shortUrl) =>{
    let existingUrl = urlsStore.find(url => url.shortUrl === shortUrl);
    const url = existingUrl ? existingUrl.longUrl : null;
    return url;
}

const interchangeUrls = (requestUrl) => {
    const longUrl = retrieveOriginalUrl(requestUrl);
    if(!longUrl){
        console.log("url is invalid")
    }

    console.log(longUrl);
};

const shortUrl1 = generateShortUrl("https://www.google.com");
const shortUrl2 = generateShortUrl("https://www.facebook.com");
console.log(shortUrl2)
interchangeUrls("https://testing/2");