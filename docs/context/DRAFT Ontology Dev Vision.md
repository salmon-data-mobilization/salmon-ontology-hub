THIS IS A VERY DRAFTY VISION OF THE MANUAL PROCESS OF ONTOLOGY DEVELOPMENT THAT WE WANT TO IMPROVE WITH AI, TOOLING, LLMS, AND AUTOMATION. TREAT THIS AS IMPERFECT AND NEEDING SIGNIFICANT WORK.

## **Process Vision for Salmon Vocabulary and Ontology Integration**

This document outlines the vision of the Research Data Alliance’s Salmon Ontology Working Group for developing, aligning, and publishing controlled vocabularies and ontology modules that enable semantic data integration in the salmon research and management domain. The process is intended to support a community-centered, flexible, and repeatable approach that can be shared through a training workshop and adapted by other organizations.

### **Process for Salmon Vocabulary and Ontology Integration**

This framework outlines a repeatable process that supports salmon researchers, data stewards, and analysts who want to: (1) find and reuse established controlled vocabularies; (2) align their data structures with these vocabularies; (3) publish their own well-documented vocabularies when needed; (4) contribute to broader efforts like the NCEAS Salmon Ontology; and (5) **optionally** build their own agency- or application-specific ontology modules. While not all users will complete every step, the framework is designed to scale with community needs and serve as a foundation for interoperable salmon data systems.

#### **Step 1: Term Extraction Identify and Document Terms in Use in a Data Dictionary**

- Start with your own dataset or database
- Look at column names, variable labels, codes, or free-text fields
- For each key term, ask: What does this mean? How is it used? Is it defined anywhere?
- Record definitions, units, examples, and any inconsistencies or confusion in a data dictionary template

#### **Step 2: Concept Decomposition and Crosswalk Across Datasets, Programs or Agencies**

- Extract the key concepts/terms from each data set, that you would like to integrate
- Crosswalk terms (ie. compare and map out relationships) in your data dictionary with the terms in other datasets or databases you're trying to integrate with as to whether or not the terms mean the same thing or can reasonably be combined to represent the same thing. Identify equivalent or similar terms and begin building a mapping table
- Compile sufficient metadata and definitions of terms used in the datasets you’re attempting to integrate. In most cases, datasets will not be adequately documented, so you will likely require communication/interviews with data authors to clarify semantics, methods, and units
- Update mapping table based on interview results
- Describe simple hierarchical relationships between important terms like "same_as," "close_match," or "narrower_than", “broader_than” to begin to clarify interoperability

#### **Step 3: Competency Questions**

- Knowledge modeling competency questions are specific, natural language questions that an ontology or knowledge model should be able to answer, which helps guide the model's design and validate its functional requirements.
- Examples include:
  - Are differences in sockeye smolt condition at ocean entry contributing to differences in adult return abundances between Fraser River and Bristol Bay populations?
  - Are there differences in condition factor between Fraser River and Bristol Bay sockeye salmon populations in any given year?
  - Is the smolt age composition between Fraser and Bristol sockeye different?

#### Competency questions can be used at points along the process to verify that the knowledge modelling is able to answer the desired questions.

#### **Step 4: Draw Schema Diagrams**

- Individual dataset modelling
- Finding set union/similarity of data models
- Building diagrams for a harmonized model
- Using WebVOWL to
  - Share ideas of how to model the dataset/ontology
  - Begin to formally define and contextualize terms

#### **Step 5: Formal Concept Analysis, Decomposition, and Hierarchical Clustering**

- The goal of concept decomposition is to identify the simplest (ie. atomic) form of all concepts (terms) and their contextual relationships that are not explicitly stated
- Spot where concepts are missing, too vague, or overloaded/conflated with multiple meanings
- Break down any terms that are overloaded with multiple meanings into individual terms that can have their methods and meaning defined. For example, you might find a term such as `OCEAN_AGE_1`, which represents a count of salmon captured in the ocean that are age 1\. That’s three concepts in one term\!
- Use OBOE (Extensible Observation Ontology) as a meta-framework to decompose concepts into:
  - Entities (What is being observed or measured. Could be a salmon, an ecological process, or a tree for eg)
  - Observations (An assertion that an entity was observed \[ie. count or presence/absence\] to estimate or calculate a value of its characteristic property)
  - Characteristics (A measurable property of an entity (e.g., age, length, or color)
  - Measurements (An assertion that a characteristic of an entity had a particular value during an observation event)
  - Measurement Types (Defines the type of measurement, following a protocol to record a characteristic value of an entity)
  - Measurement Methods (The procedure or technique used to assess and assign a value to a characteristic of an entity)
- Hierarchically cluster classes. The goal of hierarchical clustering is to build structured hierarchies by grouping similar classes into broader categories.

#### **Step 6: Identify Conceptual Themes, Relationships and Gaps**

- Look across terms from all sources to see where concepts cluster thematically (ie. morphometrics, demographic units)
- Flag these for refinement or for later modeling in an ontology module
- Write comments in the mapping table regarding how terms differ, identifying any blockers or uncertainties to integration (eg. incompatible methods, unclear units, mismatched scope of inference due to study design)
- Share your crosswalk with collaborators for feedback and validation

#### **Step 7: Establish Preferred Labels and Canonical Definitions for Terms**

- Reuse existing terms: Search for whether or not terms have been formally published in a controlled vocabulary or ontology somewhere (recommended sources: NCEAS Salmon Ontology, NVS, CF Conventions, AGROVOC) that you can simply reuse. Include links in your metadata or data dictionary to where the term is defined. Ideally this is a dereferenced [uniform resource identifier](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) (URI).
- Publish terms for which you can’t find an appropriate definition
  - Determine where to contribute new term:
    - NCEAS Salmon Domain Ontology (if term is broadly applicable to the salmon data domain and fits somewhere within the classes that already exist in this ontology)
    - A salmon sub-domain ontology module (ie. demographic units, or morphometric modules)
    - Your own institutional controlled vocabulary

#### **Step 8: Build an Integrated Dataset-Specific Ontology Module**

- For projects requiring formal semantics, reasoning, or structured knowledge graphs, begin by developing ontology modules for individual datasets.
- Using tools such as Web Protege ([https://webprotege.stanford.edu/](https://webprotege.stanford.edu/)), model relationships between terms that appear in your dataset (e.g., measurements, biological entities, processes).
  - [https://arrows.app/](https://arrows.app/) \- This is an attractive tool to me because I like the visual method of linking terms, but allows user defined node/relationship types. Is there anything like this tool that allows you to select node and relationship types from an ontology class/hierarchy to use in a visual map?

#### **Step 9: Integrate Dataset Modules into a Shared Ontology**

- …
- …

#### **Step 10: Communicate, Share, and Reuse**

- …
- …
- …

#### **How Far Do You Need to Go in the Process? A Visual Ladder of Engagement/Value**

This process supports different levels of engagement based on your goals and capacity:

| Level                                      | Motivation                                            | Action                                                                                 |
| ------------------------------------------ | ----------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **1\. Reuse terms**                        | "I want to use standard terms in my dataset"          | Search existing vocabularies, reuse where possible, use the URIs in my data dictionary |
| **2\. Document your terms**                | "I want others to understand my data"                 | Write clear definitions, units, and labels for your terms                              |
| **3\. Align with others**                  | "I need to compare or integrate with another dataset" | Create a mapping table or crosswalk to reconcile terms                                 |
| **4\. Publish your controlled vocabulary** | "We want a shared, versioned resource"                | Publish your vocab as SKOS/CSV with URIs                                               |
| **5\. Propose ontology terms**             | "Some terms should be formally integrated"            | Submit terms for review and possible inclusion in a formal ontology                    |
| **6\. Build an ontology module**           | "We need machine-readable logic"                      | Model relationships, classes, and constraints with OWL or LinkML                       |

Most contributors won’t need to go beyond Level 3 or 4, and that's fine. The process is meant to support **incremental progress** and **fit-for-purpose adoption**.
