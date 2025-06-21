import { render } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('GifItem.test', () => {
  const title = 'title';
  const url = 'https://example.com/image.gif';
  test( 'should match snapshot', () => {
    const { container } = render( <GifItem title={title} url={url} /> );
    expect( container ).toMatchSnapshot();
  });
});