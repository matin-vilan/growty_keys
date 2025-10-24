const process = require("process");
const path = require("path");
const fs = require("fs");
const [, , icons, location] = process.argv;

const iconsPath = path.join(process.cwd(), icons);
const joinedPaths = path.join(process.cwd(), location);
fs.readdir(iconsPath, async (er, files) => {
  const all = files
    .filter((x) => x.endsWith(".svg"))
    .map(
      (file) =>
        new Promise((resolve, reject) => {
          fs.readFile(path.join(iconsPath, file), "utf8", (fer, data) => {
            if (fer) {
              reject(fer);
              return;
            }
            resolve({
              name: file.replace(/.(\w)+$/, ""),
              file,
              data,
            });
          });
        })
    );
  const result = await Promise.all(all);
  const content = result.reduce(
    (p, c) => ({ ...p, [c.name]: { data: c.data, file: c.file } }),
    {}
  );
  fs.writeFile(
    path.join(joinedPaths, "icons.json"),
    JSON.stringify(content),
    () => {}
  );
});
