const page = () => {
  return (
    <div className="container px-4 pb-12 bg-white lg:pt-24 lg:py-10 lg:px-0 md:pt-28 md:pb-0 pt-28">
      <div className="max-w-5xl mx-auto">
        <header className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-transparent rounded-3xl -z-10"></div>
          <div className="py-12 px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Privacy & Data Protection
            </h1>
            <p className="text-lg text-secondary max-w-2xl">
              At Indian e-Visa ME, we employ sophisticated security measures and
              transparent practices to protect your information throughout the
              digital visa application process.
            </p>
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
        </header>

        <div className="space-y-20">
          <section>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Data Collection Framework
                </h2>
                <p className="text-secondary">
                  Our systematic approach to collecting and processing your
                  information.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow-sm rounded-xl p-6 border border-primary/10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-primary">
                      Personal Information
                    </h3>
                  </div>
                  <ul className="space-y-3 text-secondary ml-14">
                    <li>• Biographical data</li>
                    <li>• Passport details</li>
                    <li>• Contact information</li>
                  </ul>
                </div>
                <div className="bg-white shadow-sm rounded-xl p-6 border border-primary/10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-primary">
                      Travel Details
                    </h3>
                  </div>
                  <ul className="space-y-3 text-secondary ml-14">
                    <li>• Journey information</li>
                    <li>• Stay duration</li>
                    <li>• Visit purpose</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-transparent p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-primary mb-8">
              Security Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-primary font-medium mb-3">
                  Data Encryption
                </div>
                <p className="text-secondary text-sm">
                  Advanced encryption protocols for all stored and transmitted
                  data
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-primary font-medium mb-3">
                  Access Management
                </div>
                <p className="text-secondary text-sm">
                  Role-based access control with multi-factor authentication
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-primary font-medium mb-3">
                  Continuous Monitoring
                </div>
                <p className="text-secondary text-sm">
                  Real-time threat detection and prevention systems
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Data Processing Protocol
                </h2>
                <p className="text-secondary">
                  Structured approach to handling your information.
                </p>
              </div>
              <div className="md:w-2/3">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-4 mt-1">
                      <span className="text-primary font-medium">01</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary mb-2">
                        Collection & Validation
                      </h3>
                      <p className="text-secondary">
                        Secure gathering and verification of required
                        information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mr-4 mt-1">
                      <span className="text-accent font-medium">02</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary mb-2">
                        Processing & Analysis
                      </h3>
                      <p className="text-secondary">
                        Automated processing with manual oversight for accuracy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center mr-4 mt-1">
                      <span className="text-secondary font-medium">03</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary mb-2">
                        Storage & Protection
                      </h3>
                      <p className="text-secondary">
                        Secure storage with regular backups and updates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-8">
                Your Privacy Controls
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Access Rights</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                      View collected information
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                      Request data corrections
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                      Download personal data
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Control Options</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                      Manage preferences
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                      Update consent settings
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                      Request data deletion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-20 pt-10 border-t border-gray-100">
          <div className="text-center">
            <p className="text-secondary mb-4">
              For inquiries about our privacy practices or to exercise your
              privacy rights, contact our dedicated privacy team through our
              secure channels.
            </p>
            <p className="text-sm text-secondary">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;
