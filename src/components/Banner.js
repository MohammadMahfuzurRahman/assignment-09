
import Link from "next/link";
import {
  Search,
  GraduationCap,
  CalendarCheck,
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
export default function Banner() {
  return (
    <section className="relative overflow-hidden `bg-gradient-to-br` from-teal-50 via-white to-cyan-50">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Left Content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 shadow-sm">
            <GraduationCap size={18} className="text-teal-600" />
            <span className="text-sm font-medium text-teal-700">
              Your Learning Journey Starts Here
            </span>
          </div>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find the Right Tutor.
            <span className="mt-2 block text-teal-600">
              Unlock Your Potential.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Connect with experienced tutors, book personalized learning
            sessions, and take the next step toward achieving your goals.
          </p>
          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/tutors"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:-translate-y-0.5 hover:bg-teal-700"
            >
              Explore Tutors
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/add-tutor"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-teal-300 hover:bg-teal-50"
            >
              Become a Tutor
            </Link>
          </div>
          {/* Trust Indicators */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <CheckCircle2
                size={20}
                className="shrink-0 text-teal-600"
              />
              <span className="text-sm font-medium text-slate-700">
                Expert Tutors
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarCheck
                size={20}
                className="shrink-0 text-teal-600"
              />
              <span className="text-sm font-medium text-slate-700">
                Flexible Sessions
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen
                size={20}
                className="shrink-0 text-teal-600"
              />
              <span className="text-sm font-medium text-slate-700">
                Personalized Learning
              </span>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-3 -top-3 h-24 w-24 rounded-3xl bg-teal-200/60 sm:-right-5 sm:-top-5" />
          <div className="absolute -bottom-3 -left-3 h-28 w-28 rounded-3xl bg-cyan-200/60 sm:-bottom-5 sm:-left-5" />
          <div className="relative rounded-3xl border border-white bg-white p-4 shadow-2xl shadow-slate-900/10 sm:p-6">
            {/* Illustration Area */}
            <div className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-2xl `bg-gradient-to-br` from-teal-100 via-cyan-50 to-sky-100 p-6 sm:min-h-80">
              <div className="absolute left-8 top-8 h-12 w-12 rounded-2xl bg-white/70" />
              <div className="absolute bottom-8 right-8 h-16 w-16 rounded-full bg-white/60" />

              <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-white/70 sm:h-56 sm:w-56">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-teal-600 shadow-xl shadow-teal-900/20 sm:h-40 sm:w-40">
                  <GraduationCap
                    size={88}
                    strokeWidth={1.5}
                    className="text-white sm:h-28 sm:w-28"
                  />
                </div>
              </div>
              {/* Floating Card */}
              <div className="absolute left-3 top-5 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-lg sm:left-5 sm:top-8 sm:p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <BookOpen size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Learn Better
                  </p>
                  <p className="text-xs text-slate-500">
                    One step at a time
                  </p>
                </div>
              </div>
              <div className="absolute bottom-5 right-3 flex items-center gap-2 rounded-2xl bg-white p-3 shadow-lg sm:bottom-8 sm:right-5 sm:p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <CalendarCheck size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Book a Session
                  </p>
                  <p className="text-xs text-slate-500">
                    At your convenience
                  </p>
                </div>
              </div>
            </div>
            {/* Search Card */}
            <form
              action="/tutors"
              method="GET"
              className="mt-5 flex flex-col gap-3 sm:flex-row"
            >
              <label className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-teal-500">
                <Search size={20} className="shrink-0 text-teal-600" />
                <input
                  type="search"
                  name="subject"
                  placeholder="Search subject or tutor..."
                  aria-label="Search subject or tutor"
                  className="w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
              >
                Search
                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
