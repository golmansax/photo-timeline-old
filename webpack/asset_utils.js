import { isProduction } from '../server/config';

const assetManifest = (() => {
  if (isProduction()) { return require('./build/manifest.json'); }
  return {};
})();

export const getWebpackAssetPath = (assetName) => {
  let assetPath = assetName;
  if (assetManifest.hasOwnProperty(assetName)) {
    assetPath = assetManifest[assetName];
  }

  return `/assets/${assetPath}`;
};
