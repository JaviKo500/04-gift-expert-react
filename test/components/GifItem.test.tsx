import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('GifItem.test', () => {
  const title = 'title';
  const url = 'https://example.com/image.gif';
  test( 'should match snapshot', () => {
    const { container } = render( <GifItem title={title} url={url} /> );
    expect( container ).toMatchSnapshot();
  });


  test( 'Should render with alt and uir image', () => {
    render( <GifItem title={title} url={url} /> );
    const image = screen.getByRole('img');
    expect(image.getAttribute('src')).toBe(url);
    expect(image.getAttribute('alt')).toBe(title);
  });

  test( 'Should render title in component', () => {
    render( <GifItem title={title} url={url} /> );
    const p = screen.getByRole('paragraph');
    expect(p.textContent).toBe(title);
  });
});