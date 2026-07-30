import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full bg-white pt-20">
      <div className="relative w-full h-[70vh] sm:h-[85vh] md:h-[90vh] overflow-hidden rounded-b-3xl sm:rounded-b-[2.5rem] md:rounded-b-[3.5rem] shadow-xl shadow-slate-900/5">
        <Image
          src="/assets/iamges/landingpage.png"
          alt="Landing Page Hero"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
