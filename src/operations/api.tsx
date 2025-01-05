export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const endPoints = {
  SIGN_UP: `${BASE_URL}/api/v1/auth/signup`,
  SIGN_IN: `${BASE_URL}/api/v1/auth/signin`,
  DASHBOARD: `${BASE_URL}/api/v1/brain/dashboard`,
  SHARE: `${BASE_URL}/api/v1/share`,
};
