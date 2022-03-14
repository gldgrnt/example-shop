// Quantity increases and decreases
// Delete removes the item

import '@testing-library/jest-dom'

import { render, screen} from 'tests/custom-render'
import { getProductData } from 'helpers/product';
import BasketTable from './BasketTable';

const data = getProductData();
const rows = data.map(product => ({...product, quantity: 2}));

describe('<BasketTable />', () => {
    it('renders correctly', () => {
        render(<BasketTable rows={rows} />)
        expect(screen.getByRole('table')).toBeInTheDocument();
        expect(screen.getByLabelText('Your basket')).toBeInTheDocument();
        expect(screen.getByText('Item')).toBeInTheDocument();
        expect(screen.getByText('Quantity')).toBeInTheDocument();
        expect(screen.getByText('Cost')).toBeInTheDocument();
        expect(screen.getByText('Discount')).toBeInTheDocument();
        expect(screen.getByText('Total Cost')).toBeInTheDocument();
    })
})