import Image from "next/image"
import { lusitana } from '@/app/ui/fonts';

export default function EvvieLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
          src="/assets/images/evvie.ai-logo.svg"
          alt="logo"
          width={180}
          height={28}
        />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
