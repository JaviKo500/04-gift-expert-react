import { getGifts } from '../../src/helpers/getGifts';

describe('GetGifts.test', () => {
  test( 'Should return an array of gifs', async () => {
    const gifts = await getGifts('One punch man');
    expect(gifts.length).toBeGreaterThan(0);
    expect(gifts[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});