interface JelloIssue {
    id: string;
    title: string;
}
// The Jello API returns an array of issue data, but we can't trust the shape. Create manual validation functions that:
function validateIssue (data: any): JelloIssue {
    // Check if data is an object
    if (typeof data !== "object" || data === null) {
        throw new Error("Invalid data: must be an object");
    }

    if (typeof data.id !== "string") {
        throw new Error("Invalid id: must be an string");
    }

    if (typeof data.title !== "string") {
        throw new Error("Invalid title: must be an string");
    }

    // Return the validated data
    return {
        id: data.id,
        title: data.title,
    }

}