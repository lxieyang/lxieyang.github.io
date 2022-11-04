import hicoPreviewImgLink from '../assets/files/pubs/hico/hico-preview.png';
import kapSensemakingWorkshopPreviewImgLink from '../assets/files/pubs/kap-sensemaking-workshop/kap-sensemaking-workshop-preview.png';
import unakiteVlhccWorkshopPreviewImgLink from '../assets/files/pubs/unakite-vlhcc-workshop/unakite-vlhcc-workshop.png';
import stackoverflowVlhccWorkshopPreviewImgLink from '../assets/files/pubs/stackoverflow-vlhcc-workshop/stackoverflow-vlhcc-workshop-preview.jpg';
import av_annoPreviewImgLink from '../assets/files/pubs/av_anno/av_anno.png';
import unakite_uist_2019PreviewImgLink from '../assets/files/pubs/unakite-uist-2019/unakite-uist-2019.png';
import strata_cscw_2021PreviewImgLink from '../assets/files/pubs/strata-cscw-2021/strata-cscw-2021.jpg';
import tabsdo_uist_2021PreviewImgLink from '../assets/files/pubs/tabsdo-uist-2021/tabsdo-uist-2021.jpg';
import crystalline_chi_2022PreviewImgLink from '../assets/files/pubs/crystalline-chi-2022/crystalline-chi-2022.png';
import adamite_chi_2022PreviewImgLink from '../assets/files/pubs/adamite-chi-2022/adamite-chi-2022.png';
import multimodal_assets_2022PreviewImgLink from '../assets/files/pubs/multimodal-assets-2022/multimodal-assets-2022.png';
import wigglite_uist_2022PreviewImgLink from '../assets/files/pubs/wigglite-uist-2022/wigglite-uist-2022.png';
import { filePathPrefix } from './constants';

export const pubFilePathPrefix = filePathPrefix + `/pubs`;

export const publicationsData = {
  publications: [
    // Learning to Detect Human-Object Interactions - WACV 2018
    {
      title: 'Learning to Detect Human-Object Interactions',
      type: 'conference',
      conference: 'WACV',
      conferenceFullName:
        'IEEE Winter Conference on Applications of Computer Vision (WACV)',
      conferenceTag: 'WACV 2018',
      year: 2018,
      month: 3,
      authors: [
        {
          name: 'Yu-Wei Chao',
          bold: false,
        },
        {
          name: 'Yunfan Liu',
          bold: false,
        },
        {
          name: 'Xieyang Liu',
          bold: true,
        },
        {
          name: 'Huayi Zeng',
          bold: false,
        },
        {
          name: 'Jia Deng',
          bold: false,
        },
      ],
      abstract:
        'In this paper we study the problem of detecting human-object interactions (HOI) in static images, defined as predicting a human and an object bounding box with an interaction class label that connects them. HOI detection is a fundamental problem in computer vision as it provides semantic information about the interactions among the detected objects. We introduce HICO-DET, a new large benchmark for HOI detection, by augmenting the current HICO classification benchmark with instance annotations. We propose Human-Object Region-based Convolutional Neural Networks (HO-RCNN), a novel DNN-based framework for HOI detection. At the core of our HO-RCNN is the Interaction Pattern, a novel DNN input that characterizes the spatial relations between two bounding boxes. We validate the effectiveness of our HO-RCNN using HICO-DET. Experiments demonstrate that our HO-RCNN, by exploiting human-object spatial relations through Interaction Patterns, significantly improves the performance of HOI detection over baseline approaches. ',
      codename: 'hico',
      bibtex: `
  @INPROCEEDINGS{chao:wacv2018,
    author = {Yu-Wei Chao and Yunfan Liu and Xieyang Liu and Huayi Zeng and Jia Deng},
    title = {Learning to Detect Human-Object Interactions},
    booktitle = {Proceedings of the IEEE Winter Conference on Applications of Computer Vision},
    year = {2018},
  }    
      `,
      previewImgLink: hicoPreviewImgLink,
      projectPageLink: 'http://www-personal.umich.edu/~ywchao/hico/',
      codebaseLink: 'https://github.com/ywchao/ho-rcnn',
      doi: 'http://doi.org/10.1109/WACV.2018.00048',
      ieeexplore: 'https://ieeexplore.ieee.org/document/8354152',
    },

    // Supporting Knowledge Acceleration for Programming from a Sensemaking Perspective - CHI 2018 Workshop
    {
      title:
        'Supporting Knowledge Acceleration for Programming from a Sensemaking Perspective',
      type: 'workshop',
      conference: 'CHI',
      conferenceFullName:
        'Sensemaking Workshop @ The ACM Conference on Human Factors in Computing Systems (CHI)',
      conferenceTag: 'CHI 2018',
      year: 2018,
      month: 4,
      authors: [
        {
          name: 'Michael Xieyang Liu',
          bold: true,
        },
        {
          name: 'Shaun Burley',
          bold: false,
        },
        {
          name: 'Emily Deng',
          bold: false,
        },
        {
          name: 'Angelina Zhou',
          bold: false,
        },
        {
          name: 'Aniket Kittur',
          bold: false,
        },
        {
          name: 'Brad A. Myers',
          bold: false,
        },
      ],
      abstract:
        'Programmers spend a signiﬁcant proportion of their time searching for and making sense of complex information. However, they often lack effective tools to help them make sense of the information, turn it into knowledge, or share it with their respective communities. In this position paper, we aim to help programmers collect, navigate, and organize knowledge to meet their goals while capturing this knowledge and making it useful for later programmers with similar needs. We describe barriers and challenges to creating this sustainable cycle, and we explore the design space and opportunities for effective tools and systems.',
      codename: 'kap-sensemaking-workshop',
      previewImgLink: kapSensemakingWorkshopPreviewImgLink,
    },

    // UNAKITE: Support Developers for Capturing and Persisting Design Rationales When Solving Problems Using Web Resources - VL/HCC 2018
    {
      title:
        'UNAKITE: Support Developers for Capturing and Persisting Design Rationales When Solving Problems Using Web Resources',
      type: 'workshop',
      conference: 'VL/HCC',
      conferenceFullName:
        "DTSHPS'18 Workshop on Designing Technologies to Support Human Problem Solving",
      conferenceTag: 'VL/HCC 2018',
      year: 2018,
      month: 10,
      authors: [
        {
          name: 'Michael Xieyang Liu',
          bold: true,
        },
        {
          name: 'Nathan Hahn',
          bold: false,
        },
        {
          name: 'Angelina Zhou',
          bold: false,
        },
        {
          name: 'Shaun Burley',
          bold: false,
        },
        {
          name: 'Emily Deng',
          bold: false,
        },
        {
          name: 'Aniket Kittur',
          bold: false,
        },
        {
          name: 'Brad A. Myers',
          bold: false,
        },
      ],
      abstract:
        "UNAKITE is a new system that supports developers in collecting, organizing, consuming, and persisting design rationales while solving problems using web resources. Understanding design rationale has widely been recognized as signiﬁcant for the success of a software engineering project. However, it is currently both time and labor intensive for little immediate payoff for a developer to generate and embed a useful design rationale in their code. Under this cost structure, there is very little effective tool support to help developers keep track of design rationales. UNAKITE addresses this challenge for some design decisions by changing the cost structure: developers are incentivized to make decisions using UNAKITE's collecting and organizing mechanisms as it makes tracking and deciding between alternatives easier than before; the structure thus generated is automatically embedded in the code as the design rationale when the developer copies sample code into their existing code. In a preliminary usability study developers found UNAKITE to be usable for capturing design rationales and effective for interpreting the rationale of others.",
      codename: 'unakite-vlhcc-workshop',
      previewImgLink: unakiteVlhccWorkshopPreviewImgLink,
      shouldShowLocalPaperLink: true,
    },

    // An Exploratory Study of Web Foraging to Understand and Support Programming Decisions - VL/HCC 2018
    {
      title:
        'An Exploratory Study of Web Foraging to Understand and Support Programming Decisions',
      type: 'poster',
      conference: 'VL/HCC',
      conferenceFullName:
        'IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC)',
      conferenceTag: 'VL/HCC 2018',
      year: 2018,
      month: 10,
      authors: [
        {
          name: 'Jane Hsieh',
          bold: false,
        },
        {
          name: 'Michael Xieyang Liu',
          bold: true,
        },
        {
          name: 'Brad A. Myers',
          bold: false,
        },
        {
          name: 'Aniket Kittur',
          bold: false,
        },
      ],
      abstract:
        'Programmers consistently engage in cognitively demanding tasks such as sensemaking and decision-making. During the information-foraging process, programmers are growing more reliant on resources available online since they contain masses of crowdsourced information and are easier to navigate. Content available in questions and answers on Stack Overflow presents a unique platform for studying the types of problems encountered in programming and possible solutions. In addition to classifying these questions, we introduce possible visual representations for organizing the gathered information and propose that such models may help reduce the cost of navigating, understanding and choosing solution alternatives.',
      codename: 'stackoverflow-vlhcc-workshop',
      previewImgLink: stackoverflowVlhccWorkshopPreviewImgLink,
      shouldShowLocalPaperLink: true,
      doi: 'https://doi.org/10.1109/VLHCC.2018.8506517',
      ieeexplore: 'https://ieeexplore.ieee.org/document/8506517',
    },

    // Popup: Reconstructing 3D Video Using Particle Filtering to Aggregate Crowd Responses - IUI 2019
    {
      title:
        'Popup: Reconstructing 3D Video Using Particle Filtering to Aggregate Crowd Responses',
      type: 'conference',
      conference: 'IUI',
      conferenceFullName:
        'ACM International Conference on Intelligent User Interfaces (IUI)',
      conferenceTag: 'IUI 2019',
      year: 2019,
      month: 3,
      authors: [
        {
          name: 'Jean Y. Song',
          bold: false,
        },
        {
          name: 'Stephan J. Lemmer',
          bold: false,
        },
        {
          name: 'Michael Xieyang Liu',
          bold: true,
        },
        {
          name: 'Shiyan Yan',
          bold: false,
        },
        {
          name: 'Juho Kim',
          bold: false,
        },
        {
          name: 'Jason J. Corso',
          bold: false,
        },
        {
          name: 'Walter S. Lasecki',
          bold: false,
        },
      ],
      abstract:
        'Collecting a sufficient amount of 3D training data for autonomous vehicles to handle rare, but critical, traffic events (e.g., collisions) may take decades of deployment. Abundant video data of such events from municipal traffic cameras and video sharing sites (e.g., YouTube) could provide a potential alternative, but generating realistic training data in the form of 3D video reconstructions is a challenging task beyond the current capabilities of computer vision. Crowdsourcing manual annotations of necessary information has the potential to bridge this gap, but the level of accuracy required to attain usable reconstructions makes this a nearly impossible task for non-experts. In this paper, we propose a novel crowd-machine hybrid method that combines annotations from multiple contents by adopting particle filtering as an aggregation technique. Our approach is capable of leveraging temporal dependencies between video frames, enabling more aggressive filtering thresholds for annotations that can help improve the aggregation quality. The proposed method results in a 33% reduction in the relative error of position estimation compared to a state-of-the-art baseline. Moreover, our method enables skip-based (self-filtering) annotation that reduces the total annotation time for hard-to-annotate frames by 16%. Our approach provides a generalizable means of aggregating more accurate crowd responses even in settings where annotation is especially challenging or error-prone.',
      codename: 'av_anno',
      bibtex: ``,
      previewImgLink: av_annoPreviewImgLink,
      shouldShowLocalPaperLink: true,
      doi: 'https://doi.org/10.1145/3301275.3302305',
      acmdl: 'https://dl.acm.org/citation.cfm?id=3302305',
      conferenceTalkVideo: 'https://youtu.be/hn0r9Eb9_rQ',
    },

    // Unakite: Scaffolding Developers’ Decision-Making Using the Web - UIST 2019
    {
      title: 'Unakite: Scaffolding Developers’ Decision-Making Using the Web',
      type: 'conference',
      conference: 'UIST',
      conferenceFullName:
        'ACM Symposium on User Interface Software and Technology (UIST)',
      conferenceTag: 'UIST 2019',
      year: 2019,
      month: 10,
      authors: [
        {
          name: 'Michael Xieyang Liu',
          bold: true,
        },
        {
          name: 'Jane Hsieh',
          bold: false,
        },
        {
          name: 'Nathan Hahn',
          bold: false,
        },
        {
          name: 'Angelina Zhou',
          bold: false,
        },
        {
          name: 'Emily Deng',
          bold: false,
        },
        {
          name: 'Shaun Burley',
          bold: false,
        },
        {
          name: 'Cynthia Taylor',
          bold: false,
        },
        {
          name: 'Aniket Kittur',
          bold: false,
        },
        {
          name: 'Brad A. Myers',
          bold: false,
        },
      ],
      abstract:
        "Developers spend a significant portion of their time searching for solutions and methods online. While numerous tools have been developed to support this exploratory process, in many cases the answers to developers' questions involve trade-offs among multiple valid options and not just a single solution. Through interviews, we discovered that developers express a desire for help with decision-making and understanding trade-offs. Through an analysis of Stack Overflow posts, we observed that many answers describe such trade-offs. These findings suggest that tools designed to help a developer capture information and make decisions about trade-offs can provide crucial benefits for both the developers and others who want to understand their design rationale. In this work, we probe this hypothesis with a prototype system named Unakite that collects, organizes, and keeps track of information about trade-offs and builds a comparison table, which can be saved as a design rationale for later use. Our evaluation results show that Unakite reduces the cost of capturing tradeoff-related information by 45%, and that the resulting comparison table speeds up a subsequent developer's ability to understand the trade-offs by about a factor of three.",
      codename: 'unakite-uist-2019',
      bibtex: ``,
      previewImgLink: unakite_uist_2019PreviewImgLink,
      shouldShowLocalPaperLink: true,
      doi: 'https://dx.doi.org/10.1145/3332165.3347908',
      acmdl: 'https://dx.doi.org/10.1145/3332165.3347908',
      acmdl_available: true,
      award: {
        honorableMention: true,
      },
      conferenceTalkVideo: 'https://youtu.be/UMQ-kWgmbQ4',
    },

    // Tabs.do: Task-Centric Browser Tab Management - UIST 2021
    {
      title: 'Tabs.do: Task-Centric Browser Tab Management',
      type: 'conference',
      conference: 'UIST',
      conferenceFullName:
        'ACM Symposium on User Interface Software and Technology (UIST)',
      conferenceTag: 'UIST 2021',
      year: 2021,
      month: 10,
      authors: [
        {
          name: 'Joseph Chee Chang',
          bold: false,
        },
        {
          name: 'Yongsung Kim',
          bold: false,
        },
        {
          name: 'Victor Miller',
          bold: false,
        },
        {
          name: 'Michael Xieyang Liu',
          bold: true,
        },
        {
          name: 'Brad A. Myers',
          bold: false,
        },
        {
          name: 'Aniket Kittur',
          bold: false,
        },
      ],
      abstract: `Despite the increasing complexity and scale of people's online activities, browser interfaces have stayed largely the same since tabs were introduced in major browsers nearly 20 years ago. The gap between simple tab-based browser interfaces and the complexity of users' tasks can lead to serious adverse effects – commonly referred to as "tab overload." This paper introduces a Chrome extension called Tabs.do, which explores bringing a task-centric approach to the browser, helping users to group their tabs into tasks and then organize, prioritize, and switch between those tasks fluidly. To lower the cost of importing, Tabs.do uses machine learning to make intelligent suggestions for grouping users' open tabs into task bundles by exploiting behavioral and semantic features. We conducted a field deployment study where participants used Tabs.do with their real-life tasks in the wild, and showed that Tabs.do can decrease tab clutter, enabled users to create rich task structures with lightweight interactions, and allowed participants to context-switch among tasks more efficiently.`,
      codename: 'tabsdo-uist-2021',
      bibtex: ``,
      previewImgLink: tabsdo_uist_2021PreviewImgLink,
      shouldShowLocalPaperLink: true,
      doi: 'https://doi.org/10.1145/3472749.3474777',
      acmdl: 'https://doi.org/10.1145/3472749.3474777',
      acmdl_available: true,
      award: {
        honorableMention: false,
      },
      conferenceTalkVideo: 'https://youtu.be/UrXMVkqfYbg',
    },

    // To Reuse or Not To Reuse? A Framework and System for Evaluating Summarized Knowledge - CSCW 2021
    {
      title:
        'To Reuse or Not To Reuse? A Framework and System for Evaluating Summarized Knowledge',
      type: 'conference',
      conference: 'CSCW',
      conferenceFullName:
        'ACM Conference on Computer Supported Cooperative Work and Social Computing (CSCW)',
      conferenceTag: 'CSCW 2021',
      year: 2021,
      month: 10,
      authors: [
        {
          name: 'Michael Xieyang Liu',
          bold: true,
        },
        {
          name: 'Aniket Kittur',
          bold: false,
        },
        {
          name: 'Brad A. Myers',
          bold: false,
        },
      ],
      abstract:
        "As the amount of information online continues to grow, a correspondingly important opportunity is for individuals to reuse knowledge which has been summarized by others rather than starting from scratch. However, appropriate reuse requires judging the relevance, trustworthiness, and thoroughness of others' knowledge in relation to an individual's goals and context. In this work, we explore augmenting judgements of the appropriateness of reusing knowledge in the domain of programming, specifically of reusing artifacts that result from other developers' searching and decision making. Through an analysis of prior research on sensemaking and trust, along with new interviews with developers, we synthesized a framework for reuse judgements. The interviews also validated that developers express a desire for help with judging whether to reuse an existing decision. From this framework, we developed a set of techniques for capturing the initial decision maker's behavior and visualizing signals calculated based on the behavior, to facilitate subsequent consumers' reuse decisions, instantiated in a prototype system called Strata. Results of a user study suggest that the system significantly improves the accuracy, depth, and speed of reusing decisions. These results have implications for systems involving user-generated content in which other users need to evaluate the relevance and trustworthiness of that content.",
      codename: 'strata-cscw-2021',
      bibtex: ``,
      previewImgLink: strata_cscw_2021PreviewImgLink,
      shouldShowLocalPaperLink: true,
      doi: 'https://doi.org/10.1145/3449240',
      acmdl: 'https://doi.org/10.1145/3449240',
      arxiv: 'https://arxiv.org/abs/2102.06231',
      cmuSCSMedia: 'https://www.cs.cmu.edu/news/2021/reuse-content-tool',
      acmdl_available: true,
      award: {
        bestPaper: true,
      },
      conferenceTalkVideo: 'https://youtu.be/NuL-jtf710E',
    },

    // Understanding How Programmers Can Use Annotations on Documentation - CHI 2022
    {
      title:
        'Understanding How Programmers Can Use Annotations on Documentation',
      type: 'conference',
      conference: 'CHI',
      conferenceFullName:
        'ACM CHI Conference on Human Factors in Computing Systems (CHI)',
      conferenceTag: 'CHI 2022',
      year: 2022,
      month: 4,
      authors: [
        {
          name: 'Amber Horvath',
          bold: false,
        },
        {
          name: 'Michael Xieyang Liu',
          bold: true,
        },
        {
          name: 'River Hendriksen',
          bold: false,
        },
        {
          name: 'Connor Shannon',
          bold: false,
        },
        {
          name: 'Emma Paterson',
          bold: false,
        },
        {
          name: 'Kazi Jawad',
          bold: false,
        },
        {
          name: 'Andrew Macvean',
          bold: false,
        },
        {
          name: 'Brad A. Myers',
          bold: false,
        },
      ],
      abstract:
        'Modern software development requires developers to find and effectively utilize new APIs and their documentation, but documentation has many well-known issues. Despite this, developers eventually overcome these issues but have no way of sharing what they learned. We investigate sharing this documentation-specific information through annotations, which have advantages over developer forums as the information is contextualized, not disruptive, and is short, thus easy to author. Developers can also author annotations to support their own comprehension. In order to support the documentation usage behaviors we found, we built the Adamite annotation tool, which provides features such as multiple anchors, annotation types, and pinning. In our user study, we found that developers are able to create annotations that are useful to themselves and are able to utilize annotations created by other developers when learning a new API, with readers of the annotations completing 67% more of the task, on average, than the baseline.',
      codename: 'adamite-chi-2022',
      bibtex: ``,
      previewImgLink: adamite_chi_2022PreviewImgLink,
      shouldShowLocalPaperLink: true,
      doi: 'https://doi.org/10.1145/3491102.3502095',
      acmdl: 'https://doi.org/10.1145/3491102.3502095',
      arxiv: 'https://arxiv.org/abs/2111.08684',
      acmdl_available: true,
      conferenceTalkVideo: 'https://youtu.be/NW6A2hoFh5E',
    },

    // Crystalline: Lowering the Cost for Developers to Collect and Organize Information for Decision Making - CHI 2022
    {
      title:
        'Crystalline: Lowering the Cost for Developers to Collect and Organize Information for Decision Making',
      type: 'conference',
      conference: 'CHI',
      conferenceFullName:
        'ACM CHI Conference on Human Factors in Computing Systems (CHI)',
      conferenceTag: 'CHI 2022',
      year: 2022,
      month: 4,
      authors: [
        {
          name: 'Michael Xieyang Liu',
          bold: true,
        },
        {
          name: 'Aniket Kittur',
          bold: false,
        },
        {
          name: 'Brad A. Myers',
          bold: false,
        },
      ],
      abstract:
        'Developers perform online sensemaking on a daily basis, such as researching and choosing libraries and APIs. Prior research has introduced tools that help developers capture information from various sources and organize it into structures useful for subsequent decision-making. However, it remains a laborious process for developers to manually identify and clip content, maintaining its provenance and synthesizing it with other content. In this work, we introduce a new system called Crystalline that attempts to automatically collect and organize information into tabular structures as the user searches and browses the web. It leverages natural language processing to automatically group similar criteria together to reduce clutter as well as passive behavioral signals such as mouse movement and dwell time to infer what information to collect and how to visualize and prioritize it. Our user study suggests that developers are able to create comparison tables about 20% faster with a 60% reduction in operational cost without sacrificing the quality of the tables.',
      codename: 'crystalline-chi-2022',
      bibtex: ``,
      previewImgLink: crystalline_chi_2022PreviewImgLink,
      shouldShowLocalPaperLink: true,
      doi: 'https://doi.org/10.1145/3491102.3501968',
      acmdl: 'https://doi.org/10.1145/3491102.3501968',
      arxiv: 'https://arxiv.org/abs/2202.02175',
      acmdl_available: true,
      conferenceTalkVideo: 'https://youtu.be/VO-osTVGuJs',
    },

    // Freedom to Choose: Understanding Input Modality Preferences of People with Upper-body Motor Impairments for Activities of Daily Living - ASSETS 2022
    {
      title:
        'Freedom to Choose: Understanding Input Modality Preferences of People with Upper-body Motor Impairments for Activities of Daily Living',
      type: 'conference',
      conference: 'ASSETS',
      conferenceFullName:
        'ACM SIGACCESS Conference on Computers and Accessibility',
      conferenceTag: 'ASSETS 2022',
      year: 2022,
      month: 10,
      authors: [
        {
          name: 'Franklin Mingzhe Li',
          bold: false,
        },
        {
          name: 'Michael Xieyang Liu',
          bold: true,
        },
        {
          name: 'Yang Zhang',
          bold: false,
        },
        {
          name: 'Patrick Carrington',
          bold: false,
        },
      ],
      abstract:
        'Many people with upper-body motor impairments encounter challenges while performing Activities of Daily Living (ADLs) and Instrumental Activities of Daily Living (IADLs), such as toileting, grooming, and managing finances, which have impacts on their Quality of Life (QOL). Although existing assistive technologies enable people with upper-body motor impairments to use different input modalities to interact with computing devices independently (e.g., using voice to interact with a computer), many people still require Personal Care Assistants (PCAs) to perform ADLs. Multimodal input has the potential to enable users to perform ADLs without human assistance. We conducted 12 semi-structured interviews with people who have upper-body motor impairments to capture their existing practices and challenges of performing ADLs, identify opportunities to expand the input possibilities for assistive devices, and understand user preferences for multimodal interaction during everyday tasks. Finally, we discuss implications for the design and use of multimodal input solutions to support user independence and collaborative experiences when performing daily living tasks.',
      codename: 'multimodal-assets-2022',
      bibtex: ``,
      previewImgLink: multimodal_assets_2022PreviewImgLink,
      shouldShowLocalPaperLink: true,
      doi: 'https://doi.org/10.1145/3517428.3544814',
      acmdl: 'https://doi.org/10.1145/3517428.3544814',
      arxiv: 'https://arxiv.org/abs/2207.04344',
      acmdl_available: true,
    },

    // Wigglite: Low-cost Information Collection and Triage - UIST 2022
    {
      title: 'Wigglite: Low-cost Information Collection and Triage',
      type: 'conference',
      conference: 'UIST',
      conferenceFullName:
        'ACM Symposium on User Interface Software and Technology (UIST)',
      conferenceTag: 'UIST 2022',
      year: 2022,
      month: 10,
      authors: [
        {
          name: 'Michael Xieyang Liu',
          bold: true,
        },
        {
          name: 'Andrew Kuznetsov',
          bold: false,
        },
        {
          name: 'Yongsung Kim',
          bold: false,
        },
        {
          name: 'Joseph Chee Chang',
          bold: false,
        },
        {
          name: 'Aniket Kittur',
          bold: false,
        },
        {
          name: 'Brad A. Myers',
          bold: false,
        },
      ],
      abstract: `
      Consumers conducting comparison shopping, researchers making sense of competitive space, and developers looking for code snippets online all face the challenge of capturing the information they find for later use without interrupting their current flow. In addition, during many learning and exploration tasks, people need to externalize their mental context, such as estimating how urgent a topic is to follow up on, or rating a piece of evidence as a “pro” or “con,” which helps scaffold subsequent deeper exploration. However, current approaches incur a high cost, often requiring users to select, copy, context switch, paste, and annotate information in a separate document without offering specific affordances that capture their mental context. In this work, we explore a new interaction technique called “wiggling,” which can be used to fluidly collect, organize, and rate information during early sensemaking stages with a single gesture. Wiggling involves rapid back-and-forth movements of a pointer or up-and-down scrolling on a smartphone, which can indicate the information to be collected and its valence, using a single, light-weight gesture that does not interfere with other interactions that are already available. Through implementation and user evaluation, we found that wiggling helped participants accurately collect information and encode their mental context with a 58% reduction in operational cost while being 24% faster compared to a common baseline.
      `,
      codename: 'wigglite-uist-2022',
      bibtex: ``,
      previewImgLink: wigglite_uist_2022PreviewImgLink,
      shouldShowLocalPaperLink: true,
      doi: 'https://doi.org/10.1145/3526113.3545661',
      acmdl: 'https://doi.org/10.1145/3526113.3545661',
      arxiv: 'https://arxiv.org/abs/2208.00496',
      acmdl_available: true,
      conferenceTalkVideo: 'https://youtu.be/_MH81Zuyj64',
    },

    // Multidirectional Gesturing for OnDisplay Item Identification and/or Further Action Control
    {
      title:
        'Multidirectional Gesturing for OnDisplay Item Identification and/or Further Action Control',
      type: 'patent',
      // conference: 'PCT/US2022/043604',
      conferenceFullName: 'US Patent PCT/US2022/043604 (submitted)',
      conferenceTag: 'US Patent PCT/US2022/043604',
      year: 2022,
      month: 9,
      authors: [
        {
          name: 'Aniket Kittur',
          bold: false,
        },
        {
          name: 'Brad A. Myers',
          bold: false,
        },
        {
          name: 'Michael Xieyang Liu',
          bold: true,
        },
      ],
      abstract: ``,
      codename: 'us-patent-wiggle-2022',
      bibtex: ``,
      shouldShowLocalPaperLink: false,
      acmdl_available: false,
    },

    // Multidirectional Gesturing for OnDisplay Item Identification and/or Further Action Control
    {
      title: 'Generation of Interactive Utterances of Code Tasks',
      type: 'patent',
      // conference: 'PCT/US2022/043604',
      conferenceFullName: 'US Patent (submitted)',
      // conferenceTag: 'US Patent PCT/US2022/043604',
      year: 2022,
      month: 9,
      authors: [
        {
          name: 'Ben Zorn',
          bold: false,
        },
        {
          name: 'Carina Negreanu',
          bold: false,
        },
        {
          name: 'Advait Sarkar',
          bold: false,
        },
        {
          name: 'Andrew Gordon',
          bold: false,
        },
        {
          name: 'Jack Williams',
          bold: false,
        },
        {
          name: 'Michael Xieyang Liu',
          bold: true,
        },
        {
          name: 'Neil Toronto',
          bold: false,
        },
        {
          name: 'Sruti Srinivasa Ragavan',
          bold: false,
        },
      ],
      abstract: ``,
      codename: 'us-patent-codeexcel-2022',
      bibtex: ``,
      shouldShowLocalPaperLink: false,
      acmdl_available: false,
    },
  ],
};
