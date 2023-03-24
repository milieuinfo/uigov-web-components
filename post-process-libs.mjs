import path from 'path';
import fs from 'fs-extra';

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

// post process elements
copySources('libs/elements/src', 'dist/libs/elements/src', '.lib.js');

// post process components
copySources('libs/components/src', 'dist/libs/components/src', '.lib.js');

// post process sections
copySources('libs/sections/src', 'dist/libs/sections/src', '.lib.js');

// post process map
copySources('libs/map/src', 'dist/libs/map/src', '.js');

// post process test-support
copySources('libs/support/test-support/src', 'dist/libs/support/test-support/src', '.js');
