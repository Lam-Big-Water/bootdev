# Why Http - point
1. When two computers communicate with each other, they need to use the same rules / language. This "language" that computers use is called a protocol (Http). 

2. requests & response
![graph](https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/mi20b1O-850x400.png)

3. Http Powers websites
![graph](https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/7OQAN0m-1280x473.png)

4. HTTP URLs
A URL, or `Uniform Resource Locator`, is the address of another computer, or "server" on the internet. Part of the URL specifies where to reach the server, and part of it tells the server what information we want.
![graph](https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/ga7wRus-1019x720.png)

5. HTTP is the only protocol that uses URLs - false
```
For example, you might have seen other prefixes in URLs like:

ftp:// for File Transfer Protocol
mailto: for email addresses
file:// for local files on your computer

Each of these uses the URL format to point to a specific resource, but they use different underlying protocols for the communication. So, while HTTP is very common, it's certainly not the only protocol that uses URLs!
```

6. Web Addresses
In computing, web clients find other computers over the internet using Internet Protocol (IP) addresses. Each device connected to the internet has a unique IP address.

7. Domain Names
When we browse the internet, we type in a human readable domain name. That domain is converted into an IP address. 

8. What Is the Domain Name System?

So we've talked about domain names, but we haven't talked about the system that makes them work.

DNS, or the "Domain Name System", is the phonebook of the internet. Humans type easy-to-read domain names like Boot.dev. DNS "resolves" those domain names to their associated IP addresses so that web clients can find the server they're looking for.

Domain names are for humans, IP addresses are for computers.
![graph](https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/lvjZb5u-1280x513.png)

9. How Does DNS Work?
Whenever your computer attempts to resolve a domain name, it contacts one of ICANN's "root nameservers" whose address is included in your computer's networking configuration. From there, that nameserver can gather the domain records for a specific domain name from their distributed DNS database.

If you think of DNS as a phonebook, ICANN is the publisher that keeps the phonebook in print and available.

10. Subdomains
We learned about how a domain name resolves to an IP address, which is just a computer on a network - often the internet.

A subdomain prefixes a domain name, allowing a domain to route network traffic to many different servers and resources.

For example, the Boot.dev website that you're on right now is hosted on a different machine than our blog. Our blog, found at blog.boot.dev is hosted on our "blog" subdomain (and the IP address/computer it points to).

11. Uniform Resource Identifiers
We briefly touched on URLs earlier, let's dive a little deeper into the subject.

A URI, or Uniform Resource Identifier, is a unique character sequence that identifies a resource that is (almost always) accessed via the internet.

Just like TypeScript has syntax rules, so do URIs. These rules help ensure uniformity so that any program can interpret the meaning of the URI in the same way.

URIs come in two main types:`URLs URNs`
![graph](https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/T9uAKkw-1254x720.png)

12. Further Dissecting a URL
There are 8 main parts to a URL, though not all the sections are always present. Each piece plays a role in helping clients locate the droids resources they're looking for.
![graph](https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/TpxX9Ei-1280x234.png)

Required: Protocol, Domain

13. URL Ports
The port in a URL is a virtual point where network connections are made. 
![graph](https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/gOCIIe4-632x283.png)