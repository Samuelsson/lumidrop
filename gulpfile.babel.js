'use strict';

import gulp     from 'gulp';
import path     from 'path';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import yargs    from 'yargs';

let paths = {
    components: path.join(__dirname, 'src/app/components'),
    templates: path.join(__dirname, 'generator')
};

/**
 * Generates all files for a new component and put them in the components folder.
 * The component needs to be added to components.module if to be included the in app.
 *
 * Run command: npm run component -- --name newComponentNameInCamelCase
 */
gulp.task('component', () => {
    const toCapitalInitial = (val) => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };

    const toSnakeCase = (val) => {
        return val.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
    };

    const name = yargs.argv.name;
    const srcPath = path.join(paths.templates, 'component/**/*.**');
    const destPath = path.join(paths.components, toSnakeCase(name));

    return gulp.src(srcPath)
        .pipe(template({
            name: name,
            upperCaseName: toCapitalInitial(name),
            snakeCaseName: toSnakeCase(name)
        }))
        .pipe(rename((path) => {
            path.basename = path.basename.replace('temp', toSnakeCase(name));
        }))
        .pipe(gulp.dest(destPath));
});