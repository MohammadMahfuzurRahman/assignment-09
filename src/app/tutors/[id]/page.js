
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  GraduationCap,
  MapPin,
  Star,
  UserRound,
} from "lucide-react";
const tutors = [
  {
    id: "1",
    name: "Ahmed Rahman",
    subject: "Mathematics",
    qualification: "BSc in Mathematics",
    experience: 4,
    fee: 500,
    location: "Uttara, Dhaka",
    rating: 4.8,
    initials: "AR",
    color: "bg-blue-100 text-blue-700",
    about:
      "Dedicated mathematics tutor focused on helping students understand mathematical concepts through clear explanations and regular practice.",
    education: "BSc in Mathematics",
    subjects: ["Algebra", "Geometry", "Calculus"],
  },
  {
    id: "2",
    name: "Nusrat Jahan",
    subject: "English",
    qualification: "BA in English",
    experience: 3,
    fee: 450,
    location: "Mirpur, Dhaka",
    rating: 4.7,
    initials: "NJ",
    color: "bg-pink-100 text-pink-700",
    about:
      "An English tutor who helps learners improve their grammar, writing, reading, and communication skills through structured lessons.",
    education: "BA in English",
    subjects: ["Grammar", "Writing", "Reading"],
  },
  {
    id: "3",
    name: "Tanvir Hasan",
    subject: "Physics",
    qualification: "BSc in Physics",
    experience: 5,
    fee: 600,
    location: "Dhanmondi, Dhaka",
    rating: 4.9,
    initials: "TH",
    color: "bg-purple-100 text-purple-700",
    about:
      "A physics tutor who explains scientific principles with practical examples and step-by-step problem solving.",
    education: "BSc in Physics",
    subjects: ["Mechanics", "Electricity", "Modern Physics"],
  },
  {
    id: "4",
    name: "Sadia Islam",
    subject: "Chemistry",
    qualification: "BSc in Chemistry",
    experience: 2,
    fee: 400,
    location: "Bashundhara, Dhaka",
    rating: 4.6,
    initials: "SI",
    color: "bg-emerald-100 text-emerald-700",
    about:
      "A chemistry tutor who makes chemical reactions, formulas, and important concepts easier to understand.",
    education: "BSc in Chemistry",
    subjects: ["Organic Chemistry", "Inorganic Chemistry", "Chemical Reactions"],
  },
  {
    id: "5",
    name: "Rakib Hossain",
    subject: "ICT",
    qualification: "BSc in Computer Science",
    experience: 3,
    fee: 550,
    location: "Banani, Dhaka",
    rating: 4.8,
    initials: "RH",
    color: "bg-amber-100 text-amber-700",
    about:
      "A computer science tutor who helps learners build strong foundations in ICT, programming concepts, and problem solving.",
    education: "BSc in Computer Science",
    subjects: ["ICT", "Programming Basics", "Computer Fundamentals"],
  },
  {
    id: "6",
    name: "Farhana Akter",
    subject: "Biology",
    qualification: "BSc in Biology",
    experience: 4,
    fee: 500,
    location: "Mohammadpur, Dhaka",
    rating: 4.7,
    initials: "FA",
    color: "bg-cyan-100 text-cyan-700",
    about:
      "A biology tutor who explains biological systems and scientific concepts through organized lessons and examples.",
    education: "BSc in Biology",
    subjects: ["Cell Biology", "Genetics", "Human Biology"],
  },
];
export default async function TutorDetailsPage({ params }) {
  const { id } = await params;
  const tutor = tutors.find((item) => item.id === id);

  if (!tutor) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-gradient-to-br` from-teal-50 via-white to-cyan-50 px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/tutors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-teal-700"
          >
            <ArrowLeft size={18} />
            Back to Tutors
          </Link>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div
              className={`flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl text-3xl font-bold shadow-sm ${tutor.color}`}
            >
              {tutor.initials}
            </div>

            <div className="flex-1">
              <span className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800">
                {tutor.subject} Tutor
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {tutor.name}
              </h1>
              <p className="mt-2 text-slate-600">
                {tutor.qualification}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <MapPin size={17} className="text-teal-600" />
                  {tutor.location}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={17} className="text-teal-600" />
                  {tutor.experience} years experience
                </span>
                <span className="flex items-center gap-2">
                  <Star
                    size={17}
                    className="fill-amber-400 text-amber-400"
                  />
                  {tutor.rating} / 5
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Details Content */}
      <section className="mx-auto grid max-w-7xl items-start gap-8 px-6 py-12 lg:grid-cols-[1fr_350px] lg:px-8">
        <div className="space-y-8">
          {/* About */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900">
              <UserRound className="text-teal-600" size={23} />
              About the Tutor
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              {tutor.about}
            </p>
          </div>
          {/* Education */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900">
              <GraduationCap className="text-teal-600" size={25} />
              Education & Qualifications
            </h2>
            <div className="mt-5 flex items-start gap-4 rounded-xl bg-slate-50 p-5">
              <div className="rounded-xl bg-teal-100 p-3 text-teal-700">
                <BookOpen size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  {tutor.education}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Educational qualification
                </p>
              </div>
            </div>
          </div>
          {/* Subjects */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Subjects & Expertise
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {tutor.subjects.map((subject) => (
                <span
                  key={subject}
                  className="rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
          {/* Experience */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Teaching Experience
            </h2>
            <div className="mt-5 flex items-center gap-4">
              <div className="rounded-xl bg-teal-50 p-4 text-teal-700">
                <Clock size={26} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {tutor.experience} Years
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Teaching experience
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Booking Card */}
        <aside className="lg:sticky lg:top-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Tuition Fee
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-slate-900">
                ৳{tutor.fee}
              </span>
              <span className="text-sm text-slate-500">/ hour</span>
            </div>
            <div className="my-6 border-t border-slate-100" />
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 size={19} className="text-teal-600" />
                {tutor.subject} lessons
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 size={19} className="text-teal-600" />
                {tutor.experience} years experience
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin size={19} className="text-teal-600" />
                {tutor.location}
              </div>
            </div>
            <Link
              href={`/login?redirect=${encodeURIComponent(`/tutors/${tutor.id}`)}`}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3.5 font-semibold text-white transition hover:bg-teal-700"
            >
              <CalendarDays size={19} />
              Book a Session
              <ArrowRight size={18} />
            </Link>
            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              Sign in to continue with the booking process.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
