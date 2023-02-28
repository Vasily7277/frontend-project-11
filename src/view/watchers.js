import onChange from 'on-change';
import handleProcessState from './process-state.js';
import renderModal from './render-modal.js';
import renderPosts from './render-posts.js';
import renderFeeds from './render-feeds.js';
import handleProcessError from './process-error.js';

const render = (elements, i18Instance, state) => (path, value) => {
  switch (path) {
    case 'feeds':
      renderFeeds(elements, state, i18Instance);
      break;
    case 'form.processState':
      handleProcessState(elements, value, state, i18Instance);
      break;
    case 'posts':
      renderPosts(elements, state, i18Instance);
      break;
    case 'uiState.openPostId':
      renderModal(elements, state);
      break;
    case 'processError':
      handleProcessError(elements, i18Instance);
      break;

    default:
      break;
  }
};

const watch = (state, el, lang) => onChange(state, render(el, lang, state));

export default watch;