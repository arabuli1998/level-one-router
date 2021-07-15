import React,{createContext,useState} from 'react'
export const DataContext = createContext();
export const Dataprovider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Black denim jacket",
            "images": [
                "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
                "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
            ],
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
            "price": "$99.99",
            "model": "Shirt 5407X",
            "color": "black",
            "delivery":"usa",
        },
        {
            "_id": "2",
            "title": "jumper",
            "images": [
                "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
                "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
            ],
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
            "price": "$ 17.99",
            "model": "Shirt 5407X",
            "color": "black",
            "delivery":"usa",
        },
        {
            "_id": "3",
            "title": "Red hoodie",
            "images": [
                "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
                "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
            ],
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
            "price": "$35.99",
            "model": "Shirt 5407X",
            "color": "red",
            "delivery":"usa",
        },
        {
            "_id": "4",
            "title": "Red hoodie",
            "images": [
                "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
                "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
            ],
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
            "price": "$35.99",
            "model": "Shirt 5407X",
            "color": "red",
            "delivery":"usa",
        },
        
    ])
    return (
        <DataContext.Provider value={[products, setProducts]}>
            {props.children}
        </DataContext.Provider>
    )
}
