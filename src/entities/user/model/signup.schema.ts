import { z } from 'zod';

export const signupSchema = z
  .object({
    email: z
      .string()
      .min(1, '이메일은 필수 입력입니다.')
      .email('올바른 이메일 형식을 입력해주세요.'),
    password: z
      .string()
      .min(8, '8자리 이상 비밀번호를 사용하세요.')
      .min(1, '비밀번호는 필수 입력입니다.'),
    confirmPassword: z.string().min(1, '비밀번호 확인은 필수입니다.'),
    name: z.string().min(2, '2자리 이상 이름을 사용하세요.').min(1, '이름은 필수 입력입니다.'),
    height: z
      .string()
      .min(2, '숫자로 2자리 이상 입력해주세요.')
      .regex(/^[0-9]{2,}$/, '숫자만 입력 가능하며 2자리 이상이어야 합니다.')
      .min(1, '키는 필수 입력입니다.'),
    nickname: z
      .string()
      .min(2, '2자리 이상 닉네임을 사용하세요.')
      .min(1, '닉네임은 필수 입력입니다.'),
    job: z.string().min(2, '2자리 이상 사용하세요.').min(1, '직업은 필수 입력입니다.'),
    gender: z.string().min(1, '성별은 필수 입력입니다.'),
    birthday: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, '올바른 형식을 입력해주세요.')
      .min(1, '생년월일은 필수 입력입니다.'),
    region: z.string().min(1, '지역은 필수 입력입니다.'),
    phone: z
      .string()
      .regex(/^\d{3}-\d{4}-\d{4}$/, '올바른 형식을 입력해주세요.')
      .optional(),
    mbti: z.string().min(1, 'MBTI는 필수 입력입니다.'),
    interests: z
      .array(z.string())
      .min(2, '최소 2개 이상 선택해주세요.')
      .max(3, '최대 3개까지 선택 가능합니다.'),
    listening: z
      .array(z.string())
      .min(1, '최소 1개 이상 선택해주세요.')
      .max(3, '최대 3개까지 선택 가능합니다.'),
    selfintro: z
      .array(z.string())
      .min(1, '최소 1개 이상 선택해주세요.')
      .max(3, '최대 3개까지 선택 가능합니다.'),
    images: z
      .array(z.string())
      .min(2, '최소 2장의 이미지를 등록해야 합니다.')
      .max(6, '최대 6장까지 등록 가능합니다.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export type SignupFormValues = z.infer<typeof signupSchema>;
