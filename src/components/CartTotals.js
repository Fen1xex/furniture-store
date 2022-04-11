import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const CartTotals = () => {
  const { total_amount, shipping_fee } = useSelector((state) => state.cart)

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{total_amount / 100}$</span>
          </h5>
          <p>
            shipping fee : <span>{shipping_fee / 100}$</span>
          </p>
          <hr />
          <h4>
            order total : <span>{(total_amount + shipping_fee) / 100}$</span>
          </h4>
        </article>

        <Link to='/checkout' className='btn'>
          proceed to checkout
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--darkGrey);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p,
  h5 {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border: 2px solid var(--darkGrey);
    border-radius: 10px;
    width: 100%;
    margin-top: 1rem;
    font-weight: 700;
    color: var(--black);
  }
  .btn:hover {
    transition: var(--transition);
    background: lightgreen;
  }
`

export default CartTotals
