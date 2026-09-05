import type { NavItem } from '../../types/navigation';

export const footerMenu: NavItem[] = [
    {
        id: 'privacy',
        to: '/politica-privacidad',
        label: 'Privacy Policy',
        title: 'Conoce la politica de privacidad',
        dataLink: 'footer-privacidad-link',
        type: 'route',
    },
];
