import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/store/authStore';
import { loginApi } from './api/auth';

export function useLogin() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      setUser(data.user);
      toast.success(`${data.user.nickname}님 환영합니다 🎉`);
      router.push('/match');
    },
    onError: () => {
      toast.error('아이디나 비밀번호를 다시 확인해주세요.');
    },
  });
}
