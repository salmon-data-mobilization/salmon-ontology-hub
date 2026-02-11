---
title: Alignment Framework
description: Upper-level ontology alignment meta-framework for salmon-domain modeling.
---

## Alignment meta-framework

We align salmon-domain semantics with a **top‑down ontology stack** so datasets stay interoperable while still retaining domain‑specific meaning.

**Hierarchy (top → domain):**

```
BFO → IAO → PROV‑O → SOSA/SSN → I‑ADOPT → Darwin Core → gcdfo:
```

### What each layer answers

| Question | Primary ontology | Notes |
| --- | --- | --- |
| What kind of thing is this? | **BFO** | Material entity, process, role, quality. |
| Is this information or physical? | **IAO** | Distinguishes information artifacts. |
| Who/what produced the data? | **PROV‑O** | Provenance, agents, activities. |
| How was it measured? | **SOSA/SSN** | Observations, sampling, procedures. |
| What property was measured? | **I‑ADOPT** | Variable decomposition & constraints. |
| How do I publish to GBIF? | **Darwin Core** | Interoperability scaffold. |
| Domain terms & constraints | **gcdfo:** | Salmon‑specific classes & labels. |

### Variable decomposition (I‑ADOPT)

We decompose variables into reusable components:

- **Object of Interest** — primary entity observed
- **Property** — characteristic being measured
- **Context Object** — additional entity providing context
- **Matrix** — medium/environment
- **Constraint** — limits on scope (time, size, method)

This helps model variables consistently across datasets and makes mappings precise.

### Rules of thumb

- **Check `gcdfo:` first.** Reuse existing terms whenever possible.
- Prefer **well‑governed external vocabularies** for cross‑domain concepts.
- **Never invent IRIs.** If a term doesn’t exist, document the gap.
- Use **QUDT units** for all measures.

_Source: `salmon-domain-ontology/CONVENTIONS.md`_
