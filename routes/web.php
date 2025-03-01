<?php

use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

Route::get('/', [TodoController::class, 'index']);
Route::get('/dashboard', [TodoController::class, 'dashboard'])->name('dashboard');

Route::prefix('todo')->middleware('auth')->group(function () {
    Route::get('/all', [TodoController::class, 'all'])->name('todo.all');
    Route::post('/create', [TodoController::class, 'store'])->name('todo.create');
    Route::post('/update', [TodoController::class, 'update'])->name('todo.update');
    Route::get('/{task_id}/status/', [TodoController::class, 'changeStatus'])->name('todo.status');
    Route::get('/{task_id}/edit/', [TodoController::class, 'edit'])->name('todo.edit');
    Route::put('/todo/update/{id}', [TodoController::class, 'update'])->name('todo.update');
    Route::delete('/{task_id}/delete/', [TodoController::class, 'delete'])->name('todo.delete');
});

require __DIR__.'/auth.php';
