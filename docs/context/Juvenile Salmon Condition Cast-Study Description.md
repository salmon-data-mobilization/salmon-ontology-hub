## Ontology Development Case Study for the RDA Salmon Ontology Development WG

We will use a focused case study to guide our salmon knowledge modeling process, intentionally limiting the number of themes we address to ensure clarity and manageability.

By narrowing our scope, we aim to create a clear, practical approach to salmon knowledge integration. This focused approach will then form the basis of a workshop-based training module designed to help others apply these methods effectively within their own contexts.

The selected case study exemplifies common semantic and data integration challenges that salmon biologists and analysts encounter when collaborating across different jurisdictions. It is intended as a realistic and manageable example, demonstrating a repeatable process that can effectively address these challenges without becoming overly broad or complex.

## Case Study Research/Management Question

---

**How does variation in juvenile \[_any salmon species here_\] salmon condition across regions and years contribute to population trends in \[xyz region\]?**

---

The goal of defining this case study is not to achieve the analytical results the case study describes but rather to provide a representative example of a question that constrains the scope of the **main goal: refining the process for compiling, describing and integrating a multiagency dataset**

This simple case study question is likely to generate at least 10 ‘themes’ of data types (or ontology modules) that will need to be clarified depending on the context, hence why we must take the approach of constraining ourselves with this perhaps overly simplistic question.

**Morphometrics & Condition** — Standard metrics (e.g., lengths, weights), condition indices (e.g., Fulton's K, Kn), and reference models.

**Age Determination & Notation** — Age notation systems, determination methods (e.g., scales, otoliths), and confidence qualifiers.

**Demographic Units** — Units such as populations, conservation units, stocks, and their jurisdictional and temporal context.

**Life History Stages** — Standardized definitions of terms like juvenile, smolt, adult.

**Life History Strategies** — Consistent classification of strategies (e.g., river-type, lake-type, adfluvial).

**Population Indices** — Escapement, CPUE, juvenile abundance, and associated estimation methods.

**Sampling Context & Protocols** — Gear types, sampling frequency, and habitat context.

**Geospatial References** — Coordinate systems, spatial units, and regional identifiers.

**Temporal References** — Year types (brood, return), seasons, and standard date formats.

**Data Provenance & Quality** — Source attribution, quality flags, and version control.

## **Fictional ‘User/Analyst Story’ Example**

Create a user story in which a hypothetical analyst aims to generate an integrated dataset tailored to a specific region and salmon species group, aligned with the general case study. The purpose is to surface integration requirements relevant to your context.

**IMPORTANT: Do not include explanatory or environmental variables. Focus only on compiling a dataset that describes condition and population abundance across years and locations for “groups” of your salmon species of interest. This dataset should be structured in a way that allows future analysis of variation using external explanatory factors relevant to your specific case study.**

### **DFO Sockeye Condition Coastwide Example Analyst Story**

**Sophie Lin**, a quantitative ecologist ~~at DFO~~, is investigating why Fraser River sockeye returns have declined while Bristol Bay sockeye populations continue to thrive. She hypothesizes that differences in **smolt condition at ocean entry** may contribute to these contrasting trends. To test this, she attempts to create a dataset that would allow her to answer this question by gathering and comparing condition data from several sources, across multiple rivers and years.

She immediately faces several challenges:

- Some datasets report **Fulton's K condition factor**, K=WL\-3**.**
- Others use the **relative condition factor (Kn)**, calculated as the ratio of observed weight to expected weight derived from a stock- or region-specific length-weight regression.
- Several datasets provide only raw **length and weight measurements**, with no calculated condition factor or documentation of measurement protocols or units.

Additionally, **age classification is inconsistent**:

- Some datasets use **European notation**
- Others use **North American systems**
- The **method of age determination**—scales, otoliths, or length-based estimates—is often undocumented or varies by agency.

Compounding these issues, the definition of **demographic units** differs:

- Smolts are categorized by **spawning stream**, **stock**, **Conservation Unit (CU)**, **run-timing group**, or **management unit**, with limited or no mapping between them.
- Population unit definitions vary across agencies and may shift over time.

## **Ecological Relevance and Application**

This question focuses on **juvenile sockeye salmon condition**—particularly size and weight at ocean entry—which is a strong predictor of early marine survival. In systems like Bristol Bay, adult returns have been stable and substantial interannual variability in smolt condition corresponds with variation in adult return rates. Conversely, in British Columbia and Washington, returns have declined despite freshwater protections, suggesting that **marine survival dynamics** may be regionally distinct.

Comparing juvenile condition across rivers and years helps identify patterns and drivers of these disparities. Though not to be tackled in our case studies, this understanding is essential for:

- **Identifying Environmental Drivers**: Understanding how freshwater and early marine conditions shape juvenile growth and survival.
- **Informing Regional Management**: Tailoring conservation and enhancement strategies to regions with persistently poor smolt condition or low survival.
- **Predicting Population Trends**: Using environmental covariates and/or condition metrics to improve forecasts of adult returns.

## **Why This Case Study Is Ideal for Vocabulary & Ontology Development**

This case study embodies common but challenging data integration issues and is highly relatable to salmon biologists. For ontology engineers, it provides a well-scoped, real-world use case of how **semantic inconsistencies** limit data reuse, reproducibility, and synthesis.

Through this case study, we can:

- Harmonize field names and measurement definitions
- Standardize and document condition index calculations
- Clarify and map age classification systems
- Reconcile agency-specific demographic groupings with ontological relationships

### **1\. Standardizing Core Biological Measurements**

Common fields like length and weight are used across datasets, but with inconsistent terminology:

- fork_length, length_mm, FL, TL
- weight, wet_weight, mass_g, etc.

Condition indices add further complexity. Formulas differ, and regression parameters for Kn or residual indices are rarely documented.

This case study motivates:

- Defining measurement types and units
- Documenting condition factor formulas and reference regressions

### **2\. Unifying Age Notation and Determination Methods**

Smolt age affects growth interpretation and productivity modeling but is inconsistently recorded and derived. This case study motivates:

- A shared vocabulary for age notation
- Transparent documentation of determination methods
- Optional confidence qualifiers or probability ranges

### **3\. Clarifying Demographic Unit Definitions**

Terms like "stock" or "CU" are used differently across contexts. Without a shared reference, these units cannot be compared across regions.

This case study motivates:

- A controlled vocabulary of unit types
- Hierarchical and equivalence relationships
- Mappings to agency-specific terms

## **What Questions This Enables**

With harmonized terms and well-defined relationships, this case study enables:

- **Cross-system smolt condition comparisons** by standardizing measurement and age classes
- **Allometric growth modeling** across populations
- **Calculation of condition residuals** to detect anomalies or trends
- **Inclusion of condition as a covariate** in marine survival models
- **Enhanced run reconstruction models**, where smolt condition informs pre-fishery abundance estimates
- **Improved forecasting of adult returns** using condition-informed regression models
- **Watershed-level habitat assessment**, linking rearing environments to smolt outcomes

## **Decision Support Applications**

This work directly supports key fisheries management functions:

- **Pre-season planning**: Adjusting forecasts based on smolt size and condition
- **Habitat restoration prioritization**: Identifying systems consistently producing low-condition smolts
- **Harvest advice**: Integrating condition-based marine survival estimates into allowable catch models

### **Modeling Uncertainty**

Harmonized smolt condition data enhances parameterization of **matrix population models** or **state-space models**, both widely used for run reconstruction and survival forecasting.

By modeling uncertainty in condition metrics and associated survival estimates, analysts can:

- Quantify confidence intervals for forecast outputs
- Improve retrospective model fits
- Run scenario simulations under variable environmental conditions
