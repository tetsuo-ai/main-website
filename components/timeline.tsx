export default function Timeline() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-aperture text-3xl font-semibold text-transparent md:text-4xl">
              Core Technical Components
            </h2>
            <p className="text-lg text-indigo-200/65">
              Our system is built on robust, scalable components designed for
              performance and reliability
            </p>
          </div>
          {/* Items */}
          <div
            className="-my-4 mx-auto max-w-3xl md:-my-6"
            data-aos-id-timeline=""
          >
            {/* Vector Store */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                  Core Engine
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                    Store
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-aperture text-xl font-semibold text-gray-200">
                    Vector Store & Data Management
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  FAISS-powered vector store implementation with comprehensive
                  methods for managing embeddings, including IVF indexing,
                  caching, and optional encryption.
                </p>
              </div>
            </div>

            {/* Observability */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                  Observability
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                    Ops
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-aperture text-xl font-semibold text-gray-200">
                    Telemetry, Logging & Monitoring
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  Comprehensive observability stack with OpenTelemetry
                  integration, structured logging, and Prometheus-based
                  monitoring for system health and performance.
                </p>
              </div>
            </div>

            {/* Security */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                  Security
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                    Auth
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-aperture text-xl font-semibold text-gray-200">
                    Access Control & Authentication
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  Robust security with JWT-based authentication, Redis-backed
                  token management, and granular access control with rate
                  limiting protection.
                </p>
              </div>
            </div>

            {/* Infrastructure */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                  Infrastructure
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                    API
                  </div>
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-aperture text-xl font-semibold text-gray-200">
                    API & Configuration Management
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  FastAPI integration with middleware for tracing and security,
                  centralized configuration management, and health monitoring
                  endpoints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
