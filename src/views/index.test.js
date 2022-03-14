import '@testing-library/jest-dom'
import { render, screen } from 'tests/custom-render'
import App from './index';

describe("<App />", () => {
    it('renders correctly', () => {
        render(<App />)
        expect(screen.getByTestId('app-main')).toBeInTheDocument();
    })

    it('shows the shop page by default', () => {
        render(<App />);
        expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Shop');
    })
})