<?php

namespace App\Services\Document;

use App\Models\Document;
use App\Models\DocumentAttachment;
use App\Models\ListKeyword;
use App\Http\Resources\DtrResource;

class Store {

    public function data($request){
        $code = $this->code($request->is_incoming); 
        $keywords = json_decode($request->keywords,true);
        $data = Document::create(array_merge($request->all(), ['keywords' => $keywords,'route_slip' => $code, 'encoded_by' => \Auth::user()->id]));
        $this->fileUpload($request,$data->id,$code);
        $data = Document::findOrFail($data->id);
        return $data;
    }

    public function code($status) 
    {
        $type = 'ORD';
        $year = date('Y');
        $month = date('m');
        
        switch($status){
            case 0:
                $word = "OUT";
            break;
            case 1:
                $word = "IN";
            break;
        }
        $count = Document::where('is_incoming',$status)->count();
		return $routingslip = $year."-".$word.''.$month."-".$type."-".str_pad(($count+1), 4, '0', STR_PAD_LEFT);  
    }

    public function fileUpload($request,$id,$code){
        if($request->hasFile('files'))
        {
            $files = $request->file('files');   
            foreach ($files as $key=>$file) {
                if($key == 0){
                    $file_name = $code.'.'.$file->getClientOriginalExtension();
                }else{
                    $file_name = $code.'-'.$key.'.'.$file->getClientOriginalExtension();
                }
                $file_path = $file->storeAs('uploads/'.$code, $file_name, 'public');

                $data = new DocumentAttachment;
                $data->document_id = $id;
                $data->name = pathinfo($file_name, PATHINFO_FILENAME);
                $data->path = $file_path;
                $data->save();
            }
            return $data;
        }
    }
    
}