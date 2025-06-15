import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Terms & Conditions</h1>
      <p className="mb-4">
        By accessing and using our platform, you agree to be bound by the following terms and conditions. Gardening Community is an inclusive and respectful space, and we ask all users to follow our guidelines to help maintain a positive experience for everyone.
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-6">
        <li>
          You must be at least 13 years old to create an account and participate in the community.
        </li>
        <li>
          Content shared (such as posts, tips, questions, or event listings) must be respectful, relevant to gardening, and free from hate speech, spam, or harmful misinformation.
        </li>
        <li>
          You retain ownership of the content you share but grant us a non-exclusive license to display your content on our platform.
        </li>
        <li>
          We reserve the right to remove content or suspend accounts that violate our community standards or local laws.
        </li>
        <li>
          You are responsible for safeguarding your account credentials and for all activities that occur under your account.
        </li>
      </ul>
      <p className="mb-4">
        Gardening Community does not guarantee the accuracy of user-generated content. You should verify any advice you receive and consult professionals when in doubt. Our platform is provided “as is” without warranties of any kind, and we are not liable for any direct or indirect damages that may result from the use of our services.
      </p>
      <p className="mb-4">
        By continuing to use our platform, you accept these terms. These terms may be updated from time to time, and continued use of the service constitutes your acceptance of any changes.
      </p>
    </div>
    );
};

export default TermsAndConditions;