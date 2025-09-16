/*
Assignment
Users need to be able to mark their projects as completed. However, updateProjectById() is passing an invalid value to fetch, causing an error.

The .body property in fetch expects a BodyInit in the RequestInit. — those are just the options we pass to fetch.

type BodyInit =
  | Blob
  | BufferSource
  | FormData
  | URLSearchParams
  | ReadableStream<Uint8Array>
  | Iterable<Uint8Array>
  | AsyncIterable<Uint8Array>
  | string;

That's a lot of stuff, but mainly we need to pass a JSON string.

Fix the code.
*/ 

export interface Project {
    id: string;
    title: string;
    completed: boolean;
    assignees: number;
  }
  
  async function updateProjectById(id: string, projectObj: Project) {
    const path = `https://api.boot.dev/v1/courses_rest_api/learn-http/projects/${id}`;
    const response = await fetch(path, {
      method: "PUT",
      mode: "cors",
      headers: getHeaders(),
      body: JSON.stringify(projectObj),
    });
    return response.json();
  }
  
  // Don't touch below this line
  
  const apiKey = generateKey();
  const projectID = "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8";
  
  const project = await getProjectById(projectID);
  console.log(
    `Project '${project.title}' fetched. Data: ${JSON.stringify(project)}`,
  );
  
  project.completed = true;
  await updateProjectById(projectID, project);
  console.log(`Project '${project.title}' was completed!`);
  
  const updatedProject = await getProjectById(projectID);
  console.log(
    `Project '${updatedProject.title}' fetched. Data: ${JSON.stringify(updatedProject)}`,
  );
  
  function generateKey(): string {
    const characters = "ABCDEF0123456789";
    let result = "";
    for (let i = 0; i < 16; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  async function getProjectById(id: string): Promise<Project> {
    const path = `https://api.boot.dev/v1/courses_rest_api/learn-http/projects/${id}`;
    const response = await fetch(path, {
      method: "GET",
      mode: "cors",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
  
  function getHeaders(): Record<string, string> {
    return {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    };
  }