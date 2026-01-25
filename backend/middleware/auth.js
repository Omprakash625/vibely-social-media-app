import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        if(!authHeader) {
            return res.status(401).json({ message: 'No token provided' });
        }
        
        const token = authHeader.split(" ")[1];
        
        if(!token) {
            return res.status(401).json({ message: 'No token provided' });
        }
        
        const isCustomAuth = token.length < 500;
        let decodedData;
        
        if(isCustomAuth) {
            decodedData = jwt.verify(token, 'test');
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        
        if(!req.userId) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        next();
    } catch (error) {
        console.log('Auth error:', error.message);
        return res.status(401).json({ message: 'Authentication failed', error: error.message });
    }
}

export default auth;