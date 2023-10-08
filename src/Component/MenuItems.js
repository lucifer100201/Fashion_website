const MenuItems = [
        {
            id: "home",
            name: "HOME",
            url: "/",
            cName: "Nav-links",
            type:"link"
        },

        {
            id: "about",
            name: "ABOUT",
            url: "/about",
            cName: "Nav-links",
            type:"link"
        },

        {
            id: "product",
            name: "OUR PRODUCTS",
            url: "/products",
            child: [
                {
                    child_pName: "MEN'S CLOTHING",
                    id: 'p1',
                    sub_url:'/menClothing',
                    sub_cName: "sub_product"
                },
                {
                    child_pName: "WOMEN'S CLOTHING",
                    id: 'p2',
                    sub_url:'/womenClothing',
                    sub_cName: "sub_product"

                },
                {
                    child_pName: "JWELLERY",
                    id: 'p3',
                    sub_url:'/jwellery',
                    sub_cName: "sub_product"
                },
                {
                    child_pName: "ELECTRONICS",
                    id: 'p4',
                    sub_url:'/electronics',
                    sub_cName: "sub_product"
                },
            ]
        },
        {
            id: "contact",
            name: "CONTACT US",
            url: "/contact",
            cName: "Nav-links",
            type:"link"
        }


    ];

    export default MenuItems;