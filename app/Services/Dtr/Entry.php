<?php

namespace App\Services\Dtr;

use App\Models\User;
use App\Models\Dtr;
use Carbon\Carbon;
use App\Http\Resources\DtrResource;
use App\Http\Resources\Dtr2Resource;

class Entry {

    public function new($request) {
        $data = User::with('profile')->with('employee')->where('is_active',1)->where('username',$request->id)->first();
        $group = $data->groups->where('type','Schedule')->first();
        $schedule = $group['name']; $tardiness = 0; $undertime = 0; $is_absent = false;
        
        if($data){
            $date = date_format(date_create("$request->date"),"Y-m-d");
            $type = $request->type;
            $dtr = Dtr::whereDate('date',$date)->where('user_id',$data->id)->first();
            $minutes = $this->check($schedule,$request->time,$type);
            ($type == 'Time In (am)' || $type == 'Time In (pm)') ? $tardiness = $minutes : $undertime = $minutes;
            $info = [
                'ip' => \Request::ip(), 
                'pcname' => gethostname(),
                'browser' => $request->header('User-Agent'),
                'time' => $request->time,
                'is_updated' => false,
                'minutes' => $minutes
            ];

            if($dtr){
                switch($type){
                    case 'Time In (am)': 
                        if(!empty(json_decode($dtr->am_in_at))){
                            return ['status' => 'duplicate','name' => $data->profile->firstname.' '.$data->profile->lastname];
                        }else{
                            $dtr->am_out_at = json_encode($info);
                            $dtr->tardiness = $dtr->tardiness + $minutes;
                            $dtr->save();
                            return new DtrResource($data);
                        }
                    break;
                    case 'Time Out (am)': 
                        if(empty(json_decode($dtr->am_out_at))){
                            $dtr->am_out_at = json_encode($info);
                            $dtr->undertime = $dtr->undertime + $minutes;
                            $dtr->save();
                            return new DtrResource($data);
                        }else{
                            return ['status' => 'duplicate','name' => $data->profile->firstname.' '.$data->profile->lastname];
                        }
                    break;
                    case 'Time In (pm)': 
                        if(empty(json_decode($dtr->am_out_at)) && !empty(json_decode($dtr->am_in_at))){
                            return ['status' => 'no timeout','name' => $data->profile->firstname.' '.$data->profile->lastname];
                        }else if(!empty(json_decode($dtr->pm_in_at))){
                            return ['status' => 'duplicate','name' => $data->profile->firstname.' '.$data->profile->lastname];
                        }else{
                            $dtr->pm_in_at = json_encode($info);
                            $dtr->tardiness = $dtr->tardiness + $minutes;
                            $dtr->save();
                            return new DtrResource($data);
                        }
                    break;
                    case 'Time Out (pm)': 
                        if(!empty(json_decode($dtr->pm_out_at))){
                            return ['status' => 'duplicate','name' => $data->profile->firstname.' '.$data->profile->lastname];
                        }else{
                            if($schedule != 'C'){
                                if(!empty(json_decode($dtr->am_in_at))){
                                    $d = json_decode($dtr->am_in_at);
                                    $dtr->tardiness = $dtr->tardiness - $d->minutes;
                                    $minutes = $this->flexitime($dtr->am_in_at,$request->time);
                                    $info['minutes'] = $minutes;
                                }
                            }

                            $dtr->pm_out_at = json_encode($info);
                            $dtr->undertime = $dtr->undertime + $minutes;
                            $dtr->is_completed = 1;
                            $dtr->save();
                            return new DtrResource($data);
                        }
                    break;
                }

            }else{

                if($type == 'Time In (pm)'){
                    $is_absent = true;
                    $tardiness = ($schedule == 'C') ? 240 : 270;
                    $absent = [
                        'type' => 'am',
                        'minutes' => $tardiness
                    ];
                    $remarks = [
                        $absent
                    ];
                }

                $group = [];
                $dtr = new Dtr;
                $dtr->date = now();
                $dtr->am_in_at = ($type == 'Time In (am)') ? json_encode($info) : json_encode([]);
                $dtr->am_out_at = ($type == 'Time Out (am)') ? json_encode($info) : json_encode([]);
                $dtr->pm_in_at = ($type == 'Time In (pm)') ? json_encode($info) : json_encode([]);
                $dtr->pm_out_at = ($type == 'Time Out (pm)') ? json_encode($info) : json_encode([]);
                ($is_absent) ? $dtr->remarks = json_encode($remarks) :  $dtr->remarks = json_encode([]);
                $dtr->tardiness = $tardiness;
                $dtr->undertime = $undertime;
                $dtr->user_id = $data->id;
                $dtr->save();
            }
        
            return new DtrResource($data);
        }else{ 
            return [
                'data' => null,
            ];
        }
    }

    private function check($schedule,$time,$type){
        switch($type){
            case 'Time In (am)': 
                $fixedtime = ($schedule == 'C') ? '08:00:00' : '07:30:00';
                if(strtotime($time) > strtotime($fixedtime)){
                    return $this->total($time,$fixedtime);
                }else{
                    return 0;
                }
            break;
            case 'Time Out (am)': 
                $fixedtime = '12:00:00';
                if(strtotime($time) < strtotime($fixedtime)){
                    return $this->total($time,$fixedtime);
                }else{
                    return 0;
                }
            break;
            case 'Time In (pm)': 
                $fixedtime = '13:00:00';
                if(strtotime($time) > strtotime($fixedtime)){
                    return $this->total($time,$fixedtime);
                }else{
                    return 0;
                }
            break;
            case 'Time Out (pm)': 
                $fixedtime = ($schedule == 'C') ? '17:00:00' : '18:30:00';
                if(strtotime($time) < strtotime($fixedtime)){
                    return $this->total($time,$fixedtime);
                }else{
                    return 0;
                }
            break;
        }
    }

    private function total($time,$fixedtime){
        $startTime = Carbon::parse(date('H:i',strtotime($time)));
        $finishTime = Carbon::parse(strtotime($fixedtime));

        return $finishTime->diffInMinutes($startTime);
    }

    public function flexitime($time,$newtime){
        $fixedtime = '07:30:00';
        $data = json_decode($time); 
        if(strtotime($data->time) > strtotime('07:30:00') && strtotime($data->time) < strtotime('08:00:00')){
            $timeout = $this->total($data->time,$fixedtime);
            $newDate = date('H:i:s', strtotime('18:30:00'. ' +'.$timeout.' minutes'));
           
            if($newtime < $newDate){
                return $this->total($newtime,$newDate);
            }else{
                return 0;
            }
        }else{
            return false;
        }
    }

}