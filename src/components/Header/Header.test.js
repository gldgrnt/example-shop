import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { render, screen } from 'tests/custom-render'
import Header from './Header';


describe('<Header />', () => {
    const shopButtonName = 'View the shop'
    const basketButtonName = 'View the basket'

    it('displays correctly', () => {
        const setView = jest.fn()
        render(<Header view="shop" setView={setView} />)
        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: shopButtonName})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: basketButtonName})).toBeInTheDocument();
    })

    it('has shop button disabled by default', () => {
        const setView = jest.fn()
        render(<Header view="shop" setView={setView} />)
        expect(screen.getByRole('button', {name: shopButtonName})).toBeDisabled();
        expect(screen.getByRole('button', {name: basketButtonName})).not.toBeDisabled();
    })

    it('toggles the basket button correctly', async () => {
        const setView = jest.fn()
        render(<Header view="shop" setView={setView} />)
        userEvent.click(screen.getByRole('button', {name: basketButtonName}))
        expect(setView).toHaveBeenCalledTimes(1);
        expect(setView).toHaveBeenCalledWith('basket');
    })
})