/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import { sortHeroesByHealth } from '../basicTest.js';

describe('sortHeroesByHealth', () => {
  it('should sort heroes by health', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const sortedHeroes = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sortHeroesByHealth(heroes)).toEqual(sortedHeroes);
  });
});
