import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import  studentsData from 'src/app/data.json';


interface Student {
  
  student_name: String;
  student_admission_number: String;
  student_photo: String,
  exam_name: String,
  class_name: String,
  principals_remarks: String,
  class_teachers_remarks: String,
  mean_grade: String,

  overall_position: {
  deviation: 34,
  position_out_of: 197,
  position: 125
  },
  stream_position: {
  deviation: 6,
  position_out_of: 49,
  position: 34
  },
  mean_marks: {
  deviation: 2.5,
  avg_score: 59
  },
  subject_results: [
  {
  rank_out_of: 49,
  subject_name: "English",
  deviation: 19,
  grade: "B-",
  comment: "Satisfactory, aim higher",
  rank: 27,
  score: 62
  },
  {
  rank_out_of: 49,
  subject_name: "Kiswahili",
  deviation: -1,
  grade: "D-",
  comment: "Chini ya wastani",
  rank: 48,
  score: 32
  },
  {
  rank_out_of: 49,
  subject_name: "Mathematics",
  deviation: 7,
  grade: "B+",
  comment: "Good work but aim higher",
  rank: 15,
  score: 73
  },
  {
  rank_out_of: 49,
  subject_name: "Biology",
  deviation: -1,
  grade: "C+",
  comment: "Can do better, aim higher",
  rank: 28,
  score: 58
  },
  {
  rank_out_of: 49,
  subject_name: "Physics",
  deviation: -39,
  grade: "D-",
  comment: "Weak but has potential",
  rank: 49,
  score: 31
  },
  {
  rank_out_of: 49,
  subject_name: "Chemistry",
  deviation: 11,
  grade: "B",
  comment: "Good, can do better",
  rank: 19,
  score: 67
  },
  {
  rank_out_of: 49,
  subject_name: "History",
  deviation: 13,
  grade: "A",
  comment: "Excellent work",
  rank: 14,
  score: 81
  },
  {
  rank_out_of: 49,
  subject_name: "Geography",
  deviation: 37,
  grade: "A",
  comment: "Excellent work",
  rank: 7,
  score: 83
  },
  {
  rank_out_of: 49,
  subject_name: "C.R.E.",
  deviation: -32,
  grade: "D+",
  comment: "Put more effort",
  rank: 39,
  score: 41
  },
  {
  rank_out_of: 49,
  subject_name: "Computer Studies",
  deviation: 46,
  grade: "A",
  comment: "Excellent work",
  rank: 8,
  score: 83
  },
  {
  rank_out_of: 8,
  subject_name: "Business Studies",
  deviation: -33,
  grade: "D",
  comment: "Put more effort",
  rank: 8,
  score: 39
  }
  ],
  student_performance_over_time: [
  {
  exam_name: "Form 2 - CAT 1 - (2019 Term 1)",
  avg_score: 75.6
  },
  {
  exam_name: "Form 2 - CAT 2 - (2019 Term 1)",
  avg_score: 61.8
  },
  {
  exam_name: "Form 2 - CAT 1 - (2019 Term 2)",
  avg_score: 67.8
  },
  {
  exam_name: "Form 2 - CAT 2 - (2019 Term 2)",
  avg_score: 63.2
  },
  {
  exam_name: "Form 2 - CAT 1 - (2019 Term 3)",
  avg_score: 56.6
  },
  {
  exam_name: "Form 2 - CAT 2 - (2019 Term 3)",
  avg_score: 59.1
  }
  ]
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentsData';

  students: Student[]=[

    {
      student_name: "Ofelia Mckay",
      student_admission_number: "234234",
      student_photo: "https://cdn.pixabay.com/photo/2014/11/19/10/52/man-537136_1280.jpg",
      exam_name: "Form 2 - CAT 2 - (2019 Term 3)",
      class_name: "2 East",
      principals_remarks: "Keep working hard",
      class_teachers_remarks: "You have room for improvement. Work harder on your weak areas",
      mean_grade: "C+",
      overall_position: {
      deviation: 34,
      position_out_of: 197,
      position: 125
      },
      stream_position: {
      deviation: 6,
      position_out_of: 49,
      position: 34
      },
      mean_marks: {
      deviation: 2.5,
      avg_score: 59
      },
      subject_results: [
      {
      rank_out_of: 49,
      subject_name: "English",
      deviation: 19,
      grade: "B-",
      comment: "Satisfactory, aim higher",
      rank: 27,
      score: 62
      },
      {
      rank_out_of: 49,
      subject_name: "Kiswahili",
      deviation: -1,
      grade: "D-",
      comment: "Chini ya wastani",
      rank: 48,
      score: 32
      },
      {
      rank_out_of: 49,
      subject_name: "Mathematics",
      deviation: 7,
      grade: "B+",
      comment: "Good work but aim higher",
      rank: 15,
      score: 73
      },
      {
      rank_out_of: 49,
      subject_name: "Biology",
      deviation: -1,
      grade: "C+",
      comment: "Can do better, aim higher",
      rank: 28,
      score: 58
      },
      {
      rank_out_of: 49,
      subject_name: "Physics",
      deviation: -39,
      grade: "D-",
      comment: "Weak but has potential",
      rank: 49,
      score: 31
      },
      {
      rank_out_of: 49,
      subject_name: "Chemistry",
      deviation: 11,
      grade: "B",
      comment: "Good, can do better",
      rank: 19,
      score: 67
      },
      {
      rank_out_of: 49,
      subject_name: "History",
      deviation: 13,
      grade: "A",
      comment: "Excellent work",
      rank: 14,
      score: 81
      },
      {
      rank_out_of: 49,
      subject_name: "Geography",
      deviation: 37,
      grade: "A",
      comment: "Excellent work",
      rank: 7,
      score: 83
      },
      {
      rank_out_of: 49,
      subject_name: "C.R.E.",
      deviation: -32,
      grade: "D+",
      comment: "Put more effort",
      rank: 39,
      score: 41
      },
      {
      rank_out_of: 49,
      subject_name: "Computer Studies",
      deviation: 46,
      grade: "A",
      comment: "Excellent work",
      rank: 8,
      score: 83
      },
      {
      rank_out_of: 8,
      subject_name: "Business Studies",
      deviation: -33,
      grade: "D",
      comment: "Put more effort",
      rank: 8,
      score: 39
      }
      ],
      student_performance_over_time: [
      {
      exam_name: "Form 2 - CAT 1 - (2019 Term 1)",
      avg_score: 75.6
      },
      {
      exam_name: "Form 2 - CAT 2 - (2019 Term 1)",
      avg_score: 61.8
      },
      {
      exam_name: "Form 2 - CAT 1 - (2019 Term 2)",
      avg_score: 67.8
      },
      {
      exam_name: "Form 2 - CAT 2 - (2019 Term 2)",
      avg_score: 63.2
      },
      {
      exam_name: "Form 2 - CAT 1 - (2019 Term 3)",
      avg_score: 56.6
      },
      {
      exam_name: "Form 2 - CAT 2 - (2019 Term 3)",
      avg_score: 59.1
      }
      ]
      }

  ]

}

  // constructor (private httpService: HttpClient) { }
  // arrData: string [];

  // ngOnInit () {
  //   this.httpService.get('src/assets/data.json').subscribe(
  //     data => {
  //       this.arrData = data as string [];	 
        
  //     },
  //     (err: HttpErrorResponse) => {
  //       console.log (err.message);
  //     }
  //   );

  // }

