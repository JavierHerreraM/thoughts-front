import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Landing from './Landing';

describe('Landing page tests', () => {
    beforeEach(() => {
        render(<StaticRouter><Landing /></StaticRouter>);
    });
    
    it('it should show a title', () => {
        expect(screen.getByText('THOUGHTS')).toBeVisible();
    });

    it('it should show a descriptive text', () => {
        expect(screen.getByText(/^thoughts is a website.*/i))
    });

    it('it should contain a button', () => {
        expect(screen.getByRole('button')).toBeVisible();
    });

});