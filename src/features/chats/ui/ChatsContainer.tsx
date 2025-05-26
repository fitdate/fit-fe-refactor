'use client';

import { useEffect, useState } from 'react';
import Spinner from '@/shared/components/ui/spinner';

export interface ChatsProfile {
  id: string;
  name: string;
  age: number;
  location: string;
  likes: number;
  imageUrl: string;
  isOnline: boolean;
  lastMessage: string;
  lastMessageTime: string;
  isUnread: boolean;
}

const chatsMockData: ChatsProfile[] = [
  {
    id: 'received-1',
    name: '김지은',
    age: 24,
    location: '서울',
    likes: 320,
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    isOnline: true,
    lastMessage: '안녕하세요! 반가워요 :)',
    lastMessageTime: '오전 10:24',
    isUnread: true,
  },
  {
    id: 'received-2',
    name: '이민준',
    age: 27,
    location: '부산',
    likes: 210,
    imageUrl:
      'https://images.unsplash.com/photo-1596940872506-6d16d1b06fb0?auto=format&fit=crop&w=400&q=80',
    isOnline: false,
    lastMessage: '안녕하세요! 반가워요 :)',
    lastMessageTime: '오전 10:24',
    isUnread: true,
  },
  {
    id: 'received-3',
    name: '박수진',
    age: 25,
    location: '인천',
    likes: 150,
    imageUrl:
      'https://images.unsplash.com/photo-1739133783212-e1c93795d9c7?auto=format&fit=crop&w=400&q=80',
    isOnline: true,
    lastMessage: '안녕하세요! 반가워요 :)',
    lastMessageTime: '오전 10:24',
    isUnread: true,
  },
  {
    id: 'received-4',
    name: '최현우',
    age: 26,
    location: '대구',
    likes: 480,
    imageUrl:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
    isOnline: false,
    lastMessage: '안녕하세요! 반가워요 :)',
    lastMessageTime: '오전 10:24',
    isUnread: true,
  },
  {
    id: 'received-5',
    name: '정민서',
    age: 23,
    location: '서울',
    likes: 390,
    imageUrl:
      'https://images.unsplash.com/photo-1701351382146-035bd68cdb6d?auto=format&fit=crop&w=400&q=80',
    isOnline: true,
    lastMessage: '안녕하세요! 반가워요 :)',
    lastMessageTime: '오전 10:24',
    isUnread: true,
  },
];

export default function ChatsContainer() {
  const [isLoading, setIsLoading] = useState(true);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {};

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <main className="flex min-h-[calc(100vh-160px)] w-full flex-col bg-gradient-to-br from-violet-50 via-white to-rose-50">
      {isLoading ? (
        <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center">
          <Spinner size="lg" />
          <p className="mt-4 text-sm text-zinc-500">채팅 목록을 불러오는 중...</p>
        </div>
      ) : (
        <div
          className="scrollbar-hide container mx-auto mb-16 max-h-[calc(100vh-160px)] overflow-y-auto px-6 py-8"
          onScroll={handleScroll}
        >
          <header className="mb-12">
            <div className="relative flex items-center justify-center">
              <h1 className="text-2xl font-bold text-zinc-900">채팅 목록</h1>
            </div>
            <p className="mt-2 text-center text-sm text-zinc-500">
              지금, 당신을 향한 이야기가 시작돼요.
            </p>
          </header>

          <section className="flex flex-col gap-4">
            {chatsMockData.map((profile) => (
              <div
                key={profile.id}
                className="flex cursor-pointer items-center gap-4 rounded-xl bg-white p-4 shadow transition hover:bg-zinc-50"
              >
                <img
                  src={profile.imageUrl}
                  alt={profile.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-zinc-900">{profile.name}</span>
                    <span className="text-xs text-zinc-500">
                      {profile.age}세 · {profile.location}
                    </span>
                  </div>
                  <div className="truncate text-sm text-zinc-600">{profile.lastMessage}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-zinc-400">{profile.lastMessageTime}</span>
                  {profile.isUnread && (
                    <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>
      )}
    </main>
  );
}
