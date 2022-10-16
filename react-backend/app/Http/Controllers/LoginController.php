<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;

class LoginController extends Controller
{

    public function store(Request $request){   
  $user=User::where("email",request('email'))->first();

        if(!$user){
            return "user doesnot exist";
        }

        if(!$user||!Hash::check(request('password'),$user->password)){
            return ["error"=>true, "message"=>"username & password didn't matched"] ;
        }
        return ["user"=>$user, "authorized"=>true,  "message"=>"login successful"];
    }

    }

    

