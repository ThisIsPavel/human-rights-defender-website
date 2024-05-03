import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";

const fileIncOptions = {
  prefix: "@@",
  basepath: "@file",
};

const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(fileInclude(fileIncOptions))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(app.gulp.dest(app.path.build.html));
};

export { html };
