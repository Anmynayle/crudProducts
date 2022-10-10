const productsController = require("./products.controller")

const getAllProducts = (req, res) =>{
    productsController
    .getAllProducts()
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(400).json({message: err.message});
    });
};

const postProducts = (req, res)=>{
    const data = req.body;
    if(data.name && data.category && data.price){
    productsController.createProducts(data)
        .then(response=>{
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
    }else{
        res.status(400).json({message:'Missing Data'})
    }
}

const getProductsByid = (req, res)=>{
    const id = req.params.id;
    productsController.getProductsByid(id)
        .then(data=>{
            if(data){
                res.status(200).json(data)
            }else{
                res.status(400).json({message:'Invalid ID'})
            }
        })
        .catch(err=>{
            res.status(404).json({message: err.message})
        })
}
module.exports ={
    getAllProducts,
    getProductsByid,
    postProducts
}