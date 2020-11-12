import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id":"m1",
             "title": 'Nike Air Max Plus',
             "images": [
                'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/erzfadfpnzgkxt0gn2ya/air-max-plus-shoe-F5SqNr.jpg',
                'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/xu5kugo19nr5bwc511ek/air-max-plus-shoe-F5SqNr.jpg',
                 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/xmgcmvnwzp68ozqtkao0/air-max-plus-shoe-F5SqNr.jpg',
                 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/xmgcmvnwzp68ozqtkao0/air-max-plus-shoe-F5SqNr.jpg',
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["white", "black"],
             "sizes": ["UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
             "price": 139.95,
             "count": 1
         },
         {
             "_id": "m2",
             "title": 'Nike Air Max Plus III',
             "images": [
                 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a0d65101-3d1c-4312-b2a6-cccd45e4e278/air-max-plus-iii-shoe-jNDGRs.jpg',
                 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/64e549c4-734a-400d-a8ad-8baafd025bbf/air-max-plus-iii-shoe-jNDGRs.jpg',
                 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b7ee7dcd-760b-498a-bc8c-eaccc23cf941/air-max-plus-iii-shoe-jNDGRs.jpg',
                 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/142d241d-8d28-485d-9705-4a1513db368f/air-max-plus-iii-shoe-jNDGRs.jpg',
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
             "price": 149.95,
             "count": 1

         },
         {
             "_id": "m3",
             "title": 'Nike Air Max Vistascape',
             "images": [
                 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/095cc1cb-907b-43e3-a9a9-79095a1ba04a/air-max-vistascape-shoe-CHnlWM.jpg',
                 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f5284250-06a3-4ff9-87d7-8192dde780ad/air-max-vistascape-shoe-CHnlWM.jpg',
                 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2508c845-f047-4cf4-9ff3-cd01efc5be1a/air-max-vistascape-shoe-CHnlWM.jpg',
                 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3fec99a4-4b4e-4e07-baee-33c53734696e/air-max-vistascape-shoe-CHnlWM.jpg',
             
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                 "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                 "colors": ["red", "black", "teal"],
                 "sizes": ["UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
                 "price": 149.95,
                 "count": 1

         },
         {
             "_id": "m4",
             "title": "Nike Air VaporMax 2020 Flyknit",
             "images": [
                 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ced2a1c0-17f9-4377-a92d-7c6d4348c05a/air-vapormax-2020-flyknit-shoe-FNm1jd.jpg',
                'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a32d156a-f534-4fb4-b28e-3c9cac99ed4c/air-vapormax-2020-flyknit-shoe-FNm1jd.jpg',
               'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4c96e51b-38e2-4af5-8e6b-1fdbc1c790de/air-vapormax-2020-flyknit-shoe-FNm1jd.jpg',
                 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5e795b9f-a783-4dfb-a86b-c6a576d5c66e/air-vapormax-2020-flyknit-shoe-FNm1jd.jpg',
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
             "price": 189.95,
             "count": 1

         },
         {
             "_id": "m5",
             "title": "Nike Phantom GT Elite Dynamic",
             "images": [
                'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ec857395-1f82-40b5-93be-83b7c0eeb283/phantom-gt-elite-dynamic-fit-fg-football-boot-7qDJ5m.jpg',
           'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a8462c47-e7b8-447a-a6a5-7e56e9f72ec2/phantom-gt-elite-dynamic-fit-fg-football-boot-7qDJ5m.jpg',
               'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/195f1105-4aba-459d-8b4d-f8cbc6ae189c/phantom-gt-elite-dynamic-fit-fg-football-boot-7qDJ5m.jpg',
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d8bd8cf0-cd62-4f32-97e0-3dd652add6ef/phantom-gt-elite-dynamic-fit-fg-football-boot-7qDJ5m.jpg',
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
             "price": 105,
             "count": 1

         },
         {
             "_id": "m6",
             "title": "Air Max 200 20",
             "images": [
                 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-4292e296-4a4a-45a2-a064-70b08a9d4447/air-max-200-20-shoe-l4tG6c.jpg',
                 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-b9c820d1-f93e-456f-8e3e-2bb63603a56d/air-max-200-20-shoe-l4tG6c.jpg',
                 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-82798818-3c8c-43c9-9a39-e9f3a20de81f/air-max-200-20-shoe-l4tG6c.jpg',
                'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-de18e258-4df2-48d2-b0d2-d9fc7877f7c2/air-max-200-20-shoe-l4tG6c.jpg',
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
             "price": 60.99,
             "count": 1

         }
    ])

    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has been added to cart.")
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }


    return (
        <DataContext.Provider value={value} >
            {props.children}
        </DataContext.Provider>
    )
}