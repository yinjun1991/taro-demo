const sourceMap = require("source-map");
const fs = require("fs");

// 此处替换为你下载下来的 sourcemap 文件
const data = fs.readFileSync("./dist/app.js.map").toString("utf8");

const consumer = new sourceMap.SourceMapConsumer(JSON.parse(data));

consumer.then((c) => {
  const line = 1,
    column = 2;
  const s = c.originalPositionFor({ line, column });
  console.log(`origin code for line: ${line}, ${column}\n`);
  console.log(
    `======================================================================`
  );
  console.log(c.sourceContentFor(s.source));
  console.log(
    `======================================================================`
  );
});
