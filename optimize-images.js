const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
  const files = await imagemin(['public/assets/images/**/*.{jpg,png}'], {
    destination: 'public/assets/images',
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  console.log('Images optimized:', files);
})();
