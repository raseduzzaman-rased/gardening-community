import React from 'react';

const TermsAndService = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Terms of Service</h1>

      <p className="mb-4">
        Welcome to Gardening Community, your go-to platform for connecting with fellow garden lovers,
        sharing tips, finding local events, and learning about plant care. By accessing or using our
        services, you agree to be bound by these Terms of Service. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">1. Eligibility</h2>
      <p className="mb-4">
        You must be at least 13 years of age to use this platform. By registering an account, you
        confirm that you meet this requirement and that any information you provide is accurate and
        up to date.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">2. User Conduct</h2>
      <p className="mb-4">
        You agree not to use the platform for any unlawful or harmful activities. This includes, but
        is not limited to:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Posting offensive, threatening, or misleading content</li>
        <li>Spamming or promoting unrelated products/services</li>
        <li>Violating intellectual property rights of others</li>
        <li>Attempting to hack or disrupt the platform</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">3. Content Ownership</h2>
      <p className="mb-4">
        All content you submit — such as posts, questions, images, or event listings — remains yours.
        However, you grant us a non-exclusive, royalty-free license to use, display, and share this
        content within the platform and in promotional materials.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">4. Account Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or delete any account that violates these terms, without prior
        notice. You can also delete your account at any time through your settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">5. Platform Availability</h2>
      <p className="mb-4">
        We aim to keep the platform running smoothly, but we do not guarantee uninterrupted access.
        Downtime may occur for maintenance or technical issues, and we are not liable for any losses
        incurred as a result.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">6. Changes to the Terms</h2>
      <p className="mb-4">
        These Terms of Service may be updated from time to time. When we make significant changes,
        we’ll notify users via the platform or email. Continued use of our services constitutes your
        acceptance of the revised terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about these terms, please reach out to our support team
        at <a href="mailto:support@gardeningcommunity.com" className="text-green-700 underline">support@gardeningcommunity.com</a>.
      </p>
    </div>
    );
};

export default TermsAndService;