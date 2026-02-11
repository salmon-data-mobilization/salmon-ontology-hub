Research Data Alliance Salmon Monitoring and Research IG:  
[Google Drive Folder](https://drive.google.com/drive/folders/1wOQL6kmA5OIoIQKlyNN5IIJlwLwWfEtJ)  
[SharePoint Folder](https://psmfcorg.sharepoint.com/:f:/r/sites/salmondatamobilisation/Shared%20Documents/RDA/Working%20Groups/RDA%20Salmon%20Ontology%20Dev%20WG?csf=1&web=1&e=KMG1J0) (mirrored manually :( )  
[RDA Site Salmon Ontology Development](https://www.rd-alliance.org/groups/salmon-ontology-development/work-statement/)  
[Salmon Data Mobilization Discord Chat Server](https://discord.gg/84Qy5RZuDb)

# Salmon Ontology Development WG

`![][image1]`

## **`2026-02-09 - Co-chair Meetings`**

# ATTENDEES

Graeme Diack, Brett Johnson, Shirly Stephen

## AGENDA/NOTES

FAIR OS grant solicitation? [Findable Accessible Interoperable Reusable Open Science (FAIROS) | NSF \- U.S. National Science Foundation](https://www.nsf.gov/funding/opportunities/fairos-findable-accessible-interoperable-reusable-open-science)

##

Notes:

\- How do we model the provenance of dataset concepts. Some terms will be controlled vocabularies…those wont be easy to model into classes if not documented… This is where I-ADOPT comes in

Breakdown into how to model various categories of knowledge:

- Upper level ontology alignment framework (meta modelling framework)
- How to model **entities**
- Measurements/variables/properties
- Activities (sampling procedures vs. events vs. some other activity)
- Methods

What we’ve done:

- Use case
- 2 datasets decomposed
- Initial mapping of terms
- Initial upper level alignment

What’s next?

- Confirm upper ontology
- Breakdown mega hakai v neville diagram into individual schema diagrams (by some theme… observations, events, properties)
- Create individual .ttl files
- Draw out how modules are interconnected
- Write out rules for LLMs to follow for creating dataset specific ontologies for each category/module of modeling (entities, measurements, methods, events…)
  - Ruleset [SKILL.md](http://SKILL.md) files or [conventions.md](http://conventions.md) or [AGENTS.md](http://AGENTS.md)
  - Annotation Property for agents on terms?

## **`2026-01-14 - WG Meeting`**

# ATTENDEES

Melissa Morrison, Mari Williams, Mark Saunders, Kathyrn Berry, Katie Barnas, Brett Johnson, Bruno Carturan, Yvonne Dettlaff, Tom Bird, Shirly Stephen, Lara Erikson

## AGENDA/NOTES

1. Intros in the Chat for new attendees 🙂
2. Any new example datasets available?
3. Continue work through of the use case data already started
4. Tasks for next meeting:
   1. Work through the existing draft training material [https://salmon-data-mobiliszation.github.io/salmon-data-standards-workshop/index.html](https://salmon-data-mobiliszation.github.io/salmon-data-standards-workshop/index.html)
   2. Example dataset
   3.

Put salmon domain ontology terms into a ttl file

Put Shirly’s case study figure into ttl file. Include mappings of SOSA to I-ADOPT for e.g.

Could create a new concept scheme for LLM mapping logic to add to

Neuro symbolic reasoning: combining LLMs and formalisms

**Other datasets to consider (eventually):**

- [Spawner Abundance for Salmon and Steelhead Conservation Units](https://data.salmonwatersheds.ca/result?datasetid=1)
  - \= observed and estimated spawner abundance at the CU-level
  - Complexity of dataset:1/5
  - From PSF
- [Spawner Abundance for Salmon and Steelhead Streams (Stream Spawner Surveys)](https://data.salmonwatersheds.ca/result?datasetid=2)
  - Observed spawner abundances at the stream level (mostly NuSEDS)
  - Complexity of dataset: 2/5
  - From PSF
- [Biological Status Summary for Salmon and Steelhead Conservation Units](https://data.salmonwatersheds.ca/result?datasetid=101)
  - Complexity of dataset: 4/5
  - From PSF
- [Trends in Spawner Abundance (All Generations) for Salmon and Steelhead Conservation Units](https://data.salmonwatersheds.ca/result?datasetid=202)
  - Complexity of dataset: 3/5
  - From PSF
-

##

## **`2026-01-12 - Co-chair Meetings`**

# ATTENDEES

Brett Johnson, Shirly Stephen, Mel Morrison, Graeme Diack,

## AGENDA/NOTES

Transcription available

Went through mid to high level ontology [Upper Level SOSA, OBOE, I-ADOPT Crosswalk \- Google Sheets](https://docs.google.com/spreadsheets/d/1x6XSjKBEa3crxFkpjJ_UFdpAnTxg2TeohUudgn0cmhA/edit?gid=0#gid=0)

Links:

- [Darwin Core Data Package Explorer](https://gbif.github.io/dwc-dp/explorer/),
- [InteroperAble Descriptions of Observable Property Terminology WG (RDA I-ADOPT WG) – I-ADOPT](https://i-adopt.github.io/)

Notes generated from transcription by AI:

- Ontology Alignment and Mapping Discussion: Brett, Shirly, Melissa, and Graeme discussed the alignment and mapping of upper-level ontologies (SOSA, OBOE, I-ADOPT, and Darwin Core) for the salmon domain ontology, focusing on how to represent compound terms, variables, properties, and constraints, and how to reconcile differences between these frameworks.

- Compound Terms and Variables: Brett explained the challenge of handling compound terms in ecological data, such as 'average length in 2012,' and described how the I-ADOPT framework treats variables as compound terms with properties and constraints, which differs from SOSA and OBOE. Shirly clarified the distinction between properties and variables using examples like 'fish length' and discussed how I-ADOPT's approach could help decompose such terms for ontology modeling.

- Ontology Class Alignment: The group examined how entities, properties, and variables are represented across SOSA, OBOE, and I-ADOPT, with Brett and Shirly noting that I-ADOPT introduces useful classes like 'variable,' 'constraint,' and 'statistical modifier' that fill gaps in SOSA. They discussed the potential to use I-ADOPT and SOSA together, possibly bypassing OBOE, and considered the implications for the salmon domain ontology.

- Mapping Strategies and RDF Implementation: Shirly and Brett discussed the process of translating schema diagrams into RDF or Turtle files, including how to represent class relationships, equivalence, and subclassing between the salmon domain ontology and upper-level ontologies. They debated whether to keep mappings in a single file or modularize them, and agreed on the importance of descriptive metadata and annotation for future automation and LLM integration.

- Darwin Core Integration and Class Mapping: The team explored how Darwin Core concepts like 'event,' 'occurrence,' and 'assertion' relate to SOSA and I-ADOPT, with Shirly and Melissa clarifying that 'occurrence' in Darwin Core is semantically similar to 'observation' in SOSA, making it redundant, while 'event' is essential and should be included. They also discussed the need to consider assertion and agent modeling, possibly using the PROV ontology for provenance.

- Preparation for Upcoming Working Group Meeting: Graeme, Brett, Shirly, and Melissa planned the agenda and activities for the upcoming working group meeting, including demonstrations, participant engagement strategies, and updates to training materials based on recent ontology mapping work.

- Agenda and Demonstration Planning: The group agreed to continue working through the use case data and ontology mapping in the next working group meeting, with Shirly proposing a demonstration of the mapping process and Brett preparing a basic Turtle file and updated training materials. They discussed the importance of making the session interactive and accessible for both new and returning participants.

- Participant Engagement and Task Assignment: Graeme suggested encouraging working group members to bring their own data sets and work through the mapping process, with the goal of gathering feedback on what works and what needs improvement in the training materials. The team considered assigning in-between meeting tasks to foster participation and iterative development.

- Introduction of LLM Integration Concept: Shirly and Brett discussed introducing the idea of using large language models (LLMs) to automate ontology mapping, acknowledging that this would be a new concept for many in the group. They planned to present it as a brainstorming topic to gauge interest and understanding.

- Technical Considerations for Ontology File Structure: Shirly, Brett, and Melissa discussed best practices for structuring ontology files, including modularization, metadata annotation, and the use of descriptive elements to facilitate future automation and reuse.

- Ontology Modularization: The team considered whether to keep all mappings and class relationships in a single ontology file or to modularize by subdomain or context, such as separating morphological characteristics or data set-specific extensions, to enhance maintainability and clarity.

- Metadata and Annotation Practices: Shirly emphasized the importance of adding descriptive metadata and annotation to ontology classes, including natural language descriptions and rationale for subclassing, to support both human understanding and LLM-based automation.

- File and Documentation Management: Shirly and Brett coordinated on uploading and organizing working documents, schema diagrams, and scratch files in the shared drive to ensure all team members have access to the latest materials.

- Document Upload and Organization: Shirly offered to upload the scratch document to the working folder, and Brett confirmed the preferred location, ensuring that all relevant files, including schema diagrams and case study materials, are accessible for ongoing collaboration.

Follow-up tasks:

Darwin Core and Ontology Mapping: Upload the scratch document related to the schema diagram and mapping work to the shared working folder. (Shirly)

Training Material and Ontology Files: Review and update the training material, and create an initial (empty) turtle file for the salmon domain ontology in the GitHub repository, including links and at least one or two elements from the current diagram. (Brett)

Working Group Meeting Preparation: Post a reminder on RDA to notify participants about the upcoming working group meeting. (Graeme)

##

##

## **`2026-01-05 - Co-chair Meetings`**

# ATTENDEES

Brett Johnson, Graeme Diack, Mel Morrison, Shirly Stephen

## AGENDA/NOTES

- Review previous meeting with Graeme
- Whiteboard use-case with Shirly to build out domain terms
- Transcription available

Notes:

Shirly: Yes domain ontology would be a lot of controlled vocabs, but also some general OWL classes that extend OBOE etc that would be more universal and should be included (Need to brainstorm). SKOS

Closed world versus Open World:

- Closed:Would include an axiom that says ‘the only type of FishLengths that can exist are forkLength, standardLength, totalLength.. Disjoint union in OWL
- Open:

##

## **`2025-12-15 - Co-chair Meetings`**

# ATTENDEES

Brett Johnson, Shirly Stephen, Mel Morrison

## AGENDA/NOTES

- The NCEAS Ontology will undergo some major revisions
  - Q. who will do that?
- The salmon domain ontology would be where a lot of the controlled vocabularies

Taxon classification scheme: don’t make your own, just use NCBI

Brett: I feel like we need a shortlist of what concepts we would ALWAYS extend from the salmon domain ontology. We can do this as we work through the Hakai/Neville datasets.

Discussed the Salmon Domain Ontology Developement:

- Start fresh, re-use terms from NCEAS salmon ontology
- Develop our own conventions (ie what to call namespaces)
- This could be a by product of the RDA WG and something we would try to get to get funding for
- Do it on GitHub in the salmon-data-moblizsation org

[Formal Ontology and Information Science FOIS](https://www.foisconference.org/jowocall/?i=2) Conference: Joint Ontology Workshops: [JOWO](https://www.iaoa.org/jowo/) Sept 21 or 25

While preparing the list of terms that would go into the domain ontology: think about the **entities, characteristics, measurements** that get measured in the salmon domain as a starting point.

##

## **`2025-12-10 - WG Meeting`**

# ATTENDEES

Graeme Diack, Brett Johnson, Shirly Stephen, Jen Bayer, Mel Morrison, Scot Akenhead, Katie Barnas, Minh Doan, Bruno Carturan, Yvonne Dettlaff (USFS), Mark Saunders, Emily Lescak

## AGENDA/NOTES

- Group fully endorsed\!
  - All group comms should go through: [https://www.rd-alliance.org/groups/salmon-ontology-development/posts/](https://www.rd-alliance.org/groups/salmon-ontology-development/posts/)
  - (as much as possible anyway\!)
- WG group meeting will move to **4 weekly** from Jan 14th
  - 4th June 2027 is our target end date
- Review Work Plan in SoW [https://docs.google.com/document/d/1Z4MF8Gmds4bsGHvBeC6OERP0_CckzAfwJk5VqGFBzak/edit?usp=drive_link](https://docs.google.com/document/d/1Z4MF8Gmds4bsGHvBeC6OERP0_CckzAfwJk5VqGFBzak/edit?usp=drive_link)
- Continue on with case study next steps… formalizing, diagraming etc.
- Some small Christmas tasks for the group?
  - Find data sources for toy (or serious\!) use cases

### Discussion

- Shirly’s current position comes to an end at the end of Feb, but aims to continue working with us\!
- Brett showcasing the DFO Ontology he is working on with Mel
  - [GitHub \- dfo-pacific-science/dfo-salmon-ontology: The GC DFO Salmon Ontology is a data stewardship …](https://github.com/dfo-pacific-science/dfo-salmon-ontology)
  - [metasalmon: Salmon Data Package Utilities • metasalmon](https://dfo-pacific-science.github.io/metasalmon/)
  - [DFO Salmon Data Standards – FADS Open Science Hub](https://dfo-pacific-science.github.io/data-stewardship-unit/reference_info/data_standards/controlled-vocabulary-thesauri.html)
  - [GC DFO Salmon Ontology](https://dfo-pacific-science.github.io/dfo-salmon-ontology/) \- still to be approved by w3id
  - Q: Shirly \- Where do the terms come from?
    - A: Brett \- from multiple data systems in DFO
  - Q: Mark \- data availability/open DFO data?
    - A: Currently the data is still firewalled, but plan is for the data dict/ontology will link to open data products, plus the schema may lead into public knowledge graphing
- Round of intros as some new attendees
- Continue case study
  - Shirly overview of process
    - Q: Bruno \- Competency questions clarification
      - A: Brett+Shirly \- these questions help clarify what metadata the ontology should capture as a minimum. Similar to the research question, can be broad or narrow. We ideally want a wide range of these to help us develop a more general use ontology
    - Brett case study re-visit
      - Discussion on adding a third dataset to the toy case study, careful not to get to complex
        - Shirly \- would be quite useful to add a third/fourth to broaden the ontology terms
      - Possible also to invite additional toy case studies using open data from e.g. [https://www.gbif.org/search?q=salmon](https://www.gbif.org/search?q=salmon) or [https://knb.ecoinformatics.org/data](https://knb.ecoinformatics.org/data)
    - Shirly demo of mapping with existing ontologies
      - Q: Bruno \- does this exercise need done each time you want to work with additional datasets?
        - A:
- …

##

## **`2025-12-01 - Co-chair meeting`**

# ATTENDEES

Brett, Mel, Shirly, Graeme

# AGENDA/NOTES

- SoW accepted, just awaiting finalisation from RDA Council
  - Virtual plenary \- GD look into virtual posters
  -
- Catch up with Shirly
  - Debrief workshop?
  - Funding possibilities for this?
- Update on the carpentry materials
  - Highlight the bonus workshop material
- Establish conventions, roadmap for the umbrella ontology NCEAS Salmon Ontology
- Present DFO updates

Next Ontology WG meeting. revised schedule?

- GD \- Move WG group meeting to monthly from Jan 14th
- Every third meeting, we recap where we are at just before the broader IG meeting

WG meeting schedule

- Continue on with case study next steps… formalizing, diagraming etc.

## **`2025-11-17 - Co-chair meeting`**

# ATTENDEES

Brett Johnson, Graeme Diack, Melissa Morrison

# AGENDA/NOTES

- Resubmitted the Statement of Work/Charter
  - Small changes were made to respond to reviewer feedback
- Update on the carpentry materials
  - Highlight the bonus workshop material
- Establish conventions, roadmap for the umbrella ontology NCEAS Salmon Ontology
- Present DFO updates
-

##

## **`2025-10-22 - WG Meeting`**

# ATTENDEES

Brett Johnson, Graeme Diack, Melissa Morrison, Scott Akenhead, Minh Doan, Gottfried Pestal, Mark Saunders

# AGENDA/NOTES

- Update on the Statement of Work / [Review from RDA Technical Advisory Board](https://docs.google.com/document/d/1Ob2kjtR3bxGTTtdIrAdJNa_ncsR8mBNZ/edit?usp=drive_link&ouid=104698443647998976986&rtpof=true&sd=true)
  - Narrowed scope
  - Need an updated list of participants. Please double check you are in our [Participant Sign up Sheet](https://docs.google.com/spreadsheets/d/1TkGLaCNTBJlTkbOu87oEarqlUUK8XIvhGjS7fCXZZiA/edit?gid=0#gid=0)
- Updates and Overview of Progress of Ontology WG
  - [Salmon Data Standards Workshop](https://salmon-data-mobiliszation.github.io/salmon-data-standards-workshop/) Materials
    - GP/GD: Maybe we need a 1 hour version of this workshop.
      - Module 0?
      - GD: Example of this being done that is really convincing to include in module 0
  -
- Diagramming
- Alaska Knowledge Portal Workshop
  - Lightning Talks: Let’s coordinate\!:
    - RDA: Graeme
    - Tom:
    - Brett: Best Practices Paper
    - Gottfried:
    -
  - Workshop

# ACTION ITEMS

##

## **`2025-10-20 - Co-chair Meeting`**

# ATTENDEES

Brett, Graeme, Melissa

# AGENDA/NOTES

- Statement of Work: TAB review next steps
  - Last step is to gather specialties of attendees
- Will go through [Salmon Data Standards Workshop](https://salmon-data-mobiliszation.github.io/salmon-data-standards-workshop/) Materials next meeting

# DISCUSSION

# ACTION ITEMS

- Graeme: Reach out to other RDA WGs to see if they want to be involved

##

## **`2025-09-10 - Main WG Group Meeting`**

# ATTEND

# AGENDA/NOTES

1. Review Technical Advisory Boards review of our Statement of Work
   1. [RDA Salmon Ontology WG Statement of Work](https://docs.google.com/document/d/1Z4MF8Gmds4bsGHvBeC6OERP0_CckzAfwJk5VqGFBzak/edit?usp=sharing)
   2. Google: [TAB Review Salmon Ontology Development WG.docx](https://docs.google.com/document/d/1n29Qphd5eeE_cTKrtXYRr3txemZ_CrTD/edit?usp=sharing&ouid=107038496609090650231&rtpof=true&sd=true)
   3. SharePoint: [TAB Review Salmon Ontology Development WG.docx](https://psmfcorg.sharepoint.com/:w:/r/sites/salmondatamobilisation/Shared%20Documents/RDA/Working%20Groups/RDA%20Salmon%20Ontology%20Dev%20WG/TAB%20Review%20Salmon%20Ontology%20Development%20WG.docx?d=w926c3cf9b04f4153900fea136c3d7b45&csf=1&web=1&e=0EESCK)
2. Modeling/Graphing our case-study terms/definitions
   1.

# DISCUSSION

Tools for breaking down 2 or more data source terms into graphical format:

WebVowl \- [https://service.tib.eu/webvowl/\#](https://service.tib.eu/webvowl/#)

yEd \- [https://www.yworks.com/yed-live/](https://www.yworks.com/yed-live/)

EL: What is the ideal state for what someone is working towards when mapping dataset terms? Framework which illustrates how researchers might implement this during their study?

GD: Think about the user entry points for this exercise? Users who have a new study in front of them and can reuse terms from a similar previous project, how can they use this process to map terms for reuse… or users running a data rescue who need to map two or more dataset terms together.

MD: We have followed a somewhat similar process of mapping terms in a network. We broke our datasets into multiple ‘domains’ such as environmental, salmon trait, occurrence, subjective inspection.

JS: Should we consider including the values of terms within the graph mappings?

    MD: your own definitions should remain within the mapping work so that there is a truth source to keep aligned to and/or create equivalences

MS: Keep BECI in the loop

    Julia is part of the BECI project team and keeps an eye on this groups progress

# DECISIONS

Have the ttl file ready for next meeting

# ACTION ITEMS

ALL: Review the SoW review comments from RDA TAB (link above)

ALL: Add your technical expertise to the sign up sheet for RDA reviewers [PARTICIPANTS SDM Ontology Dev WG](https://docs.google.com/spreadsheets/d/1TkGLaCNTBJlTkbOu87oEarqlUUK8XIvhGjS7fCXZZiA/edit?usp=sharing)

ALL: Join the WG on RDA [https://www.rd-alliance.org/groups/salmon-ontology-development/activity/](https://www.rd-alliance.org/groups/salmon-ontology-development/activity/)

GD/BJ/SS: Address reviewer comments along with WG input and adjust SoW as necessar

##

## **`2025-08-25 - Co-chair Meeting`**

# ATTENDEES

Brett Johnson, Graeme Diack, Shirly Stephen

# AGENDA/NOTES

\- Statement of Work?

    Community review completed 11th August without any comments, TAB review now in progress (ETA 4 weeks)

\- Review of previous Group meeting

\- Next steps:

    \-[Juvenile sockeye condition data decomposition ](https://docs.google.com/spreadsheets/d/10Bd7bhTJvOOr-V1wK6YyAj9A4PvxKKpumEvcyIobBlw/edit?usp=drive_link)

    \- Put Hakai/Neville concepts into diagram (ERD). Hierarchical clustering might not come in until we add more datasets.

    \- Shirly demonstrated diagram building in yEd (https://www.yworks.com/products/yed) software. Not possible to work simultaneously in this software, other potential software is Lucid or Arrows.app

    \- Aim is to map the datasets to the generic ontologies, identify generic classes which match across both datasets and then these classes become the foundation for the generic ontology

    \- Linking to existing infrastructure: [https://www.w3.org/TR/vocab-ssn/](https://www.w3.org/TR/vocab-ssn/), [https://gbif.github.io/dwc-dp/](https://gbif.github.io/dwc-dp/)

\- Goal with diagraming schema is to find where datasets have the same class, which would become the generic class in the ontology. The dataset specific terms would be a part a of a dataset specific ontology.

Actions:

    GD \- Get two Atlantic salmon datasets and attempt to reproduce these steps so far \- decomposition and diagram

    BJ \- Dig into DwC and fill out concepts in yEd diagram

##

## **`2025-07-30 - Main WG Group Meeting`**

# ATTENDEES

Brett Johnson, Graeme Diack, Julia Schmid, Jen Bayer, Katie, Lara Erikson, Mari Williams, Fiona Martens, Catherine Michielsens, Sam Cimino

# AGENDA/NOTES

- Brett and Graeme Overview of SoW
  - Submitted early July, awaiting RDA review process
  - [https://www.rd-alliance.org/groups/salmon-ontology-development/activity/](https://www.rd-alliance.org/groups/salmon-ontology-development/activity/)
- Brett and Shirly \- knowledge modelling subgroup progress
  - Overview of the concept of knowledge modelling
  - User story example and two example dataset decompositions
- Working Group Member Sign-up Sheet
  - [https://docs.google.com/spreadsheets/d/1TkGLaCNTBJlTkbOu87oEarqlUUK8XIvhGjS7fCXZZiA/edit?usp=drive_link](https://docs.google.com/spreadsheets/d/1TkGLaCNTBJlTkbOu87oEarqlUUK8XIvhGjS7fCXZZiA/edit?usp=drive_link)
  - Good to know who is keen to contribute, where their skillset lies, and contact details for direct WG comms (we will try to stick to RDA posts though\!)

Demonstration of dataset decomposition:

[https://docs.google.com/spreadsheets/d/10Bd7bhTJvOOr-V1wK6YyAj9A4PvxKKpumEvcyIobBlw/edit?gid=0\#gid=0](https://docs.google.com/spreadsheets/d/10Bd7bhTJvOOr-V1wK6YyAj9A4PvxKKpumEvcyIobBlw/edit?gid=0#gid=0) \- Neville paper and Hakai dataset

    E \- F in the spreadsheet is the core of the ‘decomposition’ process once ‘terms’ have been identified in the preceding columns.

Brett: Q to group \- How does this compare to some of the data standardisation efforts you’ve previously been involved in?

- Jen \- Previous work is similar in recent years, but was more vague in the early days
- Katie \- Very similar process to our previous work, e.g.
  - [https://esajournals.onlinelibrary.wiley.com/doi/pdf/10.1002](https://esajournals.onlinelibrary.wiley.com/doi/pdf/10.1002/ecs2.2920)
  - [/ecs2.2920](https://esajournals.onlinelibrary.wiley.com/doi/pdf/10.1002/ecs2.2920)
  - Highlight that our own filter on how we want to use the data can shape the definitions
- Catherine \- how to apply these rules to legacy datasets which might lack the details of terms and there is a requirement to interpret these definitions
  - Add a perspective into this WG output from the data rescuing data manager
  - Jen: sharing our work on bringing together existing long term programs and asking them to write down their definitions [https://pnamp.org/projects/shmi/](https://pnamp.org/projects/shmi/)
  - Within PSC there is a technical commission on wire tagging data, Nancy Leonard and Michael O’Brian (PBS), plus Monica Diaz in PSMFC very involved in data dictionary
- Sam \- how similar do the tools need to be to consider the measurement to be similar enough, e.g. flexible ruler vs measuring board?
- Graeme: RDA WG’s do sometimes have invited speakers as part of their regular meeting formats, so it would be good to gather examples of people doing this work already to knowledge share and add to the WG output
- Brett: Any other portals that are in development/use?
  - Fiona \- Pacific Salmon Foundation worth reaching out to \- Stephanie Peacock
  - Brett \- Georgia Data Centre

[https://github.com/salmon-data-mobiliszation/salmon-data-standards-workshop](https://github.com/salmon-data-mobiliszation/salmon-data-standards-workshop)

## **`2025-07-16 - Knowledge Modelling Subgroup`**

# ATTENDEES

Brett, Graeme, Scott, Julia, Minh, Shirly

# AGENDA/NOTES

-
- Refine decomposition process and training materials with sockeye data to prep for meeting on July 30th when we plan to break out into groups to test the process with a refined version of what we did at AFS.
- Establish breakout groups and agenda for July 30th call
- AOB:
  - [https://www.rd-alliance.org/groups/interoperable-descriptions-observable-property-terminology-wg-i-adopt-wg/activity/](https://www.rd-alliance.org/groups/interoperable-descriptions-observable-property-terminology-wg-i-adopt-wg/activity/) \- Relevant existing RDA WG which has I think completed its life-cycle and is now maintaining deliverables
- We have decided to identify datasets that are relevant to the case study that we have described for the WG [here](https://docs.google.com/document/d/1myb-EsbtiJS7-x5wyuzMT9anrQyFC6zELy-WwykChRE/edit?tab=t.0#heading=h.fhngqsqqeafp) [Juvenile Salmon Condition Case-Study Description](https://docs.google.com/document/d/1myb-EsbtiJS7-x5wyuzMT9anrQyFC6zELy-WwykChRE/edit?usp=drive_link).
  - Brett giving a high-level overview of the [Hakai Juvenile Salmon Population dataset](https://drive.google.com/drive/u/1/folders/1BwBYCKhpXxv5ZBCQbNwbYE9mtAGZvoIT)
    - Conceptually what does it cover?
    - How does it overlap with the SASAP Salmon ontology.

Knowledge Modelling Subgroup will run through a couple of example datasets to help demonstrate a process to the wider group.

Neville PDF data worked example in fresh Google Sheet:

1. Extract terms
   1. List the terms used in table 10A
   2. Discover metadata on the terms in the paper
   3. Apply Theme and Sub-themes

Lessons from this worked example:

1. **All** terms of a dataset are potential targets for extraction:
   1. Column names
   2. Row names
   3. Potentially some metadata terms will require extraction too
2.

_Important realization:_ We need to capture the metadata for the context at the dataset level

For what concepts do we need to build a metadata model? Ie. label, altLabel, similar to SKOS.

# DECISIONS

# ACTION ITEMS

Work on the spreadsheet we started in this so that we have it well progressed by the meeting 2025-07-30

##

## **`2025-06-23 - Co-chairs meeting`**

# ATTENDEES

Brett, Shirly

# DECISIONS

- Use 2 week timeslots for the modelling subgroup and the 6 week time slot for everyone
- Use full call (next one July 30th) for demo of decomp process and breakout groups of decomposition process for specific case studies.
  - 1 facilitator per group

# ACTION ITEMs

- [x] ~~Brett to set up knowledge modelling sub group for the 16th~~
- [ ] Shirly to send out an email reminding participants to fill in the [Google Sheet](https://docs.google.com/spreadsheets/d/1TkGLaCNTBJlTkbOu87oEarqlUUK8XIvhGjS7fCXZZiA/edit?gid=0#gid=0) with their “Participation Group Interest” and datasets relevant to use-case by the end of the month (i.e., June 30th). Also remind people to review _Statement of Work._
- [x] ~~Brett and Graeme to submit statement of work by June 27~~
- [x] ~~Brett to decide on 2-3 sockeye datasets for July 14th and prep worked example that follows on from Shirlys concept decomp intro material.~~
- [ ] Shirly to prepare the information template for our first WG session. This will focus on Concept Decomposition. Use the material from the workshop slides to fill in the template prepared by Brett on GH [here](https://github.com/salmon-data-mobiliszation/salmon-data-standards-workshop/tree/main/episodes).

##

## **`2025-06-18`**

# ATTENDEES

Brittany Jenewein, Brett Johnson,Julia Schmid, Kathryn Berry, Rasmus Lauridsen, Sheryn Olson, Shirley Stephen, Yi Xu, Scott Akenhead, Tom Bird, Minh Doan, Emily Lescak, Graeme Diack, Gottfried Pestal (14)

# AGENDA

## **`New Business`**

- Review Statement of Work: [**RDA Salmon Ontology WG Statement of Work**](https://docs.google.com/document/u/0/d/1Z4MF8Gmds4bsGHvBeC6OERP0_CckzAfwJk5VqGFBzak/edit)
- Review Case Study: [**Juvenile Salmon Condition Case-Study Description**](https://docs.google.com/document/u/0/d/1myb-EsbtiJS7-x5wyuzMT9anrQyFC6zELy-WwykChRE/edit)
- Review AFS Workshop Challenges-Shirly
- Q. How would you like to participate in this workgroup?
  - **Work on the process:** Knowledge Modellers / Process Developers / Technologists
    - **Learn, test, implement, refine the process:** Biologists / Data Subject Experts / Would Be Data Integrators
- Next step: **Form groups for specific case studies/datasets**
  - Work together in groups of 2 or 3 to refine a specific case study and 2 or 3 datasets to integrate that could answer your specific case-studies requirements
  - Develop your specific case-study ‘user story’
  - Gather or document terms and definitions used in the dataset in a data dictionary in a spreadsheet (template)

# NOTES

We will break down into groups that would focus on a specific instance of the generic case study, choosing a species and region and the specific contextual challenges within. Each group would decompose terms across their datasets. This will help narrow the scope of what datasets to bring

The idea of identifying ‘knowledge modellers’ and ‘biologists’ to ensure that each species case study group has support with the knowledge modelling will help groups align on process.

Shirly–AFS Lessons/Challenges/Threads to continue working on:

- OWL Class vs an OWL Instance
  - Need to avoid ‘OWL Punning’. More on that later.
- Explicate OWL object properties
- Hierarchical relationships.. SKOS is limited![][image2]

# ACTION ITEMS

- [x] ~~Lara or Mari cancel the 2 week Salmon Ontology Meeting Invite~~
- [x] ~~Brett set up 6 week repeating calendar invite for full Teams meeting~~
- [ ] Brett set up a 2 week recurring optional working session to be available on Discord
- [x] ~~Everyone: Deadline to review Statement of Work by June 25th~~
- [ ] Everyone: Fill out the [SDM Ontology Dev WG PARTICIPANTS SIGNUP](https://docs.google.com/spreadsheets/d/1TkGLaCNTBJlTkbOu87oEarqlUUK8XIvhGjS7fCXZZiA/edit?usp=drive_link) focussing on contact details, Participation Group, Dataset(s) \- End June
- [ ] 2025-07-02 Sub Group Meeting: Have some data ready to run through a decomposition mini-workshop
- [ ] Everyone: Based on the Case-study conversation/document, identify data sets covering a single species but from different geographic regions that have a common theme(s) listed in the document \- by next working group meeting?

##

##

##

## ---

##

## **`2025-05-21`**

# ATTENDEES

## **`Last Meeting Follow-up`**

Action items:

- [x] ~~Co-chairs: Create a membership list in Drive~~
- [x] ~~All- [Review Statement of Work for WG](https://docs.google.com/document/d/1Z4MF8Gmds4bsGHvBeC6OERP0_CckzAfwJk5VqGFBzak/edit?tab=t.0)~~
- [x] ~~Use Discord to throw out examples and discuss in the meantime\!~~

## **`New Business`**

1. decide on a small working example that meets following criteria;

- has data
- touches on 2 domains
- is actually problematic
- matters to people
- Isn’t overly complex

# NOTES

Graeme: SoW maybe too ambitious.

**Use Case:** How does variation in juvenile sockeye condition across regions and years relate to early marine survival and regional population trends in the Pacific Northwest?

- Would require the following ontology modules that we could build out: i) Morphometrics and Condition measurements; ii) Age notation and determination; iii) Demographic Units (stock, population etc.)
- Could also throw in life-history type if we're feeling ambitious.
- Minh \- Pacific Salmon Explorer ([https://salmonexplorer.ca/](https://salmonexplorer.ca/)) is a good dataset to start with.
- Gottfried \- The above might be a good place to start. No place where there is comparable juvenile data sorted out . No indicator systems where there is time-series data.
- There's tons of marine juvenile surveys, but I think those are for larger population aggregates. Or do they isolate stocks based on genetic stock ID?
- Focussing on ASL estimation methods, data collection methods, regression methods. What age-notation method do they have?

Shirly: Would be necessary to tie this case-study to decision makers.

Gottfried: Forecasting applicability… Freshwater or marine mortality is important to know… Having more knowledge with juvenile salmon conditions will help better with forecasting and identifying bottlenecks for recruitment… ie. Identifying the environmental covariates that result in better condition fish would allow forecasters to identify emergent conditions that may affect productivity and affect fisheries management in-season.

Mark: NPAFC/Western Pacific context should be considered to make it relevant

**What are the bottlenecks? \-** Indicator variations, method variations. Process/workflow where people can connect their data in a compatible manner is not there?

**Possible datasets?** \- RMIS, StreamNet, Pacific Salmon Explorer, Hakai Institute Juvenile Salmon Program, Columbia system juvenile data (Mark Saunders)

**Any standardized resources?**

1\) [https://www.monitoringresources.org/Document/Method/Index](https://www.monitoringresources.org/Document/Method/Index)

2\) [https://knb.ecoinformatics.org/portals/SASAP/data](https://knb.ecoinformatics.org/portals/SASAP/data)

3\) [NVS Search](https://vocab.nerc.ac.uk/search_nvs/)

4\)

Shirly: What is the goal of modeling the datasets…

Brett: Support scientists to describe their data using data dictionaries and reusing terms published elsewhere [Support Controlled Vocabularies – Data Stewardship Unit](https://dfo-pacific-science.github.io/data-stewardship-unit/documentation_hub/how_to_guides/support_controlled_vocabs.html).

Lara: Being able to publish a controlled vocab makes sense. Crosswalking controlled vocabs among groups is also key.

# ACTION ITEMS

- [x] ~~Write out case-study in Google Drive (Brett)~~
- [ ] Refine Statement of Work to be more tractable and consider what elements might be better broken out (Co-chairs)
- [ ] Set up meeting for 2 weeks from now (Lara)
- [ ] Prepare overview of methodology for ontology development for next meeting (Shirly)
- [ ] Resolve suitable datasets for case-study
- [ ] Establish competency questions

## **`2025-05-14`**

# ATTENDEES

Jen Bayer, Shirly Stephen, Graeme Diack, Matt Jones, Brett Johnson, Tom Bird, Minh Doan, Gottfried Pestal, Shaorong Li, Mari Williams, Mark Saunders, Yi Xu

# AGENDA

## **`Last Meeting Follow-up`**

1. Communication/Collaboration Platforms
   1. Text Chat: [Salmon Data Mobilization Discord Chat Server](https://discord.gg/84Qy5RZuDb)
   2. File Storage: [Google Drive](https://drive.google.com/drive/folders/1wOQL6kmA5OIoIQKlyNN5IIJlwLwWfEtJ?usp=drive_link)
   3. Code and Workshop Collaboration: [Salmon Data Mobiliszation GitHub](https://github.com/salmon-data-mobiliszation)
2. Co-chairs
   1. Brett & Shirly agreed.
   2. We need geographic distribution for WG leaders. Graeme offered to fill this role.

## **`New Business`**

1. Continuing from where we left off at the workshop, breaking into sub groups to tackle specific salmon data sub-domains?
   1. Salmon Population Summary Indices (Escapement, Harvest, Smolt to Adult Returns, Natural Origin Spawners…)
   2. Salmon Demographic Units (Stocks, Populations, Conservation Units etc)
   3.
2. Review [‘How to Support Controlled Vocabulary Publishing and Ontology Development’](https://dfo-pacific-science.github.io/data-stewardship-unit/documentation_hub/how_to_guides/support_controlled_vocabs.html) guide recently published by DFO’s Data Stewardship Unit as a starting point for how to proceed with workshop v2
3. [Salmon Data Standards Workshop GitHub repository](https://github.com/salmon-data-mobiliszation/salmon-data-standards-workshop) for developing v2 of the salmon data standards workshop.

# NOTES

Graeme offered to pursue synchronization using Rclone for Google Drive content to SharePoint

How do we allow people to discover the calendar invites?

- Calendar invite link could go on the landing page on the RDA wiki
- Short term \- Create a membership list in Drive

Matt Jones: In the workshop we talked about using specific datasets, and a data integration use case, to move forward more concretely and targeted with building specific ontology modules.

Gottfried: To convince the scientists to go through the vocabulary process, we need to make the practical applications and steps much clearer and at the start (of GitHub documentation and otherwise).

Shirly: Biggest need is a guidelines document to take their terms and definitions and put that into an ontology. Shirly has been documenting what works and doesn't work wrt ontology development, more specific to salmon, built on experience with similar efforts.

Graeme: Output should be fairly easy to understand, so biologists aren’t bamboozled. Output needs to be aimed at the right audience.

Tom (from Chat) Are we confident that we can describe the value of ontologies to our target (non-technical) audience? I think we need a very simple and concrete example that has real implications for analysis/management, based in a use case that people can understand.

Gottfried: Can this group offer tech support to new adopters? \[Brett: Discord or GitHub?\]

Yi Xu: PSC Chinook Technical Committee has some data standards that can be helpful to understand how data is being represented

Gottfried: To bound the simple case study, maybe frame it as a worked example for the best practices paper, going through each step in the guide that Brett started at: https://dfo-pacific-science.github.io/data-stewardship-unit/documentation\_hub/how\_to\_guides/support\_controlled\_vocabs.html

Tom: Ontologies can also help users characterize the uncertainty in their data integrations. Discovery of relevant data and proper interpretation and attribution of uncertainty.

Matt: Also discovery of misalignment of terms. Ie. facilitating ‘aha’ moments. Very valuable

Shirly: The sub-domain is also for technical purposes-- ontology modularization

**\>\>can we identify a couple of very simple worked examples?**

Graeme: could we use 2 databases…or subset

Gottfried: length measures is a good starting point, because there's at least clear real observable values underpinning. Other variables like "productivity" or "escapement" have many different interpretations that complicate matters. And with length there's still a lot of nuances (e.g., adult vs. juvenile, different types of measurements, species-specific conversion factors between POH and others forms, weighted seasonal mean vs. individual observations)

Questions

# ACTION ITEMS

1. Co-chairs: Create a membership list in Drive
2. All- [Review Statement of Work for WG](https://docs.google.com/document/d/1Z4MF8Gmds4bsGHvBeC6OERP0_CckzAfwJk5VqGFBzak/edit?tab=t.0)
3. Next ‘working meeting’ 1 week from now
   1. Goal to identify minimum working example target
   2. Use Discord to throw out examples and discuss in the meantime\!

Next week meeting goal: decide on a small working example that meets following criteria;

- has data
- touches on 2 domains
- is actually problematic
- matters to people

## **`2025-04-02`**

# ATTENDEES

**Jacob Usinowicz**: Four Peaks Consulting. Works with a lot of salmon data and would like to be able to integrate it more effectively.

**Mari Williams:**

**Lara Erikson:**

**Mark Saunders:**

**Graeme Diack**:

**Shirly Stephens**: NCEAS Post-doc. Interest to focus on expanding on knowledge modelling exercises NCEAS was involved in in the past and advance salmon data mobilization and ontologies in the domain.

**Shaorong Li**: Looking to learn about ontologies for data integration, and contribute something to this working group based on their expertise in salmon genetics.

**Minh Doan**: Wants to leverage ontologies more on the raw data side related to stream inspection logs and historical data. Currently using [SALMON](https://bioportal.bioontology.org/ontologies/SALMON/?p=classes&conceptid=http%3A%2F%2Fpurl.dataone.org%2Fodo%2FSALMON_00000582) as the ontology to link as inspiration and work. Currently using ontology to link multiple databases together through definitions in ontology, such as what is a chinook salmon? If A says it’s chinook, B says it’s king, then ontology says they’re both the same Oncorhynchus tshawytscha.

**Tom Bird**: Likes salmon and everyone here.

**Gottfried Pestal:** Wants to get away from the enormous amount of work required to wrangle data.

**Kasey BLiesner**

#

# AGENDA

## **`Last Meeting Follow-up`**

## **`New Business`**

# NOTES

- **`Lorem ipsum dolor sit amet`** `consectetuer adipiscing elit.`
- **`Vestibulum ante ipsum primis elementum`**`, libero interdum auctor cursus, sapien enim dictum quam.`
  - [`Phasellus vehicula nonummy`](http://www.google.com/)

# ACTION ITEMS

1. **`Lorem ipsum dolor sit amet`** `consectetuer adipiscing elit.`

# NEXT WEEK’S AGENDA
