// ============================================================
// CASE STUDIES — Edit or add entries below to update your Work section
// ============================================================
window.SITE_CONTENT = window.SITE_CONTENT || {};
window.SITE_CONTENT.caseStudies = [
  {
    "id": "defining-an-mvp",
    "title": "Defining an MVP",
    "subtitle": "In-App Translation for Loopio",
    "skills": [
      "Systems Thinking",
      "Rapid Prototyping",
      "Balancing Speed & Value"
    ],
    "date": "Oct – Nov 2023",
    "thumbnail": "images/case-studies/mvp-thumb.jpg",
    "heroImage": "images/case-studies/mvp-hero.jpg",
    "overview": "How rapid prototyping and iterative design converged on a solution that balanced user needs with system constraints — defining the Most Valuable Experience for Loopio's in-app translation feature.",
    "demonstrates": [
      "Time-boxed rapid learning",
      "Prototyping at the appropriate fidelity",
      "Co-creation to nurture shared vision of the opportunity and solution options",
      "UX strategy, research, and design",
      "User interface design using an existing design system"
    ],
    "role": "Project strategy, communication strategy, and communication artifacts",
    "sections": [
      {
        "heading": "The Product",
        "content": "Loopio is a tool for sales teams (often called Request for Proposal or RFP teams) to collect, re-use, and re-mix their answers to common sales questions. It's an efficiency tool that works similarly to a design system for RFP teams.\n\nPrior to in-app translation, when users faced a non-English RFP, they needed a different tool and process to get the RFP into English before uploading into Loopio. With in-app translation, users can work on their non-English RFPs entirely in Loopio, saving time through a more streamlined process."
      },
      {
        "heading": "The Challenge",
        "content": "The business case for building this feature was to get Loopio onto the consideration list for organizations subscribing to RFP software. It's a table stakes feature, and success is measured by sales consideration.\n\nThe core team included a Group Product Manager, myself as Director of Design & Research, 2 senior and 2 junior back-end developers, plus broader Engineering, Product, and Design teams, Sales, Customer teams, and Senior leadership."
      },
      {
        "heading": "The Design Strategy",
        "content": "We needed to make three critical decisions:\n\n<ul><li>What should be in the MVP?</li><li>Whose problem should we solve first?</li><li>Where and how to integrate the new capability into the workflow and interface?</li></ul>\n\nThe strategy I used was to identify work that could drive the greatest impact and value for our key user group — the RFP team members who respond to non-English RFPs. This led us to reframe from MVP to MVE — Most Valuable Experience."
      },
      {
        "heading": "Balancing User Needs With System Needs",
        "content": "The system had two basic constraints: the Loopio UI is already dense, so the new functionality needed minimal UI components; and the product architecture required the translation service be built as a separate workflow rather than a componentized module.\n\nUsers had two basic needs: minimal disruptions to existing workflows, and showing the translation option only when appropriate (i.e. if their RFP is in non-English)."
      },
      {
        "heading": "The Collaboration Strategy",
        "content": "The core team consisted of three senior team members representing product management and engineering. Getting them aligned with design decisions was mission-critical. My most important work was bringing them, and other stakeholders, along for the ride using two methods:\n\n<ul><li>Co-create and collaborate to define the UX of the MVP</li><li>Use the Socratic method to balance Engineering and User needs</li></ul>"
      },
      {
        "heading": "Iteration 1: View Translated RFP on Demand",
        "content": "The first concept offered users on-demand translation through a toggle option once they're in a project.\n\nDesirability: Minimal UI update — yes. Minimal disruption to workflow — yes.\n\nFeasibility: This solution does not allow users to provide input early enough in the workflow for the system to know whether or not to direct people to the version of Loopio with in-app translation. This solution was not feasible."
      },
      {
        "heading": "Iteration 2: Translation During Project Creation",
        "content": "The second concept offered translation earlier in the workflow — during project creation. This notified the system earlier while maintaining an optimal UX.\n\nDesirability: Minimal UI update — yes. Minimal disruption to workflow — yes.\n\nFeasibility: Sometimes projects are created in Salesforce and continued in Loopio. Users in this scenario would not get the in-app translation option. This solution was not feasible."
      },
      {
        "heading": "Iteration 3: Translation During Import Questions",
        "content": "The third concept offered translation after project creation — during the 'import questions' workflow. This addressed the feasibility issues uncovered in Iterations 1 and 2.\n\nDesirability: Minimal UI update — yes. Minimal disruption to workflow — yes.\n\nFeasibility: Early enough in the workflow to allow the system to know whether to direct the project to the version of Loopio with in-app translation. Feasible."
      },
      {
        "heading": "The Final Experience",
        "content": "Iteration 3 represents the final definition of the Minimum Valuable Experience. The go-to-market messaging was simple yet powerful: if you work on non-English RFPs, you can now import those directly into Loopio for a seamless workflow."
      }
    ]
  },
  {
    "id": "ux-metrics-program",
    "title": "UX Metrics Program",
    "subtitle": "Replacing NPS with Product-Market Fit Surveys",
    "skills": [
      "Change Management",
      "Program Management",
      "Strategy"
    ],
    "date": "Q1 2022 – Q1 2023",
    "thumbnail": "images/case-studies/metrics-thumb.jpg",
    "heroImage": "images/case-studies/metrics-hero.jpg",
    "overview": "How a hypothesis-driven approach and strategic change management replaced an underperforming NPS program with Product-Market Fit surveys — resulting in 3x response rates and 800% more qualitative feedback.",
    "demonstrates": [
      "Using data from experiments to support change management",
      "Hypothesis-driven design",
      "Effective UX metrics",
      "Program strategy, design, implementation, and management"
    ],
    "role": "Program strategist and manager",
    "sections": [
      {
        "heading": "The Problem",
        "content": "Loopio had been using NPS as a gauge of customer satisfaction. NPS at Loopio never elicited more than 1% response rate, consistently elicited less than 1% qualitative feedback, and the qualitative feedback was consistently vague and non-actionable — e.g. 'It's great' or 'It's terrible'.\n\nMy hypothesis was that the low response rates and low specificity in feedback resulted from inherent flaws with NPS questions. The first question assumes that 'recommendation' is relevant to users of B2B software, while the follow-up questions aren't specific enough to elicit high quality responses."
      },
      {
        "heading": "The Opportunity",
        "content": "Is there a replacement for NPS that nets more qualitative and more actionable feedback? The lack of actionable data from NPS led the PM team to ignore the scores entirely.\n\nI intentionally partnered with the Director of Product Management to discuss alternatives, and he suggested the Product Market Fit (PMF) survey, which asks: How disappointed would you be if you could no longer use this product? What's the main benefit you derive from it? How can we improve it for you?\n\nThe real value of PMF is not in the score but in the qualitative feedback, which has been consistently more specific and hence actionable than NPS."
      },
      {
        "heading": "The Challenge",
        "content": "My challenge was two-fold:\n\n1. Could PMF be an effective alternative to NPS?\n2. How would stakeholders react to a change?\n\nThe path to answering consisted of testing my assumptions and strategically managing change with stakeholders."
      },
      {
        "heading": "Assumption Testing",
        "content": "I directed my Senior UX Researcher to validate three assumptions:\n\n<ul><li>NPS questions are too vague, leading to poor response outcomes</li><li>PMF questions are more specific, so they should elicit better response outcomes</li><li>Business stakeholders are attached to NPS and might be reluctant to replace it with something unfamiliar</li></ul>"
      },
      {
        "heading": "Methodology",
        "content": "We alternated NPS and PMF surveys to A/B test performance of each. Comparing the results helped test our assumption that PMF would elicit more responses and more actionable qualitative feedback.\n\nWe ran the test over 2 quarters and reported on each quarter's outcomes to expose stakeholders to PMF data in contrast with NPS data. Two quarters of data also helped normalize response rates to counteract any novelty effect."
      },
      {
        "heading": "Change Management Strategy",
        "content": "Bringing stakeholders along by sharing the results of our assumption validation work. By bringing them along for the learning journey, they became invested in the problem space and potential solutions."
      },
      {
        "heading": "Results",
        "content": "PMF consistently outperformed NPS over 2 quarters. Response rates to PMF were consistently 3x of NPS response rates. PMF qualitative feedback volume was consistently 800% more than NPS. Quality of PMF qualitative feedback was consistently more specific and actionable.\n\nThe A/B test approach offered objective, fact-based reporting. The approach presented results over 2 quarters, giving stakeholders time to get used to the idea. The data spoke for itself.\n\nUltimately, instead of UX Research having to advocate for replacing NPS with PMF, stakeholders asked us to deprecate NPS in favour of PMF."
      }
    ]
  },
  {
    "id": "placeholder-case-study",
    "title": "Design Systems at Scale",
    "subtitle": "Building Coherence Across Product Lines",
    "skills": [
      "Design Systems",
      "Cross-functional Leadership",
      "Governance"
    ],
    "date": "2024",
    "thumbnail": "images/case-studies/systems-thumb.jpg",
    "heroImage": "images/case-studies/systems-hero.jpg",
    "overview": "Coming soon.",
    "demonstrates": [
      "Replace with what this case study demonstrates"
    ],
    "role": "Your role here",
    "sections": [
      {
        "heading": "Overview",
        "content": "Coming soon."
      }
    ]
  }
];
