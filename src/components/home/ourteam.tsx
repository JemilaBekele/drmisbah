"use client";

import React from "react";

type TeamMember = {
  name: string;
  role: string;
  note: string;
  initials: string;
};

type Department = {
  title: string;
  description: string;
  members: TeamMember[];
};

const departments: Department[] = [
  {
    title: "General Dentistry",
    description:
      "The team most patients see first — checkups, cleanings, and everyday care.",
    members: [
      {
        name: "Dr. Sara Alemu",
        role: "General Dentist",
        note: "Joined in 2020. Focuses on preventive care and patient education.",
        initials: "SA",
      },
      {
        name: "Dr. Nathnael Girma",
        role: "General Dentist",
        note: "Handles fillings and restorative work, with a gentle chairside manner.",
        initials: "NG",
      },
      {
        name: "Dr. Liya Tesfaye",
        role: "General Dentist",
        note: "Runs the clinic's Saturday walk-in checkup hours.",
        initials: "LT",
      },
    ],
  },
  {
    title: "Orthodontics & Specialists",
    description:
      "Advanced and specialist treatments, from braces to root canals.",
    members: [
      {
        name: "Dr. Yonas Bekele",
        role: "Orthodontist",
        note: "Leads the clinic's braces and clear-aligner program.",
        initials: "YB",
      },
      {
        name: "Dr. Mihret Solomon",
        role: "Endodontist",
        note: "Specialises in root canal treatment and saving damaged teeth.",
        initials: "MS",
      },
      {
        name: "Dr. Abel Fikru",
        role: "Oral & Maxillofacial Surgeon",
        note: "Handles wisdom teeth and complex extractions.",
        initials: "AF",
      },
    ],
  },

];

const OurTeamPage = () => {
  return (
    <main className="bg-[#FAFAF8] min-h-screen">
      {/* Hero */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[#028A0F] mb-3">
              Meet the team
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2463] leading-tight mb-5 max-w-2xl">
              The people behind every visit at Dr Misbah Speciality Dental
              Clinic
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Every appointment involves more people than the dentist you
              meet in the chair. Here&apos;s the full team from the specialists
              handling advanced procedures to the coordinators who make sure
              your visit starts on time.
            </p>
          </div>

          {/* Founder spotlight */}
          <div className="lg:col-span-5">
            <div className="bg-[#0A2463] rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/20 rounded-full -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#0A2463] flex items-center justify-center text-xl font-bold mb-5">
                  DM
                </div>
                <h2 className="text-xl font-bold text-white mb-1">
                  Dr. Misbah Sultan
                </h2>
                <p className="text-[#D4AF37] text-sm font-medium mb-4">
                  Founder & Lead Specialist
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Founded the clinic with a vision to bring complete,
                  trustworthy dental care to the community and to build a
                  team that keeps learning as the practice grows.
                </p>
                <p className="text-white/60 text-xs border-t border-white/15 pt-4">
                  Recognised nationally for the clinic&apos;s ranking among
                  Ethiopia&apos;s leading speciality dental practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="space-y-16 lg:space-y-20">
          {departments.map((dept) => (
            <div key={dept.title}>
              <div className="flex items-baseline gap-4 mb-8 max-w-2xl">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A2463] whitespace-nowrap">
                  {dept.title}
                </h2>
                <span className="h-px flex-1 bg-gray-200"></span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-xl">
                {dept.description}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.members.map((member) => (
                  <div
                    key={member.name}
                    className="border border-gray-200 rounded-lg p-6 bg-white"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#028A0F]/10 text-[#028A0F] flex items-center justify-center text-sm font-semibold mb-4">
                      {member.initials}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-0.5">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#028A0F] font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default OurTeamPage;