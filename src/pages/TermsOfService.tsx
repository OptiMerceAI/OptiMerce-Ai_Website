import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Section } from "@/components/SectionComponents";

const TermsOfServicePage = () => {
  const effectiveDate = "April 29, 2026";

  const sections = [
    {
      title: "Use of Services",
      content: "By accessing and using the OptiMerce AI website and services, you agree to:\n• Use the website lawfully and in accordance with all applicable laws and regulations\n• Not engage in any activities that are unlawful, fraudulent, or otherwise harmful\n• Refrain from unauthorized access or interference with our systems, networks, or services\n• Not attempt to circumvent security measures or gain unauthorized access to restricted areas\n• Not transmit viruses, malware, or other malicious code\n• Not harass, abuse, or threaten other users or our staff",
    },
    {
      title: "Intellectual Property",
      content: "All content on the OptiMerce AI website, including text, logos, graphics, software, images, and video content, is the exclusive property of OptiMerce AI or its content suppliers and is protected by international copyright and intellectual property laws.\n\nYou may not:\n• Copy, reproduce, or distribute any content without explicit written permission\n• Modify, adapt, or create derivative works from our content\n• Use our intellectual property for commercial purposes\n• Remove or alter any copyright notices or proprietary markers\n• Use our branding or logos without authorization",
    },
    {
      title: "User Content",
      content: "When you submit information through contact forms or other submission methods on our website, you grant OptiMerce AI permission to:\n• Use the submitted information to respond to your inquiries\n• Store and process your data in accordance with our Privacy Policy\n• Use your feedback to improve our services\n\nYou confirm and represent that:\n• All information you provide is accurate, current, and complete\n• You have the legal right to submit the information\n• The information does not violate any laws or third-party rights\n• You will not submit false, misleading, or defamatory content",
    },
    {
      title: "Services Disclaimer",
      content: "Our services, website, and all content are provided on an \"AS IS\" and \"AS AVAILABLE\" basis without warranties of any kind, either express or implied. Specifically, we do not guarantee:\n• Uninterrupted, error-free, or timely access to our services\n• Accuracy, completeness, or usefulness of any information provided\n• Specific business results, revenue, or outcomes\n• Compatibility with your systems or devices\n• Freedom from viruses, malware, or other harmful elements\n\nWe reserve the right to modify, suspend, or discontinue any service at any time without notice.",
    },
    {
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, OptiMerce AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:\n• Loss of data, profits, or revenue\n• Business interruption or loss of opportunity\n• Damages arising from unauthorized access to or use of our services\n• Service delays, failures, or interruptions\n• System errors or malfunctions\n• Losses caused by third-party services or third-party interference\n\nThis limitation applies regardless of the cause (contract, tort, strict liability, or otherwise) and even if we have been advised of the possibility of such damages.",
    },
    {
      title: "Third-Party Links",
      content: "Our website may contain links to third-party websites, applications, and services that are not operated by OptiMerce AI. We are not responsible for:\n• The content, accuracy, or legality of third-party websites\n• The privacy practices or policies of external sites\n• Your interactions with third parties\n• Any damages or losses resulting from your use of third-party services\n\nWe provide these links for convenience only, and their inclusion does not imply endorsement. You access third-party sites at your own risk and should review their terms and privacy policies before use.",
    },
    {
      title: "Termination",
      content: "OptiMerce AI reserves the right to:\n• Suspend or terminate your access to our services at any time, with or without cause\n• Refuse service to anyone for any reason\n• Take action against users who violate these terms or engage in unlawful conduct\n\nTermination may result in:\n• Deletion of your account and associated data\n• Loss of access to services and features\n• Forfeiture of any claims against OptiMerce AI\n\nYour obligations under these terms survive any termination of your access.",
    },
    {
      title: "Changes to These Terms",
      content: "OptiMerce AI may update these Terms of Service at any time to reflect changes in our practices, technology, legal requirements, or other factors. Material changes will be communicated by:\n• Posting the updated terms on this page with a new effective date\n• Sending you an email notification if you have provided contact information\n\nYour continued use of our services after changes become effective constitutes your acceptance of the updated terms. It is your responsibility to review these terms regularly.",
    },
    {
      title: "Governing Law",
      content: "These Terms of Service are governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law principles. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts located in the United Kingdom.\n\nYou agree to submit to the personal jurisdiction of such courts and waive any objections based on improper venue or inconvenient forum.",
    },
    {
      title: "Contact Information",
      content: "If you have questions about these Terms of Service, wish to report a violation, or need further assistance, please contact us at:\n\nEmail: info@optimerceai.co.uk\n\nWe will respond to inquiries within 30 days or as required by applicable law.",
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
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              The rules and conditions governing your use of OptiMerce AI services.
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
            These Terms of Service ("Terms") constitute a legal agreement between you and OptiMerce AI ("Company," "we," "us," or "our"). By accessing and using our website, services, and products, you agree to be bound by these terms. If you do not agree with any part of these terms, you must immediately discontinue use of our services.
          </motion.p>

          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
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

export default TermsOfServicePage;
