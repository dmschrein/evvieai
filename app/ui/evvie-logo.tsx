import Image from "next/image"
import { lusitana } from '@/app/ui/fonts';

export default function EvvieLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-black
      `}
    >
      <Image
          src="/assets/images/evvie.ai-logo.svg"
          alt="logo"
          width={80}
          height={28}
        />
      <p className="text-[34px]">Evvie AI</p>
    </div>
  );
}
