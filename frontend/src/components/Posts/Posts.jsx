import { useSelector } from "react-redux";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Grid } from "@mui/material";

import Post from "./Post/Post.jsx";
import styles from "./style.jsx";

const Posts = ({ setCurrentId }) => {
  const { posts, loading, error } = useSelector((state) => state.posts);
  
  // console.log("Posts from Redux store:", posts);

  // Handle error state
  if (error) {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  // Handle loading state
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "300px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Handle empty state
  if (!posts || posts.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h6">No posts available</Typography>
      </Box>
    );
  }

  return (
    <Grid sx={styles.mainContainer} container spacing={2}>
      {posts.map((post) => (
        <Grid
          key={post._id}
          size={{ xs: 12, sm: 4 }}
        >
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Posts;
