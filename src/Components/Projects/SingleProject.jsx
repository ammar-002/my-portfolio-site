import React from "react";

const SingleProject = () => {
    const projects = [
        {id: 1, name: 'Full Stack Job Portal', image: '/projects/project-do-job.png', github: 'https://github.com/ammar-002/job-portal', live: 'https://job-portal-by-ammar.vercel.app/'},
        {id: 2, name: 'Full Stack Ecommerce Website', image: '/projects/project-fabrico.png', github: 'https://github.com/ammar-002/fabrico-ecommerce-app', live: 'https://fabrico-mens-wear.vercel.app/'},
        {id: 3, name: 'Portfolio Website', image: '/projects/portfolio.png', github: 'https://github.com/ammar-002/my-portfolio-site', live: '/'},
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
             

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative bg-[var(--color-darkBrown)] rounded-lg overflow-hidden border border-[var(--color-grey)] hover:border-[var(--color-orange)] transition-all duration-300"
                    >
                        {/* Project Image */}
                        {/* Project Image */}
                        <div className="relative h-64 bg-[var(--color-black)] overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/400x300/2a2523/15d1e9?text=Project';
                                }}
                            />
                            
                            {/* Overlay with icons - shows on hover for larger screens, always visible on mobile */}
                            <div className="absolute inset-0 bg-black/70 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                {/* GitHub Icon */}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-[var(--color-orange)] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                                >
                                    <svg className="w-6 h-6 text-[var(--color-darkBrown)]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>

                                {/* Live URL Icon */}
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-[var(--color-orange)] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                                >
                                    <svg className="w-6 h-6 text-[var(--color-darkBrown)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Project Name */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-[var(--color-white)] text-center group-hover:text-[var(--color-orange)] transition-colors duration-300">
                                {project.name}
                            </h3>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-lightCyan)] opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SingleProject;
