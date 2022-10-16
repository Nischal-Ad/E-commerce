<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class AddCartController extends Controller
{
    // public function index()
    // {
    //     // session()->forget('cart');
    //     return view('add-to-cart');
    // }

    public function store(Request $request,$id)
    {
        $product = Product::find($id);

        $cart = session()->get('cart');
        $request->quantity = (int)$request->quantity;

        if(isset($cart[$id])){  
            $cart[$id] = [
                "id" => $product->id,
                "name" => $product->name,
                "category"=> $product->category,
                "price" => $product->price,
                "quantity" => $request->quantity + $cart[$id]['quantity'],
            ];
            session()->put('cart', $cart);
            return redirect('/cart');
        }

        $cart[$id] = [
            "id" => $product->id,
            "name" => $product->name,
            "category"=> $product->category,
            "quantity" => $request->quantity,
            "price" => $product->price
        ];

        session()->put('cart', $cart);

        return redirect('/cart');
    }

    public function update(Request $request,$id){
        dd($request);
    }

    public function destory($id){
        $cart = session()->get('cart');
        // Session::flush(); // removes all session data
        unset($cart[$id]);
        session()->forget('cart');// Removes a specific variable
        session()->put('cart', $cart);
        return back();
    }

    public function delete(){

        session()->forget('cart');

        return back();
    }

}
