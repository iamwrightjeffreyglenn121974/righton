RIGHTON — TECHNOLOGY ARCHITECTURE

1. Purpose

This document establishes the technical foundation for RightOn.

RightOn must be designed as an independent, secure, expandable digital concierge service.

Technology decisions must prioritize functionality, affordability, portability, security, and owner control.

No major technology should be selected simply because it is popular or convenient.

2. Architecture Principles

The application should follow these principles:

- The owner retains control of the original source code.
- Technologies should be portable wherever practical.
- Avoid unnecessary vendor lock-in.
- Keep the frontend, backend, and database logically separated.
- Use established and maintained technologies.
- Keep operating costs manageable.
- Build for future expansion without unnecessary complexity.
- Make AI optional rather than essential.
- Allow individual components to be replaced without rebuilding the entire application.

3. Frontend

The frontend is the customer-facing portion of RightOn.

It should provide:

- A simple welcome screen.
- A request entry area.
- Optional additional-information prompts.
- Easy navigation.
- Organized research results.
- Comparison displays.
- Mobile-friendly functionality.
- Accessible and understandable controls.

The initial application should prioritize mobile browsers while remaining compatible with desktop browsers.

Potential technologies to evaluate:

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Other suitable open-source frontend frameworks.

The final selection should consider ease of development, performance, maintenance, and portability.

4. Backend

The backend handles the operations customers do not directly see.

Responsibilities include:

- Receiving customer requests.
- Processing request information.
- Managing application workflows.
- Connecting to search and information sources.
- Organizing retrieved information.
- Managing customer accounts when introduced.
- Enforcing security permissions.
- Communicating with the database.
- Managing third-party integrations.

Potential technologies to evaluate:

- Node.js
- Python
- Other suitable server-side technologies.

The backend should not depend unnecessarily on proprietary hosting features.

5. Database

The database stores information required to operate RightOn.

Potential information includes:

- Customer accounts, if implemented.
- Customer preferences, when saved with permission.
- Request history, if enabled.
- Research results, where appropriate.
- Application configuration.
- Administrative records.

PostgreSQL should be evaluated as a primary database option because it is established, open-source, and portable.

Database requirements:

- Appropriate access controls.
- Customer data separation.
- Secure credentials.
- Backup and recovery.
- Data export capabilities.
- Encryption where supported.
- Clearly defined data retention procedures.

6. Request Processing System

RightOn needs a central request-processing system.

Its responsibilities should include:

1. Receive the customer's original request.
2. Identify the type of assistance requested.
3. Separate stated requirements from unknown information.
4. Determine whether additional information would help.
5. Identify appropriate research methods.
6. Retrieve relevant information.
7. Organize results.
8. Identify uncertainty or missing information.
9. Present useful results to the customer.

This system should use structured programming and defined workflows wherever practical.

7. Search and Research Infrastructure

Research is a central part of RightOn's purpose.

Potential information sources include:

- Search engine APIs.
- Product databases.
- Business directories.
- Retailer websites.
- Manufacturer websites.
- Public databases.
- Government information sources.
- Authorized third-party APIs.

Research capabilities should be modular.

This means individual search providers can be replaced without redesigning the entire application.

RightOn must respect applicable website terms, API licensing, copyright, privacy requirements, and access restrictions.

8. Artificial Intelligence

AI may be used as an optional capability.

Potential applications:

- Understanding ordinary-language requests.
- Identifying relevant search terms.
- Summarizing research.
- Organizing comparisons.
- Explaining complex information.
- Helping customers refine requests.

However:

- AI must not be required for basic application operation.
- AI providers must be replaceable.
- Customer information must not be shared unnecessarily.
- AI-generated information must be evaluated for accuracy.
- Important facts should be supported by reliable sources.
- AI costs must be monitored.
- The system must handle unavailable AI services gracefully.

9. Hosting and Deployment

RightOn must be deployable through hosting providers that support its underlying technologies.

Hosting requirements:

- Secure connections.
- Reliable availability.
- Reasonable operating costs.
- Application and database backups.
- Export capabilities.
- Administrative control.
- Ability to migrate to another provider.

The owner must retain control of hosting accounts and deployment credentials.

No hosting provider should become the only place where the application can operate.

10. Domain and DNS

The parent domain is:

thewrightofway.com

RightOn may eventually operate through:

righton.thewrightofway.com

The domain and DNS should remain under the owner's independent control.

The domain registrar should not be permanently tied to the application hosting provider.

11. Security Architecture

Security must be integrated into every major component.

Requirements include:

- Secure authentication.
- Authorization and access controls.
- Server-side credential management.
- HTTPS.
- Database security.
- Customer data separation.
- Secure API integrations.
- Protected backups.
- Security monitoring.
- Regular software updates.

Security implementation must follow established practices appropriate to the selected technologies.

12. Privacy Architecture

The architecture should minimize the amount of personal information collected and stored.

Requirements:

- Allow basic requests without unnecessary account creation.
- Collect optional information only when appropriate.
- Limit third-party data sharing.
- Provide appropriate customer data controls.
- Establish retention and deletion procedures.
- Avoid unnecessary tracking.
- Keep private customer information out of public source code and public logs.

13. Ownership and Portability

The application must remain independently maintainable.

The owner must be able to:

- Access all original source code.
- Modify the application.
- Export the database.
- Maintain independent backups.
- Change hosting providers.
- Replace search providers.
- Replace AI providers.
- Change development tools.
- Continue development without relying on one outside company.

Prefer open standards, documented interfaces, and widely supported technologies.

14. Development Environment

The development process should support the owner's current circumstances, including development through an Android device and browser where practical.

Development tools should be evaluated according to:

- Cost.
- Ease of use.
- Mobile compatibility.
- Source-code ownership.
- Export capabilities.
- Portability.
- Long-term viability.

The GitHub repository remains the primary controlled source-code repository.

15. Technology Selection Process

Before choosing the final technology stack, compare available options using these criteria:

1. Initial cost.
2. Ongoing cost.
3. Ease of development.
4. Security.
5. Performance.
6. Scalability.
7. Source-code ownership.
8. Data ownership.
9. Portability.
10. Vendor independence.
11. Mobile development compatibility.
12. Long-term maintenance.

Document significant decisions and the reasons behind them.

16. Initial Architecture Strategy

The initial application should use the simplest architecture capable of delivering the core RightOn experience.

Avoid unnecessary microservices, complicated infrastructure, and expensive enterprise systems during early development.

Build a modular application that can evolve as actual customer needs become clear.

17. Guiding Principle

RightOn must be technologically sophisticated without becoming technologically dependent.

The objective is to build an independent digital concierge that the owner can understand, control, maintain, expand, and move wherever necessary.
