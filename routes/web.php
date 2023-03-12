<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {return '';});

Route::middleware(['auth'])->group(function () {
    Route::get('/home', function () {  return inertia('Home/Index'); });
    Route::resource('users', App\Http\Controllers\UserController::class);
    // Route::resource('employees', App\Http\Controllers\UserController::class);
    // Route::post('/employee/import', [App\Http\Controllers\ImportController::class, 'index']);
    // Route::post('/employee/store', [App\Http\Controllers\ImportController::class, 'store']);
});

require __DIR__.'/auth.php';