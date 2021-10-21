const CART = require('../models/Cart.model');
const TOUR = require('../models/Tour.model')


exports.createCartAsync = async (body)=>{
    try{
        // let existCart = await Cart.findOneAndUpdate({_id:id},
        //     body,{
        //         new:true
        //     })
        // const cart;
        // if(existCart){
        
        //     //  cart = await CART.findOneAndUpdate(
        //     //     { _id: id },
        //     //     body,
        //     //     { new: true }
        //     // );
        
            // const discount = await TOUR.find({ });
            // existCart.tours.push(body.idProduct)
        //     existCart.save()
        // }
        // else{
        //     const cart = new CART(body);
        //     await cart.save();
        // // }
       
        // return {
        //     message: 'Successfully Add Tour to cart',
        //     success: true,
        //     data: cart
        // }

    }
    catch(e){
        return {
            message: 'An error occurred',
            success: false
        };

    }
}

