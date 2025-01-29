interface TechnicalComponent {
  title: string;
  subtitle: string;
  description: string;
}

const components: TechnicalComponent[] = [
  {
    title: "Vector Store & Data Management",
    subtitle: "Core Engine",
    description:
      "FAISS-powered vector store implementation with comprehensive methods for managing embeddings, including IVF indexing, caching, and optional encryption.",
  },
  {
    title: "Telemetry, Logging & Monitoring",
    subtitle: "Observability",
    description:
      "Comprehensive observability stack with OpenTelemetry integration, structured logging, and Prometheus-based monitoring for system health and performance.",
  },
  {
    title: "Access Control & Authentication",
    subtitle: "Security",
    description:
      "Robust security with JWT-based authentication, Redis-backed token management, and granular access control with rate limiting protection.",
  },
  {
    title: "API & Configuration Management",
    subtitle: "Infrastructure",
    description:
      "FastAPI integration with middleware for tracing and security, centralized configuration management, and health monitoring endpoints.",
  },
];

export default function TechnicalComponents() {
  return (
    <section className="text-white py-24">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-20">
        Core Technical Components
      </h2>
      <p className="text-xl md:text-2xl font-light mb-24 max-w-3xl ">
        Our system is built on robust, scalable components designed for
        performance and reliability
      </p>

      <div className="flex flex-col gap-16">
        {components.map((component, index) => (
          <div key={component.title}>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-24">
              <div className="flex items-start gap-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 31 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white-500 flex-shrink-0"
                >
                  <title>Arrow Icon</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.56725 0H0V28.4176H24.2835V34.0001L31 27.2412L24.2835 20.4824V25.8342H2.56725V0Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="space-y-1">
                  <h3 className="text-red-500 text-2xl md:text-3xl font-light">
                    {component.title}
                  </h3>
                  <p className=" text-base">{component.subtitle}</p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-16">
                <p className=" text-lg font-light leading-relaxed pl-16 lg:pl-0">
                  {component.description}
                </p>
              </div>
            </div>
            {index < components.length - 1 && (
              <div className="h-px bg-gray-800 mt-16" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
