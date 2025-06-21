import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/use-fetch-gifs';

jest.mock('../../src/hooks/use-fetch-gifs');

describe('GifGrid.test', () => {
  const category = 'One punch man';
  test( 'Should show loading initial', () => {
    ( useFetchGifs as jest.Mock ).mockReturnValue({ gifs: [], isLoading: true });
    render( <GifGrid category={category} /> );
    const p = screen.getByRole('paragraph');
    const title = screen.getByRole('heading');
    expect(p.textContent).toBe('Loading...');
    expect(title.textContent).toBe(category);
  });

  test( 'Should render items when loaded images useFetchGift', () => {
    ( useFetchGifs as jest.Mock ).mockReturnValue({ 
      gifs: [
        { id: 'abc', title: 'Saitama', url: 'https://s.jpg' },
        { id: 'abcAAA', title: 'Goku', url: 'https://g.jpg' },
      ], 
      isLoading: false 
    });

    render( <GifGrid category={category} /> );

    const images = screen.getAllByRole('img');
    const pTitles = screen.getAllByRole('paragraph');
    expect(images.length).toBe(2);
    expect(pTitles.length).toBe(2);
  });
});