import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  ButtonBase,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpAltOutlined from "@mui/icons-material/ThumbUpAltOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { Box } from "@mui/material";
import styles from "./style.jsx";
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../../../actions/posts.jsx";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    // Use the _id from user profile, not googleId, since backend uses JWT with _id
    const userId = user?.result?.id || user?.result?._id;
    const hasLiked = post.likes.some((like) => String(like) === String(userId));
    const Icon = hasLiked ? ThumbUpAltIcon : ThumbUpAltOutlined;

    return (
      <>
        <Icon fontSize="small" />
        &nbsp;
        {post.likes.length === 0
          ? "Like"
          : hasLiked
            ? post.likes.length > 2
              ? `You and ${post.likes.length - 1} others`
              : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`
            : `${post.likes.length} ${
                post.likes.length === 1 ? "Like" : "Likes"
              }`}
      </>
    );
  };

  const Delete = () => {
    const userId = user?.result?.id || user?.result?._id;
    if (
      userId !== null &&
      userId !== undefined &&
      post.creator !== null &&
      post.creator !== undefined &&
      String(userId) === String(post.creator)
    ) {
      try {
        return (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        );
      } catch (error) {
        console.error(error);
      }
    }
    return null;
  };

  return (
    <>
      <Card sx={styles.card}>
        <CardMedia
          sx={styles.media}
          image={post.selectedFile}
          title={post.title}
        />
        <Box sx={styles.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </Box>
        <Box sx={styles.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => {
              setCurrentId(post._id);
            }}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </Box>
        <Box sx={styles.details}>
          <Typography variant="body2" color="textSecondary">
            {post.tags == "" ? "No tags" : post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </Box>
        <Typography sx={styles.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <CardContent>
          <Typography
            sx={styles.message}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {post.message}
          </Typography>
        </CardContent>
        <CardActions sx={styles.cardActions}>
          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={() => {
              dispatch(likePost(post._id));
            }}
          >
            <Likes />
          </Button>
          <Delete />
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
