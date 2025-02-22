export const fetchRepositories = async (query) => {
    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
      return response.json();
    } catch (error) {
      console.error(error);
      return { items: [] };
    }
  };