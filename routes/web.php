<?php

use App\Models\CarBrand;
use App\Models\CarMode;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/brands-seed', function () {
    $content = json_decode(file_get_contents(asset("/cars_list.json")), true);
    
    $collection = collect($content)->groupBy('Make');

    foreach($collection as $brand => $cars){
        $carbrand = CarBrand::create([
            'name' => $brand
        ]);
        foreach(collect($cars)->unique('Model') as $car){
            $carbrand->modes()->create(['name' => $car["Model"]]);
        }
    }

});
