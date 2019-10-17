<?php

namespace App\Http\Middleware;

use Closure;

class signature
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
        if (! $request->hasValidSignature()) {
            // abort(401);
            return redirect('/fallback');
        }
        return $next($request);
    }
}
