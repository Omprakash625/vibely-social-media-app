import { authApi } from './index';

export const googleLogin = (credential) => authApi.post('/google-login', { credential });
