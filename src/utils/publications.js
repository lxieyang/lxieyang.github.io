import hicoPreviewImgLink from '../assets/files/pubs/hico/hico-preview.png';
import kapSensemakingWorkshopPreviewImgLink from '../assets/files/pubs/kap-sensemaking-workshop/kap-sensemaking-workshop-preview.png'
import unakiteVlhccWorkshopPreviewImgLink from '../assets/files/pubs/unakite-vlhcc-workshop/unakite-vlhcc-workshop.png';
import { filePathPrefix } from './constants';

export const pubFilePathPrefix = filePathPrefix + `/pubs`;

export const publicationsData = {
  publications: [
    // Learning to Detect Human-Object Interactions - WACV 2018
    {
      title: "Learning to Detect Human-Object Interactions",
      type: "conference",
      conference: "WACV",
      conferenceFullName: "IEEE Winter Conference on Applications of Computer Vision (WACV)",
      conferenceTag: "WACV 2018",
      year: 2018,
      month: 3,
      authors: [
        { name: "Yu-Wei Chao", bold: false },
        { name: "Yunfan Liu", bold: false },
        { name: "Xieyang Liu", bold: true },
        { name: "Huayi Zeng", bold: false },
        { name: "Jia Deng", bold: false }
      ],
      abstract: "In this paper we study the problem of detecting human-object interactions (HOI) in static images, defined as predicting a human and an object bounding box with an interaction class label that connects them. HOI detection is a fundamental problem in computer vision as it provides semantic information about the interactions among the detected objects. We introduce HICO-DET, a new large benchmark for HOI detection, by augmenting the current HICO classification benchmark with instance annotations. We propose Human-Object Region-based Convolutional Neural Networks (HO-RCNN), a novel DNN-based framework for HOI detection. At the core of our HO-RCNN is the Interaction Pattern, a novel DNN input that characterizes the spatial relations between two bounding boxes. We validate the effectiveness of our HO-RCNN using HICO-DET. Experiments demonstrate that our HO-RCNN, by exploiting human-object spatial relations through Interaction Patterns, significantly improves the performance of HOI detection over baseline approaches. ",
      codename: "hico",
      bibtex: `
  @INPROCEEDINGS{chao:wacv2018,
    author = {Yu-Wei Chao and Yunfan Liu and Xieyang Liu and Huayi Zeng and Jia Deng},
    title = {Learning to Detect Human-Object Interactions},
    booktitle = {Proceedings of the IEEE Winter Conference on Applications of Computer Vision},
    year = {2018},
  }    
      `,
      previewImgLink: hicoPreviewImgLink,
      projectPageLink: "http://www-personal.umich.edu/~ywchao/hico/",
      codebaseLink: "https://github.com/ywchao/ho-rcnn"
    },


    // Supporting Knowledge Acceleration for Programming from a Sensemaking Perspective - CHI 2018 Workshop
    {
      title: "Supporting Knowledge Acceleration for Programming from a Sensemaking Perspective",
      type: "workshop",
      conference: "CHI",
      conferenceFullName: "Sensemaking Workshop @ The ACM Conference on Human Factors in Computing Systems (CHI)",
      conferenceTag: "CHI 2018",
      year: 2018,
      month: 4,
      authors: [
        { name: "Michael Xieyang Liu", bold: true },
        { name: "Shaun Burley", bold: false },
        { name: "Emily Deng", bold: false },
        { name: "Angelina Zhou", bold: false },
        { name: "Aniket Kittur", bold: false },
        { name: "Brad A. Myers", bold: false}
      ],
      abstract: "Programmers spend a signiﬁcant proportion of their time searching for and making sense of complex information. However, they often lack effective tools to help them make sense of the information, turn it into knowledge, or share it with their respective communities. In this position paper, we aim to help programmers collect, navigate, and organize knowledge to meet their goals while capturing this knowledge and making it useful for later programmers with similar needs. We describe barriers and challenges to creating this sustainable cycle, and we explore the design space and opportunities for effective tools and systems.",
      codename: "kap-sensemaking-workshop",
      previewImgLink: kapSensemakingWorkshopPreviewImgLink
    },


    // Supporting Knowledge Acceleration for Programming from a Sensemaking Perspective - CHI 2018 Workshop
    {
      title: "UNAKITE: Support Developers for Capturing and Persisting Design Rationales When Solving Problems Using Web Resources",
      type: "workshop",
      conference: "VL/HCC",
      conferenceFullName: "DTSHPS'18 Workshop on Designing Technologies to Support Human Problem Solving",
      conferenceTag: "VL/HCC 2018",
      year: 2018,
      month: 10,
      authors: [
        { name: "Michael Xieyang Liu", bold: true },
        { name: "Nathan Hahn", bold: false },
        { name: "Angelina Zhou", bold: false },
        { name: "Shaun Burley", bold: false },
        { name: "Emily Deng", bold: false },
        { name: "Aniket Kittur", bold: false },
        { name: "Brad A. Myers", bold: false}
      ],
      abstract: "UNAKITE is a new system that supports developers in collecting, organizing, consuming, and persisting design rationales while solving problems using web resources. Understanding design rationale has widely been recognized as signiﬁcant for the success of a software engineering project. However, it is currently both time and labor intensive for little immediate payoff for a developer to generate and embed a useful design rationale in their code. Under this cost structure, there is very little effective tool support to help developers keep track of design rationales. UNAKITE addresses this challenge for some design decisions by changing the cost structure: developers are incentivized to make decisions using UNAKITE's collecting and organizing mechanisms as it makes tracking and deciding between alternatives easier than before; the structure thus generated is automatically embedded in the code as the design rationale when the developer copies sample code into their existing code. In a preliminary usability study developers found UNAKITE to be usable for capturing design rationales and effective for interpreting the rationale of others.",
      codename: "unakite-vlhcc-workshop",
      previewImgLink: unakiteVlhccWorkshopPreviewImgLink,
      shouldShowLocalPaperLink: false
    },
  ]
};