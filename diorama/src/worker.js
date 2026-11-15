// Puzzle generation and hints run here so the render loop never stalls.
import { generate, hint } from './engine.js';

self.onmessage = ({ data }) => {
  const result = data.type === 'generate' ? generate(data.key) : hint(data.puzzle, data.pos);
  self.postMessage({ id: data.id, result });
};
