"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface DiscordMember {
  id: string;
  username: string;
  avatar: string;
}

export default function DiscordMembers() {
  const [members, setMembers] = useState<DiscordMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // Replace with your Discord server ID and bot token
        const response = await fetch(
          `https://discord.com/api/v10/guilds/1316078860944674846/members?limit=100`,
          {
            headers: {
              Authorization: ``,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Discord members");
        }

        const data = await response.json();

        const formattedMembers = data.map((member: any) => ({
          id: member.user.id,
          username: member.user.username,
          avatar: member.user.avatar
            ? `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png`
            : "https://cdn.discordapp.com/embed/avatars/0.png",
        }));

        setMembers(formattedMembers);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2
              className="font-aperture text-3xl md:text-4xl font-bold text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #00f0ff, #ff00c8, #00f0ff)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                animation: "neonGlow 2s ease-in-out infinite alternate",
              }}
            >
              Our Community
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {members.map((member) => (
              <div
                key={member.id}
                className="group relative"
                title={member.username}
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden transition-transform duration-300 transform group-hover:scale-110">
                  <Image
                    src={member.avatar}
                    alt={member.username}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-cyan-400 whitespace-nowrap">
                    {member.username}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add cyberpunk scan lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"></div>
    </section>
  );
}
