import LegalPage from '../components/LegalPage';

const sections = [
    {
        heading: '1. Acceptance of Terms',
        body: [
            'By downloading, installing, or using Bikode ("the Software") or visiting this website, you agree to be bound by these Terms of Use. If you do not agree, do not use the Software or this website.',
        ],
    },
    {
        heading: '2. License',
        body: [
            'Bikode is released under the BSD 3-Clause License. You are free to use, copy, modify, and distribute it in accordance with the terms of that license.',
            'The full license text is available in the repository at https://github.com/EugeneBoondock/Bikode/blob/main/LICENSE.',
        ],
    },
    {
        heading: '3. Use of the Software',
        body: [
            'Bikode is provided as-is for personal and commercial use. You may use Bikode for any lawful purpose. You must not use the Software to engage in illegal activity, distribute malware, or infringe on the intellectual property of others.',
            'The AI features in Bikode connect to third-party providers using your own API keys. You are responsible for complying with those providers\' terms of service.',
        ],
    },
    {
        heading: '4. No Warranty',
        body: [
            'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.',
            'IN NO EVENT SHALL BOONDOCKLABS OR CONTRIBUTORS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY ARISING FROM THE USE OF THE SOFTWARE.',
        ],
    },
    {
        heading: '5. Contributions',
        body: [
            'Contributions to Bikode are welcome under the same BSD 3-Clause License. By submitting a pull request, you agree that your contribution may be distributed under this license.',
        ],
    },
    {
        heading: '6. Third-Party Services',
        body: [
            'This website and the Software may reference or link to third-party services (GitHub, AI providers, etc.). BoondockLabs is not responsible for the content or practices of those services.',
        ],
    },
    {
        heading: '7. Changes to These Terms',
        body: [
            'BoondockLabs reserves the right to update these Terms at any time. The "Last updated" date at the top of this page reflects the most recent revision. Continued use after changes means you accept the new terms.',
        ],
    },
    {
        heading: '8. Contact',
        body: [
            'For questions about these Terms, contact us at philosncube@gmail.com or visit boondocklabs.co.za.',
        ],
    },
];

export default function TermsPage() {
    return (
        <LegalPage
            title="Terms of Use"
            subtitle="Bikode is open-source software released under the BSD 3-Clause License. Please read these terms before using the software or website."
            lastUpdated="March 2025"
            sections={sections}
        />
    );
}
