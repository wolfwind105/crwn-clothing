import Button from '../button/button.component';

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
            <Button>結帳</Button>
        </div>
    );
};

export default CartDropdown;