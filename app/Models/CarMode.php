<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarMode extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'car_brand_id'
    ];

    public function brand(){
        return $this->belongsTo(CarBrand::class);
    }


}
