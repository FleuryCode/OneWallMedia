// Main Function
function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
export const RealEstatePhotos =  importAll(require.context('./assets/portfolios/real-estate-photography', false, /\.(png|jpe?g|svg)$/));


