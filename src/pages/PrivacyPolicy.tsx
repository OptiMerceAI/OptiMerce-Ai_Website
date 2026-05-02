import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Section } from "@/components/SectionComponents";

const PrivacyPolicyPage = () => {
  const effectiveDate = "April 29, 2026";

  const sections = [
    {
      title: "Information We Collect",
      subsections: [
        {
          heading: "Personal Information",
          content: "We collect information you voluntarily provide when using our contact forms or services, including your name, email address, phone number, company name, and any other information you submit through our website.",
        },
        {
          heading: "Usage Data",
          content: "We automatically collect certain data about how you interact with our website, including your IP address, browser type, device type, pages visited, time spent on pages, and referring URLs. This helps us understand how users navigate our site and improve your experience.",
        },
        {
          heading: "Communication Data",
          content: "Any messages, inquiries, or support requests you send us are collected and stored to help us respond to your needs and improve our services.",
        },
      ],
    },
    {
      title: "How We Use Your Information",
      content: "We use collected information for the following purposes:\n• Respond to inquiries and provide customer support\n• Improve and optimize our website and services based on user behavior\n• Send updates and announcements only if you opt in to receive communications\n• Maintain security and prevent fraud or misuse of our platform\n• Comply with legal obligations and enforce our terms of service",
    },
    {
      title: "How We Share Your Information",
      content: "Your privacy is important to us. We do NOT sell, rent, or trade your personal data. We may share information:\n• With trusted service providers who assist us in operating our website and providing services\n• With legal authorities when required by law or to protect our rights\n• With analytics tools to understand website performance (in anonymized form when possible)",
    },
    {
      title: "Data Retention",
      content: "We retain your information only as long as necessary to fulfill the purposes for which it was collected or as required by applicable law. Contact information from inquiries is typically retained for business purposes unless you request deletion. Usage data may be retained for analytics purposes for up to 12 months.",
    },
    {
      title: "Your Rights",
      content: "You have the following rights regarding your personal data:\n• Request access to the personal data we hold about you\n• Request correction of inaccurate or incomplete information\n• Request deletion of your data (subject to legal obligations)\n• Withdraw consent to communications at any time\n• Request a copy of your data in a portable format\n\nTo exercise these rights, contact us at info@optimerceai.co.uk with details of your request.",
    },
    {
      title: "Cookies and Tracking",
      content: "Our website uses cookies and similar tracking technologies to:\n• Enable website functionality\n• Analyze website traffic and user behavior\n• Personalize your experience\n• Measure campaign effectiveness\n\nYou can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, disabling cookies may impact website functionality.",
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include encryption, secure servers, and access controls. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    },
    {
      title: "Third-Party Links",
      content: "Our website may contain links to external websites and third-party services. We are not responsible for the privacy practices, content, or policies of these external sites. We encourage you to review their privacy policies before providing any personal information.",
    },
    {
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by updating the effective date at the top of this page and, where appropriate, sending you a notification.",
    },
    {
      title: "Contact Information",
      content: "If you have questions about this Privacy Policy, wish to exercise your rights, or need to report a data breach, please contact us at:\n\nEmail: info@optimerceai.co.uk\n\nWe will respond to your requests within 30 days or as required by applicable law.",
    },
  ];

  return (
    <Layout>
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-slate-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              How OptiMerce AI protects and respects your data.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-sm text-muted-foreground font-medium">
              Effective Date: {effectiveDate}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-foreground leading-relaxed mb-12"
          >
            OptiMerce AI ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </motion.p>

          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>

              {section.subsections ? (
                <div className="space-y-6">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {subsection.heading}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {subsection.content}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground">
              Last Updated: {effectiveDate}
            </p>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
};

export default PrivacyPolicyPage;
