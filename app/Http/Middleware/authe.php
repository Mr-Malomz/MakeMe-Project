<?php

namespace App\Http\Middleware;

use Closure;

class authe
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //if ()
        return $next($request);
    }
}
