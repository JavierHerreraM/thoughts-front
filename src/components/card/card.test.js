import { getByText, render, screen  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {StaticRouter} from 'react-router-dom';
import Card from './Card';

describe('Card component tests', () => {
    beforeEach(() => {
        render(<StaticRouter><Card title='Title example' body='Some long text' /></StaticRouter>);
    });

    it('should be display a title and a text', () => {
        expect(screen.getByText('Title example')).toBeVisible();
        expect(screen.getByText('Some long text')).toBeVisible();
    })

    it('should show the edit icon on hover', () => {
        userEvent.hover(screen.getByText('Title example'));
        expect(screen.getByRole('img')).toBeVisible();
    });
});