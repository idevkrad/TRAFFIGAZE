<?php

namespace App\Console\Commands;

use App\Models\Dtr;
use App\Models\User;
use Illuminate\Console\Command;

class DtrChecker extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:dtr';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'check incomplete dtr';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $dtrs = Dtr::where('is_completed',0)->get();

        foreach($dtrs as $dtr){
            $user = User::where('id',$dtr->user_id)->first();
            $group = $user->groups->where('type','Schedule')->first();
            $schedule = $group['name'];

            $absent = [
                'type' => 'am',
                'minutes' => ($schedule == 'C') ? 240 : 330
            ];
            $remarks = [
                $absent
            ];
            
            if(json_decode($dtr->pm_in_at) == [] && json_decode($dtr->pm_out_at) == []){
                $data = Dtr::findOrFail($dtr->id);
                $data->undertime = ($schedule == 'C') ? 240 : 330;
                $data->is_completed = 1;
                $data->remarks = json_encode($remarks);
                $data->save();
            }
        }

    }
}
