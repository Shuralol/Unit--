// eslint-disable-next-line import/prefer-default-export
export function sortHeroesByHealth(heroes) {
  return heroes.sort((a, b) => b.health - a.health).reverse();
}
