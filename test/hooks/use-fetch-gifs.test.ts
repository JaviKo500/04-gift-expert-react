import { renderHook, waitFor  } from '@testing-library/react';
import { useFetchGifs } from './../../src/hooks/use-fetch-gifs';
describe('Use-fetch-gifs.test', () => {
  test( 'Should return initial state', () => {
    const { result } = renderHook( () => useFetchGifs('One punch man') );
    const { gifs, isLoading } = result.current;
    expect( isLoading ).toBeTruthy();
    expect( gifs.length ).toBe(0);
    expect( result.current ).toEqual({
      gifs: [],
      isLoading: true,
    });
  });

  test( 'Should return a gift array and isLoading false', async () => {
    const { result } = renderHook( () => useFetchGifs('One punch man') );
    await waitFor( 
      () => expect(result.current.gifs.length).toBeGreaterThan(0),
    );
    const { gifs, isLoading } = result.current;
    expect( isLoading ).toBeFalsy();
    expect( gifs.length ).toBeGreaterThan(0);
  });
});