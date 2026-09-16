"use client";
import React from "react";
import { FaLaptopCode, FaMobileAlt, FaServer, FaChartLine, FaCheckCircle } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";

function ProjectCard({ project }) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Mobile App":
        return <FaMobileAlt className="text-emerald-400" />;
      case "Web App":
        return <FaLaptopCode className="text-cyan-400" />;
      case "FinTech / Algo":
        return <FaChartLine className="text-amber-400" />;
      default:
        return <FaServer className="text-violet-400" />;
    }
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-[#1b2c68a0] bg-gradient-to-br from-[#0d1224] via-[#0d1536] to-[#0a0d37] p-5 sm:p-6 shadow-xl transition-all duration-300 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.25)] hover:-translate-y-1">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r from-transparent via-violet-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      <div>
        {/* Header: Category & Role */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#1f2648]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161d3f] border border-[#253268] text-xs font-mono font-medium text-gray-200">
            {getCategoryIcon(project.category)}
            <span>{project.category || "Full Stack"}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-mono">
            <BiGitBranch className="text-amber-400" />
            <span>{project.role}</span>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="mt-4 text-lg sm:text-xl font-bold text-white group-hover:text-[#f9d049] transition-colors duration-200">
          {project.name}
        </h3>

        {/* Platform Details */}
        {project.platform && (
          <p className="mt-1 text-xs font-mono text-cyan-400/90 font-medium">
            ⚡ {project.platform}
          </p>
        )}

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* Feature Highlights */}
        {project.features && project.features.length > 0 && (
          <div className="mt-4 space-y-1.5 pt-3 border-t border-[#1a2145]">
            <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold">
              Key Capabilities:
            </p>
            <ul className="space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                  <FaCheckCircle className="mt-0.5 text-emerald-400 flex-shrink-0 text-[11px]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tech Stack Footer */}
      <div className="mt-6 pt-4 border-t border-[#1f2648]">
        <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2 font-semibold">
          Tech Stack:
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tools.map((tool, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-md bg-[#13193a] border border-[#252f5e] text-[11px] font-mono text-gray-300 group-hover:border-violet-500/50 transition-colors duration-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
