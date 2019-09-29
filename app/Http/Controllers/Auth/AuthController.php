<?php

namespace App\Http\Controllers\Auth;
use DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function createJobcard(Request $request)
    {
        $card = DB::insert('call spCreateJobCard(?, ?, ?, ?, ?, ?, ?)', [
            $request->Cid,
            $request->Eid,
            $request->Desc,
            $request->Super,
            $request->price,
            $request->Pid,
            $request->comment
        ]);
        return response()->json($card);
        
    }
}