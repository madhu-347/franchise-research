import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/image-3.png"
        alt="Company Logo"
        width={140}
        height={48}
        priority
        className="h-auto object-contain pr-2"
      />
    </Link>
  );
}
