import { createContext, useState } from "react";
import { getOrdersCount, getTotalOrders } from "../controllers/orders/orders.functions";

export const Context = createContext()

export function ContextProvider(props) {
    // USER REGISTER & LOGIN
    const [userData, setUserData] = useState({})

    // USER IS AUTHORIZED
    const [isAuthtorized, setIsAuthtorized] = useState(false)

    // lOGGED
    const [logged, setLogged] = useState(false)
    
    // LIST OF PRODUCTS
    const [products, setProducts] = useState([])

    // CURRENT PRODUCTS
    const [currentTenProducts, setCurrentTenProducts] = useState([])

    // CURRENT CATEGORY
    const [currentCategory, setCurrentCategory] = useState('Trending Top')

    // CURRENT PAGE
    const [currentPage, setCurrentPage] = useState(1)

    // TOTAL PAGE
    const [totalPage, setTotalPage] = useState(1)

    // ORDERS & SET ORDERS
    const [orders, setOrders] = useState([])

    // COUNT ORDERS
    const [countOrders, setCountOrders] = useState(getOrdersCount())

    // TOTAL PRICE
    const [totalPrice, setTotalPrice] = useState(getTotalOrders())
    
    // STATES & FUNCTIONS
    const states = {
        userData, setUserData,
        isAuthtorized, setIsAuthtorized,
        logged, setLogged,
        products, setProducts,
        currentTenProducts, setCurrentTenProducts,
        currentCategory, setCurrentCategory,
        currentPage, setCurrentPage,
        totalPage, setTotalPage,
        orders, setOrders,
        countOrders, setCountOrders,
        totalPrice, setTotalPrice,
    }

    return (
        <Context.Provider value={states}>
            {props.children} 
        </Context.Provider>
    )
}