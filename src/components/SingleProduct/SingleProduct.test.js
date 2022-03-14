import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { render, screen, waitFor } from 'tests/custom-render'
import { BasketContext} from 'state/basket'
import { formatPrice, getProductData } from 'helpers/product';
import SingleProduct from './SingleProduct';

const products = getProductData();
const singleProduct = products[0];

const SingleProductTest = () => {
    return (
        <>
            <SingleProduct product={singleProduct} />
            <BasketContext.Consumer>
                {(value) => (
                    value?.state?.map(p => (
                        <div key={p.id}>
                            <p>id: {p.id}</p>
                            <p>quantity: {p.quantity}</p>
                        </div>
                    )
                ))}
            </BasketContext.Consumer>
        </>
    )
}

describe("<SingleProduct />", () => {
    it('renders correctly', () => {
        render(<SingleProduct product={singleProduct} />)
        expect(screen.getByRole('article')).toBeInTheDocument();
        expect(screen.getByRole('heading', {level: 2})).toHaveTextContent(singleProduct.name)
        expect(screen.getByText(`Price: ${formatPrice(singleProduct.unitPrice)}`)).toBeInTheDocument();
        expect(screen.getByText(singleProduct.discountString)).toBeInTheDocument();
        expect(screen.getByText('Add to basket')).toBeInTheDocument();
    })

    describe('when clicking the add button', () => {
        it('adds the product to an empty basket', async () => {
            render(<SingleProductTest />)
            userEvent.click(screen.getByRole('button'))
            await waitFor(() => {
                expect(screen.getByText(`id: ${singleProduct.id}`)).toBeInTheDocument();
            })
        })

        it ('increments the quantity of an existing product in the basket', async () => {
            render(<SingleProductTest />)
            const repeat = 2;
            for (let i = 0; i < repeat; i++) {
                userEvent.click(screen.getByRole('button'))
            }
            await waitFor(() => {
                expect(screen.getByText(`quantity: ${repeat}`)).toBeInTheDocument();
            })
        })
    })
})