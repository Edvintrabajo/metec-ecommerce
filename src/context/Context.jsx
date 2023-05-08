import { createContext, useState } from "react";
import { getOrdersCount, getTotalOrders } from "../controllers/orders/orders.functions";

export const Context = createContext()

export function ContextProvider(props) {
    // USER REGISTER & LOGIN
    const [userData, setUserData] = useState({})

    // USER IS AUTHORIZED
    const [isAuthtorized, setIsAuthtorized] = useState(false)
    
    // LIST OF PRODUCTS
    const [products, setProducts] = useState([])

    // CURRENT CATEGORY
    const [currentCategory, setCurrentCategory] = useState('Trending Top')

    // CURRENT PAGE
    const [currentPage, setCurrentPage] = useState(1)

    // TOTAL PAGE
    const [totalPage, setTotalPage] = useState(1)

    // ADD PRODUCT
    // Data Form Object 
    const [data, setData] = useState({})
    
    // UPLOAD IMAGE
    const [imageUpload, setImageUpload] = useState(null) // image file
    const [imageRefName, setImageRefName] = useState(null) // path to image in firebase storage
    const [url, setUrl] = useState('')
    
    // PRODUCT ID
    const [productIdEdit, setProductIdEdit] = useState('')

    // ORDERS & SET ORDERS
    const [orders, setOrders] = useState([])

    // COUNT ORDERS
    const [countOrders, setCountOrders] = useState(getOrdersCount())

    // TOTAL PRICE
    const [totalPrice, setTotalPrice] = useState(getTotalOrders())
    
    // STATES & FUNCTIONS
    const states = {
        userData, setUserData,
        products, setProducts,
        currentCategory, setCurrentCategory,
        currentPage, setCurrentPage,
        totalPage, setTotalPage,
        productIdEdit, setProductIdEdit,
        imageUpload, setImageUpload,
        imageRefName, setImageRefName,
        url, setUrl,
        data, setData,
        orders, setOrders,
        countOrders, setCountOrders,
        totalPrice, setTotalPrice,
        isAuthtorized, setIsAuthtorized,
    }

    return (
        <Context.Provider value={states}>
            {props.children} 
        </Context.Provider>
    )
}