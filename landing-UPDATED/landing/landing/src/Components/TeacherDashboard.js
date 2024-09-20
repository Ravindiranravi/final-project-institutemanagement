import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Snackbar,
  Alert,
  Typography,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function extractDate(dateTimeString) {
  if (!dateTimeString) return ''; // Return empty string if no date is provided
  const date = new Date(dateTimeString);
  if (isNaN(date.getTime())) return ''; // Check if the date is valid
  return date.toISOString().split('T')[0];
}

function convertToDateTime(dateString) {
  // Split the string into an array [dd, mm, yyyy]
  const [ year,month,day] = dateString.split('-');
  
  // Create a new Date object with the correct format (yyyy, mm - 1, dd)
  const dateObject = new Date(`${year}-${month}-${day}T00:00:00`);
  
  return dateObject;
}
const TeacherDashboard = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]); // New state for batches
  const [open, setOpen] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
const navigate = useNavigate()
  // Fetch data on component mount
  useEffect(() => {
    if(!localStorage.getItem("token"))
        {
            navigate("/signin")

        }
    fetchTeachers();
    fetchStudents();
    fetchCourses();
    fetchBatches(); // Fetch batches data
  }, []);
  async function handleTeacherUpdate(currentTeacher) {
    console.log(currentTeacher)
    const updatedTeacher = {
      teacherId: currentTeacher.teacherId || 0,
      username: currentTeacher.username || 'string',
      password: currentTeacher.password || 'string',
      address: currentTeacher.address || 'string',
      dateOfJoin: currentTeacher.dateOfJoin,
      email: currentTeacher.email || 'string',
      dateOfBirth: currentTeacher.dateOfBirth ,
      qualification: currentTeacher.qualification || 'string'
    };
  console.log(updatedTeacher)
    // Make the API call to update the teacher
    try {
      const response = await axios.put(`https://localhost:7256/api/Teacher/${localStorage.getItem("Id")}`, updatedTeacher);
      console.log('Teacher updated successfully:', response.data);
      await   fetchTeachers();
      // Add additional logic to refresh the data or display a success message
    } catch (error) {
      console.error('Error updating teacher:', error);
    }
  }
  
  // Fetch teachers using GET method
  const fetchTeachers = async () => {
    try {
      const response = await axios.get(`https://localhost:7256/api/Teacher/${localStorage.getItem("Id")}`);
      console.log(response.data)
      setTeachers(response.data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  // Fetch students using GET method
  const fetchStudents = async () => {
    try {
      const response = await axios.get('https://localhost:7256/api/RecentlyPlacedStudents');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  // Fetch courses using GET method
  const fetchCourses = async () => {
    try {
      const response = await axios.get('https://localhost:7256/api/Course');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // Fetch batches using GET method
  const fetchBatches = async () => {
    try {
      const response = await axios.get('https://localhost:7256/api/Batch'); // Corrected the endpoint
      setBatches(response.data);
    } catch (error) {
      console.error('Error fetching batches:', error);
    }
  };

  const handleOpen = (teacher = null) => {
    setIsEditing(!!teacher);
    console.log(teacher)
    setCurrentTeacher(
      teacher || {...teacher}
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentTeacher(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentTeacher((prev) => ({ ...prev, [name]: value }));
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Add New Teacher
      </Button>

      {/* Teachers Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>DateOfBirth</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Qualification</TableCell>
              <TableCell>DateOfJoin</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers ? (
                <TableRow key={teachers.teacherId}>
                  <TableCell>{teachers.teacherId}</TableCell>
                  <TableCell>{teachers.username}</TableCell>
                  <TableCell>{teachers.email}</TableCell>
                  <TableCell>{teachers.address}</TableCell>
                  <TableCell>{ extractDate(teachers.dateOfBirth)}</TableCell>
                  <TableCell>{extractDate(teachers.dateOfJoin)}</TableCell>
                  <TableCell>{teachers.password}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="primary" onClick={() => handleOpen(teachers)}>
                      Edit
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => {/* Delete logic here */}}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              
            ) : (
              <TableRow>
                <TableCell colSpan={4}>Loading...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Placed Students Table */}
      <Box my={4}>
        <Typography variant="h6" gutterBottom>
          Recently Placed Students
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student Name</TableCell>
                <TableCell>Course Studied</TableCell>
                <TableCell>Package</TableCell>
                <TableCell>Date of Placement</TableCell>
                <TableCell>Company Placed</TableCell>
                <TableCell>Contact Mail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.length ? (
                students.map((student) => (
                  <TableRow key={student.studentId}>
                    <TableCell>{student.studentName}</TableCell>
                    <TableCell>{student.courseStudied}</TableCell>
                    <TableCell>{student.package}</TableCell>
                    <TableCell>{new Date(student.dateOfPlaced).toLocaleDateString()}</TableCell>
                    <TableCell>{student.companyPlaced}</TableCell>
                    <TableCell>{student.contactMail}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6}>No students available</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Courses Table */}
      <Box my={4}>
        <Typography variant="h6" gutterBottom>
          Courses
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Course ID</TableCell>
                <TableCell>Course Name</TableCell>
                <TableCell>Course Duration</TableCell>
                <TableCell>Course Fees</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.length ? (
                courses.map((course) => (
                  <TableRow key={course.courseId}>
                    <TableCell>{course.courseId}</TableCell>
                    <TableCell>{course.courseName}</TableCell>
                    <TableCell>{course.courseDuration}</TableCell>
                    <TableCell>{course.courseFees}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4}>No courses available</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Batches Table */}
      <Box my={4}>
        <Typography variant="h6" gutterBottom>
          Batches
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Batch ID</TableCell>
                <TableCell>Batch Name</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {batches.length ? (
                batches.map((batch) => (
                  <TableRow key={batch.batchId}>
                    <TableCell>{batch.batchId}</TableCell>
                    <TableCell>{batch.batchName}</TableCell>
                    <TableCell>{new Date(batch.startDate).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(batch.endDate).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4}>No batches available</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Edit Teacher' : 'Add New Teacher'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="username"
            label="username"
            type="text"
            fullWidth
            variant="standard"
            value={currentTeacher?.username || ''}
            onChange={handleChange}
          />
           <TextField
            margin="dense"
            name="password"
            label="password"
            type="text"
            fullWidth
            variant="standard"
            value={currentTeacher?.password || ''}
            onChange={handleChange}
          />
           <TextField
            margin="dense"
            name="address"
            label="address"
            type="text"
            fullWidth
            variant="standard"
            value={currentTeacher?.address || ''}
            onChange={handleChange}
          />
   <TextField
  margin="dense"
  name="dateOfJoin"
  label="Date of Join"
  type="date"
  fullWidth
  variant="standard"
  value={currentTeacher?.dateOfJoin ? extractDate(currentTeacher.dateOfJoin) : ''}  // Extract the date part (YYYY-MM-DD)
  onChange={handleChange}
  InputLabelProps={{
    shrink: true,
  }}
/>
       <TextField
            margin="dense"
            name="email"
            label="email"
            type="text"
            fullWidth
            variant="standard"
            value={currentTeacher?.email || ''}
            onChange={handleChange}
          />
   <TextField
  margin="dense"
  name="dateOfBirth"
  label="Date of Birth"
  type="date"  // Input type is date
  fullWidth
  variant="standard"
  value={currentTeacher?.dateOfBirth ? extractDate(currentTeacher.dateOfBirth) : ''}  // Extract the date part only (YYYY-MM-DD)
  onChange={handleChange}
  InputLabelProps={{
    shrink: true,  // Keeps the label visible even when a date is selected
  }}
/>

           <TextField
            margin="dense"
            name="qualification"
            label="qualification"
            type="text"
            fullWidth
            variant="standard"
            value={currentTeacher?.qualification || ''}
            onChange={handleChange}
          />
          {/* Add other fields similarly */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {handleTeacherUpdate(currentTeacher)}} color="primary">
            {isEditing ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default TeacherDashboard;
