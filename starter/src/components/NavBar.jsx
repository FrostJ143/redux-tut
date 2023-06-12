import {CartIcon} from "../icons";
import {useSelector} from "react-redux";

const NavBar = () => {
    const {amount} = useSelector(state => state.cart);
    console.log(useSelector(store => console.log(store)));

    return (
        <nav>
            <div className="nav-center">
                <h3>reduct toolkit</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;