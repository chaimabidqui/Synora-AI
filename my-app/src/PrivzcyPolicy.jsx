export default function LegalPages() {
  return (
    <div className="min-h-screen  text-zinc-800 px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Privacy Policy */}
        <section className="space-y-10">
          <div className="space-y-4 text-center">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#F99F4B]/10 to-[#F03C1B]/10 px-4 py-1 text-sm font-medium text-[#F03C1B]">
              Privacy Policy
            </span>

            <h1 className="text-5xl font-bold tracking-tight">
              Your privacy matters.
            </h1>

            <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Learn how Synora AI collects, uses, and protects your information while using our platform.
            </p>

            <p className="text-sm text-zinc-400">Last Updated • May 2026</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {privacySections.map((section, index) => (
              <div
                key={index}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h2 className="text-2xl font-semibold mb-4">
                  {section.title}
                </h2>

                <p className="text-zinc-600 leading-relaxed text-[15px]">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-[#F99F4B] to-[#F03C1B] p-[1px]">
            <div className="rounded-3xl bg-white p-8 text-center">
              <h3 className="text-2xl font-semibold mb-3">Need help?</h3>

              <p className="text-zinc-600 mb-4">
                If you have questions regarding our privacy practices, feel free to contact us.
              </p>

              <p className="font-medium text-[#F03C1B]">
                support@synora.ai
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service */}
        <section className="space-y-10 border-t border-zinc-200 pt-20">
          <div className="space-y-4 text-center">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#F99F4B]/10 to-[#F03C1B]/10 px-4 py-1 text-sm font-medium text-[#F03C1B]">
              Terms of Service
            </span>

            <h1 className="text-5xl font-bold tracking-tight">
              Terms & Conditions
            </h1>

            <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Please read these terms carefully before using Synora AI services and platform features.
            </p>

            <p className="text-sm text-zinc-400">Last Updated • May 2026</p>
          </div>

          <div className="space-y-6">
            {termsSections.map((section, index) => (
              <div
                key={index}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-4">
                  {section.title}
                </h2>

                <p className="text-zinc-600 leading-relaxed text-[15px]">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-[#F99F4B] to-[#F03C1B] p-[1px]">
            <div className="rounded-3xl bg-white p-8 text-center">
              <h3 className="text-2xl font-semibold mb-3">Questions?</h3>

              <p className="text-zinc-600 mb-4">
                Contact the Synora AI team for any questions related to these terms.
              </p>

              <p className="font-medium text-[#F03C1B]">
                support@synora.ai
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const privacySections = [
  {
    title: 'Introduction',
    content:
      'At Synora AI, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data while using our platform and services.',
  },
  {
    title: 'Information We Collect',
    content:
      'We may collect information such as your name, email address, account details, analytics data, device information, and communication requests to improve our platform experience.',
  },
  {
    title: 'How We Use Your Information',
    content:
      'Your information helps us provide services, improve user experience, personalize content, analyze performance, and send important platform updates.',
  },
  {
    title: 'Data Protection',
    content:
      'We use modern security practices and encrypted systems designed to protect your information against unauthorized access or misuse.',
  },
  {
    title: 'Cookies',
    content:
      'Synora AI may use cookies and similar technologies to improve functionality, understand user behavior, and enhance website performance.',
  },
  {
    title: 'User Rights',
    content:
      'Users may request access to their information, update account details, delete personal data, or opt out of marketing communications.',
  },
]

const termsSections = [
  {
    title: 'Agreement to Terms',
    content:
      'By accessing or using Synora AI, you agree to comply with these Terms of Service and all applicable policies.',
  },
  {
    title: 'Use of Services',
    content:
      'Users agree to use the platform responsibly and only for lawful purposes. Unauthorized activities or misuse are prohibited.',
  },
  {
    title: 'Accounts',
    content:
      'You are responsible for maintaining the security of your account credentials and activity associated with your account.',
  },
  {
    title: 'Intellectual Property',
    content:
      'All branding, design assets, software, and platform content remain the property of Synora AI unless otherwise stated.',
  },
  {
    title: 'Service Availability',
    content:
      'While we aim to provide reliable service availability, Synora AI does not guarantee uninterrupted platform access at all times.',
  },
  {
    title: 'Termination',
    content:
      'We reserve the right to suspend or terminate accounts that violate these terms or misuse our services.',
  },
]
