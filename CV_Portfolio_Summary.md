# CV & Portfolio Content — Toan Dinh Van

Source: GitHub (FaberTechnology org, 4 repos) + Backlog (DEV_MIERUCA_SEO project), full history through 2026-09-03.

---

## Professional Summary

Full-stack software engineer with 2.5+ years building and operating production SaaS systems for an SEO/marketing platform (Faber Company). Shipped a series of AI-powered content and search-intelligence features on a Java/Spring monolith, then founded and scaled a standalone web-scraping microservice (SQS-based pipeline, Playwright automation, 500+ VPS fleet). Combines feature ownership with infrastructure/DevOps work and a heavy code-review/PBI-authoring load across a 7-person team — 1,600+ PRs and 9,700+ commits across four repositories, ~2,300 Backlog tickets closed at a 97% completion rate, and 2,200+ peer kudos received for collaboration and code quality.

## Skills

- **Languages/Frameworks:** Java 21, Spring Boot 3.x/Spring 7, Next.js 16, TypeScript, Node.js
- **Data:** MySQL, Amazon Aurora, Redis/Valkey, Quartz scheduling
- **AI/LLM:** OpenAI (Few-Shot API), Gemini (grounding), Claude — applied to content generation, AI Overview extraction, and LLM-driven ops automation
- **Infra/Cloud:** AWS (SQS, S3, Secrets Manager, ECS, CloudWatch), Docker, Ansible, GitHub Actions CI/CD
- **Automation/Scraping:** Playwright/Chromium browser automation, anti-detection, multi-provider fallback (Bright Data, ScraperAPI, SerpApi.com)
- **Auth/Testing:** Keycloak/FaberAuth SSO, JUnit, WireMock, TestNG→JUnit migration
- **Practices:** code review, PBI/backlog ownership, release management

## Experience — Faber Company, Software Engineer (Jan 2024 – Present)

- Led the multi-phase **AI Article Builder** initiative end-to-end (persona/title/article generation, dashboard UI, grounding-enabled chat) — the top three related PBIs totaled **~2,250 hours** of cross-functional engineering effort.
- Founded and built **serp-api**, a new SERP-scraping microservice (Java + Node/Playwright), from initial API design to a production scraping fleet across **500+ VPS instances** — 2,334 commits and 392 merged PRs in its first 13 months. The core data-fetching migration alone (`Implement Common Logic to Fetch SERP Data`) represented **866 hours** of engineering effort.
- Designed an **AI-assisted self-healing system** for scraper selector failures: an LLM (Claude) proposes fixes for broken selectors, routed through a Slack human-approval step before deployment, cutting manual on-call debugging.
- Built a **multi-provider scraping fallback architecture** (Bright Data, ScraperAPI, SerpApi.com) to keep extraction running under anti-bot pressure and provider outages.
- Drove a **Ranking System performance & scale** effort — dynamically reducing thread count based on proxy health and increasing concurrently processed sites to 8 — representing **~1,270 hours** of combined reliability/scaling work.
- Shipped **AIO Report** (AI Overview citation & brand-mention tracking) and **AI Bulk Reference Check** (multi-model prompt tool), addressing the shift toward AI-driven search.
- Led the migration of legacy SERP-fetching logic in the core monolith onto the new microservice client, unifying two divergent scraping code paths.
- Implemented **Faber Auth SSO integration** and a token-based credit/permission system for the internal admin console, covering account, package, and email management.
- Owned **CI/CD pipeline work** for the admin console (GitHub Actions deploy workflows, secrets-to-vars migration) and carried recurring release-note/hotfix duty across two production services.
- Drove a platform-wide hygiene initiative: XSS remediation across ~10 pages, HTTP status-code standardization, and a full **TestNG → JUnit + WireMock** test-suite migration.
- Reviewed **580+ pull requests** and personally owned **340+ top-level backlog items (PBIs)** end-to-end (91% closure rate) within a 7-person cross-functional team; received **2,200+ peer kudos** on the team's issue tracker.
- Sustained a growing delivery cadence — Backlog throughput rose from ~220 tickets (2024) to 1,000+/year (2025, 2026) — with a **97% closure rate** across ~2,300 assigned tickets.

---

## Portfolio Case Studies

### 1. AI Article Builder — AI-Powered Content Generation Platform
**Problem:** Users needed AI-generated, on-brand long-form articles rather than generic LLM output.
**Solution:** Built a persona-driven generation pipeline on OpenAI's Few-Shot API — title generation, article drafting, asset handling, a grounding-enabled chat for iterative editing, and a full dashboard/editor UI.
**Result:** A multi-phase flagship feature shipped from late 2024 through mid-2025; the top three related PBIs alone totaled ~2,250 hours of cross-functional engineering effort, making it one of the platform's most invested-in AI capabilities.

### 2. AIO Report — AI Overview Citation Tracking
**Problem:** As AI search overviews began influencing organic traffic, customers needed visibility into whether and how their brand was cited.
**Solution:** Built an extraction pipeline that parses AI Overview results, tracks brand mentions and citation sources, and exposes them through a dedicated reporting feature.
**Result:** Delivered through staged releases across a 4-month window, giving the platform a first-to-market response to the AI-search shift.

### 3. serp-api — Founding a Scraping Microservice
**Problem:** SERP scraping logic was tangled inside the legacy monolith, fragile under scale and hard to operate independently.
**Solution:** Co-founded a standalone Java/Node microservice from scratch — API contracts, an SQS-based job queue, S3 result storage, and a Playwright/Chromium scraping engine with anti-detection profiles — then scaled the underlying VPS fleet past 500 nodes via Ansible provisioning. The core data-fetching logic migration alone took 866 hours to get right.
**Result:** Became the platform's dedicated scraping backbone, later adopted by the core monolith itself, replacing legacy in-process scraping.

### 4. AI-Assisted Self-Healing for Scraper Selectors
**Problem:** Google's HTML structure changes frequently, silently breaking scraping selectors and requiring constant manual maintenance.
**Solution:** Built a database-driven selector-management system with usage tracking, paired with an LLM (Claude)-based repair tool: when a selector fails, the system proposes a fix and routes it through Slack for human approval before auto-deploying.
**Result:** A distinctive ops-automation feature showing applied LLM engineering beyond content generation, reducing manual toil on a 500+ node fleet.

### 5. Ranking System — Performance & Scale
**Problem:** The core ranking pipeline needed to process more sites concurrently without overwhelming proxy infrastructure.
**Solution:** Implemented dynamic thread-count reduction based on live proxy health, and scaled concurrent site processing from a lower baseline up to 8.
**Result:** ~1,270 hours of combined engineering investment across the two related PBIs, directly improving platform throughput and reliability at scale.

### 6. Admin Console Auth & Permission System
**Problem:** The internal admin console needed centralized, secure authentication and fine-grained access control as the product surface grew.
**Solution:** Integrated Faber Auth SSO (login/logout/token validation) and designed a module-level permission system spanning accounts, groups, and packages, plus a parallel token-based credit system.
**Result:** Became the security foundation for the admin console, later extended with CI/CD ownership (GitHub Actions pipelines) for the same service.

---

## Updated Portfolio Site Copy (dvt-portfolio.vercel.app)

Current live site says "2+ years" with generic Backend/Testing/Frontend/Performance blurbs and no named projects. Suggested replacement copy below.

**Hero / About:**

> I'm Van Toan, a full-stack Software Engineer with 2.5+ years at Faber Vietnam. I build AI-powered product features and the infrastructure that runs them — from LLM-driven content generation tools used by real customers, to founding and scaling a web-scraping microservice across a 500+ VPS fleet. I care about shipping things that work at scale, not just in the demo.

**What I do:**

- **AI Product Engineering** — Built AI Article Builder, AIO Report (AI Overview citation tracking), and an LLM-based self-healing tool for broken scrapers, using OpenAI, Gemini, and Claude.
- **Backend & Systems** — Java/Spring Boot, MySQL/Aurora, Quartz scheduling; founded a new microservice (serp-api) from API design to production, including an SQS job queue and a Playwright-based scraping engine.
- **Infra/DevOps** — Ansible-provisioned scraping fleet (500+ VPS), Docker, GitHub Actions CI/CD, multi-provider failover architecture.
- **Frontend** — React, Next.js, TypeScript.

**Personal Projects section:**

- **Sprint Planning Poker** (https://sprint-plann.web.app/) — real-time agile estimation tool, built over a weekend to replace a paid service
