const TESTURL = "https://www.boot.dev/lessons/ed35749d-6ac5-4426-879f-c3dbc87a20ce";

function getDomainNameFromURL(url: string): string {
    const urlObj = new URL(url);
    console.log(`
    ${urlObj.protocol}
    ${urlObj.username}
    ${urlObj.password}
    ${urlObj.hostname}
    ${urlObj.port}
    ${urlObj.pathname}
    ${urlObj.search}
    ${urlObj.hash}`)
    const hostname = urlObj.hostname;
    return hostname
  }

console.log(getDomainNameFromURL(TESTURL)); //www.boot.dev