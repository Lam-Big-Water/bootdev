/*

Assignment
Because we don't want any of our users to accidentally overwrite another user's saved data, our backend team has required that we use the X-API-Key header for all requests to Jello's server. When we use different values, we're telling the server that we are a different person.

There's a bug in our code! It should:

Get a Project object from the Jello API.
Log that object to the console.
Update the object and sends those changes back to the server.
Get the project object again and log the updated project to the console.
Run the code in its current state to see the return values.
Notice that the two objects that are logged to the console are the same. That's because the X-API-Key they are using is different, the update isn't being applied to the same account that we're checking in the last getProjectResponse call.

Use the same apiKey value in the last call to getProjectResponse.
*/ 


export interface Project {
    id: string;
    title: string;
    completed: boolean;
    assignees: number;
  }

const generatedApiKey = generateKey();
const url =
  "https://api.boot.dev/v1/courses_rest_api/learn-http/projects/52fdfc07-2182-454f-963f-5f0f9a621d72";
const newProjectData: Project = {
  completed: false,
  id: "52fdfc07-2182-454f-963f-5f0f9a621d72",
  title: "Product Roadmap 2025",
  assignees: 1,
};

const oldProject = await getProjectResponse(generatedApiKey, url);
console.log("Got old project:");
console.log(`- title: ${oldProject.title}, assignees: ${oldProject.assignees}`);
console.log("---");

await putProject(generatedApiKey, url, newProjectData);
console.log("Project updated!");
console.log("---");

// const newGeneratedApiKey = generateKey();
const newProject = await getProjectResponse(generatedApiKey, url);
console.log("Got new project:");
console.log(`- title: ${newProject.title}, assignees: ${newProject.assignees}`);
console.log("---");

// don't touch below this line

async function getProjectResponse(apiKey: string, url: string) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

async function putProject(apiKey: string, url: string, data: Project) {
  const response = await fetch(url, {
    method: "PUT",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function generateKey(): string {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}