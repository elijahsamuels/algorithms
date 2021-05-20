{
    /*
	Extract the domain name from a URL
		
	Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

	domainName("http://github.com/carbonfive/raygun") == "github" 
	domainName("http://www.zombie-bites.com") == "zombie-bites"
	domainName("https://www.cnet.com") == "cnet"
*/
}

domainName = (url) => {
    let regex1 = /https:\/\/|http:\/\/|www./gi;
    let regex2 = /\..*/gi;
    let cleanUrl = url.replace(regex1, "").replace(regex2, "");
    return cleanUrl;
};

domainName = (url) => {
    let cleanUrl = url.replace(/https:\/\/|http:\/\/|www./gi, "").replace(/\..*/gi, "");
    return cleanUrl;
};