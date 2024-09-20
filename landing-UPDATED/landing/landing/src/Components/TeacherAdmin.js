// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Container,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
//   Snackbar,
//   Alert
// } from '@mui/material';

//    const TeacherAdmin = () => {
//       const [teachers, setTeachers] = useState([]);
//       const [open, setOpen] = useState(false);
//       const [currentTeacher, setCurrentTeacher] = useState(null);
//       const [snackbarOpen, setSnackbarOpen] = useState(false);
//       const [snackbarMessage, setSnackbarMessage] = useState('');
//       const [isEditing, setIsEditing] = useState(false);
    
//       useEffect(() => {
//         fetchTeachers();
//       }, []);
    
//       const fetchTeachers = async () => {
//         try {
//           const response = await axios.get('https://localhost:7256/api/Teacher');
//           setTeachers(response.data);
//         } catch (error) {
//           console.error('Error fetching teachers', error);
//         }
//       };
    
//       const handleOpen = (teacher = null) => {
//         setIsEditing(!!teacher);
//         setCurrentTeacher(teacher || {
//           TeacherId: 0,
//           Username: '',
//           Password: '',
//           Address: '',
//           DateOfJoin: '',
//           Email: '',
//           DateOfBirth: '',
//           Qualification: ''
//         });
//         setOpen(true);
//       };
    
//       const handleClose = () => {
//         setOpen(false);
//         setCurrentTeacher(null);
//       };
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCurrentTeacher(prev => ({ ...prev, [name]: value }));
//       };
    
//       const handleSubmit = async () => {
//         try {
//           if (isEditing) {
//             await axios.put(`https://localhost:7256/api/Teacher/${currentTeacher.teacherId}`, currentTeacher);
//             setSnackbarMessage('Teacher updated successfully');
//           } else {
//             await axios.post('https://localhost:7256/api/Teacher/', currentTeacher);
//             setSnackbarMessage('Teacher added successfully');
//           }
//           handleClose();
//           fetchTeachers();
//         } catch (error) {
//           console.error('Error submitting form', error);
//           setSnackbarMessage('Error submitting form');
//         } finally {
//           setSnackbarOpen(true);
//         }
//       };
    
//       const handleDelete = async (id) => {
//         try {
//           await axios.delete(`https://localhost:7256/api/Teacher/${id}`);
//           setSnackbarMessage('Teacher deleted successfully');
//           fetchTeachers();
//         } catch (error) {
//           console.error('Error deleting teacher', error);
//           setSnackbarMessage('Error deleting teacher');
//           setSnackbarOpen(true);
//         }
//       };
    
//       const handleSnackbarClose = () => {
//         setSnackbarOpen(false);
//       };
    
//       return (
//         <Container>
//           <Button variant="contained" color="primary" onClick={() => handleOpen()}>
//             Add New Teacher
//           </Button>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>ID</TableCell>
//                   <TableCell>Username</TableCell>
//                   <TableCell>Email</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {teachers.map((teacher) => (
//                   <TableRow key={teacher.teacherId}>
//                     <TableCell>{teacher.teacherId}</TableCell>
//                     <TableCell>{teacher.username}</TableCell>
//                     <TableCell>{teacher.email}</TableCell>
//                     <TableCell>
//                       <Button
//                         variant="outlined"
//                         color="primary"
//                         onClick={() => handleOpen(teacher)}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="outlined"
//                         color="secondary"
//                         onClick={() => handleDelete(teacher.teacherId)}
//                       >
//                         Delete
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <Dialog open={open} onClose={handleClose}>
//             <DialogTitle>{isEditing ? 'Edit Teacher' : 'Add New Teacher'}</DialogTitle>
//             <DialogContent>
//               <TextField
//                 margin="dense"
//                 name="Username"
//                 label="Username"
//                 type="text"
//                 fullWidth
//                 variant="standard"
//                 value={currentTeacher?.Username || ''}
//                 onChange={handleChange}
//               />
//               <TextField
//                 margin="dense"
//                 name="Password"
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 variant="standard"
//                 value={currentTeacher?.Password || ''}
//                 onChange={handleChange}
//               />
//               <TextField
//                 margin="dense"
//                 name="Address"
//                 label="Address"
//                 type="text"
//                 fullWidth
//                 variant="standard"
//                 value={currentTeacher?.Address || ''}
//                 onChange={handleChange}
//               />
//               <TextField
//                 margin="dense"
//                 name="DateOfJoin"
//                 label="Date Of Join"
//                 type="date"
//                 fullWidth
//                 variant="standard"
//                 InputLabelProps={{ shrink: true }}
//                 value={currentTeacher?.DateOfJoin || ''}
//                 onChange={handleChange}
//               />
//               <TextField
//                 margin="dense"
//                 name="Email"
//                 label="Email"
//                 type="email"
//                 fullWidth
//                 variant="standard"
//                 value={currentTeacher?.Email || ''}
//                 onChange={handleChange}
//               />
//               <TextField
//                 margin="dense"
//                 name="DateOfBirth"
//                 label="Date Of Birth"
//                 type="date"
//                 fullWidth
//                 variant="standard"
//                 InputLabelProps={{ shrink: true }}
//                 value={currentTeacher?.DateOfBirth || ''}
//                 onChange={handleChange}
//               />
//               <TextField
//                 margin="dense"
//                 name="Qualification"
//                 label="Qualification"
//                 type="text"
//                 fullWidth
//                 variant="standard"
//                 value={currentTeacher?.Qualification || ''}
//                 onChange={handleChange}
//               />
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose} color="primary">
//                 Cancel
//               </Button>
//               <Button onClick={handleSubmit} color="primary">
//                 {isEditing ? 'Update' : 'Add'}
//               </Button>
//             </DialogActions>
//           </Dialog>
//           <Snackbar
//             open={snackbarOpen}
//             autoHideDuration={6000}
//             onClose={handleSnackbarClose}
//           >
//             <Alert onClose={handleSnackbarClose} severity="success">
//               {snackbarMessage}
//             </Alert>
//           </Snackbar>
//         </Container>
//       );
//     };
    
   
    


// export default TeacherAdmin

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
  Alert
} from '@mui/material';

// Define regex patterns for validation
const USERNAME_REGEX = /^[A-Za-z\s]{3,20}$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TeacherAdmin = () => {
  const [teachers, setTeachers] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('https://localhost:7256/api/Teacher', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setTeachers(response.data);
    } catch (error) {
      console.error('Error fetching teachers', error);
    }
  };

  const handleOpen = (teacher = null) => {
    setIsEditing(!!teacher);
    setCurrentTeacher(teacher || {
      TeacherId: 0,
      Username: '',
      Password: '',
      Address: '',
      DateOfJoin: '',
      Email: '',
      DateOfBirth: '',
      Qualification: ''
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentTeacher(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentTeacher(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!USERNAME_REGEX.test(currentTeacher.Username)) {
      setSnackbarMessage('Username must be 3-20 letters long and may include spaces, but no numbers.');
      setSnackbarOpen(true);
      return false;
    }
    if (!PASSWORD_REGEX.test(currentTeacher.Password)) {
      setSnackbarMessage('Password must be at least 6 characters long, include uppercase, lowercase letters, a number, and a special character, and cannot contain spaces.');
      setSnackbarOpen(true);
      return false;
    }
    if (!EMAIL_REGEX.test(currentTeacher.Email)) {
      setSnackbarMessage('Invalid email address format.');
      setSnackbarOpen(true);
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      if (isEditing) {
        await axios.put(`https://localhost:7256/api/Teacher/${currentTeacher.TeacherId}`, currentTeacher, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json',
          },
        });
        setSnackbarMessage('Teacher updated successfully');
      } else {
        await axios.post('https://localhost:7256/api/Teacher/', currentTeacher, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json',
          },
        });
        setSnackbarMessage('Teacher added successfully');
      }
      handleClose();
      fetchTeachers();
    } catch (error) {
      console.error('Error submitting form', error);
      setSnackbarMessage('Error submitting form');
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7256/api/Teacher/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setSnackbarMessage('Teacher deleted successfully');
      fetchTeachers();
    } catch (error) {
      console.error('Error deleting teacher', error);
      setSnackbarMessage('Error deleting teacher');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Add New Teacher
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.TeacherId}>
                <TableCell>{teacher.TeacherId}</TableCell>
                <TableCell>{teacher.Username}</TableCell>
                <TableCell>{teacher.Email}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpen(teacher)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDelete(teacher.TeacherId)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Edit Teacher' : 'Add New Teacher'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="Username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            value={currentTeacher?.Username || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="Password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={currentTeacher?.Password || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="Address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            value={currentTeacher?.Address || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="DateOfJoin"
            label="Date Of Join"
            type="date"
            fullWidth
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={currentTeacher?.DateOfJoin || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="Email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={currentTeacher?.Email || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="DateOfBirth"
            label="Date Of Birth"
            type="date"
            fullWidth
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={currentTeacher?.DateOfBirth || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="Qualification"
            label="Qualification"
            type="text"
            fullWidth
            variant="standard"
            value={currentTeacher?.Qualification || ''}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {isEditing ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default TeacherAdmin;
