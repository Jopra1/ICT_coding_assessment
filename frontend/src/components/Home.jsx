// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';

// const Home = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3001/posts')
//       .then((res) => setPosts(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Grid container spacing={3}>
//         {posts.map((post) => (
//           <Grid item xs={12} sm={6} md={4} key={post.id}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={post.img_url}
//                 alt={post.title}
//               />
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   {post.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {post.content}
//                 </Typography>
//               </CardContent>
//               <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
//                 <Button variant="contained" color="secondary">DELETE</Button>
//                 <Button variant="contained" color="primary">UPDATE</Button>
//               </Box>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Home;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={post.img_url}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.content}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
                <Button variant="contained" color="secondary">DELETE</Button>
                <Button variant="contained" color="primary">UPDATE</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
