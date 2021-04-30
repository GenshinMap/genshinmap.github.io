import BifrostCors from './bifrost';

export const handleCrossOrigin = async () => {
  const bifrost = new BifrostCors('https://genshinmap.github.io');
  if (window.location.href === 'http://localhost:3001/') {
    //const bifrost = new BifrostCors('http://localhost:3000');
    //console.log('Bifrost fetcher established.');
    //await bifrost
    //  .getLocalStorage('genshinmap-preferences')
    //  .then(() => {
    //    console.log('Fetched preferences.');
    //  })
    //  .catch(() => {
    //    console.error('Error fetching preferences.');
    //  });
  } else {
    // const bifrost = new BifrostCors('http://localhost:3001');
    // console.log('Bifrost base established.');
  }
};
export const redirectToUrl = (url) => {
  // Move to a new URL, while destroying the page history.
  window.location.replace(url);
};
