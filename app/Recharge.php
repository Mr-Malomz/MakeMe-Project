<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recharge extends Model
{
    protected $table = 'recharges';
    public $primaryKey = 'id';
    public $fillable = ['name', 'user_id', 'tranType'];
}
