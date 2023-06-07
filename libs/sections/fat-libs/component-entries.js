// dit bestand verwerkt de root barrel-file en produceert een webpack compatibele entryMap van
// de sub-folders - wordt momenteel niet meer gebruikt, voorlopig toch behouden als code

const fs = require('fs');

const extractFromFile = (line) => {
    const cleaned1 = line.replaceAll("'", '');
    const cleaned2 = cleaned1.replaceAll('"', '');
    const parts = cleaned2.split('from');
    const exportFrom = parts[parts.length - 1];
    return exportFrom.trim();
};

const buildFilePath = (line, relativePath) => line.replace('./', relativePath);

const buildEntry = (line) => {
    const parts = line.split('/');
    const entry = parts[2];
    return entry;
};

exports.processBarrelFile = () => {
    const data = fs.readFileSync('./libs/sections/src/index.ts', 'utf8');
    const cleaned = data.replaceAll('\n', '');
    const lines = cleaned.split(';');
    const extractFromFiles = lines.map((line) => extractFromFile(line)).filter((line) => !!line);
    const entryMap = extractFromFiles.reduce((map, line) => {
        const entry = buildEntry(line);
        const filePath = buildFilePath(line, './src/');
        map[entry] = filePath;
        return map;
    }, {});
    return entryMap;
};
