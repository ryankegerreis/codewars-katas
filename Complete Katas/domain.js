const domainName = (url) => {
  return url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0].split(".")[0]
}

domainName("http://google.com")
domainName("www.xakep.ru")
domainName("https://youtube.com")