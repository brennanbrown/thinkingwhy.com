# Opinionated Best Practices Guide for Coding Projects
## 1. **Repository Essentials**

- **README.md**  
  - Project description, stack choices, setup instructions, usage, roadmap, and license.
  - Update with each substantial project shift.

- **TODO.md** ()[1][2]
  - Use Markdown checklists:  
    ```
    # TODO

    - [ ] Refactor search endpoint @devA
        - [ ] Add caching
    - [ ] Write docs for image attribution #documentation
    ```
  - Structure with topical subheadings (`## Features`, `## Bugs/Backlog`, `## Done`)
  - Tag tasks (`#feature`, `#prio1`), assign (`@username`)
  - Remove completed or outdated TODOs regularly.
  - Prefer TODO.md to scattered inline TODO comments—automate extraction with pre-commit hooks.[3][1]
  - Keep TODO.md at repository root and in major subprojects.

- **CHANGELOG.md** ()[4][5][6]
  - Reverse chronological order, newest at top.
  - Entries grouped by version:  
    ```
    ## [1.3.0] - 2025-10-22
    ### Added
    - New image attribution automation.
    ### Fixed
    - Correct alt text bug for images.
    ### Changed
    - SEO schema tweak for FAQPage.
    ```
  - Use bullet points, plain language, and “Added/Changed/Fixed/Removed” labels.
  - Link related issues, reference contributors.
  - Summarize breaking changes clearly:  
    ```
    ### BREAKING
    - Refactored content schema, requires migration
    ```
  - Maintain CHANGELOG with every release—never skip!

***

## 2. **Branching and Commit Hygiene**

- **Branching**
  - **Main/master** for production, never direct commits.
  - **Develop** (optional) for rolling integration.
  - Feature branches: `feature/image-attribution`, `fix/blog-index-paging`
  - Always use descriptive names. Delete merged branches.

- **Git Commit Messages** ()[7][8][9][10][11]
  - Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):  
    ```
    <type>[optional scope]: <description>
    
    [optional body]

    [optional footer(s)]
    ```
    - Commit types: `feat`, `fix`, `docs`, `chore`, `style`, `refactor`, `test`, `perf`, `ci`, `build`, `revert`.
    - Example:
      ```
      feat(seo): add FAQPage schema to blog layout

      This enables search engines and parsers to better understand blog posts.

      Closes #17
      ```
  - **Format guidelines**:
    - Subject: lower case, present tense, max 72 chars.
    - Body: use for non-trivial changes or context.
    - Reference issues: "Closes #12", "Relates #3".
    - Use `BREAKING CHANGE:` tag at beginning of body if introducing breaking change.

***

## 3. **Planning & Collaboration**

- **Feature Planning Document**
  - For major features, keep /docs/feature-<name>.md outlining:
    - Problem, context, requirements, alternatives, rationale for direction.
    - Updated with design/implementation notes as work progresses.
  - Review/plan with your coding assistant or team before touching code.[12][13][14]

- **Design Mockups**
  - UI/UX sketches or screens in `/docs/mockups` or `/public/mockups`.

***

## 4. **Code and Tooling Integration**

- **Code Comments**
  - Only context-rich, necessary comments.  
    ```
    // Explain why, not what, unless code is obscure.
    ```
  - Use `TODO:`, `FIXME:`, `NOTE:` tags for actionable, trackable comments.

- **Tooling Suggestions (assistants, code completion, etc.)**
  - Never accept generated code without review.
  - Always compare to authoritative docs or standards.
  - For plan docs, append brief rationale for any external suggestions adopted.

- **Manual Refresh**
  - For code reviews using external tools, explicitly re-load or re-index repo context as features evolve.[13][12]

***

## 5. **Automation & Tooling**

- **Linting/Formatting**
  - Enforce with pre-commit hooks.
  - Document conventions in README.
  - Auto-format on merge whenever possible.

- **Testing**
  - Automated tests for business logic.  
    - Add test status in CHANGELOG (`### Tested`, `### Deprecated`).
  - Use code coverage badges, CI triggers.

***

## 6. **Documentation**
- **LICENSE**  
  - Always present, correct license terms, update if scope changes.

- **Docs Folder**
  - `/docs` for policy, architectural decisions, technical deep-dives.
  - Reference docs in README for onboarding.

- **API Documentation**
  - For reusable backend/frontend logic, auto-generate documentation and update API versioning in CHANGELOG.

***

## 7. **Release & Maintenance**

- **Versioning:**
  - Semantic versioning (`major.minor.patch`) enforced.
  - Tag releases: `git tag v1.2.0`

- **Release Notes**
  - Summarize important changes, highlight upgrade steps, new features, and breaking changes.

- **Archiving**
  - When deprecating, document why in a final CHANGELOG entry.
  - Archive old feature branches with descriptive tags.

***

## 8. **Security & Community**

- **Security Issues**
  - Mark urgent or breaking security fixes in CHANGELOG (`### Security`).

- **Contribution Guidelines**
  - /CONTRIBUTING.md: clear process for reporting issues, proposing changes, code style adherence.

***

## 9. **Checklist: Every Coding Repo Should Have**

- [ ] README.md updated and helpful.
- [ ] TODO.md checked and used.
- [ ] CHANGELOG.md meticulously updated for each release.
- [ ] Branches are well-named and regularly cleaned.
- [ ] Conventional Commits are followed.
- [ ] Major features proposals have feature docs.
- [ ] All code changes reviewed and tested before merge.
- [ ] API and code docs auto-generated.
- [ ] Release notes written, tagged, and distributed.