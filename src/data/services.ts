import {
  ShieldCheck,
  Usb,
  LockKeyhole,
  FileCheck,
  BadgeCheck,
  Building2,
  Globe,
  LayoutDashboard,
  Workflow,
  ChartNoAxesCombined,
  Webhook,
  BrainCircuit,
} from 'lucide-react';

export const digitalSignatureFeatures = [
  {
    icon: ShieldCheck,
    title: 'Digital Signature Certificates',
    description: 'Secure digital certificates for individuals and businesses. Class 2 and Class 3 certificates for e-filing, e-tendering and document signing.',
  },
  {
    icon: Usb,
    title: 'USB Signing Tokens',
    description: 'Hardware-based secure digital identity storage. FIPS-compliant USB tokens for tamper-proof certificate management.',
  },
  {
    icon: LockKeyhole,
    title: 'Secure Authentication',
    description: 'Use digital identity for secure online workflows. Two-factor authentication and identity verification for government and enterprise portals.',
  },
  {
    icon: FileCheck,
    title: 'Document Signing',
    description: 'Digitally sign documents and business transactions. Legally valid electronic signatures for contracts, invoices and compliance documents.',
  },
  {
    icon: BadgeCheck,
    title: 'Certificate Management',
    description: 'Manage certificate lifecycle and renewals. Track expiry dates, automate renewal reminders and maintain compliance records.',
  },
  {
    icon: Building2,
    title: 'Business Signing',
    description: 'Enable teams and organisations to sign digitally. Enterprise-grade signing solutions with role-based access and audit trails.',
  },
];

export const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Corporate websites, business portals, e-commerce platforms, web applications and customer portals built for performance and scale.',
    items: ['Corporate Websites', 'Business Portals', 'E-commerce Platforms', 'Web Applications', 'Customer Portals'],
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Development',
    description: 'Admin dashboards, operational dashboards, sales analytics, real-time monitoring and data-driven decision panels.',
    items: ['Admin Dashboards', 'Operational Dashboards', 'Sales Dashboards', 'Analytics Dashboards', 'Real-time Monitoring'],
  },
  {
    icon: Workflow,
    title: 'Automation',
    description: 'Excel automation, workflow automation, email automation, data processing and end-to-end business process automation.',
    items: ['Excel Automation', 'Workflow Automation', 'Email Automation', 'Data Processing', 'Business Process Automation'],
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Reporting Solutions',
    description: 'Automated reports, MIS reports, business intelligence, data visualisation and scheduled reporting systems.',
    items: ['Automated Reports', 'MIS Reports', 'Business Intelligence', 'Data Visualisation', 'Scheduled Reporting'],
  },
  {
    icon: Webhook,
    title: 'API Development & Integration',
    description: 'REST APIs, third-party integrations, ERP integrations, CRM integrations and payment gateway connections.',
    items: ['REST APIs', 'Third-party Integrations', 'ERP Integrations', 'CRM Integrations', 'Payment Integrations'],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Intelligent Automation',
    description: 'AI-powered workflows, document processing, data extraction, AI assistants, intelligent classification and RAG-based applications.',
    items: ['AI-powered Workflows', 'Document Processing', 'Data Extraction', 'AI Assistants', 'RAG Applications'],
  },
];

export const howItWorksSteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We begin by understanding your business requirements, workflows and challenges in detail.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We design the right digital solution — architecture, technology stack and user experience.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We develop and integrate the solution with clean, maintainable and well-tested code.',
  },
  {
    number: '04',
    title: 'Automate',
    description: 'We automate workflows, deploy monitoring, and continuously improve system performance.',
  },
];
