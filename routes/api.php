<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\UserResource;
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

Route::post('/register', [App\Http\Controllers\Api\AuthController::class, 'createUser']);
Route::post('/login', [App\Http\Controllers\Api\AuthController::class, 'loginUser']);
Route::post('/logout', [App\Http\Controllers\Api\AuthController::class, 'logoutUser']);

Route::get('/posts', [App\Http\Controllers\Api\PostController::class, 'index']);
Route::post('/create', [App\Http\Controllers\Api\PostController::class, 'store']);
Route::post('/like', [App\Http\Controllers\Api\PostController::class, 'like']);
Route::post('/comment', [App\Http\Controllers\Api\PostController::class, 'comment']);
Route::post('/report', [App\Http\Controllers\Api\PostController::class, 'report']);
Route::get('/view/{id}', [App\Http\Controllers\Api\PostController::class, 'view']);
Route::get('/lists', [App\Http\Controllers\Api\PostController::class, 'lists']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return new UserResource($request->user());
});
