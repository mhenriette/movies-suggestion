export function getSystemPrompt() {
  return {
    role: "system",
    content:
      "You are a movie recommendation assistant that specializes in suggesting films based on user preferences.",
  };
}

export function getUserPrompt(movieName) {
  return {
    role: "user",
    content: `Suggest movies similar to "${movieName}" that I might enjoy.`,
  };
}

export function getFunctions() {
  return [
    {
      name: "generate_movie_suggestions",
      description: "Generate movie suggestions based on user input.",
      parameters: {
        type: "object",
        properties: {
          movieSuggestions: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: {
                  type: "string",
                  description: "The title of the suggested movie",
                },
                description: {
                  type: "string",
                  description: "A brief description of the suggested movie",
                },
                link: {
                  type: "string",
                  description: "An image URL for the suggested movie poster",
                },
                ratings: {
                  type: "number",
                  description: "The movie's ratings on a scale from 1 to 10",
                },
                essentialInfo: {
                  type: "string",
                  description:
                    "Essential information about the movie (e.g., release year, director)",
                },
              },
            },
          },
        },
        required: ["movieSuggestions"],
      },
    },
  ];
}
