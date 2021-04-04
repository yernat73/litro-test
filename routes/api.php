<?php

use App\Models\CarBrand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/car/brands', function (){
    return CarBrand::all();
});

Route::get('/car/modes/{carBrand}', function (CarBrand $carBrand) {
    return $carBrand->modes()->orderBy('name')->get();
});

Route::post('/car/validate', function(Request $request){
    $request->validate([
        'brand.id' => 'required|exists:car_brands,id',
        'mode.id' => 'required|exists:car_modes,id',
        'year' => 'required|date_format:Y',
        'number' => 'required|regex:/\d{3}\s\w{3}\s\d{2}/',
        'vin' => 'nullable|digits:8'
    ]);

    return Response::json('success', 200);

});

Route::post('/user/registration', function(Request $request){

});