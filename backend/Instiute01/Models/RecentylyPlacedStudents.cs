namespace Instiute01.Models
{
    public class RecentylyPlacedStudents
    {

        // Define StudentId as the primary key
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public string CourseStudied { get; set; }
        public string CourseDuration { get; set; } // Duration in weeks or months
        public decimal Package { get; set; }

        public DateTime DateofPlaced { get; set; }
        public string CompanyPlaced { get; set; }

        public string ContactMail { get; set;

        }
    }
}
