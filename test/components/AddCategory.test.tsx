import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';
describe('AddCategory.test', () => {
  test( 'Should change input value', () => {
    render(<AddCategory onNewCategory={()=>{ console.log('test') }} />);
    const input = screen.getByRole('textbox');
    const valueText = 'test-value';
    fireEvent.change( input, { target: { value: valueText } } );
    expect(input.getAttribute('value')).toBe(valueText);
  });

  test( 'Should call onNewCategory when input has value', () => {
    const valueText = 'test-value';
    const onNewCategory = jest.fn();
    
    render(<AddCategory onNewCategory={ onNewCategory } />);
    
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.change( input, { target: { value: valueText } } );
    fireEvent.submit( form );

    expect(input.getAttribute('value')).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(valueText);
  });

  test( 'Should not call onNewCategory when input has no value', () => {    
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory } />);

    const form = screen.getByRole('form');
    fireEvent.submit( form );
    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});