import { render, screen } from "@testing-library/react";
import { StaticRouter } from 'react-router-dom';
import Button from './Button';

it('should show the button on screen with a text', () => {
    render(<StaticRouter><Button btnBody='Example' /></StaticRouter>);
    expect(screen.getByText('Example')).toBeVisible();
})