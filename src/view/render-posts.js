import createPostsHtml from './create-posts-html.js';

const renderPosts = (elements, state, i18Instance) => {
  const { posts } = elements;

  if (state.uiState.visitedPosts.length > 0) {
    posts.innerHTML = createPostsHtml(state.posts, i18Instance);
    state.uiState.visitedPosts.forEach((id) => {
      const currentLink = document.querySelector(`a[data-id="${id}"]`);
      currentLink.classList.remove('fw-bold');
      currentLink.classList.add('fw-normal', 'link-secondary');
    });
  } else {
    posts.innerHTML = createPostsHtml(state.posts, i18Instance);
  }
};

export default renderPosts;