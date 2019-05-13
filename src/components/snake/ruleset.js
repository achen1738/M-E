import SnakeObject from "../SnakeObject";

export function snakeMoves(
  { segments, direction, trail: previousTrail, time, deltaTime },
  { width, height, snakeSpeed }
) {
  const distance = deltaTime * snakeSpeed;
  const { x, y } = segments[0].cloneMovedBy({
    direction,
    distance,
    width,
    height
  });
  const trail = [
    {
      direction: direction + 180,
      distance
    },
    ...previousTrail
  ];
  return {
    trail,
    segments: segments.map(
      s =>
        trail.reduce(
          (
            { segment, trailOffset },
            { direction: trailDirection, distance: trailDistance }
          ) => ({
            segment,
            trailOffset: trailOffset + trailDistance,
            ...(segment.offset > trailOffset && {
              segment: segment.cloneMovedBy(
                {
                  direction: trailDirection,
                  distance: Math.min(
                    segment.offset - trailOffset,
                    trailDistance
                  ),
                  width,
                  height
                },
                { trailDirection }
              )
            })
          }),
          {
            segment: s.cloneWith({ x, y }),
            trailOffset: 0
          }
        ).segment
    )
  };
}

export function fruitsDrop(
  { fruits, segments, time, lastFruitAt },
  { width, height, newFruitProbability, newFruitDelay, newFruitSize }
) {
  if (
    time < lastFruitAt + newFruitDelay ||
    Math.random() > newFruitProbability
  ) {
    return null;
  }
  if (Math.random() > newFruitProbability) {
    return {
      lastFruitAt: time
    };
  }
  const newFruit = new SnakeObject({
    x: Math.random() * width,
    y: Math.random() * height,
    r: newFruitSize / 2,
    createdAt: time
  });
  const gameObjects = fruits.concat(segments);
  if (gameObjects.some(s => s.collidesWith(newFruit))) {
    return null;
  }
  return {
    fruits: fruits.concat(newFruit),
    lastFruitAt: time
  };
}

export function snakeEats({ segments: [head], fruits, growth }) {
  const remainingFruits = fruits.filter(f => !f.collidesWith(head));
  return {
    fruits: remainingFruits,
    growth: growth + fruits.length - remainingFruits.length
  };
}

export function snakeGrows({ segments: [head], fruits, growth }) {
  const remainingFruits = fruits.filter(f => !f.collidesWith(head));
  return {
    fruits: remainingFruits,
    growth: growth + fruits.length - remainingFruits.length
  };
}

export default ({ fruits, time }, { fruitExpirationDelay: delay }) => ({
  fruits: fruits.filter(f => time - f.createdAt <= delay)
});
