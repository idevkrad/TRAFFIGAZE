<?php

namespace App\Http\Controllers\Modules;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Dtr\Lists;
use App\Services\Dtr\Entry;
use App\Services\Dtr\Prints;

class DtrController extends Controller
{
    public function index(Request $request, Lists $lists){
        if($request->type == 'solo'){
            return $lists->solo($request); 
        }else{
            return inertia('Modules/Dtr/Index');
        }
    }

    public function show(Request $request, Entry $entry){
        if($request->dtr == 'entry'){
            return $entry->new($request); 
        }else if($request->dtr == 'board'){
            return inertia('Modules/Dtr/Show');
        }else if($request->dtr == 'lists'){
            return inertia('Modules/Dtr/Staff');
        }
    }
    
    public function edit($info, Prints $prints){ //print
        return $prints->set($info); 
    }
}
