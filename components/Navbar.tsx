'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const user = {}; // change this to your actual user authentication logic

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="navbar">
      <nav className="flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/icons/logo.svg" alt="Logo" width={32} height={32} />
          <h1 className="text-xl font-bold">SnapCast</h1>
        </Link>

        {user && (
          <figure className="flex items-center gap-4">
            <button onClick={() => router.push('/profile/123456')}>
              <Image
                src="/assets/images/dummy.jpg"
                height={36}
                width={36}
                className="rounded-full aspect-square"
                alt="User"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src="/assets/icons/logout.svg"
                height={24}
                width={24}
                className="rotate-180"
                alt="logout"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
