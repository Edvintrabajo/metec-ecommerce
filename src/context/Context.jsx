import { createContext, useState } from "react";

export const Context = createContext()

export function ContextProvider(props) {
    // AUTHENTICATION SIGN UP
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    // LIST OF PRODUCTS
    const [products, setProducts] = useState([])

    // ADD PRODUCT
     // COL 1
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    
    // COL 2
    const [description, setDescription] = useState('')
    const [ratings, setRatings] = useState('')
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    
    // UPLOAD IMAGE
    const [imageUpload, setImageUpload] = useState(null)
    const [imageRefName, setImageRefName] = useState(null)
    const [url, setUrl] = useState('')
    
    // EDIT PRODUCT
    const [productIdEdit, setProductIdEdit] = useState('')
    
    // STATES & FUNCTIONS
    const states = {
        email, setEmail,
        password, setPassword,
        products, setProducts,
        name, setName,
        brand, setBrand,
        price, setPrice,
        stock, setStock,
        description, setDescription,
        ratings, setRatings,
        category, setCategory,
        type, setType,
        productIdEdit, setProductIdEdit,
        imageUpload, setImageUpload,
        imageRefName, setImageRefName,
        url, setUrl,
    } 

    return (
        <Context.Provider value={states}>
            {props.children} 
        </Context.Provider>
    )
}