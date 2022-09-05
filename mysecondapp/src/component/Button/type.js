import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ButtonTypes() {
  return (
    <Stack direction="row" spacing={5}>
      <Button onClick={() => {
    alert('clicked');
  }} variant="outlined">Primary</Button>
      <Button variant="text" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#outlined-buttons">
        Link
      </Button>
      <Button variant="contained" href="#outlined-buttons" color="error">
        Link
      </Button>
      <Button variant="outlined" href="#outlined-buttons" color="success"size="small">
        Link
      </Button>
      

    </Stack>

  );
}
