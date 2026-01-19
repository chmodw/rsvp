<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'app');

// Catch-all for SPA routes (so /rsvp works on refresh)
Route::view('/{any}', 'app')->where('any', '^(?!api).*$');
