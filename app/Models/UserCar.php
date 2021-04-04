<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCar extends Model
{
    use HasFactory;

    protected $fillable = [
        'car_brand_id',
        'car_mode_id',
        'year',
        'number',
        'vin'
    ];
}
