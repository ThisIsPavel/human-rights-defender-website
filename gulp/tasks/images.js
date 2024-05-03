import gulpWebp from "gulp-webp";
import imagemin from "gulp-imagemin";

const images = () => {
  return app.gulp
    .src(app.path.src.img)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "IMAGES",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      imagemin({
        progressive: true,
        optimizationLevel: 2,
      })
    )
    .pipe(gulpWebp())
    .pipe(app.gulp.dest(app.path.build.img));
};

export { images };
