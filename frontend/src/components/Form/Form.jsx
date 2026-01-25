import { useState, useRef, useEffect } from "react";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";
import styles from "./style.jsx";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.jsx";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();
  const [base64, setBase64] = useState("");
  const fileInputRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("profile"));

  const post = useSelector((state) =>
    state.posts.posts.find((p) => p._id === currentId),
  );

  useEffect(() => {
    if (post) {
      setPostData(post);
    } else {
      clear();
    }
  }, [post, currentId]);

  useEffect(() => {
    if (postData.selectedFile) {
      setBase64(postData.selectedFile); // only set if there’s an image
    } else {
      setBase64(null); // clear preview if no image
    }
  }, [postData.selectedFile]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64(reader.result);
      setPostData({ ...postData, selectedFile: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    setBase64("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // shows browser validation UI
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }

    if (currentId) {
      dispatch(
        updatePost({
          id: currentId,
          post: { ...postData, selectedFile: base64, name: user?.result?.name },
        }),
      );
    } else {
      dispatch(createPost({ ...postData, selectedFile: base64, name: user?.result?.name }));
    }
    clear();
  };

  if(!user?.result?.name ) {
    return (
      <Paper sx={styles.paper}>
        <Typography variant="h6" align="center">
          Please Sign in to create and like other Vibely Posts.
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper sx={styles.paper}>
      <form
        autoComplete="off"
        noValidate
        sx={`${styles.root} ${styles.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Updating" : "Creating"} a Vibe!
        </Typography>
        <TextField
          sx={styles.textField}
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          required
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          sx={styles.textField}
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          required
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          sx={styles.textField}
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />

        {base64 && (
          <Box sx={styles.imagePreview}>
            <img
              src={base64}
              alt="Preview"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
        )}

        <input
          ref={fileInputRef}
          sx={styles.fileInput}
          type="file"
          required
          onChange={handleImageChange}
        />
        <Button
          sx={styles.button}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          sx={styles.button}
          variant="contained"
          color="secondary"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
