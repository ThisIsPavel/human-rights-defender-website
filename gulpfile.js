import gulp from "gulp";
import { path } from "./gulp/config/index.js";
import { plugins } from "./gulp/plugins/index.js";
import { scss } from "./gulp/tasks/scss.js";
import { html } from "./gulp/tasks/html.js";
import { clear } from "./gulp/tasks/clear.js";
import { images } from "./gulp/tasks/images.js";
import { serv } from "./gulp/tasks/server.js";
import { svgSprites } from "./gulp/tasks/svgSprite.js";
import { js } from "./gulp/tasks/script.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";

global.app = {
  path,
  gulp,
  plugins,
};

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

gulp.task("watch", function () {
  gulp.watch(app.path.watch.scss, gulp.parallel(scss));
  gulp.watch(app.path.watch.html, gulp.parallel(html));
  gulp.watch(app.path.watch.img, gulp.parallel(images));
  gulp.watch(app.path.watch.svg, gulp.parallel(svgSprites));
  gulp.watch(app.path.watch.js, gulp.parallel(js));
});

gulp.task(
  "default",
  gulp.series(
    clear,
    gulp.series(fonts, gulp.parallel(html, scss, images, js, svgSprites)),
    gulp.parallel(serv, "watch")
  )
);
