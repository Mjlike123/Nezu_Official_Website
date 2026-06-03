import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "nezu Terms and Conditions",
  description: "Nezu Terms and Conditions.",
};

const intro = [
  "Please read these Terms and Conditions (the “Terms”) carefully before using nezu (the “Service” or “nezu”). Pay particular attention to the clauses that limit or exclude liability and the restrictions relating to minors and prohibited conduct. The Service is provided by MX INNOVATION PTE. LTD., a company registered in Singapore with its registered address at 727 Clementi West Street 2, #01-280, Singapore (120727) (“we”, “us”, or “our”). By using the Service, you agree to these Terms.",
  "nezu provides services only to adults aged 18 or above (or the age of majority under the laws of your jurisdiction). If you are under that age, you must stop using the Service immediately. If, as a guardian, you discover that a minor under your guardianship is using the Service, please notify us promptly and we will handle it in a timely manner.",
  "[Child Safety] We are committed to protecting minors and comply with applicable laws on the protection of minors. If you find any content or conduct on or through the Service that may involve a minor or may infringe the rights of a minor, please contact us at developer@nezuagent.com. We will handle such reports as strictly as permitted by law.",
  "[Compliance with local laws] You must comply with the laws of your jurisdiction and respect local customs when using the Service. If your conduct violates applicable laws, you are solely responsible for it, and we reserve the right to suspend or terminate the Service to you and to cooperate with the competent authorities."
] satisfies string[];

const sections: LegalSection[] = [
  {
    "title": "1. Acceptance and Scope of the Agreement",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1.1 These Terms, together with the nezu Privacy Policy and any other rules or policies we publish, form the complete agreement between you and us regarding the Service. We encourage you to review all of them carefully."
      },
      {
        "type": "paragraph",
        "text": "1.2 These Terms are entered into between MX INNOVATION PTE. LTD. and you, the user of nezu. By using the Service, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, please stop using the Service immediately."
      },
      {
        "type": "paragraph",
        "text": "1.3 We may modify or update these Terms from time to time. We will bring material changes to your attention by appropriate means (for example, a message via iMessage). If you do not agree to the updated Terms, please stop using the Service; your continued use after an update takes effect constitutes acceptance of the updated Terms."
      }
    ]
  },
  {
    "title": "2. The Service",
    "blocks": [
      {
        "type": "paragraph",
        "text": "2.1 What nezu does. nezu is a message-based companion-matching service. You tell us through iMessage what kind of companion (“search criteria”) you are looking for. Based on your criteria, we search and organize information about potential matches from publicly accessible third-party platforms, suggest potential matches to you, and generate suggested greeting messages. You alone decide whether to send any message and whether to pursue a connection (“match”)."
      },
      {
        "type": "paragraph",
        "text": "2.2 What nezu does not do. We do not verify the identity, age, background, character, or intentions of any potential match, and we do not vet or guarantee the accuracy of any information obtained from third-party platforms. We are not a party to, and are not responsible for, any communication, relationship, or interaction between you and any match. nezu is a tool that assists you; the decisions and the outreach are yours."
      },
      {
        "type": "paragraph",
        "text": "2.3 Limited license. We grant you a personal, revocable, non-transferable, non-exclusive, and non-commercial right to use the Service. All rights not expressly granted are reserved by us. You may not use the Service in any manner not expressly authorized by these Terms."
      },
      {
        "type": "paragraph",
        "text": "2.4 Changes to the Service. We may update, modify, suspend, or discontinue all or part of the Service at any time to improve the user experience or for operational, security, or compliance reasons. Some features may be limited or unavailable as a result."
      },
      {
        "type": "paragraph",
        "text": "2.5 Your equipment and costs. You are responsible for your own device, messaging service, and internet connection, and for any related data or carrier charges incurred in using the Service."
      }
    ]
  },
  {
    "title": "3. Eligibility",
    "blocks": [
      {
        "type": "paragraph",
        "text": "3.1 You may use the Service only if you are at least 18 years old (or the age of majority under the laws of your jurisdiction) and are legally able to enter into these Terms."
      },
      {
        "type": "paragraph",
        "text": "3.2 We do not provide the Service to minors. If we become aware that a user is a minor, we may immediately take action, including suspending or terminating the Service to that user."
      }
    ]
  },
  {
    "title": "4. How You Use the Service",
    "blocks": [
      {
        "type": "paragraph",
        "text": "4.1 You are responsible for the information and search criteria you provide to us, and you represent that you provide them lawfully and in good faith for the genuine purpose of seeking a social connection."
      },
      {
        "type": "paragraph",
        "text": "4.2 You are solely responsible for all activity conducted through your communications with us, including the decision to send any greeting message and all consequences of doing so."
      },
      {
        "type": "paragraph",
        "text": "4.3 You acknowledge that the final decision to contact any person, and the responsibility for that contact, rest entirely with you. We provide suggestions only; we do not send messages on your behalf without your decision."
      }
    ]
  },
  {
    "title": "5. User Code of Conduct",
    "blocks": [
      {
        "type": "paragraph",
        "text": "You agree that you will NOT use the Service to do, or attempt to do, any of the following:"
      },
      {
        "type": "list",
        "items": [
          "contact, or seek to contact, any person who has asked you not to contact them, or to evade any block, no-contact request, restraining order, or similar restriction;",
          "harass, stalk, threaten, intimidate, defame, surveil, dox, or otherwise harm any person, including any potential match;",
          "seek, target, contact, or attempt to connect with any person under the age of 18, or describe search criteria seeking a minor;",
          "compile, store, or use information about any individual for purposes of surveillance, profiling, discrimination, blackmail, or any other unlawful or harmful purpose;",
          "impersonate any person or entity, or misrepresent your identity, age, or affiliation;",
          "use the Service for commercial solicitation, spam, fraud, or to promote or arrange compensated companionship, escort, or sexual services;",
          "use any information obtained through the Service for any purpose other than your personal, non-commercial pursuit of a social connection;",
          "infringe the rights of any third party, including privacy, publicity, and intellectual-property rights;",
          "violate any applicable law or the terms of service of any third-party platform;",
          "interfere with, disrupt, or gain unauthorized access to the Service or its systems, or reverse engineer, scrape, or circumvent any technical measure of the Service;",
          "engage in any other conduct that we reasonably determine to be unlawful, harmful, abusive, or inappropriate."
        ]
      },
      {
        "type": "subheading",
        "text": "Child Safety — Prohibited Conduct"
      },
      {
        "type": "paragraph",
        "text": "Without limiting the above, you must never use the Service in connection with any of the following, all of which are strictly prohibited:"
      },
      {
        "type": "list",
        "items": [
          "any inappropriate interaction directed at a child;",
          "child grooming (befriending a minor to facilitate sexual contact or the exchange of sexual imagery);",
          "the sexualization of a minor, or content that depicts, encourages, or promotes the sexual exploitation of children;",
          "sextortion (threatening or blackmailing a minor using intimate imagery);",
          "the trafficking, advertising, or solicitation of a minor for any purpose."
        ]
      },
      {
        "type": "paragraph",
        "text": "Enforcement. We may, based on reasonable judgment and without prior notice, suspend or terminate your access, remove content, and take other appropriate measures if we believe you have violated these Terms or any applicable law. Where conduct may constitute a criminal offense, we reserve the right to report it to and cooperate with the competent authorities."
      }
    ]
  },
  {
    "title": "6. Third-Party Platforms and Match Information",
    "blocks": [
      {
        "type": "paragraph",
        "text": "6.1 To provide matches, we retrieve and organize information that is publicly accessible on third-party platforms. We do not control those platforms, and your and our use of information from them may be subject to those platforms’ own terms and applicable data-protection laws."
      },
      {
        "type": "paragraph",
        "text": "6.2 We do not guarantee the accuracy, completeness, currency, or authenticity of any information about a potential match. You should independently verify information and exercise caution before relying on it or acting on it."
      },
      {
        "type": "paragraph",
        "text": "6.3 If a potential match wishes to access, correct, or delete information we hold about them, or to object to our processing, they may contact us at developer@nezuagent.com. For details on how we handle personal information, please review our Privacy Policy."
      }
    ]
  },
  {
    "title": "7. Fees",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The Service may be offered free of charge or may include paid features. If we introduce any paid features, the applicable prices and payment terms will be presented to you before you incur any charge, and any payment will be processed through third-party payment providers subject to their own terms. You represent that you are legally able to make any such payment and that your funds are from a lawful source."
      }
    ]
  },
  {
    "title": "8. Intellectual Property",
    "blocks": [
      {
        "type": "paragraph",
        "text": "8.1 We own all intellectual-property rights in the Service, including its software, technology, text, and generated content suggestions, except for information that originates from third parties or that you provide."
      },
      {
        "type": "paragraph",
        "text": "8.2 You may not use the “nezu” name, logo, or any related brand identifier without our prior written consent."
      },
      {
        "type": "paragraph",
        "text": "8.3 You retain ownership of the search criteria and other content you provide, and you grant us a non-exclusive, royalty-free license to use that content as necessary to operate and provide the Service to you."
      }
    ]
  },
  {
    "title": "9. Disclaimers",
    "blocks": [
      {
        "type": "paragraph",
        "text": "9.1 The Service is provided on an “as is” and “as available” basis. We do not warrant that the Service will be uninterrupted, error-free, secure, or that any match suggestion or information will be accurate or meet your expectations."
      },
      {
        "type": "paragraph",
        "text": "9.2 You assume all risk arising from your decision to contact, communicate, or meet with any person identified through the Service. We do not screen, vet, or conduct background checks on any potential match, and we are not responsible for the conduct of any user or any match, whether online or offline. Please take appropriate safety precautions when interacting with people you do not know."
      }
    ]
  },
  {
    "title": "10. Limitation of Liability",
    "blocks": [
      {
        "type": "paragraph",
        "text": "10.1 To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss arising from force majeure, your misuse of the Service, your violation of these Terms, the conduct of any third party or match, or the inaccuracy of any third-party information."
      },
      {
        "type": "paragraph",
        "text": "10.2 To the maximum extent permitted by law, our total aggregate liability arising out of or relating to the Service or these Terms will not exceed the amount you paid us for the Service in the twelve months preceding the event giving rise to the claim (or, if the Service was provided free of charge, a nominal amount permitted by applicable law)."
      }
    ]
  },
  {
    "title": "11. Indemnification",
    "blocks": [
      {
        "type": "paragraph",
        "text": "You agree to indemnify and hold us harmless from any claims, losses, liabilities, and expenses (including reasonable legal fees) arising out of your use of the Service, your violation of these Terms or any applicable law, or your infringement of the rights of any third party, including any potential match."
      }
    ]
  },
  {
    "title": "12. Termination",
    "blocks": [
      {
        "type": "paragraph",
        "text": "12.1 You may stop using the Service at any time and may ask us to delete your information by contacting us through iMessage or at developer@nezuagent.com."
      },
      {
        "type": "paragraph",
        "text": "12.2 We may suspend or terminate your access to the Service at any time if you violate these Terms or applicable law, or to protect the Service or other persons. Provisions that by their nature should survive termination (including intellectual property, disclaimers, limitation of liability, and indemnification) will survive."
      }
    ]
  },
  {
    "title": "13. Governing Law and Dispute Resolution",
    "blocks": [
      {
        "type": "paragraph",
        "text": "These Terms are governed by and construed in accordance with the laws of Singapore, without regard to its conflict-of-laws principles. Any dispute arising out of or relating to these Terms or the Service shall be submitted to the exclusive jurisdiction of the courts of Singapore, except where mandatory consumer-protection laws of your place of residence entitle you to bring proceedings in your local courts."
      }
    ]
  },
  {
    "title": "14. Changes to These Terms",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We may revise these Terms from time to time. The “Last Updated” date at the top indicates when the latest changes took effect. For material changes, we will provide notice by appropriate means. Your continued use of the Service after changes take effect constitutes acceptance of the revised Terms."
      }
    ]
  },
  {
    "title": "15. Miscellaneous",
    "blocks": [
      {
        "type": "paragraph",
        "text": "15.1 Severability. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect."
      },
      {
        "type": "paragraph",
        "text": "15.2 No waiver. Our failure to enforce any provision is not a waiver of our right to do so later."
      },
      {
        "type": "paragraph",
        "text": "15.3 Entire agreement. These Terms, together with the Privacy Policy and any other published rules, constitute the entire agreement between you and us regarding the Service."
      }
    ]
  },
  {
    "title": "16. Contact Us",
    "blocks": [
      {
        "type": "paragraph",
        "text": "If you have any questions, comments, or complaints regarding these Terms or the Service, please contact us:"
      },
      {
        "type": "paragraph",
        "text": "Email: developer@nezuagent.com"
      },
      {
        "type": "paragraph",
        "text": "Operating entity: MX INNOVATION PTE. LTD."
      },
      {
        "type": "paragraph",
        "text": "Registered address: 727 Clementi West Street 2, #01-280, Singapore (120727)"
      }
    ]
  }
];

export default function NezuTermsAndConditionsPage() {
  return (
    <LegalPage
      title="nezu Terms and Conditions"
      lastUpdated="June 2, 2026"
      intro={intro}
      sections={sections}
    />
  );
}
