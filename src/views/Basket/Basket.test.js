import '@testing-library/jest-dom'
import {useEffect, useState} from 'react'

import { render, screen, waitFor } from 'tests/custom-render'
import { useBasketContext, EBasketActions} from 'state/basket'
import { getProductData } from 'helpers/product';
import Basket from './Basket';

const data = getProductData();

const BasketTest = () => {
    const [, setView] = useState("shop");
    const { dispatch } = useBasketContext();

    useEffect(() => {
        dispatch({ type: EBasketActions.ADD_TO_BASKET, payload: data[0].id})
    }, [dispatch])

    return (
        <Basket productData={data} setView={setView} />
    )
}

describe('Basket view', () => {
    it('does not show the table for an empty basket', () => {
        render(<Basket />)
        expect(screen.queryByRole('table')).not.toBeInTheDocument();
    })

    it ('shows the basket table for a non-empty basket', async () => {
        render(<BasketTest />)
        await waitFor(() => {
            expect(screen.getByRole('table')).toBeInTheDocument();
        })
    })
})