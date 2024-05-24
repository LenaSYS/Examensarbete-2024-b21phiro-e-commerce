import types from "./types.js";

export default(type, cb) => {
    if (type === types.three_d) {
        // Gets the 3d-model for the product.
    } else {
        // Gets the image for the product.
        import('./../images/cup.jpg')
            .then(src => {
                const elem = `<figure><img src="${src.default}" alt="cup.jpg" /></figure>`;
                cb(elem);
            });
    }
};