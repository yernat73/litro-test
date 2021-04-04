<?php

namespace Database\Seeders;

use App\Models\CarBrand;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $content = json_decode(file_get_contents(public_path("/cars_list.json")), true);

        $collection = collect($content)->groupBy('Make');

        foreach ($collection as $brand => $cars) {
            $carbrand = CarBrand::create([
                'name' => $brand
            ]);
            foreach (collect($cars)->unique('Model') as $car) {
                $carbrand->modes()->create(['name' => $car["Model"]]);
            }
        }
    }
}
