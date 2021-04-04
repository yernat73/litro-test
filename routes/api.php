<?php

use App\Models\CarBrand;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

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


Route::get('/users', function(){
    return User::with('cars')->get();
});

Route::post('/user/registration', function(Request $request){
    $request->validate([
        'surname' => 'required|alpha|min:2',
        'name' => 'required|alpha|min:2',
        'email' => 'required|email|unique:users,email',
        'birth_date' => 'required|date',
        'iid' => 'nullable|digits:12',
        'city' => 'required|alpha',
        'password' => 'required|min:6|confirmed',

        'cars' => 'nullable|array',
        'cars.*.brand.id' => 'required|exists:car_brands,id',
        'cars.*.mode.id' => 'required|exists:car_modes,id',
        'cars.*.year' => 'required|date_format:Y',
        'cars.*.number' => 'required|regex:/\d{3}\s\w{3}\s\d{2}/',
        'cars.*.vin' => 'nullable|digits:8'

    ]);

    $data = $request-> all();

    $data["password"] = Hash::make($data["password"]);

    $user = User::create($data);

    foreach($data["cars"] as $car){
        $user->cars()->create([
            "car_brand_id" => $car["brand"]["id"],
            "car_mode_id" => $car["mode"]["id"],
            "year" => $car["year"],
            "number" => Str::upper(Str::remove(" ", $car["number"])),
            "vin" => $car["vin"]
        ]);
    }

    return Response::json('success', 200);
});