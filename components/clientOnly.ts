import BifrostCors from './bifrost';

const IFRAME_ID = 'genshinmap-origin-bifrost';

let bifrostClient = null;

export const handleCrossOrigin = async (
  onStorageAccessSuccess: () => void,
  onStorageAccessFailure: () => void
) => {
  if (window.location.origin === 'http://localhost:3001') {
    bifrostClient = new BifrostCors(
      'http://localhost:3000/map',
      false,
      null,
      onStorageAccessSuccess,
      onStorageAccessFailure
    );
  } else if (window.location.origin === 'https://genshinmap.github.io') {
    bifrostClient = new BifrostCors(
      //'https://develop.teyvat.moe/map',
      'https://teyvat.moe/map',
      false,
      null,
      onStorageAccessSuccess,
      onStorageAccessFailure
    );
  } else {
    console.log(`Unexpected source domain.`);
  }
};

export const handleCrossOriginManual = () => {
  if (bifrostClient != null) {
    console.log('bifrostClient retrieved!');
    bifrostClient.askForStorageAccess();
  } else {
    console.log('bifrostClient was not retained.');
  }
};

export const redirectToUrl = (url) => {
  // Move to a new URL, while destroying the page history.
  window.location.replace(url);
};
