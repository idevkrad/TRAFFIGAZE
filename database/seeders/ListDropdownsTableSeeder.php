<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ListDropdownsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('list_dropdowns')->delete();
        
        \DB::table('list_dropdowns')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'none',
                'classification' => 'none',
                'type' => 'none',
                'color' => 'none',
                'others' => 'none',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Office of the Regional Director',
                'classification' => 'Group',
                'type' => 'Department',
                'color' => 'n/a',
                'others' => 'ORD',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Finance, Administrative Support and Technical Services',
                'classification' => 'Group',
                'type' => 'Department',
                'color' => 'n/a',
                'others' => 'FASTS',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Field Operations Services',
                'classification' => 'Group',
                'type' => 'Department',
                'color' => 'n/a',
                'others' => 'FOS',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Regular Employee',
                'classification' => 'Group',
                'type' => 'Employment Status',
                'color' => 'n/a',
                'others' => 'Plantilla',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Contractual of Service',
                'classification' => 'Group',
                'type' => 'Employment Status',
                'color' => 'n/a',
                'others' => 'Contractual',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Detailed',
                'classification' => 'Group',
                'type' => 'Employment Status',
                'color' => 'n/a',
                'others' => 'Detailed',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'Regional Office',
                'classification' => 'Office',
                'type' => 'Regional Office',
                'color' => 'RO-IX',
                'others' => '',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'Zamboanga Del Norte',
                'classification' => 'Office',
                'type' => 'Provincial S&T Center',
                'color' => 'PSTC-ZDN',
                'others' => '',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'Zamboanga Del Sur',
                'classification' => 'Office',
                'type' => 'Provincial S&T Center',
                'color' => 'PSTC-ZDS',
                'others' => '',
            ),
            10 => 
            array (
                'id' => 11,
                'name' => 'Zamboanga Sibugay Province',
                'classification' => 'Office',
                'type' => 'Provincial S&T Center',
                'color' => 'PSTC-ZSP',
                'others' => '',
            ),
            11 => 
            array (
                'id' => 12,
                'name' => 'Zamboanga City / Isabela City',
                'classification' => 'Office',
                'type' => 'City S&T Center',
                'color' => 'CSTC-ZC/IC',
                'others' => '',
            ),
            12 => 
            array (
                'id' => 13,
                'name' => 'Roman Catholic',
                'classification' => 'Religion',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            13 => 
            array (
                'id' => 14,
                'name' => 'Iglesia ni Cristo',
                'classification' => 'Religion',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            14 => 
            array (
                'id' => 15,
                'name' => 'Christian',
                'classification' => 'Religion',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            15 => 
            array (
                'id' => 16,
                'name' => 'Islam',
                'classification' => 'Religion',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            16 => 
            array (
                'id' => 17,
                'name' => '7th day Adventist',
                'classification' => 'Religion',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            17 => 
            array (
                'id' => 18,
                'name' => 'Jehovah\'s Witness',
                'classification' => 'Religion',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            18 => 
            array (
                'id' => 19,
                'name' => 'Bachelor\'s Degree',
                'classification' => 'Educational Level',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            19 => 
            array (
                'id' => 20,
                'name' => 'Post Bachelor\'s Degree',
                'classification' => 'Educational Level',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            20 => 
            array (
                'id' => 21,
                'name' => 'Post High School',
                'classification' => 'Educational Level',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            21 => 
            array (
                'id' => 22,
                'name' => 'College Graduate',
                'classification' => 'Educational Level',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            22 => 
            array (
                'id' => 23,
                'name' => 'High School and Below',
                'classification' => 'Educational Level',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            23 => 
            array (
                'id' => 24,
                'name' => 'A',
                'classification' => 'Bloodtype',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            24 => 
            array (
                'id' => 25,
                'name' => 'A+',
                'classification' => 'Bloodtype',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            25 => 
            array (
                'id' => 26,
                'name' => 'B',
                'classification' => 'Bloodtype',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            26 => 
            array (
                'id' => 27,
                'name' => 'B+',
                'classification' => 'Bloodtype',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            27 => 
            array (
                'id' => 28,
                'name' => 'AB',
                'classification' => 'Bloodtype',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            28 => 
            array (
                'id' => 29,
                'name' => 'AB+',
                'classification' => 'Bloodtype',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            29 => 
            array (
                'id' => 30,
                'name' => 'O',
                'classification' => 'Bloodtype',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            30 => 
            array (
                'id' => 31,
                'name' => 'O+',
                'classification' => 'Bloodtype',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => '',
            ),
            31 => 
            array (
                'id' => 32,
                'name' => 'Vacation Leave',
                'classification' => 'Leave',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'Sec. 51, Rule XVI, Omnibus Rules Implementing E.O. No. 292',
            ),
            32 => 
            array (
                'id' => 33,
                'name' => 'Mandatory/Forced Leave',
                'classification' => 'Leave',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'Sec. 25, Rule XVI, Omnibus Rules Implementing E.O. No. 292',
            ),
            33 => 
            array (
                'id' => 34,
                'name' => 'Sick Leave',
                'classification' => 'Leave',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'Sec. 43, Rule XVI, Omnibus Rules Implementing E.O. No. 292',
            ),
            34 => 
            array (
                'id' => 35,
                'name' => 'Maternity Leave',
                'classification' => 'Leave',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'R.A. No. 11210 / IRR issued by CSC, DOLE and SSS',
            ),
            35 => 
            array (
                'id' => 36,
                'name' => 'Paternity Leave',
                'classification' => 'Leave',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'R.A. No. 8187 / CSC MC No. 71, s. 1998, as amended',
            ),
            36 => 
            array (
                'id' => 37,
                'name' => 'Special Privilege Leave',
                'classification' => 'Leave',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'Sec. 21, Rule XVI, Omnibus Rules Implementing E.O. No. 292',
            ),
            37 => 
            array (
                'id' => 38,
                'name' => 'Solo Parent Leave',
                'classification' => 'Leave',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'RA No. 8972 / CSC MC No. 15, s. 2010',
            ),
            38 => 
            array (
                'id' => 39,
                'name' => 'Study Leave',
                'classification' => 'Leave',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'Sec. 68, Rule XVI, Omnibus Rules Implementing E.O. No. 292',
            ),
            39 => 
            array (
                'id' => 40,
                'name' => '10-Day VAWC Leave',
                'classification' => 'Leave',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'RA No. 9262 / CSC MC No. 15, s. 2005',
            ),
            40 => 
            array (
                'id' => 41,
                'name' => 'Rehabilitation Privilege',
                'classification' => 'Leave',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'Sec. 55, Rule XVI, Omnibus Rules Implementing E.O. No. 292',
            ),
            41 => 
            array (
                'id' => 42,
                'name' => 'Special Leave Benefits for Women',
                'classification' => 'Leave',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'RA No. 9710 / CSC MC No. 25, s. 2010',
            ),
            42 => 
            array (
                'id' => 43,
            'name' => 'Special Emergency (Calamity) Leave',
                'classification' => 'Leave',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'CSC MC No. 2, as amended',
            ),
            43 => 
            array (
                'id' => 44,
                'name' => 'Adoption Leave',
                'classification' => 'Leave',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'RA No. 8552',
            ),
            44 => 
            array (
                'id' => 45,
                'name' => 'Within the Philippines',
                'classification' => 'Details of Leave',
                'type' => 'Vacation/Special Privilege Leave',
                'color' => 'n/a',
                'others' => 'specify',
            ),
            45 => 
            array (
                'id' => 46,
                'name' => 'Abroad',
                'classification' => 'Details of Leave',
                'type' => 'Vacation/Special Privilege Leave',
                'color' => 'n/a',
                'others' => 'specify',
            ),
            46 => 
            array (
                'id' => 47,
                'name' => 'In Hospital',
                'classification' => 'Details of Leave',
                'type' => 'Sick Leave',
                'color' => 'n/a',
                'others' => 'specify',
            ),
            47 => 
            array (
                'id' => 48,
                'name' => 'Out Patient',
                'classification' => 'Details of Leave',
                'type' => 'Sick Leave',
                'color' => 'n/a',
                'others' => 'specify',
            ),
            48 => 
            array (
                'id' => 49,
                'name' => 'Women',
                'classification' => 'Details of Leave',
                'type' => 'Special Leave Benefits for Women',
                'color' => 'n/a',
                'others' => 'specify',
            ),
            49 => 
            array (
                'id' => 50,
                'name' => 'Completion of Master\'s Degree',
                'classification' => 'Details of Leave',
                'type' => 'Study Leave',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            50 => 
            array (
                'id' => 51,
                'name' => 'BAR/Board Examination Review',
                'classification' => 'Details of Leave',
                'type' => 'Study Leave',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            51 => 
            array (
                'id' => 52,
                'name' => 'Monetization of Leave Credits',
                'classification' => 'Details of Leave',
                'type' => 'Others',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            52 => 
            array (
                'id' => 53,
                'name' => 'Terminal Leave',
                'classification' => 'Details of Leave',
                'type' => 'Others',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            53 => 
            array (
                'id' => 54,
                'name' => 'Pending',
                'classification' => 'Status',
                'type' => 'Leave',
                'color' => 'warning',
                'others' => 'n/a',
            ),
            54 => 
            array (
                'id' => 55,
                'name' => 'Validated',
                'classification' => 'Status',
                'type' => 'Leave',
                'color' => 'primary',
                'others' => 'n/a',
            ),
            55 => 
            array (
                'id' => 56,
                'name' => 'Recommended',
                'classification' => 'Status',
                'type' => 'Leave',
                'color' => 'info',
                'others' => 'n/a',
            ),
            56 => 
            array (
                'id' => 57,
                'name' => 'Approved',
                'classification' => 'Status',
                'type' => 'Leave',
                'color' => 'success',
                'others' => 'n/a',
            ),
            57 => 
            array (
                'id' => 58,
                'name' => 'Disapproved',
                'classification' => 'Status',
                'type' => 'Leave',
                'color' => 'danger',
                'others' => 'n/a',
            ),
            58 => 
            array (
                'id' => 59,
                'name' => 'Confirmed',
                'classification' => 'Status',
                'type' => 'Leave',
                'color' => 'success',
                'others' => 'n/a',
            ),
            59 => 
            array (
                'id' => 60,
                'name' => 'Official Vehicle',
                'classification' => 'Travel Mode',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            60 => 
            array (
                'id' => 61,
                'name' => 'Public Conveyance',
                'classification' => 'Travel Mode',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            61 => 
            array (
                'id' => 62,
                'name' => 'Vehicle Rental',
                'classification' => 'Travel Mode',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            62 => 
            array (
                'id' => 63,
                'name' => 'Pending',
                'classification' => 'Travel Status',
                'type' => 'n/a',
                'color' => 'warning',
                'others' => 'n/a',
            ),
            63 => 
            array (
                'id' => 64,
                'name' => 'Recommended',
                'classification' => 'Travel Status',
                'type' => 'n/a',
                'color' => 'info',
                'others' => 'n/a',
            ),
            64 => 
            array (
                'id' => 65,
                'name' => 'Approved',
                'classification' => 'Travel Status',
                'type' => 'n/a',
                'color' => 'success',
                'others' => 'n/a',
            ),
            65 => 
            array (
                'id' => 66,
                'name' => 'Disapproved',
                'classification' => 'Travel Status',
                'type' => 'n/a',
                'color' => 'danger',
                'others' => 'n/a',
            ),
            66 => 
            array (
                'id' => 67,
                'name' => 'Cancelled',
                'classification' => 'Travel Status',
                'type' => 'n/a',
                'color' => 'secondary',
                'others' => 'n/a',
            ),
            67 => 
            array (
                'id' => 68,
                'name' => 'Compensatory Time Off',
                'classification' => 'Request Type',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'bx-calendar-check',
            ),
            68 => 
            array (
                'id' => 69,
                'name' => 'Leave Request',
                'classification' => 'Request Type',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'bx-calendar-week',
            ),
            69 => 
            array (
                'id' => 70,
                'name' => 'Letter',
                'classification' => 'Document Type',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            70 => 
            array (
                'id' => 71,
                'name' => 'Announcement',
                'classification' => 'Document Type',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            71 => 
            array (
                'id' => 72,
                'name' => 'Notice Of Meeting',
                'classification' => 'Document Type',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            72 => 
            array (
                'id' => 73,
                'name' => 'Memorandum',
                'classification' => 'Document Type',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            73 => 
            array (
                'id' => 74,
                'name' => 'Moa',
                'classification' => 'Document Type',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            74 => 
            array (
                'id' => 75,
                'name' => 'Administrative Order',
                'classification' => 'Document Type',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            75 => 
            array (
                'id' => 76,
                'name' => 'Special Order',
                'classification' => 'Document Type',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            76 => 
            array (
                'id' => 77,
                'name' => 'Minutes Of Meeting',
                'classification' => 'Document Type',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            77 => 
            array (
                'id' => 78,
                'name' => 'Publication',
                'classification' => 'Document Type',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            78 => 
            array (
                'id' => 79,
                'name' => 'Please Rush',
                'classification' => 'Document Action',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            79 => 
            array (
                'id' => 80,
                'name' => 'Please Attend',
                'classification' => 'Document Action',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            80 => 
            array (
                'id' => 81,
                'name' => 'Please Draft Reply/memo/letter',
                'classification' => 'Document Action',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            81 => 
            array (
                'id' => 82,
                'name' => 'Please Acknowledge Receipt',
                'classification' => 'Document Action',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            82 => 
            array (
                'id' => 83,
                'name' => 'Please Discuss With Me',
                'classification' => 'Document Action',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            83 => 
            array (
                'id' => 84,
                'name' => 'Please Calendar',
                'classification' => 'Document Action',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            84 => 
            array (
                'id' => 85,
                'name' => 'Please Follow Up',
                'classification' => 'Document Action',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            85 => 
            array (
                'id' => 86,
                'name' => 'Please Act On This',
                'classification' => 'Document Action',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            86 => 
            array (
                'id' => 87,
                'name' => 'Please Post',
                'classification' => 'Document Action',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            87 => 
            array (
                'id' => 88,
                'name' => 'Please Give Me Feedback',
                'classification' => 'Document Action',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            88 => 
            array (
                'id' => 89,
                'name' => 'Please File',
                'classification' => 'Document Action',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            89 => 
            array (
                'id' => 90,
                'name' => 'For Your Information/study/reference',
                'classification' => 'Document Action',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            90 => 
            array (
                'id' => 91,
                'name' => 'For Your Comments',
                'classification' => 'Document Action',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
            91 => 
            array (
                'id' => 92,
                'name' => 'For Your Initials/signature',
                'classification' => 'Document Action',
                'type' => 'n/a',
                'color' => 'n/a',
                'others' => 'n/a',
            ),
        ));
        
        
    }
}