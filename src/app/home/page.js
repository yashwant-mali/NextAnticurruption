'use client';
import Link from 'next/link';
import UserList from '../components/userList';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <Link href="/register">Register</Link> | 
      <Link href="/login">Login</Link>
      <UserList />
    </div>
  );
}
