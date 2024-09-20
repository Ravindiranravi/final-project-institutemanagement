import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { Button, TextField, Select, MenuItem, Typography, Container, Snackbar, IconButton, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './SignInPage.css';

const SignInPage = () => {
  const [username, setUsername] = useState(''); // Initial value is empty
  const [password, setPassword] = useState(''); // Initial value is empty
  const [role, setRole] = useState('Student');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Regex patterns
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/; // Alphanumeric, minimum 3 characters
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // Minimum 6 characters, must include letters and numbers

    // Validate username and password
    if (!usernameRegex.test(username)) {
      setError('Username must be at least 3 characters long and contain only letters and numbers.');
      setSnackbarOpen(true);
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Password must be at least 6 characters long, including letters and numbers.');
      setSnackbarOpen(true);
      return;
    }

    try {
      const response = await axios.post('https://localhost:7256/api/Login', {
        username,
        password,
        role,
      });
      console.log(response);

      const { token, id } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('Id', id);
      setSuccess(`Login successful!`);
      setError('');
      setSnackbarOpen(true);

      switch (role) {
        case 'Admin':
          navigate('/AdminDashboard');
          break;
        case 'Student':
          navigate('/studentDashboard');
          break;
        case 'Teacher':
          navigate('/TeacherDashboard');
          break;
        default:
          break;
      }
    } catch (err) {
      setError(err.response?.data || 'Login failed. Please try again.');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleNewUser = () => {
    navigate('/student-new-user');
  };

  return (
    <Container className="signin-container">
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username" // Add placeholder for better UX
          InputLabelProps={{ shrink: true }} // Ensures the label doesn't overlap the placeholder
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password" // Add placeholder
          InputLabelProps={{ shrink: true }} // Prevents overlap with placeholder
        />
        <Select
          label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          fullWidth
          variant="outlined"
          margin="normal"
        >
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Teacher">Teacher</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
        </Select>
        {error && <Typography color="error" variant="body2">{error}</Typography>}
        {success && <Typography color="success" variant="body2">{success}</Typography>}
        <Button type="submit" variant="contained" color="primary">
          Sign In
        </Button>
        <Button type="button" variant="outlined" color="secondary" onClick={handleNewUser}>
          New User? Register here
        </Button>
      </form>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        action={
          <IconButton size="small" color="inherit" onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert onClose={handleCloseSnackbar} severity={error ? 'error' : 'success'}>
          {error || success}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SignInPage;
