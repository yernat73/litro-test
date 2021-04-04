<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCar extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'car_brand_id',
        'car_mode_id',
        'year',
        'number',
        'vin'
    ];



    public function user(){
        return $this->belongsTo(User::class);
    }

}
