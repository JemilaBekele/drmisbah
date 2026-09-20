"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  FaHospitalAlt,
  FaUserMd,
  FaGraduationCap,
  FaTrophy,
} from "react-icons/fa";

type StoryItem = {
  icon: React.ReactNode;
  year: string;
  title: string;
  description: string;
};

const storyItems: StoryItem[] = [
  {
    icon: <FaHospitalAlt />,
    year: "The Beginning",
    title: "Dr Misbah Founds the Clinic",
    description:
      "Dr Misbah founded the clinic with a vision to bring complete, trustworthy dental care to the community, starting from the ground up with a passion for patient wellbeing.",
  },
  {
    icon: <FaUserMd />,
    year: "Growth",
    title: "A Speciality Dental Clinic",
    description:
      "Under Dr Misbah's leadership, the clinic grew into a full speciality dental clinic, offering advanced treatments across multiple areas of dentistry under one roof.",
  },
  {
    icon: <FaGraduationCap />,
    year: "Culture",
    title: "Education Comes First",
    description:
      "Education is a core part of the clinic's culture. Dr Misbah continuously encourages and supports the team to further their studies and upgrade their professional status.",
  },
  {
    icon: <FaTrophy />,
    year: "Recognition",
    title: "Ranked #1 in Ethiopia",
    description:
      "Dr Misbah's dedication earned national recognition, winning an Ethiopian health award and ranking first place among speciality clinics in the country.",
  },
];

const NUM = storyItems.length;
const STEP = 360 / NUM;

// ── AUTO-SPIN TIMING ──────────────────────────────────────────────
const AUTO_SPEED = 0.05;
const RESUME_DELAY = 200;
// ──────────────────────────────────────────────────────────────────

const NODE_FRACTION = 0.19;

const AboutHope = () => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [wheelSize, setWheelSize] = useState(700);
  const [rotation, setRotation] = useState(90);
  const [activeIndex, setActiveIndex] = useState(0);
  const dragging = useRef(false);
  const lastAngle = useRef(0);
  const rotationRef = useRef(90);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoSpin = useRef(true);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const measure = () => {
      if (wheelRef.current) {
        setWheelSize(wheelRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const tick = () => {
      if (autoSpin.current && !dragging.current) {
        rotationRef.current += AUTO_SPEED;
        setRotation(rotationRef.current);
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const normalized = ((rotation % 360) + 360) % 360;
    let closestIdx = 0;
    let closestDiff = Infinity;
    for (let i = 0; i < NUM; i++) {
      const itemAngle = (((i * STEP + normalized - 90) % 360) + 360) % 360;
      const diff = Math.min(itemAngle, 360 - itemAngle);
      if (diff < closestDiff) {
        closestDiff = diff;
        closestIdx = i;
      }
    }
    if (closestIdx !== activeIndex) setActiveIndex(closestIdx);
  }, [rotation, activeIndex]);

  const pauseAutoSpin = () => {
    autoSpin.current = false;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };

  const scheduleResume = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      autoSpin.current = true;
    }, RESUME_DELAY);
  };

  const angleFromCenter = useCallback((clientX: number, clientY: number) => {
    const el = wheelRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    return (Math.atan2(clientY - cy, clientX - cx) * 180) / Math.PI;
  }, []);

  const snapToNearest = useCallback((deg: number) => {
    const normalized = ((deg % 360) + 360) % 360;
    let closestIdx = 0;
    let closestDiff = Infinity;
    for (let i = 0; i < NUM; i++) {
      const itemAngle = (((i * STEP + normalized - 90) % 360) + 360) % 360;
      const diff = Math.min(itemAngle, 360 - itemAngle);
      if (diff < closestDiff) {
        closestDiff = diff;
        closestIdx = i;
      }
    }
    const snappedRotation = -closestIdx * STEP + 90;
    rotationRef.current = snappedRotation;
    setRotation(snappedRotation);
    setActiveIndex(closestIdx);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    pauseAutoSpin();
    lastAngle.current = angleFromCenter(e.clientX, e.clientY);
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const currentAngle = angleFromCenter(e.clientX, e.clientY);
    const delta = currentAngle - lastAngle.current;
    lastAngle.current = currentAngle;
    rotationRef.current += delta;
    setRotation(rotationRef.current);
  };

  const onPointerUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    snapToNearest(rotationRef.current);
    scheduleResume();
  };

  const goToIndex = (idx: number) => {
    pauseAutoSpin();
    const target = -idx * STEP + 90;
    rotationRef.current = target;
    setRotation(target);
    setActiveIndex(idx);
    scheduleResume();
  };

  // Smaller wheels get a slightly larger center circle (relative to wheel)
  // and a bit more clearance, since short text still needs room to breathe.
  const isCompact = wheelSize < 400;
  const CENTER_FRACTION = isCompact ? 0.56 : 0.5;
  const marginFraction = isCompact ? 0.035 : 0.02;

  const nodeSize = wheelSize * NODE_FRACTION;
  const radius = wheelSize / 2 - nodeSize / 2 - wheelSize * marginFraction;

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#0A2463] via-[#0f3a8a] to-[#028A0F]/80 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#028A0F]/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <p className="text-[#7CFFB2] font-semibold uppercase tracking-widest text-sm sm:text-base lg:text-lg mb-2 sm:mb-3">
            Our Story
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-5 px-2">
            The Journey of Dr Misbah Speciality Dental Clinic
          </h2>
          <p className="text-white/85 max-w-3xl mx-auto text-sm sm:text-lg leading-relaxed px-2">
            Watch the wheel spin through our story on its own, or drag it
            yourself — from a single vision to a nationally recognised
            speciality clinic.
          </p>
        </div>

        {/* Circular story wheel */}
        <div className="flex justify-center px-2">
          <div
            ref={wheelRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            className="relative w-[92vw] h-[92vw] max-w-[340px] max-h-[340px] sm:w-[500px] sm:h-[500px] sm:max-w-none sm:max-h-none md:w-[620px] md:h-[620px] lg:w-[760px] lg:h-[760px] rounded-full touch-none select-none cursor-grab active:cursor-grabbing"
          >
            {/* Outer rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/30"></div>
            <div className="absolute inset-4 sm:inset-6 rounded-full border border-white/15"></div>

            {/* Center content */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center text-center p-3 sm:p-8 z-10 overflow-hidden"
              style={{
                width: `${CENTER_FRACTION * 100}%`,
                height: `${CENTER_FRACTION * 100}%`,
              }}
            >
              <span className="text-[9px] sm:text-base font-semibold uppercase tracking-wide text-[#028A0F] mb-1 sm:mb-3">
                {storyItems[activeIndex].year}
              </span>
              <h3 className="text-[12px] sm:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-4 leading-tight line-clamp-2">
                {storyItems[activeIndex].title}
              </h3>
              <p className="text-[9px] sm:text-lg text-gray-600 leading-tight sm:leading-relaxed max-w-md line-clamp-4 sm:line-clamp-none">
                {storyItems[activeIndex].description}
              </p>
            </div>

            {/* Orbiting nodes */}
            {storyItems.map((item, idx) => {
              const angleDeg = idx * STEP + rotation;
              const angleRad = (angleDeg * Math.PI) / 180;
              const x = radius * Math.cos(angleRad);
              const y = radius * Math.sin(angleRad);
              const isActive = idx === activeIndex;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => goToIndex(idx)}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    width: `${NODE_FRACTION * 100}%`,
                    height: `${NODE_FRACTION * 100}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-lg sm:text-3xl lg:text-4xl transition-all duration-300 shadow-lg z-20 ${
                    isActive
                      ? "bg-[#028A0F] text-white scale-110 ring-4 ring-[#028A0F]/30"
                      : "bg-white text-[#0A2463] hover:scale-105"
                  }`}
                  aria-label={item.title}
                >
                  {item.icon}
                </button>
              );
            })}
          </div>
        </div>

        {/* Drag hint + dots */}
        <div className="flex flex-col items-center mt-8 sm:mt-10 gap-3 sm:gap-4 px-4">
          <p className="text-xs sm:text-base text-white/70 text-center">
            ↻ Spinning on its own — drag the wheel or tap an icon anytime
          </p>
          <div className="flex gap-2 sm:gap-3">
            {storyItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                className={`h-2.5 sm:h-3 rounded-full transition-all ${
                  idx === activeIndex ? "bg-[#FFD700] w-6 sm:w-8" : "bg-white/40 w-2.5 sm:w-3"
                }`}
                aria-label={`Go to story ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-16 sm:mt-24">
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-md p-6 sm:p-7 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              To provide complete, compassionate dental care while
              continuously investing in the education and growth of our
              team, so every patient receives world-class treatment.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-md p-6 sm:p-7 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              To remain Ethiopia&apos;s leading speciality dental clinic,
              known equally for clinical excellence and for the growth of
              the people who deliver it.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-md p-6 sm:p-7 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Core Values
            </h3>
            <ul className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-1.5 list-none">
              <li>Excellence in Care</li>
              <li>Ethics and Integrity</li>
              <li>Continuous Education</li>
              <li>Trust and Efficiency</li>
              <li>Commitment to Quality</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHope;