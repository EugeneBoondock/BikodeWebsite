import LegalPage from '../components/LegalPage';

const sections = [
    {
        heading: '1. Overview',
        body: [
            'Bikode is a free, open-source AI IDE developed by BoondockLabs. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.',
            'By using Bikode or this website, you agree to the practices described in this policy.',
        ],
    },
    {
        heading: '2. Information We Collect',
        body: [
            'We do not collect any personal information through the Bikode application itself. Bikode runs locally on your machine and does not transmit your code, projects, or files to any server unless you explicitly configure a third-party AI provider.',
            'This website does not use cookies or tracking analytics beyond what your browser natively provides. No sign-up or account is required to download or use Bikode.',
        ],
    },
    {
        heading: '3. Third-Party AI Services',
        body: [
            'Bikode allows you to configure third-party AI providers (e.g. OpenAI, Anthropic, local models). When you use these integrations, your prompts and code snippets are sent directly to those providers. We are not responsible for how those third parties handle your data — please review their respective privacy policies.',
            'We never act as a proxy for these requests. No data passes through BoondockLabs servers.',
        ],
    },
    {
        heading: '4. GitHub and Open Source',
        body: [
            'Bikode is hosted on GitHub (https://github.com/EugeneBoondock/Bikode). If you open issues, submit pull requests, or interact with the repository, GitHub\'s own Privacy Policy governs that data.',
        ],
    },
    {
        heading: '5. Contact',
        body: [
            'If you have any questions about this Privacy Policy, please contact us at philosncube@gmail.com or visit boondocklabs.co.za.',
        ],
    },
    {
        heading: '6. Changes to This Policy',
        body: [
            'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of the website or application after changes constitutes acceptance of the new policy.',
        ],
    },
];

export default function PrivacyPage() {
    return (
        <LegalPage
            title="Privacy Policy"
            subtitle="We respect your privacy. Bikode collects no personal data and runs entirely on your machine."
            lastUpdated="March 2025"
            sections={sections}
        />
    );
}
