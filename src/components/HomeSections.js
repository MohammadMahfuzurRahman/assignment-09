
import Link from "next/link";
import {
  ArrowRight,
  Star,
  BookOpen,
  Users,
  CalendarCheck,
  GraduationCap,
  ShieldCheck,
  Clock,
  Target,
  Search,
  CheckCircle2,
} from "lucide-react";
const features = [
  {
    icon: Users,
    title: "Expert Tutors",
    description:
      "Connect with tutors who can guide you through your learning journey.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Booking",
    description:
      "Choose suitable learning sessions according to your schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Easy Management",
    description:
      "Manage your tutors and booked sessions from one convenient place.",
  },
];

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find Your Tutor",
    description:
      "Explore available tutors and find someone who matches your learning needs.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Book a Session",
    description:
      "Choose your preferred tutor and book an available learning session.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Start Learning",
    description:
      "Get ready to learn, practice, and work toward your academic goals.",
  },
];
const benefits = [
  "Simple tutor discovery",
  "Convenient session booking",
  "Personalized learning options",
  "Easy-to-use dashboard",
];
export default function HomeSections() {
  return (
    <>
      {/* Featured Tutors */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-600">
                Meet Our Tutors
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Find the Right Tutor for You
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Discover learning opportunities and connect with tutors
                who understand your educational goals.
              </p>
            </div>
            <Link
              href="/tutors"
              className="inline-flex items-center gap-2 font-semibold text-teal-700 transition hover:text-teal-900"
            >
              Explore All Tutors
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
              >
                <div className="flex h-48 items-center justify-center `bg-gradient-to-br` from-teal-50 to-cyan-100">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-teal-600 shadow-md">
                    <GraduationCap size={48} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                      Tutor Profile
                    </span>

                    <span className="flex items-center gap-1 text-sm text-slate-500">
                      <Star
                        size={16}
                        className="fill-amber-400 text-amber-400"
                      />
                      Explore
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    Discover Your Tutor
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Explore tutor profiles to find a suitable match
                    for your preferred subject.
                  </p>
                  <Link
                    href="/tutors"
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-700 transition group-hover:gap-3"
                  >
                    View Tutors
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-slate-400">
            Tutor cards are placeholders and will be connected to MongoDB later.
          </p>
        </div>
      </section>
      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-teal-600">
              Simple Process
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              How MediQueue Works
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Start your learning journey in three simple steps.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                      <Icon size={28} />
                    </div>
                    <span className="text-4xl font-extrabold text-slate-100">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="rounded-3xl `bg-gradient-to-br` from-teal-50 to-cyan-100 p-8 sm:p-12">
            <div className="mx-auto flex max-w-sm flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-teal-600 text-white shadow-xl shadow-teal-900/20">
                <BookOpen size={48} />
              </div>
              <h3 className="mt-7 text-2xl font-bold text-slate-900">
                Learning Made Easier
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Find tutors, organize your sessions, and keep your
                learning journey in one place.
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal-600">
              Why MediQueue?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A Smarter Way to Manage Your Learning
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              MediQueue helps learners discover tutors and manage their
              learning sessions through a simple, organized platform.
            </p>
            <div className="mt-7 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-teal-600"
                  />
                  <span className="font-medium text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/tutors"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 font-semibold text-white transition hover:bg-teal-700"
            >
              Start Exploring
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500 text-white">
            <GraduationCap size={30} />
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            Ready to Take the Next Step in Your Learning?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Explore available tutors and find the right learning
            support for your goals.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/tutors"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 font-semibold text-white transition hover:bg-teal-400"
            >
              Find a Tutor
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-6 py-3.5 font-semibold text-white transition hover:border-teal-400 hover:bg-slate-900"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
