const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};

const graph1 = {
  A: ['B', 'C'],
  B: ['C'],
  C: ['B', 'D'],
  D: ['A', 'B', 'C'],
};

const gap = {
  A: [
    { node: 'B', distance: 5 },
    { node: 'C', distance: 10 },
  ],
  B: [
    { node: 'A', distance: 5 },
    { node: 'D', distance: 7 },
  ],
  C: [
    { node: 'A', distance: 10 },
    { node: 'D', distance: 3 },
  ],
  D: [
    { node: 'B', distance: 7 },
    { node: 'C', distance: 3 },
  ],
};

module.exports = {
  graph,
  graph1,
  gap,
};
