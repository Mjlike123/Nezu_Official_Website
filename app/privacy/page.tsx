import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "nezu Privacy Policy",
  description: "Nezu Privacy Policy.",
};

const intro = [
  "Welcome to nezu (the “Service” or “nezu”). The Service is provided and controlled by MX INNOVATION PTE. LTD., a company registered in Singapore with its registered address at 727 Clementi West Street 2, #01-280, Singapore (120727) (“we” or “us”). We value and are committed to protecting your privacy.",
  "nezu is a message-based companion-matching service. You tell us through iMessage what kind of companion you are looking for; based on that, we search and organize information about potential matches from publicly accessible third-party platforms, generate suggested greeting messages for you, and you alone decide whether to send a message and whether to connect (match).",
  "This Policy applies only to users aged 18 or older (or the age of majority in your country/region). If you are below that age, please do not use the Service.",
  "This Policy is provided in English. By accessing or using nezu, you confirm that you have read, understood, and agree to this Policy and our Terms and Conditions, and you consent to our collection, storage, use, and disclosure of your personal information in accordance with this Policy. If you do not agree, please do not use the Service.",
  "We may revise this Policy from time to time due to service updates, legal changes, or other factors. For changes that may materially affect your rights, we will notify you by reasonable means (e.g., an iMessage message). Your continued use of the Service after a revision is published constitutes acceptance of the updated Policy."
] satisfies string[];

const sections: LegalSection[] = [
  {
    "title": "I. What Information We Collect",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Because of how nezu works, we process information about two different types of subjects: (1) you, as our user; and (2) the potential matches (“companions”) you wish to connect with. The source, purpose, and handling of these two categories differ, and we describe them separately below."
      },
      {
        "type": "subheading",
        "text": "(A) Information you provide to us directly"
      },
      {
        "type": "paragraph",
        "text": "When you communicate with us through iMessage, you may provide:"
      },
      {
        "type": "list",
        "items": [
          "Contact identifier: the iMessage account information you use to contact us (e.g., your phone number or Apple ID email).",
          "Your matching preferences: the characteristics, interests, activity types, location preferences, and other criteria you describe for your ideal companion.",
          "Communication content: the message history between you and us, including your requests, your feedback on match results, and your decisions about whether to send a message or connect.",
          "Other information you choose to provide: any other personal information you voluntarily share during our communications."
        ]
      },
      {
        "type": "subheading",
        "text": "(B) Information we collect automatically when you use the Service"
      },
      {
        "type": "list",
        "items": [
          "Usage and log information: the time and frequency of your interactions with us, message processing status, service-response records, and technical logs needed to troubleshoot issues."
        ]
      },
      {
        "type": "subheading",
        "text": "(C) Information about potential matches (“companions”)"
      },
      {
        "type": "paragraph",
        "text": "To complete a match, we search and organize information about potential matches from publicly accessible third-party platforms based on your request. This may include:"
      },
      {
        "type": "list",
        "items": [
          "a publicly available name or nickname, avatar, or photo;",
          "a publicly available bio, interests, location, and similar profile details;",
          "the public account or contact details needed to initiate contact;",
          "other public information relevant to assessing match suitability."
        ]
      },
      {
        "type": "paragraph",
        "text": "Important: Potential matches are generally not registered nezu users and may not be aware that their public information has been retrieved and organized by us. We process such information only to the extent necessary to provide the matching service to you, and not for unrelated purposes. For the special safeguards, retention periods, and the rights of these individuals, see Section IV (“Special Notice Regarding Potential Matches”) below."
      }
    ]
  },
  {
    "title": "II. How We Use Information",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We use the information we collect for the following purposes:"
      },
      {
        "type": "list",
        "items": [
          "Providing and operating the Service: understanding your matching needs, searching for and organizing potential matches, and providing match suggestions to you.",
          "Generating greeting messages: drafting greeting messages, based on relevant information about you and the match, for you to choose whether to send.",
          "Improving the Service: analyzing match effectiveness, refining recommendation quality, and improving the overall experience.",
          "Communications and customer support: responding to your requests, notifying you of changes to the Service and this Policy, and handling complaints.",
          "Security and compliance: detecting and preventing abuse, fraud, and unlawful activity, and meeting applicable legal and regulatory obligations."
        ]
      },
      {
        "type": "paragraph",
        "text": "We do not make decisions producing significant legal effects about you based solely on automated processing; the final decision to send a message or connect always rests with you."
      }
    ]
  },
  {
    "title": "III. How We Share Information",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We do not provide, disclose, or share your personal information with third parties except with your consent or where permitted by applicable law. We may share information in the following necessary circumstances:"
      },
      {
        "type": "list",
        "items": [
          "Service providers: vendors that help us operate the Service, such as cloud storage providers, message-transmission providers, and the AI technology providers used to generate greeting messages. We require them to process information only as necessary to provide services to us and to comply with applicable confidentiality and security obligations.",
          "Legal reasons: where we believe in good faith that disclosure is necessary to comply with the law, respond to legal process (such as subpoenas or court orders), cooperate with law enforcement, or protect the rights, interests, and safety of us or others.",
          "Business transfers: in the event of a merger, acquisition, reorganization, or asset transfer, information may be transferred to the successor to the extent permitted by applicable law."
        ]
      },
      {
        "type": "paragraph",
        "text": "Please note: When you choose to send a greeting message to a match, that message and any information you choose to disclose will be sent to that person through the relevant channel. Please consider carefully which personal information you disclose to others."
      }
    ]
  },
  {
    "title": "IV. Special Notice Regarding Potential Matches",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We recognize that processing information about non-users (the potential matches you wish to contact) carries heightened privacy sensitivity. Accordingly, we commit to the following:"
      },
      {
        "type": "list",
        "items": [
          "We retrieve and process only information that is publicly accessible on third-party platforms, and only to the extent necessary to complete a match;",
          "We do not sell match information to any third party, nor use it for purposes unrelated to the matching service;",
          "We delete or anonymize match information that is no longer needed once a matching task is complete or after a reasonable necessary period has elapsed;",
          "We respect data-subject rights: any potential match may contact us at developer@nezuagent.com to request access to, correction of, or deletion of their information, or to object to our processing of it; we will respond within a reasonable time as required by law."
        ]
      },
      {
        "type": "paragraph",
        "text": "Compliance note: Retrieving information from third-party platforms may be subject to those platforms’ terms of service and may be governed by data-protection laws in the relevant jurisdiction (such as the GDPR and CCPA). We will endeavor to conduct these activities lawfully and reasonably, and we recommend ongoing compliance assessment with professional legal advice."
      }
    ]
  },
  {
    "title": "V. Your Rights",
    "blocks": [
      {
        "type": "paragraph",
        "text": "To the extent permitted by applicable law, you have the following rights regarding the personal information we process about you:"
      },
      {
        "type": "list",
        "items": [
          "the right of access, the right to rectification, and the right to erasure;",
          "the right to restrict processing and the right to object to processing;",
          "the right to withdraw consent (withdrawal does not affect the lawfulness of processing carried out before withdrawal based on consent);",
          "the right to data portability;",
          "the right not to be discriminated against for exercising these rights."
        ]
      },
      {
        "type": "paragraph",
        "text": "To exercise these rights, or to ask us to stop processing or to delete your information, contact us at developer@nezuagent.com. After verifying your identity, we will respond within a reasonable time as required by law. In certain circumstances permitted by law (for example, where we cannot verify your identity, where the request could harm the legitimate rights of others, or where it would seriously impede our normal operations), we may be unable to fulfill your request."
      },
      {
        "type": "paragraph",
        "text": "If you no longer wish to use nezu, you may tell us at any time through iMessage, or email developer@nezuagent.com to request deletion of your account and related information."
      }
    ]
  },
  {
    "title": "VI. Data Storage and Cross-Border Transfer",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In providing the Service, we may store your personal information on servers located outside your country/region. When this occurs, we will put in place appropriate safeguards consistent with applicable legal requirements (such as contractual commitments) to provide adequate protection for your personal information. We store your personal information only for the reasonable and necessary period prescribed by laws and regulations, after which we will delete or anonymize it."
      }
    ]
  },
  {
    "title": "VII. Information Security",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We implement reasonable and appropriate security measures to protect your information against loss, misuse, and unauthorized access, disclosure, or alteration. However, please understand that no transmission over the internet can be guaranteed to be completely secure, and we cannot guarantee absolute security. Please keep your device and account information safe and contact us promptly if you discover any security issue."
      }
    ]
  },
  {
    "title": "VIII. Information Retention",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We retain your personal information only for as long as necessary to fulfill the purposes described in this Policy, and as necessary to comply with legal obligations, resolve disputes, and enforce agreements. Information about potential matches will be deleted or anonymized promptly once a match is complete or the information is no longer needed."
      }
    ]
  },
  {
    "title": "IX. Minors’ Information",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The Service is not directed to minors under the age of 18 (or the age of majority under local law). We do not knowingly collect or retain the personal information of minors. If we learn that we have collected a minor’s information, we will take appropriate measures to delete it. If you believe a minor has provided us with information, please contact us at developer@nezuagent.com and we will assist in deleting it."
      }
    ]
  },
  {
    "title": "X. Disclaimer",
    "blocks": [
      {
        "type": "paragraph",
        "text": "nezu only helps you discover potential matches and provides suggested communication content. Whether to send a message, whether to connect with another person, and any subsequent interaction are entirely your own decisions, made at your own risk. We recommend that you exercise caution when disclosing personal information to people you do not know, and remain alert to situations involving personal or financial safety. We are not responsible for interactions between you and your matches or their consequences."
      }
    ]
  },
  {
    "title": "XI. Contact Us",
    "blocks": [
      {
        "type": "paragraph",
        "text": "If you have any questions, comments, or requests regarding this Policy, please contact us:"
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

export default function NezuPrivacyPolicyPage() {
  return (
    <LegalPage
      title="nezu Privacy Policy"
      lastUpdated="June 2, 2026"
      intro={intro}
      sections={sections}
    />
  );
}
