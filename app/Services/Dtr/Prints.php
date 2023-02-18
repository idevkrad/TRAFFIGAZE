<?php

namespace App\Services\Dtr;

use App\Models\User;
use App\Models\Dtr;
use Carbon\Carbon;
use App\Http\Resources\DtrResource;
use App\Http\Resources\Dtr2Resource;

class Prints {

    public static function set($info) {
        $info = (!empty(json_decode($info))) ? json_decode($info) : NULL;
        $month = ($info->month == '') ? date('n') :  date("n", strtotime($info->month));
        $year = ($info->year == '') ? date('Y') :  date("Y", strtotime($info->year));
        $user = Dtr::with('user.profile')->where('user_id',$info->id)->first();
        $user = $user->user->profile;

        $group = \Auth::user()->groups->where('type','Schedule')->first();
        $schedule = $group['name'];

        if($schedule == 'A'){
            $day_words = 'Friday';
        }else if($schedule == 'B'){
            $day_words = 'Monday';
        }else{
            $day_words = '';
        }

        $today = date('Y-m-d', strtotime(now()));
        $array = [];

        $user_id = $info->id ;
        $start_date = "01-".$month."-".$year;
        $start_time = strtotime($start_date);
        $end_time = strtotime("+1 month", $start_time);

        for($i=$start_time; $i<$end_time; $i+=86400)
        {
            $date = date('Y-m-d', $i);
            $day = date('l', $i);

            $data = Dtr::with('user.profile')
            ->whereDate('date',$date)
            ->where('user_id',$info->id)->first();

            if($day == 'Saturday' || $day == 'Sunday' || $day == $day_words){
                // $cto = Cto::where('user_id',$info->id)->where('status_id',[57,58])->whereDate('start', '<=', $date)->whereDate('end', '>=', $date)->first();
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
                // $leave = Leave::where('user_id',$user_id)->where('status_id',57)->whereDate('start', '<=', $date)->whereDate('end', '>=', $date)->first();
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

         $array = [
            'user' => $user, 
            'lists' => $array, 
            'month' => $month, 
            'year' => $year, 
            'search' => $year.'-'.$month.'-',
            'today' => date('Y-m-d', strtotime(now()))
        ];

        $pdf = \PDF::loadView('prints.dtr',$array)->setPaper('a4', 'portrait');
        return $pdf->download('dtr.pdf');
    }

}