import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// TODO: Replace these placeholder links with actual personal social media profiles
export const socialLinks = [
  {
    icon: faGithub,
    href: 'https://github.com',
    label: 'GitHub',
    type: 'external' as const,
  },
  {
    icon: faLinkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    type: 'external' as const,
  },
  {
    icon: faEnvelope,
    href: 'mailto:contact@example.com',
    label: 'Email',
    type: 'email' as const,
  },
] as const;

// Optional: X (formerly Twitter) link (can be added/removed as needed)
export const xLink = {
  icon: faXTwitter, // Using the actual X/Twitter icon from FontAwesome
  href: 'https://x.com',
  label: 'X',
  type: 'external' as const,
} as const;