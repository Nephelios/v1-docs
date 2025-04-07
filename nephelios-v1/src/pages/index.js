import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <div className={clsx(styles['light-text'])}>
                    <Heading as="h1" className="hero__title">
                        Nephelios
                    </Heading>
                    <p className="hero__subtitle">Cloud Native Platform as a Service</p>
                    <div className={clsx(styles.sectionTitle, styles['light-text'])}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/intro">
                            Get Started
                        </Link>
                    </div>
                </div>

                <div className={styles.presentation}>
                    <Heading as="h1" className={clsx(styles.sectionTitle, styles['light-text'])}>
                        What is Nephelios?
                    </Heading>
                    <p className={clsx(styles['light-text'])}>
                        Nephelios is a modern PaaS that automates the deployment, scaling, and management of applications.
                        Whether you're deploying a simple web application or a complex microservices architecture,
                        Nephelios provides the tools and infrastructure to make your deployment process seamless.
                    </p>
                    <p className={clsx(styles['light-text'])}>
                        Our open-source platform enables developers to focus on writing code
                        while we handle the infrastructure complexities, allowing you to bring your applications
                        to market faster than ever before.
                    </p>
                </div>
            </div>
        </header>
    );
}

function FeatureItem({title, description, emoji}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md" style={{marginBottom: '2rem'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{emoji}</div>
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

function HomepageFeatures() {
    const features = [
        {
            title: 'One-Command Deployment',
            emoji: '🚀',
            description: 'Deploy your applications with a single command. No complex infrastructure setup required.',
        },
        {
            title: 'Automatic Scaling',
            emoji: '🔄',
            description: 'Your applications automatically scale based on demand with built-in load balancing.',
        },
        {
            title: 'Multi-Language Support',
            emoji: '💻',
            description: 'Support for multiple programming languages and frameworks to fit your development needs.',
        },
        {
            title: 'Built-in Monitoring',
            emoji: '📊',
            description: 'Comprehensive monitoring and logging tools to help you understand your application performance.',
        },
        {
            title: 'Developer-Friendly Tools',
            emoji: '🛠️',
            description: 'Intuitive CLI tools designed with developers in mind for a smooth workflow.',
        },
        {
            title: 'Secure by Default',
            emoji: '🔐',
            description: 'Enterprise-grade security features built-in from the ground up to protect your applications.',
        },
    ];

    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {features.map((props, idx) => (
                        <FeatureItem key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} - Cloud Native PaaS`}
            description="Nephelios is an open-source Platform as a Service (PaaS) solution designed to simplify application deployment and management in the cloud.">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}