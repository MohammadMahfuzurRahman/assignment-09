
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  GraduationCap,
  Star,
  Clock,
  ArrowRight,
  SlidersHorizontal,
  Users,
  X,
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
    color: "bg-blue-100 text-blue-700",
    initials: "AR",
    availability: "Available",
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
    color: "bg-pink-100 text-pink-700",
    initials: "NJ",
    availability: "Available",
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
    color: "bg-purple-100 text-purple-700",
    initials: "TH",
    availability: "Available",
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
    color: "bg-emerald-100 text-emerald-700",
    initials: "SI",
    availability: "Available",
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
    color: "bg-amber-100 text-amber-700",
    initials: "RH",
    availability: "Available",
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
    color: "bg-cyan-100 text-cyan-700",
    initials: "FA",
    availability: "Available",
  },
];

const subjects = [
  "All Subjects",
  "Mathematics",
  "English",
  "Physics",
  "Chemistry",
  "ICT",
  "Biology",
];

export default function TutorsPage() {
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [maxFee, setMaxFee] = useState("2000");
  const [sortBy, setSortBy] = useState("recommended");

  const filteredTutors = useMemo(() => {
    let result = tutors.filter((tutor) => {
      const searchMatch =
        tutor.name.toLowerCase().includes(search.toLowerCase()) ||
        tutor.subject.toLowerCase().includes(search.toLowerCase()) ||
        tutor.qualification.toLowerCase().includes(search.toLowerCase()) ||
        tutor.location.toLowerCase().includes(search.toLowerCase());

      const subjectMatch =
        selectedSubject === "All Subjects" ||
        tutor.subject === selectedSubject;

      const feeMatch = tutor.fee <= Number(maxFee);

      return searchMatch && subjectMatch && feeMatch;
    });

    if (sortBy === "fee-low") {
      result = [...result].sort((a, b) => a.fee - b.fee);
    } else if (sortBy === "fee-high") {
      result = [...result].sort((a, b) => b.fee - a.fee);
    } else if (sortBy === "experience") {
      result = [...result].sort(
        (a, b) => b.experience - a.experience
      );
    } else if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, selectedSubject, maxFee, sortBy]);

  function clearFilters() {
    setSearch("");
    setSelectedSubject("All Subjects");
    setMaxFee("2000");
    setSortBy("recommended");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-gradient-to-br` from-teal-50 via-white to-cyan-50 px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-sm font-medium text-teal-700">
              <GraduationCap size={18} />
              Find Your Perfect Tutor
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Explore Our{" "}
              <span className="text-teal-600">Expert Tutors</span>
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Find the right tutor for your subject, learning goals,
              and budget. Your learning journey starts here.
            </p>
          </div>

          {/* Search */}
          <div className="mx-auto mt-9 flex max-w-3xl flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-lg sm:flex-row">
            <div className="flex flex-1 items-center gap-3 px-3">
              <Search className="shrink-0 text-teal-600" size={22} />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by name, subject, or location..."
                aria-label="Search tutors"
                className="w-full min-w-0 bg-transparent py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="text-slate-400 hover:text-slate-700"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => setSearch(search.trim())}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              <Search size={18} />
              Find Tutors
            </button>
          </div>
        </div>
      </section>

      {/* Tutors Listing */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[260px_1fr]">
          {/* Filters */}
          <aside className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <SlidersHorizontal size={20} />
                Filters
              </h2>

              <button
                type="button"
                onClick={clearFilters}
                className="text-sm font-medium text-teal-700 hover:text-teal-900"
              >
                Reset
              </button>
            </div>

            <div className="mt-7">
              <label
                htmlFor="subject"
                className="mb-3 block text-sm font-semibold text-slate-800"
              >
                Subject
              </label>

              <select
                id="subject"
                value={selectedSubject}
                onChange={(event) => setSelectedSubject(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-7">
              <label
                htmlFor="maxFee"
                className="mb-3 block text-sm font-semibold text-slate-800"
              >
                Maximum Fee (৳/hour)
              </label>

              <select
                id="maxFee"
                value={maxFee}
                onChange={(event) => setMaxFee(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              >
                <option value="2000">Any fee</option>
                <option value="400">Up to ৳400</option>
                <option value="500">Up to ৳500</option>
                <option value="600">Up to ৳600</option>
              </select>
            </div>

            <div className="mt-7 rounded-xl bg-teal-50 p-4">
              <GraduationCap size={25} className="text-teal-700" />

              <h3 className="mt-3 font-bold text-slate-900">
                Are you a tutor?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Share your knowledge and connect with learners.
              </p>

              <Link
                href="/add-tutor"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900"
              >
                Become a Tutor
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>

          {/* Results */}
          <div>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Available Tutors
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {filteredTutors.length} tutor
                  {filteredTutors.length !== 1 ? "s" : ""} found
                </p>
              </div>

              <div className="flex items-center gap-3">
                <label
                  htmlFor="sortBy"
                  className="shrink-0 text-sm text-slate-600"
                >
                  Sort by
                </label>

                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-teal-500"
                >
                  <option value="recommended">Recommended</option>
                  <option value="rating">Highest Rating</option>
                  <option value="fee-low">Fee: Low to High</option>
                  <option value="fee-high">Fee: High to Low</option>
                  <option value="experience">Most Experience</option>
                </select>
              </div>
            </div>

            {filteredTutors.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredTutors.map((tutor) => (
                  <article
                    key={tutor.id}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
                  >
                    {/* Tutor Avatar */}
                    <div className="relative flex h-36 items-center justify-center `bg-gradient-to-br` from-teal-50 to-cyan-100">
                      <div
                        className={`flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold ring-4 ring-white ${tutor.color}`}
                      >
                        {tutor.initials}
                      </div>

                      <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
                        {tutor.availability}
                      </span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">
                            {tutor.name}
                          </h3>

                          <p className="mt-1 text-sm font-medium text-teal-700">
                            {tutor.subject} Tutor
                          </p>
                        </div>

                        <div className="flex shrink-0 items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-sm font-semibold text-amber-700">
                          <Star
                            size={15}
                            className="fill-amber-400 text-amber-400"
                          />
                          {tutor.rating}
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-slate-600">
                        {tutor.qualification}
                      </p>

                      <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Clock
                            size={17}
                            className="shrink-0 text-teal-600"
                          />
                          {tutor.experience} years of experience
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <MapPin
                            size={17}
                            className="shrink-0 text-teal-600"
                          />
                          {tutor.location}
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                        <div>
                          <span className="text-xl font-extrabold text-slate-900">
                            ৳{tutor.fee}
                          </span>
                          <span className="text-xs text-slate-500">
                            /hour
                          </span>
                        </div>

                        <Link
                          href={`/tutors/${tutor.id}`}
                          className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
                        >
                          View Details
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                  <Users size={30} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  No Tutors Found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try a different name, subject, location, or fee range.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
