RIGHTON — SECURITY REQUIREMENTS

1. Purpose

Security must be a fundamental part of RightOn's design and development.

RightOn is an independent digital concierge that may process customer requests, personal information, preferences, and other potentially sensitive data.

The application must protect its users, information, infrastructure, and owner-controlled assets.

2. Ownership and Administrative Control

The owner must retain independent administrative control over:

- GitHub repositories and source code.
- Domain registration and DNS.
- Hosting accounts.
- Databases.
- Application configuration.
- API accounts and credentials.
- Backup systems.
- Administrative user accounts.

No outside developer, contractor, or service provider should have permanent or unrestricted control.

Access granted to outside parties must be limited, documented, and revocable.

3. Account Security

All accounts associated with RightOn should use:

- Strong, unique passwords.
- Multifactor authentication where available.
- Secure recovery methods.
- Limited administrative permissions.
- Regular access reviews.

Administrative accounts should receive stronger protection than ordinary customer accounts.

4. Source Code Protection

The original source code must remain under the owner's control.

Requirements:

- Keep the primary GitHub repository private during development.
- Protect repository access.
- Review changes before incorporating them.
- Never publish passwords, API keys, private tokens, or database credentials.
- Maintain independent copies of the source code.
- Preserve access to previous working versions.

Secrets must be stored outside the source code in appropriate secure configuration systems.

5. Customer Information Protection

RightOn should collect only information necessary to provide the requested service.

Requirements:

- Protect customer information against unauthorized access.
- Keep individual customer information separated through appropriate access controls.
- Restrict access according to legitimate business needs.
- Avoid collecting unnecessary sensitive information.
- Establish appropriate information retention periods.
- Provide appropriate procedures for customer data deletion.
- Avoid exposing personal information in error messages, logs, or public results.

6. Data Encryption

Use appropriate encryption to protect information.

Minimum expectations:

- HTTPS for connections between customers and RightOn.
- Encrypted connections between application components.
- Encryption at rest for databases and backups where supported.
- Secure handling and storage of encryption keys.
- No transmission of sensitive information through unsecured channels.

7. Database Security

Database access must be restricted.

Requirements:

- Use separate permissions for application and administrative operations.
- Prevent customers from accessing other customers' information.
- Apply database-level access controls where supported.
- Protect database credentials.
- Restrict direct public database access.
- Maintain secure backups.
- Test backup restoration procedures.

8. Third-Party Services and APIs

RightOn may eventually connect to search providers, AI services, payment processors, databases, and other outside services.

Before integrating a service, evaluate:

- Security practices.
- Privacy policies.
- Information retention.
- Data sharing.
- Ownership and licensing terms.
- Costs and recurring fees.
- Export and migration options.
- Availability and reliability.

Only provide outside services with the information necessary for their specific function.

Third-party services must not be allowed to compromise the independence or ownership of RightOn.

9. API and Credential Protection

API keys and other credentials must:

- Remain outside public source code.
- Be stored securely.
- Be restricted to necessary permissions.
- Be rotated when compromised or no longer trusted.
- Never be exposed through customer-facing application code.
- Be monitored for unauthorized use where possible.

10. Application Security

The application must be developed with protections against common security vulnerabilities, including:

- Unauthorized access.
- Injection attacks.
- Cross-site scripting (XSS).
- Cross-site request forgery (CSRF), where applicable.
- Broken access controls.
- Account takeover.
- Malicious file uploads.
- Automated abuse and excessive requests.

Use established security practices and maintained software dependencies.

11. Logging and Monitoring

RightOn should maintain appropriate records of important security events.

Examples:

- Administrative access.
- Failed login attempts.
- Permission changes.
- Unusual activity.
- System errors.
- Security incidents.

Logs should not unnecessarily contain passwords, authentication tokens, payment information, or sensitive customer content.

12. Backups and Recovery

Maintain independent backups of:

- Source code.
- Database information.
- Important configuration.
- Project documentation.

Backups should be protected against unauthorized access.

Recovery procedures must be tested periodically.

The owner must be able to recover the project without depending entirely on one hosting or development provider.

13. Security Updates

Software dependencies, frameworks, servers, and related services must be maintained.

Requirements:

- Monitor important security updates.
- Remove unused dependencies.
- Replace unsupported software.
- Review access permissions periodically.
- Address known vulnerabilities.
- Test significant changes before deployment.

14. Incident Response

Establish procedures for responding to suspected security incidents.

The process should include:

1. Identify the incident.
2. Restrict or disable compromised access.
3. Protect unaffected systems and information.
4. Investigate the cause.
5. Restore affected systems when safe.
6. Rotate compromised credentials.
7. Document the incident.
8. Determine whether customer or legal notifications are required.

15. Security Before Launch

Before RightOn accepts real customer information, evaluate:

- Authentication security.
- Database access controls.
- Encryption.
- API credential protection.
- Customer data separation.
- Backup restoration.
- Vulnerability testing.
- Administrative access.
- Privacy practices.
- Incident response procedures.

Do not treat a successful demonstration as proof that an application is secure.

16. Guiding Principle

Security must be built into RightOn, not added as an afterthought.

Customer trust, owner control, and protection of information are essential requirements for the long-term success of the service.
