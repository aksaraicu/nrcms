import express from "express";
import { 
    getPosts,
    getPostByID,
    createPost,
    updatePost,
    deletePost, 
} from "../controller/PostController.js";

const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPostByID);
router.post("/posts", createPost);
router.patch("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

export default router;
