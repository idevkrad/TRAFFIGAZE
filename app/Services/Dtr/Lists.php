<?php

namespace App\Services\Dtr;

use App\Models\User;
use App\Models\Dtr;
use App\Http\Resources\DtrResource;
use App\Http\Resources\Dtr2Resource;

class Lists {

    public function solo($request) {
        $today = date('Y-m-d', strtotime(now()));
        $month = $request->month+1;
        $year = $request->year;
        $keyword = $request->keyword;
        $absent = 0; $tardiness = 0; $undertime = 0;
        $array = [];
        $user_id = ($keyword != '') ? $this->findUser($keyword) : \Auth::user()->id;

        $start_time = strtotime("01-".$month."-".$year);
        $end_time = strtotime("+1 month", $start_time);

        $group = \Auth::user()->groups->where('type','Schedule')->first();
        $schedule = $group['name'];
        if($schedule == 'A'){$day_words = 'Friday';}else if($schedule == 'B'){$day_words = 'Monday';}else{$day_words = '';}

        for($i=$start_time; $i<$end_time; $i+=86400){
            $date = date('Y-m-d', $i);
            $day = date('l', $i);

            $data = Dtr::with('user.profile')->whereDate('date',$date)->where('user_id',$user_id)->first();
            if($day == 'Saturday' || $day == 'Sunday' || $day == $day_words){
                // $cto = Cto::where('user_id',$username)->where('status_id',[57,58])->whereDate('start', '<=', $date)->whereDate('end', '>=', $date)->first();
                $cto = false;
                if($cto){
                    $array[] =  [
                        'date' => date('Y-m-d', $i),
                        'text' => date('F d, Y', $i),
                        'day' => date('l', $i),
                        'data' => 'CTO',
                        'bg' => 'bg bg-info',
                        'is_with' => false
                    ];
                }else{
                    $array[] = [
                        'date' => date('Y-m-d', $i),
                        'text' => date('F d, Y', $i),
                        'day' => date('l', $i),
                        'data' => ($day == 'Monday' || $day == 'Friday') ? 'DAY OFF' :'NON-WORKING DAY',
                        'bg' => 'bg bg-secondary bg-soft',
                        'is_with' => false
                    ];
                }
            }else{
                $date = date('Y-m-d', $i);
                // $leave = Leave::where('user_id',$username)->where('status_id',57)->whereDate('start', '<=', $date)->whereDate('end', '>=', $date)->first();
                $leave = false;
                if($leave){
                    $array[] =  [
                        'date' => date('Y-m-d', $i),
                        'text' => date('F d, Y', $i),
                        'day' => date('l', $i),
                        'data' => 'LEAVE',
                        'bg' => 'bg bg-info bg-soft',
                        'is_with' => false
                    ];
                }else{
                    if($data){
                        
                        $tardiness = $tardiness + $data->tardiness;
                        $undertime = $undertime + $data->undertime;
                        if($data->am_in_at == '[]' || $data->am_out_at == '[]' || $data->pm_out_at == '[]' || $data->pm_in_at == '[]'){
                            $is_completed = false;
                        }else{
                            $is_completed = true;
                        }
                        $chck = ($date < $today) ? 'bg bg-soft bg-warning' : '';

                        $array[] = [
                            'date' => date('Y-m-d', $i),
                            'text' => date('F d, Y', $i),
                            'day' => date('l', $i),
                            'data' => new Dtr2Resource($data),
                            'bg' => ($is_completed) ? 'bg bg-soft bg-success' : $chck ,
                            'is_with' => true
                        ];
                    }else{
                        if($date < $today){
                            $absent++;
                            $array[] =  [
                                'date' => date('Y-m-d', $i),
                                'text' => date('F d, Y', $i),
                                'day' => date('l', $i),
                                'data' => 'ABSENT',
                                'bg' => 'bg bg-danger bg-soft',
                                'is_with' => false
                            ];
                        }else{
                            $array[] =  [
                                'date' => date('Y-m-d', $i),
                                'text' => date('F d, Y', $i),
                                'day' => date('l', $i),
                                'data' => [],
                                'bg' => '',
                                'is_with' => true
                            ];
                        }
                    }
                }
            }
        }
        return [
            'data' => $array,
            'absent' => $absent,
            'undertime' => $undertime,
            'tardiness' => $tardiness,
            'id' => $user_id
        ];
    }

    private function findUser($keyword) {
        $data = User::where('username', 'LIKE', "%{$keyword}%")
        ->orWhereHas('profile',function ($query) use ($keyword) {
            $query->where(\DB::raw('concat(firstname," ",lastname)'), 'LIKE', "%{$keyword}%")
            ->orWhere(\DB::raw('concat(lastname," ",firstname)'), 'LIKE', "%{$keyword}%");
        })
        ->select('id')->first();

        return $data->id;
    }
    
}