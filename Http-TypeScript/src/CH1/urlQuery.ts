 interface UserProfile {
    id?: string;
    user: User;
    experience: number;
    remote: boolean;
    role: string;
  }
  
 interface User {
    name: string;
    location: string;
    age: number;
  }

  async function getUsers(url: string, apiKey: string): Promise<UserProfile[]> {
    const fullURL = `${url}?sort=experience`;
    const response = await fetch(fullURL, {
      method: "GET",
      mode: "cors",
      headers: {
        "X-API-Key": apiKey,
      },
    });
    return response.json();
  }
  
  // don't touch below this line
  
  const baseURL = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";
  
  const apiKey = generateKey();
  
  const users = await getUsers(baseURL, apiKey);
  for (const user of users) {
    console.log(
      `got user with name: ${user.user.name}, and experience: ${user.experience}`,
    );
  }
  
  function generateKey(): string {
    const characters = "ABCDEF0123456789";
    let result = "";
    for (let i = 0; i < 16; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }