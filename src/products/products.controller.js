const { response } = require("express");
const uuid = require("uuid");

const Products = require("../models/products.models");

const getAllProducts = () =>{
    const data = Products.findAll();
    return data;
}
    // getAllProducts()
    //     .then((response)=>console.log(response))
    //     .catch((err)=> console.log(err))


const createProducts = async (data)=>{
    const newProducts = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable,
    });
    return newProducts;
};
    // createProducts({
    //     name: 'Iphone',
    //     category: 'Phone',
    //     price: 1000,  
    // })
    //     .then(response=>console.log(response))
    //     .catch(err => console.log(err))

const getProductsByid = async (id) => {
    const data = await Products.findOne({
        where : {
            id,
        },
    });
    return data
};
    // getProductsByid('e6eeba06-e8f7-4b44-89d5-7c9302b6f504')
    //     .then((response)=>console.log(response))
    //     .catch((err)=>console.log(err))

    const updateProducts = async (id,data)=>{
        const response = await Products.update(data, {
            where :{
                id: id,
                category: 'Electronic'
            },
        });
        return response
    }

    module.exports = {
        getAllProducts,
        getProductsByid,
        createProducts
    }