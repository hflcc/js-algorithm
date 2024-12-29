import { graph } from "./graph";

// 图的广度优先遍历
const visited = new Set();
const seq = [2];
visited.add(seq[0]);

while (seq.length) {
  const n = seq.shift();
  console.log(n);
  graph[n].forEach((item) => {
    if (!visited.has(item)) {
      seq.push(item);
      visited.add(item);
    }
  });
}
