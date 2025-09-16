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

# DNS

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

# URLs

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

14. URL Paths

On static sites (like blogs or documentation sites) a URL's path mirrors the server's filesystem hierarchy.

For example, if the website https://exampleblog.com had a static web server running in its /home directory, then a request to https://exampleblog.com/site/index.html would probably return the file located at /home/site/index.html.

But technically, this is just a convention. The server could be configured to return any file or data given that path.

It's Not Always That Simple
Paths in URLs are essentially just another type of parameter that can be passed to the server when making a request. For dynamic sites and web applications, the path is often used to denote a specific resource or endpoint.

15. Query Parameters

Query parameters in a URL are not always present. In the context of websites, query parameters are often used for marketing analytics or for changing a variable on the web page. With website URLs, query parameters rarely change which page you're viewing, though they often will change the page's contents.

That said, query parameters can be used for anything the server chooses to use them for, just like the URL's path.
```
https://www.google.com/search?q=hello+world
```

16. Error Handling in TypeScript

When something goes wrong while a program is running, TypeScript uses the try/catch paradigm for handling those errors. Try/catch is fairly common, Python uses a similar mechanism.

17. Bugs vs. Errors

Error handling via try/catch is not the same as debugging. Likewise, errors are not the same as bugs.

Good code with no bugs can still produce errors that are gracefully handled
Bugs are, by definition, bits of code that aren't working as intended

18. Headers?

An HTTP header allows clients and servers to pass additional information with each request or response. Headers are just case-insensitive key-value pairs that pass additional metadata about the request or response.

HTTP requests from a web browser automatically carry with them many headers, including but not limited to:

The type of client (e.g. Google Chrome)
The Operating system (e.g. Windows)
The preferred language (e.g. US English)
As developers, we can also define custom headers in each request.

19. Headers API

The Headers API allows us to perform various actions on our request and response headers such as retrieving, setting, and removing them. We can access the headers object through the Request.headers and Response.headers properties.

20. Why Are Headers Useful?

Headers are useful for several reasons from design to security, but most often headers are used for metadata about the request or response itself. For example, let's say we wanted to ask for a player's level from the Jello server. We need to send that player's ID to the server so it knows which player to send back the information for. That ID is my request, it's not information about my request.

Authentication is a common use case for headers. If I ask Jello to complete a project, I need to provide authentication information that I'm logged in, but that auth info isn't the request itself, it's just additional information about the request.

21. Exploring Requests:

Click on any request in the list to view its details.
Under the Headers tab, you will see:

Request Headers: Information sent from your browser to the server (e.g., User-Agent, Accept, Cookie).
Response Headers: Information sent back from the server to your browser (e.g., Content-Type, Cache-Control, Set-Cookie).

# JSON - JavaScript Object Notation

22. JSON Syntax

JSON (JavaScript Object Notation), is a standard for representing structured data based on JavaScript's object syntax. It is commonly used to transmit data in web apps via HTTP. For example, the HTTP fetch() requests we have been using in this course have been returning Jello projects, users, and issues as JSON.

JSON supports the following primitive data types:

Strings, e.g. "Hello, World!"
Numbers, e.g. 42 or 3.14
Booleans, e.g. true
Null, e.g. null
And the following collection types:

Arrays, e.g. [1, 2, 3]
Object literals, e.g. {"key": "value"}
```json
{
    "movies": [
        {
            "id": 1,
            "genre": "Action",
            "title": "Iron Man",
            "director": "Jon Favreau"
        },
        {
            "id": 2,
            "genre": "Action",
            "title": "The Avengers",
            "director": "Joss Whedon"
        }
    ]
}
```

23. JSON Review

JSON is a stringified representation of a JavaScript object, which makes it perfect for saving to a file or sending in an HTTP request. Remember, an actual JavaScript object is something that exists only within your program's variables. If we want to send an object outside our program, for example, across the internet in an HTTP request, we need to convert it to JSON first.

JSON Isn't Just for JavaScript
Just because JSON is called JavaScript Object Notation doesn't mean it's only used by JavaScript code! JSON is a common standard that is recognized and supported by every major programming language. For example, even though Boot.dev's backend is written in Go, we still use JSON as the communication format between the front-end and backend.

Common Use-Cases
In HTTP request and response bodies
As formats for text files. .json files are often used as configuration files.
In NoSQL databases like MongoDB, ElasticSearch and Firestore

24. Parse

The JSON.parse() method takes a JSON string as input and constructs the JavaScript value/object described by the string. This allows us to work with the JSON as an object!

```ts
const json = '{"title": "Avengers Endgame", "Rating":4.7, "inTheaters":false}';
const obj: Movie = JSON.parse(json);

console.log(obj.title);
// Avengers Endgame
```

25. XML

We can't talk about JSON without mentioning XML. XML, or "Extensible Markup Language" is a text-based format for representing structured information, like JSON - but different (and a bit more verbose).

ML Syntax
XML is a markup language like HTML, but it's more generalized in that it does not use predefined tags. Just like how in a JSON object keys can be called anything, XML tags can also have any name.

XML representing a movie:
```xml
<root>
  <id>1</id>
  <genre>Action</genre>
  <title>Iron Man</title>
  <director>Jon Favreau</director>
</root>
```
The same data in JSON:
```json
{
  "id": "1",
  "genre": "Action",
  "title": "Iron Man",
  "director": "Jon Favreau"
}
```

Personally, I believe that if JSON works, you should favor it over XML. JSON is:
- Lighter-weight
- Easier to read
- Has better support in most programming languages

26. HTTP Methods - GET

HTTP defines a set of methods. We must choose one to use each time we make an HTTP request. The most common ones include:

- GET
- POST
- PUT
- DELETE
The GET method is used to "get" a representation of a specified resource. It doesn't take (remove) the data from the server but rather gets a representation, or copy, of the resource in its current state. A GET request is considered a safe method to call multiple times because it shouldn't alter the state of the server.

27. aking a GET Request Using the Fetch API

In this course, we have been and will continue to use the Fetch API to make HTTP requests. The fetch() method accepts an optional init object parameter as its second argument that we can use to define things like:

method: The HTTP method of the request, like GET.
headers: The headers to send.
mode: Used for security, we'll talk about this in future courses.
body: The body of the request. Often encoded as JSON.
Example GET request using fetch:

```ts
await fetch(url, {
  method: "GET",
  mode: "cors",
  headers: {
    "sec-ch-ua-platform": "macOS",
  },
});
```

28. Why Use HTTP Methods?

The primary purpose of HTTP methods is to indicate to the server what we want to do with the resource we're trying to interact with. At the end of the day, an HTTP method is just a string, like GET, POST, PUT, or DELETE, but by convention, backend developers write their server code so that the methods correspond with different "CRUD" actions.

The "CRUD" actions are:

Create
Read
Update
Delete
The bulk of the logic in most web applications is "CRUD" logic. Even a complex social media site is mostly just CRUD. Users create, read, update and delete their accounts. They create, read, update, and delete their posts. It's CRUD all the way down!

The 4 most common HTTP methods map nicely to the CRUD actions:

HTTP Method	CRUD Action:

GET -> Read

POST -> Create

PUT -> Update

DELETE -> Delete

These mappings follow convention, not law. Some APIs may use POST for updating and creating, some might just skip DELETE.

29. POST Requests

An HTTP POST request sends data to a server, typically to create a new resource.

Adding a Body
The body of the request is the payload sent to the server. The special Content-Type header is used to tell the server the format of the body: application/json for JSON data in our case. POST requests are generally not safe methods to call multiple times because that would create duplicate records. For example, you wouldn't want to accidentally send a tweet twice.
```ts
await fetch(url, {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});
```

30. Status Codes

The Status Code of an HTTP response tells the client whether or not the server was able to fulfill the request. Status codes are 3-digit numbers that are grouped into categories:

100-199: Informational responses. These are very rare.
200-299: Successful responses. Hopefully, most responses are 200's!
300-399: Redirection messages. These are typically invisible because the browser or HTTP client will automatically do the redirect.
400-499: Client errors. You'll see these often, especially when trying to debug a client application
500-599: Server errors. You'll see these sometimes, usually only if there is a bug on the server.
Here are some of the most common status codes, but there is also a full list here if you're interested.

200 - OK. This is by far the most common code, it just means that everything worked as expected.
201 - Created. This means that a resource was created successfully. Typically in response to a POST request.
301 - Moved permanently. This means the resource was moved to a new place, and the response will include where that new place is. Websites often use 301 redirects when they change their domain name, for example.
400 - Bad request. A general error indicating the client made a mistake in their request.
401 - Unauthorized. This means the client doesn't have the correct permissions. Maybe they didn't include a required authorization header, for example.
404 - Not found. You'll see this on websites quite often. It just means the resource doesn't exist.
500 - Internal server error. This means something went wrong on the server, likely a bug on their end.

31. PUT

The HTTP PUT method creates or more commonly, updates a representation of the target resource with the contents of the request's body. In short, it updates a resource's properties.

await fetch(url, {
  method: "PUT",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

POST vs. PUT
While POST and PUT are both used for creating resources, PUT is more common for updates and is idempotent, meaning it's safe to make the request multiple times without changing the server state. For example:
```

POST /users/bob (create bob user)
POST /users/bob (create duplicate bob user)
POST /users/bob (create duplicate bob user)

PUT /users/bob (create bob user if it doesn't exist)
PUT /users/bob (update bob user with the same data)
PUT /users/bob (update bob user with the same data)
```

32. PATCH vs. PUT

You may encounter the PATCH method from time to time. It's frankly not used very often. It's meant to partially modify a resource, whereas PUT is meant to completely replace a resource.

PATCH is not as popular as PUT, and many servers, even if they allow partial updates, just use PUT.

33. 
Delete
The DELETE method does exactly what you expect: it deletes a specified resource.

Example
```ts
// This deletes the location with ID: 52fdfc07-2182-454f-963f-5f0f9a621d72
const url =
  "https://api.boot.dev/v1/courses_rest_api/learn-http/locations/52fdfc07-2182-454f-963f-5f0f9a621d72";

await fetch(url, {
  method: "DELETE",
  mode: "cors",
});
```

34. URL Paths

The URL Path comes right after the domain (or port if one is provided) in a URL string.

In this URL:

`http://testdomain.com/root/next`

The path is:

/root/next

Path Conventions
Many static websites (websites where the content does not change, as opposed to dynamic web applications) use paths as a direct mapping to the path to the server's file system. For example, If I was running a static web server for "mystaticstate.com" from the root of my file system, a GET request to http://mystaticstate.com/documents/hello.txt would serve the file at /documents/hello.txt from my server.

Most dynamic web applications don't use this simple mapping of URL path -> file path. Technically, a URL path is just a string that the web server can do what it wants with, and modern websites take advantage of that flexibility. Some common examples of what paths are used for include:

The hierarchy of pages on a website, whether or not that reflects a server's file structure
Parameters passed into an HTTP request, like the ID of a resource
The version of the API
The type of resource being requested

35. RESTful APIs

Representational State Transfer, or REST, is a popular convention that many dynamic HTTP servers follow. Not all HTTP APIs are "REST APIs", or "RESTful", but it is very common.

RESTful servers follow a loose set of rules that makes it easy to build reliable and predictable web APIs. REST is a set of conventions about how HTTP APIs should be built.

Separate and Agnostic
The big idea behind REST is that resources are transferred via well-recognized, language-agnostic client/server interactions. A RESTful style means the implementation of the client and server can be created independently of one another, as long as some simple standards, like the names of the available resources, have been established.

Stateless
A RESTful architecture is stateless, which means the server does not need to know what state the client is in, nor does the client need to know what state the server is in. Statelessness in REST is enforced by interacting with resources instead of commands. Keep in mind, this doesn't mean the applications are stateless - what would "updating a resource" even mean if the server wasn't keeping track of its state?

Paths in Rest
In a RESTful API, the last section of the path of a URL specifies the resource. In Jello, this means an issue, a user, or a project. Depending on whether the request is a GET, POST, PUT or DELETE, the resource is read, created, updated, or deleted.

The Jello API we have been working with is a RESTful API! Take a look at the URLs we've been using:

https://api.boot.dev/v1/courses_rest_api/learn-http/projects
https://api.boot.dev/v1/courses_rest_api/learn-http/users
https://api.boot.dev/v1/courses_rest_api/learn-http/issues
The first part of the path specifies the version. In this case, version 1, or v1.
The second part of the path tells our server that this is a REST API for the "Learn HTTP" course.
The last part denotes which resource is being accessed, be it a project, user, or issue.

36. URL Query Parameters

A URL's query parameters appear next in the URL structure but are not always present - they're optional. For example:

https://www.google.com/search?q=boot.dev

q=boot.dev is a query parameter. Like headers, query parameters are key / value pairs. In this case, q is the key and boot.dev is the value.

37. The Documentation of an HTTP Server

You may be wondering:

How the heck am I supposed to memorize how all these different servers work???

The good news is that you don't need to. When you work with a backend server, it's the responsibility of that server's developers to provide you with instructions, or documentation that explains how to interact with it. For example, the documentation should tell you:

The domain of the server
The resources you can interact with (HTTP paths)
The supported query parameters
The supported HTTP methods
Anything else you'll need to know to work with the server

The Server Is the Captain Now
The server has complete control over how the path in a URL is interpreted and used in a request. The same goes for query parameters. While there are a lot of strong conventions around how servers should interpret paths and query parameters, the server can do whatever it wants. That's why you need docs.

38. Multiple Query Parameters

Query parameters are key/value pairs - that means there can be multiple pairs!

http://example.com?firstName=lane&lastName=wagner

In the example above:

firstName = lane
lastName = wagner
The ? separates the query parameters from the rest of the URL. The & is then used to separate each additional pair of query parameters after that.

39. HTTPS

Hypertext Transfer Protocol Secure or HTTPS is an extension of the HTTP protocol. HTTPS secures the data transfer between client and server by encrypting all of the communication.

HTTPS allows a client to safely share sensitive information with the server through an HTTP request, such as credit card information, passwords, or bank account numbers.

40. Security and Encryption

HTTPS requires that the client use SSL or TLS to protect requests and traffic by encrypting the information in the request. HTTPS is just HTTP with extra security!

![graph](https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/iOkQUdG-517x487.png)

HTTPS Keeps Your Messages Private, but Not Your Identity
We won't cover how encryption works in this course, but we will in later courses! For now, it's important to note that while HTTPS encrypts what you are saying, it doesn't necessarily protect who you are. Tools like VPNs are needed for added privacy.

HTTPS Ensures That You're Talking to the Right Person (or Server)
In addition to encrypting the information within a request, HTTPS uses digital signatures to prove that you're communicating with the server that you think you are. If a hacker were to intercept an HTTPS request by tapping into a network cable, they wouldn't be able to successfully pretend they are your bank's web server.

41. The Runtime Problem

TypeScript gives us compile-time type safety, but when data comes from external sources like APIs, we lose that safety. The result of await res.json() is typed as any.

const res = await fetch(
  "https://api.boot.dev/v1/courses_rest_api/learn-http/issues",
);
const data = await res.json(); // data is type 'any'
console.log(data[0].title.toUpperCase()); // might crash at runtime!

42. Why Validate?

Zod's only one of many runtime validation libraries. Popular alternatives include:

Joi
Yup
class-validator.
The Problem
TypeScript provides compile-time type safety, but can't validate external data at runtime. Data from APIs, user input, or databases arrives as any and TypeScript can't guarantee its shape.

External APIs are particularly problematic - you don't control them, and documentation is often outdated.

const userData = await response.json(); // 'any'
console.log(userData.profile.name.toUpperCase()); // Crashes if profile is null

The Solution
Runtime validation creates a boundary between untrusted external data and your typed code:

const userData = UserSchema.parse(await response.json());
console.log(userData.profile.name.toUpperCase()); // Guaranteed to work

When validation fails, you can handle it gracefully instead of crashing.

Do You Need It?
Runtime validation might not be necessary if you control all the data or work on a small team with insight into all changes.