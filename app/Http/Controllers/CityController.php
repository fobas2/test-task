<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class CityController extends Controller
{
    public function city(Request $request)
    {
        $apiKeyWeather = env("API_WEATHER_KEY");
        $city = $request->input("nameCity");

        $client = new Client();
        $responseData = null;

        $res = $client->request('POST', 'http://api.weatherapi.com/v1/forecast.json', [
            'form_params' => [
                'key' => $apiKeyWeather,
                'q' => $city,
                'days' => 2
            ]
        ]);

        if ($res->getStatusCode() == 200) { // 200 OK
            $responseData = $res->getBody()->getContents();
        }

        $responseData = json_decode($responseData);

        return response()->json([
            "status" => true,
            'message' => 'Success',
            'data' => $responseData
        ],200);
    }
}
