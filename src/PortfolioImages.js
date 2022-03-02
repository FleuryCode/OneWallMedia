// Main Function
function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }

export const RealEstatePhotos =  importAll(require.context('./assets/portfolios/real-estate-photography', false, /\.(png|jpe?g|svg)$/));

export const TwilightPhotos =  importAll(require.context('./assets/portfolios/twilight-photography', false, /\.(png|jpe?g|svg)$/));

export const DronePhotos =  importAll(require.context('./assets/portfolios/drone-photography', false, /\.(png|jpe?g|svg)$/));

export const MatterportPhotos =  importAll(require.context('./assets/portfolios/360-matterport', false, /\.(png|jpe?g|svg)$/));

export const VirtualStagingPhotos =  importAll(require.context('./assets/portfolios/virtual-staging', false, /\.(png|jpe?g|svg)$/));

export const PortraitPhotos =  importAll(require.context('./assets/portfolios/portraits', false, /\.(png|jpe?g|svg)$/));

export const EventPhotos =  importAll(require.context('./assets/portfolios/live-events', false, /\.(png|jpe?g|svg)$/));

export const ProductPhotos =  importAll(require.context('./assets/portfolios/product-photography', false, /\.(png|jpe?g|svg)$/));
