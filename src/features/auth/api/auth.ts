import { fetcher } from '@/shared/lib/fetcher';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: string;
    email: string;
    nickname: string;
  };
}

export async function loginApi(data: LoginRequest): Promise<LoginResponse> {
  return fetcher<LoginResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
