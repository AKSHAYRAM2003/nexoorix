"use client"

import { cn } from "@/lib/utils"

interface Avatar {
  imageUrl: string
  profileUrl: string
}
interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls: Avatar[]
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-2.5 items-center rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <a
          key={index}
          href={url.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block shrink-0"
        >
          <img
            key={index}
            className="h-7 w-7 rounded-full border-2 border-white object-cover shadow-xs dark:border-gray-800"
            src={url.imageUrl}
            width={28}
            height={28}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}
      {(numPeople ?? 0) > 0 && (
        <a
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-white bg-neutral-950 text-center text-[10px] font-bold text-white hover:bg-neutral-800 dark:border-gray-800 dark:bg-white dark:text-black"
          href="#"
        >
          +{numPeople}
        </a>
      )}
    </div>
  )
}
