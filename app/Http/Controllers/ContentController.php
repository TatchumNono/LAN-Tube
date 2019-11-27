<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Content;

class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
         $result = Content::all();
         return $result;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request,[
            'file' => 'mimes:jpg,png,jpeg,gif,mp4,mp3,mpeg,avi,3gp,zip,rar|required|max:2000000'
        ]);

        //the file rubish
        $file = $request -> file('file');
        //gets the folder where the file is going to be stored
        $destination_path = public_path().'/';
        //gets the extension of the file 
        $extension = $file->getClientOriginalExtension();
        //gets the name of the file 
        $files = $file -> getClientOriginalName();
        //makes the final name of the file with extension
        $fileName = $files;
        //moves the file to the public folder 
        $file -> move($destination_path,$fileName);
        //

        $content = new Content();
        $content->title = $request->title;
        $content->category = $request->category;
        $content->location = $fileName;
        $content->file = $extension;
        $content->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
