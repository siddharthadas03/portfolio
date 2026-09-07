import { startTransition, useEffect, useState } from "react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const activeProject =
    projects.find((project) => project.slug === activeSlug) ?? projects[0];

  const activeIndex = projects.findIndex(
    (project) => project.slug === activeProject.slug,
  );

  const activePhotos = activeProject.media.photos ?? [];
  const activeVideos = activeProject.media.videos ?? [];

  const hasPhotoSlideshow = activePhotos.length > 1;

  // Show video when the project has a video and either:
  // 1. it has no photos, or
  // 2. videoFirst is enabled for that project (e.g. IntelliNote)
  const hasVideoOnly =
    activeVideos.length > 0 &&
    (activePhotos.length === 0 || activeProject.media.videoFirst);

  const activePhoto =
    activePhotos[activeMediaIndex % Math.max(activePhotos.length, 1)];

  const activeVideo = activeVideos[0];

  const handleSelectProject = (slug) => {
    startTransition(() => {
      setActiveSlug(slug);
      setActiveMediaIndex(0);
    });
  };

  useEffect(() => {
    if (!hasPhotoSlideshow) {
      return undefined;
    }

    const slideTimer = window.setInterval(() => {
      setActiveMediaIndex((index) => (index + 1) % activePhotos.length);
    }, 3200);

    return () => window.clearInterval(slideTimer);
  }, [activePhotos.length, hasPhotoSlideshow]);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading" data-reveal="up">
        <span className="section-kicker">Projects</span>

        <h2>
          Featured projects with polished interfaces and practical full-stack
          workflows.
        </h2>

        <p>
          A focused look at selected builds, highlighting the product idea, core
          features, technology stack, and the problem each project solves.
        </p>
      </div>

      <div
        className="project-lab glass-panel"
        data-reveal="pop"
        style={{ "--active-index": activeIndex }}
      >
        <div className="project-switcher" aria-label="Choose project">
          {projects.map((project) => (
            <button
              key={project.slug}
              type="button"
              className={`project-pill ${
                project.slug === activeProject.slug ? "is-active" : ""
              }`}
              onClick={() => handleSelectProject(project.slug)}
            >
              <strong>{project.title}</strong>
            </button>
          ))}
        </div>

        <div className="project-stage">
          <div className="project-spotlight">
            <div className="project-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div
              key={`${activeProject.slug}-${activeMediaIndex}`}
              className="project-thumbnail-frame"
            >
              {hasVideoOnly ? (
                <video
                  src={activeVideo}
                  aria-label={`${activeProject.title} demo video`}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={activePhoto}
                  alt={`${activeProject.title} project preview`}
                />
              )}

              <div className="project-scanline" />
            </div>

            {hasPhotoSlideshow && (
              <div
                className="project-media-dots"
                aria-label={`${activeProject.title} photo slideshow`}
              >
                {activePhotos.map((photo, index) => (
                  <button
                    key={photo}
                    type="button"
                    className={index === activeMediaIndex ? "is-active" : ""}
                    onClick={() => setActiveMediaIndex(index)}
                    aria-label={`Show project photo ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <article
            key={`${activeProject.slug}-copy`}
            className="project-detail-panel"
          >
            <span className="project-status">{activeProject.status}</span>

            <p className="project-strap">{activeProject.strap}</p>

            <h3>{activeProject.title}</h3>

            <p>{activeProject.summary}</p>

            <p>{activeProject.details}</p>

            <ul className="feature-list">
              {activeProject.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="tag-row">
              {activeProject.tech.map((item) => (
                <span key={item} className="project-tag">
                  {item}
                </span>
              ))}
            </div>

            <div className="project-actions">
              {activeProject.links?.live && (
                <a
                  href={activeProject.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              )}

              {activeProject.links?.github && (
                <a
                  href={activeProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub
                </a>
              )}

              <a href="#contact" className="btn btn-secondary">
                Discuss project
              </a>
            </div>
          </article>
        </div>

        <div className="project-card-strip">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              className={`project-mini-card ${
                project.slug === activeProject.slug ? "is-active" : ""
              }`}
              onClick={() => handleSelectProject(project.slug)}
              style={{ "--card-index": index }}
            >
              {project.media.photos?.[0] ? (
                <img src={project.media.photos[0]} alt="" />
              ) : (
                <video
                  src={project.media.videos?.[0]}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden="true"
                />
              )}

              <span>{String(index + 1).padStart(2, "0")}</span>

              <strong>{project.title}</strong>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
