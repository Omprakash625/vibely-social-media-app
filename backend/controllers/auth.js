import { jwtDecode } from 'jwt-decode';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const googleLogin = async (req, res) => {
    try {
        const { credential } = req.body;

        // Verify and decode the Google token
        const decoded = jwtDecode(credential);

        const { email, name, picture, sub: googleId } = decoded;

        // Check if user already exists
        let user = await User.findOne({ email });

        if (!user) {
            // Create new user if doesn't exist
            user = new User({
                name,
                email,
                googleId,
                picture,
            });
            await user.save();
        } else if (!user.googleId) {
            // Update user with googleId if it doesn't have one
            user.googleId = googleId;
            if (picture) user.picture = picture;
            await user.save();
        }

        // Generate JWT token with user's MongoDB _id
        const token = jwt.sign({ email: user.email, id: user._id }, 'test', { expiresIn: '1h' });

        // Return user data with token
        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                picture: user.picture,
            },
            token,
        });
    } catch (error) {
        console.error('Google login error:', error);
        res.status(400).json({
            message: 'Google login failed',
            error: error.message,
        });
    }
};
