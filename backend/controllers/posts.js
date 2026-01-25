import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString()});
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    
    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    try {
        await PostMessage.findByIdAndDelete(id);
        res.status(200).json({ message: 'Post deleted successfully' });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }   
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!req.userId) return res.status(401).json({ message: "Unauthenticated" });

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    
    try {
        const post = await PostMessage.findById(id);
        const userId = String(req.userId);
        const index = post.likes.findIndex((likeId) => String(likeId) === userId);
        
        if(index === -1) {
            post.likes.push(userId);
        } else {
            post.likes.splice(index, 1);
        }
        
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
