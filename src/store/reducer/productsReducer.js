const ADD_PRODUCT = 'ADD_PRODUCT';
const DEL_PRODUCT = 'DEL_PRODUCT';

const PRODUCTS_RESET_FILTER = 'PRODUCTS_RESET_FILTER'
const PRODUCTS_TITLE_FILTER = 'PRODUCTS_TITLE_FILTER';
const PRODUCTS_SORT_PRICE = 'PRODUCTS_SORT_PRICE'


const defaultState =[
    {id: 1, title: 'Велосипед', price: 45000, discount: 11},
    {id: 2, title: 'Самокат', price: 40000, discount: 0},
    {id: 3, title: 'Лыжи', price: 45000 , discount: 11},
    {id: 4, title: 'Сноуборд', price: 40000, discount: 0}
];
const products = localStorage.getItem('products') 
? JSON.parse(localStorage.getItem('products')) 
: defaultState;

export const deleteProduct = (id) => {
    return {type: DEL_PRODUCT, payload: id}
};

export const addProduct = (title, price, discount) => {
    return {
        type: ADD_PRODUCT,
        payload: {id: Date.now(), title, price, discount}
    }
};

export const searchProductsFilterAction = (payload) => ({type: PRODUCTS_TITLE_FILTER, payload});
export const resetProductsFilterAction = () => ({type: PRODUCTS_RESET_FILTER});

export const sortProductsFilterAction = (payload) => ({type: PRODUCTS_SORT_PRICE, payload});

export const productsReducer = (state = products, action) => {
    if(action.type === ADD_PRODUCT){
        const newProduct = [...state, action.payload];
        localStorage.setItem('products', JSON.stringify(newProduct));
        return newProduct;
    } else if(action.type === DEL_PRODUCT){
        const productsNew = state.filter((item) => item.id !== action.payload);
        localStorage.setItem('products', JSON.stringify(productsNew));
        return productsNew
    }else if(action.type === PRODUCTS_TITLE_FILTER){
        const prodFiltr = state.map(item => ({
            ...item,
            show: item.title.toLowerCase().startsWith(action.payload.toLowerCase())
        }));   
        return  [...prodFiltr]

        // return state.filter(({title})=> title.toLowerCase().startsWith(action.payload))

    }else if(action.type === PRODUCTS_RESET_FILTER){
        return state.map(item => ({...item, show: true}))
    }else if(action.type === PRODUCTS_SORT_PRICE){
        // const www = state.map(item => ({...item, show: true}))
        if (action.payload === 1) {
            const sorted = state.sort((a, b) => a.price - b.price)
            console.log(sorted);
            return [...sorted]
        }
        if (action.payload === 2) {
            const sorted = state.sort((a, b) => b.price - a.price )
            console.log(sorted);
            return [...sorted]
     }
    
}
return state
}


