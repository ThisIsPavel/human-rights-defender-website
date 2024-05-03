import webpack from "webpack-stream";
import config from "../../webpack.config.js";

const js = () => {
  return app.gulp
    .src(app.path.src.js)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(webpack(config))
    .pipe(app.gulp.dest(app.path.build.js));
};

export { js };
