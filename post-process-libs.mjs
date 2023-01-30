import path from 'path';
import fs from 'fs-extra';

const wrapAsStylesObject = (content) => `const styles = \`${content}\`; export default styles;`;

const wrapCssInJs = (directoryToSearch, jsSuffix, removeOriginal) => {
    const pattern = '.css';
    fs.readdirSync(directoryToSearch).forEach((file) => {
        const filePath = path.resolve(directoryToSearch, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            wrapCssInJs(filePath, jsSuffix, removeOriginal);
        }
        if (stat.isFile() && filePath.endsWith(pattern)) {
            const scssJsFile = filePath.replace(/.css$/, jsSuffix);
            fs.readFile(filePath, 'utf8', (err, data) => {
                // replace one \ with two \\ to escape the escape character
                data = data.replace(/\\/g, '\\\\');
                fs.outputFile(scssJsFile, wrapAsStylesObject(data));
                console.log('processed css file to:', scssJsFile);
                if (removeOriginal) {
                    // remove the original file, keep the map file
                    fs.unlink(filePath);
                }
            });
        }
    });
};

const copySources = (directoryToSearch, directoryCopyTo, pattern) => {
    fs.readdirSync(directoryToSearch).forEach((file) => {
        const filePath = directoryToSearch + '/' + file;
        const copyPath = directoryCopyTo + '/' + file;
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            copySources(filePath, copyPath, pattern);
        }
        if (stat.isFile() && filePath.endsWith(pattern)) {
            console.log('filePath:', filePath);
            fs.copy(filePath, copyPath, err => {
                console.log('copied to:', copyPath);
            })
        }
    });
};

const removeFiles = (directoryToSearch, pattern) => {
    fs.readdirSync(directoryToSearch).forEach((file) => {
        const filePath = path.resolve(directoryToSearch, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            removeFiles(filePath, pattern);
        }
        if (stat.isFile() && filePath.endsWith(pattern)) {
            fs.unlink(filePath);
        }
    });
};

// post process common-utilities
copySources('libs/common/utilities/style', 'dist/libs/common/utilities/style', '.scss');

// post process elements
wrapCssInJs('dist/libs/elements/src', '.css.js', false);
copySources('libs/elements/src', 'dist/libs/elements/src', '.lib.js');
// removeFiles('dist/libs/elements/src', '.js.map');
// removeFiles('dist/libs/elements/src', '.css.map');

// post process components
wrapCssInJs('dist/libs/components/src', '.scss.js', true);
copySources('libs/components/src', 'dist/libs/components/src', '.lib.js');
// removeFiles('dist/libs/components/src', '.js.map');
// removeFiles('dist/libs/components/src', '.css.map');

// post process sections
wrapCssInJs('dist/libs/sections/src', '.scss.js', true);
copySources('libs/sections/src', 'dist/libs/sections/src', '.lib.js');
// removeFiles('dist/libs/sections/src', '.js.map');
// removeFiles('dist/libs/sections/src', '.css.map');

// post process map
wrapCssInJs('dist/libs/map/src', '.scss.js', true);
copySources('libs/map/src', 'dist/libs/map/src', '.js');
// removeFiles('dist/libs/map/src', '.js.map');
// removeFiles('dist/libs/map/src', '.css.map');

// post process test-support
copySources('libs/support/test-support/src', 'dist/libs/support/test-support/src', '.js');
