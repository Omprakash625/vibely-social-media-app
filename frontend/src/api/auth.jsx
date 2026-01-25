import { authApi } from './index';

export const googleLogin = (credential) => authApi.post('/auth/google-login', { credential });
