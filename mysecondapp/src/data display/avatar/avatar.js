import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AvatarGroup } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


export default function ImageAvatars() {
  return (
    <Stack spacing={6} direction="row">
      <Badge badgeContent={4} color="secondary">
        <MailIcon color="action" />
      </Badge>
      
    <AvatarGroup total={24}>
    
      <Avatar alt="tree" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
      <Avatar alt="Water" src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" />
      <Avatar alt="sand" src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg" />
      <Avatar>H</Avatar>
<Avatar sx={{ bgcolor: "deepOrange"[500] }}>N</Avatar>
      <Avatar>
        <FolderIcon />
      </Avatar>
    </AvatarGroup>
    </Stack>
  );
}
