import { EyeIcon } from '@heroicons/react/24/solid';
import { lusitana } from '@/app/ui/fonts';

export default function SkyLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <EyeIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Sky</p>
    </div>
  );
}
