import {render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Canvas from './Canvas';

it('should show the canvas on screen', () => {
    render(<StaticRouter><Canvas /></StaticRouter>);
    expect(screen.getByRole('main')).toBeVisible();
});