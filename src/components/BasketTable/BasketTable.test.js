import '@testing-library/jest-dom'

import { render, screen } from 'tests/custom-render'
import { getProductData } from 'helpers/product';
import BasketTable from './BasketTable';

const data = getProductData();
const rows = data.map(product => ({...product, quantity: 2}));

describe('<BasketTable />', () => {
    it('renders the header correctly', () => {
        render(<BasketTable rows={rows} />)
        expect(screen.getByRole('table')).toBeInTheDocument();
        expect(screen.getByLabelText('Your basket')).toBeInTheDocument();
        expect(screen.getByText('Item')).toBeInTheDocument();
        expect(screen.getByText('Quantity')).toBeInTheDocument();
        expect(screen.getByText('Cost')).toBeInTheDocument();
        expect(screen.getByText('Discount')).toBeInTheDocument();
        expect(screen.getByText('Total Cost')).toBeInTheDocument();
    })

    it('renders the footer correctly', () => {
        render(<BasketTable rows={rows} />)
        expect(screen.getByText('Total to pay:')).toBeInTheDocument();
        expect(screen.getByTestId('basket-table-total')).toBeInTheDocument();
    })

    // describe('when pressing the delete button', () => {
    //     it('removes the row from the table' () => {})
    // })

    // describe('when pressing the decrement button', () => {
    //     it('decreases the quantity by 1' () => {})
    // })
   
    // describe('when pressing the increment button', () => {
    //     it('increases the quantity by 1' () => {})
    // })
})