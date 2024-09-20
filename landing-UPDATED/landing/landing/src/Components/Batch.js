import React, { useState, useEffect } from 'react';
import api from '../../api';
import AddBatch from './AddBatch'; // Import the AddBatch component
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const Batch = () => {
  const [batches, setBatches] = useState([]);
  const [editBatch, setEditBatch] = useState(null);

  useEffect(() => {
    fetchBatches();
  }, []);

  const fetchBatches = async () => {
    try {
      const response = await api.get('/batches');
      setBatches(response.data);
    } catch (error) {
      console.error("Error fetching batches", error);
    }
  };

  const deleteBatch = async (id) => {
    try {
      await api.delete(`/batches/${id}`);
      fetchBatches(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting batch", error);
    }
  };

  const handleEdit = (batch) => {
    setEditBatch(batch); // Set the batch to be edited
  };

  const resetEdit = () => {
    setEditBatch(null); // Clear the edit mode
  };

  return (
    <div>
      <h2>Batches List</h2>

      {/* Batch Table */}
      <TableContainer component={Paper}>
        <Table aria-label="batches table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Batch Name</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {batches.map((batch) => (
              <TableRow key={batch.id}>
                <TableCell>{batch.id}</TableCell>
                <TableCell>{batch.batchName}</TableCell>
                <TableCell>{batch.duration}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleEdit(batch)}>
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteBatch(batch.id)}
                    style={{ marginLeft: '10px' }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h3>{editBatch ? 'Edit Batch' : 'Add New Batch'}</h3>

      {/* Add/Edit Batch Form */}
      <AddBatch fetchBatches={fetchBatches} editBatch={editBatch} resetEdit={resetEdit} />
    </div>
  );
};

export default Batch;