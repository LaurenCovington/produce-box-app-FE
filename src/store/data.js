// on mine, create offering batches to show to '/offerings' page!
// get rid of price!!! it's in cart.js, appContext.js, data.js, details.js, product.js
// on mine, create offering batches to show to '/offerings' page!

// how to get imgs to work?? img attr used in cart.js around line 53
    // putting a link like the first img in the <img src=...> means all foods in the cart have the same pic
    // unique pics must be saved to an imgs folder and ref'd here ...
// btw:count is how many you want; not total inventory
export const Data=[

    {
        id:1,
        img:'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
        name:'Organic Carrot Batch',
        total_inventory: 100,
        usda_organic: 'True',
        usage_time_limit: 1,
        side_effects: 'No side effects',
        contribution_date: '2021-08-14',
        expiration_date: '2021-08-21',
        bake_date: 'N/A',
        dried_date: 'N/A',
        make_date: 'N/A',
        dropoff_location: 'U-District Farmers Market',
        price:'100',
        details:'Harvested from the McDowell Family Farm in Washington State!',
        count:1,
        isInCart:false

    },

    {
        id:2,
        img:'https://images.unsplash.com/photo-1600398811198-f11d97598a46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        name:'Kale Bunch',
        total_inventory: 20,
        usda_organic: 'False',
        usage_time_limit: 1,
        side_effects: 'No side effects',
        contribution_date: '2021-08-14',
        expiration_date: '2021-08-21',
        bake_date: 'N/A',
        dried_date: 'N/A',
        make_date: 'N/A',
        dropoff_location: 'U-District Farmers Market',
        price:'12',
        details:'Harvested from the McDowell Family Farm in Washington State!',
        count:1,
        isInCart:false

    },

    {
        id:3,
        img:'https://images.unsplash.com/photo-1591589155370-38789a2c12aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        name:'Swiss Chard Bundles',
        total_inventory: 10,
        usda_organic: 'False',
        usage_time_limit: 1,
        side_effects: 'No side effects',
        contribution_date: '2021-08-14',
        expiration_date: '2021-08-21',
        bake_date: 'N/A',
        dried_date: 'N/A',
        make_date: 'N/A',
        dropoff_location: 'U-District Farmers Market',
        price:'65',
        details:'Harvested from the McDowell Family Farm in Washington State!',
        count:1,
        isInCart:false

    },

    {
        id:4,
        img:'https://images.unsplash.com/photo-1611048661702-7b55eed346b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        name:'Organic Cucumbers',
        total_inventory: 100,
        usda_organic: 'True',
        usage_time_limit: 1,
        side_effects: 'No side effects',
        contribution_date: '2021-08-14',
        expiration_date: '2021-08-21',
        bake_date: 'N/A',
        dried_date: 'N/A',
        make_date: 'N/A',
        dropoff_location: 'U-District Farmers Market',
        price:'13',
        details:'Harvested from the McDowell Family Farm in Washington State!',
        count:1,
        isInCart:false

    },

    {
        id:5,
        img:'https://images.unsplash.com/photo-1606585333304-a7fa1ca4376c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name:'Broccoli Heads',
        total_inventory: 100,
        usda_organic: 'False',
        usage_time_limit: 1,
        side_effects: 'No side effects',
        contribution_date: '2021-08-14',
        expiration_date: '2021-08-21',
        bake_date: 'N/A',
        dried_date: 'N/A',
        make_date: 'N/A',
        dropoff_location: 'U-District Farmers Market',
        price:'45',
        details:'Harvested from the McDowell Family Farm in Washington State!',
        count:1,
        isInCart:false

    },

    {
        id:6,
        img:'https://images.unsplash.com/photo-1611574474484-ced6cb70a2cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        name:'Organic Apples',
        total_inventory: 100,
        usda_organic: 'True',
        usage_time_limit: 1,
        side_effects: 'No side effects',
        contribution_date: '2021-08-14',
        expiration_date: '2021-08-21',
        bake_date: 'N/A',
        dried_date: 'N/A',
        make_date: 'N/A',
        dropoff_location: 'U-District Farmers Market',
        price:'67',
        details:'Harvested from the McDowell Family Farm in Washington State!',
        count:1,
        isInCart:false
    },

    {
        id:7,
        img:'https://images.unsplash.com/photo-1586266196850-8f11e16e2e55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        name:'Organic Strawberries - Crates',
        total_inventory: 100,
        usda_organic: 'True',
        usage_time_limit: 1,
        side_effects: 'No side effects',
        contribution_date: '2021-08-14',
        expiration_date: '2021-08-21',
        bake_date: 'N/A',
        dried_date: 'N/A',
        make_date: 'N/A',
        dropoff_location: 'U-District Farmers Market',
        price:'23',
        details:'Harvested from the McDowell Family Farm in Washington State!',
        count:1,
        isInCart:false
    },

    {
        id:8,
        img:'https://images.unsplash.com/photo-1627499946712-17b54149bbad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        name:'Nasturtium Bundles',
        total_inventory: 9,
        usda_organic: 'True',
        usage_time_limit: 1,
        side_effects: 'No side effects',
        contribution_date: '2021-08-14',
        expiration_date: '2021-08-21',
        bake_date: 'N/A',
        dried_date: 'N/A',
        make_date: 'N/A',
        dropoff_location: 'U-District Farmers Market',
        price:'15',
        details:'Harvested from the McDowell Family Farm in Washington State!',
        count:1,
        isInCart:false
    }
]
