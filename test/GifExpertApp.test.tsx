import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
describe('GifExpertApp.test', () => {
  test( 'Should render Title component', () => {
    render(<GifExpertApp/>);
    const title = screen.getByText('Gif Expert');
    expect(title.textContent).toBe('Gif Expert');
  });

  test( 'Should add new category', () => {
    const category = 'Dragon Ball';
    render(<GifExpertApp/>);

    const input = screen.getByRole('textbox');
    fireEvent.change( input, { target: { value: category } } );

    const form = screen.getByRole('form');
    fireEvent.submit( form );

    const newCategories = screen.getAllByText(category);
    expect(newCategories.length).toBe(1);
  });

  test( 'Should not add new category if it already exists', () => {
    const category = 'One Piece';
    render(<GifExpertApp/>);
    const input = screen.getByRole('textbox');
    fireEvent.change( input, { target: { value: category } } );
    const form = screen.getByRole('form');
    fireEvent.submit( form );

    const newCategories = screen.getAllByText(category);
    expect(newCategories.length).toBe(1);
  });
});