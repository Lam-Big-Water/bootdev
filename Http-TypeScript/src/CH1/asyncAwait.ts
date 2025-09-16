async function fetchLeaderBoard(): Promise<any> {
    const response = await fetch("https://jello.servers");
    return response.json();
}

try {
    const leaderBoard = await fetchLeaderBoard();
    console.log(leaderBoard)
} catch {
    console.log("Our servers are down, but we will be up and running soon");
}

