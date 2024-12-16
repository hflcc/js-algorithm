const { graph, graph1 } = require('./graph');

// 图的深度优先遍历
const start = (key, source) => {
  const visited = new Set();
  const dfs = (n, picture) => {
    console.log(n);
    visited.add(n);

    picture[n].forEach((item) => {
      if (!visited.has(item)) {
        dfs(item, picture);
      }
    });
  };

  dfs(key, source);
};

start(2, graph);
start('B', graph1);
