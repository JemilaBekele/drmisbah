"use client";

import React from "react";

type TiktokVideo = {
  username: string;
  videoId: string;
  cite: string;
  caption?: string;
};

const videos: TiktokVideo[] = [
  {
    username: "dr.misbah.dental.clinic",
    videoId: "7521749947352485125",
    cite:
      "https://www.tiktok.com/@dr.misbah.dental.clinic/video/7521749947352485125",
         caption: "Recognised among Ethiopia's leading speciality dental practices.",

  },
  {
    username: "dr.misbah.dental.clinic",
    videoId: "7645681454415957268",
    cite:
      "https://www.tiktok.com/@dr.misbah.dental.clinic/video/7645681454415957268",
          caption: "Dr Misbah Speciality Dental Clinic",

  },
  {
    username: "dr.misbah.dental.clinic",
    videoId: "7610062966532115713",
    cite:
      "https://www.tiktok.com/@dr.misbah.dental.clinic/video/7610062966532115713",
    caption: "CBCT & OPG for dental students — inside our OPG center",
  },
];

function TiktokCard({ video }: { video: TiktokVideo }) {
  return (
    <div className="w-full max-w-[325px]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black shadow-sm">
        <iframe
          src={`https://www.tiktok.com/player/v1/${video.videoId}?description=1&music_info=0&rel=0`}
          className="absolute inset-0 h-full w-full"
          style={{
            border: "none",
          }}
          allow="autoplay; encrypted-media;"
          title={`TikTok video by @${video.username}`}
        />
      </div>

      {video.caption && (
        <p className="mt-3 px-1 text-center text-sm text-gray-600">
          {video.caption}
        </p>
      )}
    </div>
  );
}

export default function OurTiktokPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-6 py-14 text-center lg:px-8 lg:py-20">
          <p className="mb-3 text-sm font-medium text-[#028A0F]">
            Follow along
          </p>

          <h1 className="mb-5 text-3xl font-bold text-[#0A2463] sm:text-4xl lg:text-5xl">
            Dr Misbah Speciality Dental Clinic on TikTok
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Behind-the-scenes moments, dental education for students, and
            patient stories from the clinic — straight from our TikTok.
          </p>

          <a
            href="https://www.tiktok.com/@dr.misbah.dental.clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0A2463] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0A2463]/90"
          >
            Follow @dr.misbah.dental.clinic
          </a>
        </div>
      </section>

      {/* Videos */}
      <section className="container mx-auto px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <TiktokCard key={video.videoId} video={video} />
          ))}
        </div>
      </section>
    </main>
  );
}