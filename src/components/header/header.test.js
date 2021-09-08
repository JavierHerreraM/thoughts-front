import { render, screen  } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { StaticRouter } from 'react-router-dom';
import Header from './Header';

describe('Header of the page tests', () => {

    beforeEach(() => {
        render(<StaticRouter><Header /></StaticRouter>);
    });

    it('should show the header on the screen', () => {
        expect(screen.getByRole('banner')).toBeVisible();
    });

    it('should toggle the navigation when the menu button is clicked', () => {
        userEvent.click(screen.getByRole('button'));
        expect(screen.getByRole('navigation')).toHaveClass('open-navigation');

        userEvent.click(screen.getByRole('button'));
        expect(screen.getByRole('navigation')).not.toHaveClass('open-navigation');
    });

    it('should close the navigation if one menu option is clicked', () => {
        userEvent.click(screen.getByRole('button'));
        userEvent.click(screen.getByText(/home/i));
        expect(screen.getByRole('navigation')).not.toHaveClass('open-navigation');
    });

});