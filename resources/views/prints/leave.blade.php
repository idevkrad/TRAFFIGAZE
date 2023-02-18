<!doctype html>
<html lang="en">
    <head>
        <style>
            table, td, th {
                margin: 0px;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }    
            th {
                padding: 8px;
            }
            td {
                padding: 3px 5px 2px;
            }
            .custom {
                transform: scale(.7);
            }
            .wew td, .wew th {
                border: 1.3px solid black;
            }
        </style>
        <script src="{{ mix('/js/app.js') }}" defer></script>
    </head>
    <body>
        <?php 
            $employee = json_encode($employee); 
            $employee = json_decode($employee, true);  

            $types = json_encode($types); 
            $types = json_decode($types, true);  
        ?>
        <div style="font-family: Arial, Helvetica, sans-serif">
            <p style="font-size: 8px; margin-top: -20px;"><i>Civil Service Form No.6</i></p>
            <p style="font-size: 8px; margin-top: -10px;"><i>Revised 2022</i></p>
            <img src="{{ asset('images/dost.png') }}" alt="tag" style="position: absolute; top: 1; left: 60; width: 55px; height: 55px;">
            
            <center style="font-size: 10px;">Republic of the Philippines</center>
            <center style="font-size: 10px; font-weight: bold;">DEPARTMENT OF SCIENCE AND TECHNOLOGY REGIONAL OFFICE IX</center>
            <center style="font-size: 10px;">Pettit Barracks, Zamboanga City</center>
            <br>
            <center style="font-size: 15px; margin-bottom: 15px; font-weight: bold;">APPLICATION FOR LEAVE</center>

            <table style="font-size: 9px; padding: 10px;  border: 1.3px solid black;">
                <tbody>
                    <tr>
                        <td style="width: 40%; border-right: none;">
                           
                            <table style="margin-top: 0px;">
                                <tbody>
                                    <tr>
                                        <td style="font-size: 10px;"><span style="margin-left: -5px;">1. OFFICE/DEPARTMENT</span></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: center; font-size: 10px; font-weight: bold;">{{ $employee['profile']['department'] }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td style="width: 60%; border-left: none;" colspan="2">
                            <table style="margin-top: 0px; margin-left: -5px;">
                                <tbody>
                                    <tr>
                                        <td style="width: 15%; font-size: 10px;">2. NAME: </td>
                                        <td style="text-align: center; font-size: 8px;">(Last)</td>
                                        <td style="text-align: center; font-size: 8px;">(First)</td>
                                        <td style="text-align: center; font-size: 8px;">(Middle)</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td style="text-align: center; font-size: 10px; font-weight: bold;">{{ strtoupper($employee['profile']['lastname']) }}</td>
                                        <td style="text-align: center; font-size: 10px; font-weight: bold;">{{ strtoupper($employee['profile']['firstname']) }}</td>
                                        <td style="text-align: center; font-size: 10px; font-weight: bold;">{{ strtoupper($employee['profile']['middlename']) }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 33%; border-right: none; border-top: 1.3px solid #333;">
                            <p style="margin-bottom: 7px; margin-top: 8px; font-size: 10px;">3. DATE OF FILING : <span style="font-weight: bold;">{{ strtoupper($employee['created_at']) }}</span></p>
                        </td>
                        <td style="width: 41%; border-right: none; border-left: none; border-top: 1.3px solid #333;">
                            <p style="margin-bottom: 7px; margin-top: 8px; font-size: 10px;">4. POSITION : <span style="font-weight: bold;">{{ strtoupper($employee['profile']['position']) }}</span></p>
                        </td>
                        <td style="width: 25%; border-left: none; border-top: 1.3px solid #333;">
                            <p style="margin-bottom: 7px; margin-top: 8px; font-size: 10px;">5. SALARY : </p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="border-bottom: 4px double #333; border-top: 4px double #333;">
                            <p style="text-align: center; font-size: 11px; font-weight: bold; margin-top: 0px; margin-bottom: 0px;">6. DETAILS OF APPLICATION</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table style="font-size: 9px; padding: 10px; margin-top:-20px;">
                <tbody>
                    <tr>
                        <td style="width: 55%; border-left: 1.3px solid black; border-right: 1.3px solid black; font-size: 10px;">
                        6.A TYPE OF LEAVE TO BE AVAILED OF
                        </td>
                        <td style="width: 45%; border-right: 1.3px solid black; font-size: 10px;">
                        6.B DETAILS OF LEAVE
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 55%; border-right: 1.3px solid black; border-left: 1.3px solid black; border-bottom: 1.3px solid black;">
                            @if($employee['due'] != '')
                            <table style="height: 320px; border-spacing:0; border-collapse: collapse;" cellspacing="0">
                            @else
                            <table style="height: 300px; border-spacing:0; border-collapse: collapse;" cellspacing="0">
                            @endif
                                @foreach($types as $type)
                                <tr>
                                    <td style="margin: 0px; padding: 0px;">
                                        @if($type['id'] == $employee['type']['id'])
                                        <input type="checkbox" class="custom" checked/>
                                        @else 
                                        <input type="checkbox" class="custom"/>
                                        @endif
                                    </td>
                                    <td style="margin: 0px; padding: 0px;"><span style="font-weight: bold;">{{$type['name']}}</span> <span style="font-size: 7px;">({{$type['others']}})</span></td>
                                </tr>
                                @endforeach
                                @if($employee['due'] != '')
                                <tr>
                                    <td colspan="2">
                                        Others: <input type="text" value="{{$employee['due']}}" style="width: 100%; outline: 0;border-width: 0 0 1px; border-color: black">
                                    </td>
                                </tr>
                                @endif
                            </table>
                        </td>
                        <td style="width: 45%; border-right: 1.3px solid black; border-bottom: 1.3px solid black;">
                            @if($employee['due'] != '')
                            <table style="height: 320px; border-spacing:0; border-collapse: collapse; margin-top: 5px;" cellspacing="0">
                            @else
                            <table style="height: 300px; border-spacing:0; border-collapse: collapse; margin-top: 5px;" cellspacing="0">
                            @endif
                            @foreach($titles as $title)
                                <tr>
                                    <td></td>
                                    <td style="width: 100%; margin: 0px; padding: 0px;"><span style="font-weight: bold; margin-left: -13px; font-size: 10px; font-style: italic;">In case of {{$title['type']}}: </span></td>
                                </tr>
                                @foreach($details as $detail)
                                    <tr>
                                        @if($title['type'] == $detail['type'])
                                        <td style="width: 2px; margin: 0px; padding: 0px;">
                                            @if($detail['id'] == $employee['detail']['id'])
                                            <input type="checkbox" class="custom" checked/>
                                            @else
                                            <input type="checkbox" class="custom"/>
                                            @endif
                                        </td>
                                         
                                        <td style="margin: 0px; padding: 0px;"><span style="margin-left: 2px;">{{$detail['name']}}</span></td>
                                        @endif
                                    </tr>
                                @endforeach
                            @endforeach
                            <tr>
                                <td colspan="2">
                                    <span style="margin-top: 100px;">Specify: <input type="text" value="{{$employee['specify']}}" style="width: 100%; outline: 0;border-width: 0 0 1px; border-color: black"></span>
                                </td>
                            </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        @php 
                        $weekendDays = 0;
                        for ($i = strtotime($employee['start']); $i <= strtotime($employee['end']); $i = $i + (60 * 60 * 24)) {
                            if (date("N", $i) > 5) $weekendDays = $weekendDays + 1;
                        }
                        @endphp
                        <td style="width: 55%; border-right: 1.3px solid black; border-left: 1.3px solid black; border-bottom: 1.3px solid black;">
                            <span style="font-size: 10px;">6.C NUMBER OF WORKING DAYS APPLIED FOR</span>
                            <p style="font-weight: bold; font-size: 10px;">{{ ((date_diff(date_create($employee['start']),  date_create($employee['end']))->format('%a')+1)-$weekendDays); }} days</p>
                            <p>INCLUSIVE DATES </p>
                            <p style="font-weight: bold; font-size: 10px;">{{$employee['start'].' to '.$employee['end']}}</p>
                        </td>
                        <td style="width: 45%; border-right: 1.3px solid black; border-left: 1.3px solid black; border-bottom: 1.3px solid black;">
                            <span style="font-size: 10px;">6.D COMMUTATION</span>
                            <table style="border-spacing:0; border-collapse: collapse;" cellspacing="0">
                                <tr>
                                    <td style="width: 2px; margin: 0px; padding: 0px;">
                                        <input type="checkbox" class="custom">
                                    </td>
                                    <td style="margin: 0px; padding: 0px;"><span style="margin-left: 2px;">Not Requested</span></td>
                                </tr>
                                <tr>
                                    <td style="width: 2px; margin: 0px; padding: 0px;">
                                        <input type="checkbox" class="custom"/>
                                    </td>
                                    <td style="margin: 0px; padding: 0px;"><span style="margin-left: 2px;">Requested</span></td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <input type="text" style="width: 160%; height: 8px; outline: 0;border-width: 0 0 1px; border-color: black">
                                        <p style="margin-top: -1px; width: 500px; margin-left: 90px;">(Signature of Applicant)</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table style="font-size: 9px; padding: 10px;  border: 1.3px solid black; margin-top:-21px;" >
                <tbody>
                    <tr>
                        <td colspan="3" style="border-bottom: 4px double #333; border-top: 4px double #333;">
                            <p style="text-align: center; font-size: 11px; font-weight: bold; margin-top: 0px; margin-bottom: 0px;">7. DETAILS OF ACTION ON APPLICATION</p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table style="font-size: 9px; padding: 10px; margin-top:-20px;">
                <tbody>
                    <tr>
                        <td style="width: 55%; border-right: 1.3px solid black; border-left: 1.3px solid black; border-bottom: 1.3px solid black;">
                            <span style="font-size: 10px;">7.A CERTIFICATION OF LEAVE CREDITS</span>
                            <p style="text-align: center;"> As of </p>
                            <table class="wew" style="width: 90%; margin-left: 20px;">
                                <tbody>
                                    <tr>
                                        <td style="width: 33%;"></td>
                                        <td style="text-align: center; width: 33%;">Vacation Leave</td>
                                        <td style="text-align: center; width: 33%;">Sick Leave</td>
                                    </tr>
                                    <tr>
                                        <td>Total Earned</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Less this application</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Balance</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            <h3 style="text-align:center; margin-top: 33px;">{{ strtoupper($hh['profile']['firstname'].' '.$hh['profile']['middlename'][0].'. '.$hh['profile']['lastname']) }}</h3>
                            <p style="text-align:center; margin-top: -17px; font-weight: bold;">____________________________________________</p>
                            <p style="text-align:center; margin-top: -8px;">(Authorized Official)</p>
                        </td>
                        <td style="width: 45%; border-right: 1.3px solid black; border-bottom: 1.3px solid black;">
                            <span style="font-size: 10px;">7.B RECOMMENDATION</span>
                            <table style="border-spacing:0; border-collapse: collapse;" cellspacing="0">
                                <tr>
                                    <td style="width: 2px; margin: 0px; padding: 0px;">
                                        @if($employee['status']['id'] == 54 || $employee['status']['id'] == 57)
                                        <input type="checkbox" class="custom" checked/>
                                        @else
                                        <input type="checkbox" class="custom"/>
                                        @endif
                                    </td>
                                    <td style="margin: 0px; padding: 0px;"><span style="margin-left: 2px;">For approval</span></td>
                                </tr>
                                <tr>
                                    <td style="width: 2px; margin: 0px; padding: 0px;">
                                        @if($employee['status']['id'] == 55)
                                        <input type="checkbox" class="custom" checked/>
                                        @else
                                        <input type="checkbox" class="custom"/>
                                        @endif
                                    </td>
                                    <td style="margin: 0px; padding: 0px;"><span style="margin-left: 2px;">For disapproval due to</span></td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <input type="text" style="width: 100%; height: 8px; outline: 0;border-width: 0 0 1px; border-color: black">
                                        <input type="text" style="width: 100%; height: 8px; outline: 0;border-width: 0 0 1px; border-color: black">
                                        <input type="text" style="width: 100%; height: 8px; outline: 0;border-width: 0 0 1px; border-color: black">
                                    </td>
                                </tr>
                            </table>
                            <h3 style="text-align:center; margin-top: 30px;">{{ strtoupper($ard['profile']['firstname'].' '.$ard['profile']['middlename'][0].'. '.$ard['profile']['lastname']) }}</h3>
                            <p style="text-align:center; margin-top: -17px; font-weight: bold;">____________________________________________</p>
                            <p style="text-align:center; margin-top: -8px;">(Authorized Official)</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 55%; border-left: 1.3px solid black; font-size: 10px;">
                        7.C NOTED FOR:
                        </td>
                        <td style="width: 45%; border-right: 1.3px solid black; font-size: 10px;">
                        7.D DISAPPROVED DUE TO
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 55%; border-left: 1.3px solid black; font-size: 10px;">
                            <p style="margin-top: -5px'">___________ days with pay</p>
                            <p style="margin-top: -10px'">___________ days without pay</p>
                            <p style="margin-top: -10px'">___________ others (Specify)</p>
                        </td>
                        <td style="width: 45%; border-right: 1.3px solid black; font-size: 10px;">
                            <p style="margin-top: -5px'">____________________________________________________</p>
                            <p style="margin-top: -10px'">____________________________________________________</p>
                            <p style="margin-top: -10px'">____________________________________________________</p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="width: 55%; border-bottom: 1.3px solid black; border-left: 1.3px solid black; border-right: 1.3px solid black;">
                            <h3 style="margin-top: 25px; text-align:center;">{{ strtoupper($rd['profile']['firstname'].' '.$rd['profile']['middlename'][0].'. '.$rd['profile']['lastname']) }}</h3>
                            <p style="text-align:center; margin-top: -17px; font-weight: bold;">____________________________________________</p>
                            <p style="text-align:center; margin-top: -8px; font-weight: bold;">(Authorized Official)</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
</html>