const getParsedRSS = (content, linkName) => {
    const parser = new DOMParser();
    const parsedContent = parser.parseFromString(content, 'application/xml');
    const parseError = parsedContent.querySelector('parsererror');
  
    if (parseError) {
      const error = new Error(parseError.textContent);
      error.isParsing = true;
      throw error;
    }
  
    const feedTitle = parsedContent.querySelector('title').textContent;
    const feedDescription = parsedContent.querySelector('description').textContent;
    const feed = {
      feedTitle, feedDescription, linkName,
    };
  
    const items = parsedContent.querySelectorAll('item');
    const posts = [...items].map((item) => {
      const title = item.querySelector('title').textContent;
      const description = item.querySelector('description').textContent;
      const link = item.querySelector('link').textContent;
  
      return {
        feedTitle, title, description, link,
      };
    });
  
    return { feedData: feed, postsData: posts };
  };
  
  export default getParsedRSS;