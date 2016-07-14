<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

use App\Http\Requests;

class CategoryController extends Controller
{
    /**
     * Display all categories
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return Category::all();
    }

    /**
     *
     *
     * @param $categoryId
     * @return mixed
     */
    public function topics($categoryId)
    {
        return Category::findOrFail($categoryId)
            ->topics()
            ->orderBy('created_at', 'desc')
            ->get();
    }
}
