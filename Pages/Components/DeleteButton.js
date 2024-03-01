// ParentComponent.js

import React, { useState } from 'react';
import DeleteDialog from './DeleteDialog';

const ParentComponent = () => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleCancelDelete = () => {
    setIsDeleteDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    // Implement your delete logic here
    console.log('Deleting...');
    setIsDeleteDialogOpen(false);
  };

  return (
    <div>
      <h1>Your Content</h1>
      <button onClick={handleDeleteClick}>Delete</button>

      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        onCancel={handleCancelDelete}
        onDelete={handleConfirmDelete}
      />
    </div>
  );
};

export default ParentComponent;
