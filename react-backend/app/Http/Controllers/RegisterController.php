<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{


    public function store(Request $request)
    {
        $attributes = User::create(['name' => $request['name'], 'email' => $request['email'], 'password' => bcrypt($request['password']),
        'confirm_password' => bcrypt($request['confirm_password']),
        'address' => $request['address'], 'phoneno' => $request['phoneno'], ]);


        auth()->login($attributes);
        // return "user create successfully";
        return $attributes;
    }
}