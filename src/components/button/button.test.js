import { render, screen } from "@testing-library/react";
import Button from './Button';

it('should show the button on screen with a text', () => {
    render(<Button btnBody='Example' />);
    expect(screen.getByText('Example')).toBeVisible();
})