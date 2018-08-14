import hicoPreviewImgLink from '../assets/files/pubs/hico/hico-preview.png';
import kapSensemakingWorkshopPreviewImgLink from '../assets/files/pubs/kap-sensemaking-workshop/kap-sensemaking-workshop-preview.png'
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
      year: "2018",
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
      year: "2018",
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
  ]
};