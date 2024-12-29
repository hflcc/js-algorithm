import { gap } from "./graph.js";

// 权重相同
function findShortestPath(gap, start, end) {
  if (start === end) return 0; // 如果起点和终点相同，距离为0

  const queue = [{ node: start, distance: 0 }]; // 初始化队列，包含起点
  const visited = new Set(); // 用于记录访问过的节点

  while (queue.length > 0) {
    const current = queue.shift(); // 取出队列头部
    const { node, distance } = current;

    if (node === end) {
      return distance; // 找到终点，返回最短距离111
    }

    if (!visited.has(node)) {
      visited.add(node); // 标记节点已访问

      // 遍历当前节点的邻居
      for (const neighbor of gap[node] || []) {
        if (!visited.has(neighbor.node)) {
          queue.push({
            node: neighbor.node,
            distance: distance + neighbor.distance,
          });
        }
      }
    }
  }

  return -1; // 如果未找到路径，返回 -1 表示不可达
}

const dis = findShortestPath(gap, "A", "C");
console.log(dis);
