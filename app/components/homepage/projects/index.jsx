"use client";
import React, { useState, useMemo } from "react";
import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaLayerGroup,
  FaChartLine,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const INITIAL_VISIBLE_COUNT = 8;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { name: "All", label: "All Projects", icon: FaLayerGroup },
    { name: "Web App", label: "Web Apps", icon: FaLaptopCode },
    { name: "Mobile App", label: "Mobile Apps", icon: FaMobileAlt },
    { name: "FinTech / Algo", label: "FinTech & Trading", icon: FaChartLine },
  ];

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchCategory =
        activeCategory === "All" || project.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchCategory;

      const matchSearch =
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.platform?.toLowerCase().includes(query) ||
        project.tools.some((tool) => tool.toLowerCase().includes(query)) ||
        project.features?.some((f) => f.toLowerCase().includes(query));

      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <div id="projects" className="relative z-40 my-16 lg:my-28">
      {/* Background ambient glow */}
      <div className="w-[140px] h-[140px] bg-violet-600/30 rounded-full absolute -top-10 left-1/2 -translate-x-1/2 filter blur-3xl opacity-40 pointer-events-none"></div>

      {/* Section Header */}
      <div className="flex justify-center my-6 lg:py-6">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] border border-[#2e375e] w-fit text-white py-2 px-6 text-lg sm:text-xl font-bold uppercase tracking-wider rounded-md shadow-lg">
            Featured Projects ({projectsData.length}+)
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-8 px-4">
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Explore a curated portfolio of <strong>20+ real-world Web Applications</strong>, <strong>Mobile Apps</strong>, and <strong>Enterprise Platforms</strong> engineered with modern frameworks, clean code architecture, and high scalability.
        </p>
      </div>

      {/* Search Bar & Category Controls */}
      <div className="max-w-4xl mx-auto mb-10 px-2 sm:px-4 space-y-5">
        {/* Search Input */}
        <div className="relative max-w-md mx-auto">
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search by tech or keyword (e.g. React, Next.js, Flutter, Laravel, Hospital, POS)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowAll(false);
            }}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#11152c] border border-[#232c54] focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none text-xs sm:text-sm text-gray-200 placeholder-gray-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            const count =
              cat.name === "All"
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat.name).length;

            return (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setShowAll(false);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-violet-600/30 scale-105 border-transparent"
                    : "bg-[#11152c] text-gray-300 border border-[#222b52] hover:border-violet-500 hover:text-white"
                }`}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-[#1d2448] text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Result Counter */}
      <div className="flex justify-between items-center mb-6 px-4 text-xs font-mono text-gray-400">
        <span>
          Showing <strong className="text-white">{visibleProjects.length}</strong> of{" "}
          <strong className="text-white">{filteredProjects.length}</strong> matching projects
        </span>
        {searchQuery && (
          <span>Filter: &quot;{searchQuery}&quot;</span>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-2 sm:px-0">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-xl border border-[#1e2549] bg-[#0d1224]/60">
          <p className="text-base text-gray-300 font-medium">No projects found matching your search.</p>
          <p className="text-xs text-gray-500 mt-1">Try searching for other technologies like React, Next.js, Flutter, Laravel, or Golang.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="mt-4 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-700 text-xs font-mono text-white transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Load More / Show All Button */}
      {filteredProjects.length > INITIAL_VISIBLE_COUNT && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-3.5 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-xl shadow-indigo-600/30 transition-all duration-300 hover:scale-105 hover:shadow-indigo-600/50 cursor-pointer"
          >
            {showAll ? (
              <>
                <span>Show Less</span>
                <FaChevronUp size={14} />
              </>
            ) : (
              <>
                <span>View All {filteredProjects.length} Projects</span>
                <FaChevronDown size={14} />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
