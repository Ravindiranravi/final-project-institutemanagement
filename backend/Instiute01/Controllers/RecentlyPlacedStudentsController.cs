using Microsoft.AspNetCore.Mvc;
using Instiute01.Data;
using Instiute01.Models;
using Instiute01.Dto;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace Instiute01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecentlyPlacedStudentsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RecentlyPlacedStudentsController(ApplicationDbContext context)
        {
            _context = context;
        }
        [Authorize(Roles = "Admin,Teacher,Student")]
        // GET: api/RecentlyPlacedStudents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecentlyPlacedStudentsDTO>>> GetRecentlyPlacedStudents()
        {
            var students = await _context.RecentylyPlacedStudents
                .Select(s => new RecentlyPlacedStudentsDTO
                {
                    StudentId = s.StudentId,
                    StudentName = s.StudentName,
                    CourseStudied = s.CourseStudied,
                    CourseDuration = s.CourseDuration,
                    Package = s.Package,
                    DateofPlaced = s.DateofPlaced,
                    CompanyPlaced = s.CompanyPlaced,
                    ContactMail = s.ContactMail
                }).ToListAsync();

            return Ok(students);
        }
        [Authorize(Roles = "Admin,Teacher,Student")]
        // GET: api/RecentlyPlacedStudents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RecentlyPlacedStudentsDTO>> GetRecentlyPlacedStudent(int id)
        {
            var student = await _context.RecentylyPlacedStudents.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            var studentDto = new RecentlyPlacedStudentsDTO
            {
                StudentId = student.StudentId,
                StudentName = student.StudentName,
                CourseStudied = student.CourseStudied,
                CourseDuration = student.CourseDuration,
                Package = student.Package,
                DateofPlaced = student.DateofPlaced,
                CompanyPlaced = student.CompanyPlaced,
                ContactMail = student.ContactMail
            };

            return Ok(studentDto);
        }
        [Authorize(Roles = "Admin,Teacher,Student")]
        // POST: api/RecentlyPlacedStudents
        [HttpPost]
        public async Task<ActionResult<RecentlyPlacedStudentsDTO>> PostRecentlyPlacedStudent(RecentlyPlacedStudentsDTO dto)
        {
            var student = new RecentylyPlacedStudents
            {
                StudentId = dto.StudentId,
                StudentName = dto.StudentName,
                CourseStudied = dto.CourseStudied,
                CourseDuration = dto.CourseDuration,
                Package = dto.Package,
                DateofPlaced = dto.DateofPlaced,
                CompanyPlaced = dto.CompanyPlaced,
                ContactMail = dto.ContactMail
            };

            _context.RecentylyPlacedStudents.Add(student);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetRecentlyPlacedStudent), new { id = student.StudentId }, dto);
        }
        [Authorize(Roles = "Admin,Teacher,Student")]
        // PUT: api/RecentlyPlacedStudents/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecentlyPlacedStudent(int id, RecentlyPlacedStudentsDTO dto)
        {
            if (id != dto.StudentId)
            {
                return BadRequest();
            }

            var student = await _context.RecentylyPlacedStudents.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            student.StudentName = dto.StudentName;
            student.CourseStudied = dto.CourseStudied;
            student.CourseDuration = dto.CourseDuration;
            student.Package = dto.Package;
            student.DateofPlaced = dto.DateofPlaced;
            student.CompanyPlaced = dto.CompanyPlaced;
            student.ContactMail = dto.ContactMail;

            _context.Entry(student).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [Authorize(Roles = "Admin")]
        // DELETE: api/RecentlyPlacedStudents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecentlyPlacedStudent(int id)
        {
            var student = await _context.RecentylyPlacedStudents.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            _context.RecentylyPlacedStudents.Remove(student);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
