import {isTablet} from './utilities';

export default {
  contactLocation: 'Melbourne, VIC',
  contactPhone: '',
  contactEmail: '',
  links: {
    android: 'https://bit.ly/2NulWCw',
    ios: 'https://apple.co/2VJ7fgB',
    github: 'https://bit.ly/2GP62Rk',
    youtube: 'https://bit.ly/2B3KzDx',
  },
  linkAndroid: 'Play Store',
  linkIos: 'App Store',
  linkGithub: 'Github',
  linkYoutube: 'YouTube',
  skillsTitle: 'Skills',
  skillsColumnOne: [
    'React',
    'JavaScript',
    'NodeJS',
    'Redux',
    'Express',
    'MongoDB',
    'Java',
    'Django',
  ],
  skillsColumnTwo: [
    'Sass',
    'GraphQL',
    'Git',
    'REST APIs',
    'SQL',
    'UI/UX design',
    'Localisation',
    'Snapshot testing',
  ],
  name: 'Charlie McGregor',
  role: 'React Developer',
  summaryTitle: 'Summary',
  summaryContent:
    'React Native/ReactJS developer with experience in all steps of the app development process. Experienced in backend development using NodeJS. Several completed apps currently available for download. Graduate of Royal Melbourne Institute of Technology majoring in Information Technology. Experienced in project development using Agile methodologies.',
  educationTitle: 'Education',
  educationDegree: isTablet()
    ? 'Bachelor’s of IT'
    : 'Bachelor’s of Information Technology',
  educationDegreeDate: '2015 – 2018',
  educationInstitution: 'RMIT',
  educationGpa: 'GPA: 3.4',
  programmingExperienceTitle: 'Programming Experience',
  programmingExperienceAppDeveloper: 'Independent Application Developer',
  programmingExperienceAppDeveloperDate: '2016 - present',
  programmingExperienceApps: [
    'Tone Tracker',
    'Tip Advisor',
    'Blistful',
    'Task Killer',
    'Memory Whizz',
    'Russian Roulette',
    'Virtual Plant',
  ],
  programmingExperienceYoutube: 'YouTube Content Creator',
  programmingExperienceYoutubeDate: '2018 - present',
  programmingExperienceYoutubeDescription: 'Programming tutorials',
  workHistoryTitle: 'Work History',
  workHistoryItems: [
    {
      job: 'Security Analyst',
      date: '2019 – present',
      company: 'Infosys',
      points: [
        'Correcting sync issues between applications within a federated system.',
        'Migrating data between servers of different operating systems.',
        'Automating processes with Jenkins.',
        'Documenting technical processes.',
      ],
    },
    {
      job: 'Sales Associate',
      date: '2012 - 2018',
      company: 'Guitar Exchange',
      points: [
        'Used sales skills to optimise customer satisfaction while maintaining the highest profit margin on the sales team.',
        'Worked closely with customers and suppliers to determine stock which would be valuable to both customers and the shop.',
        'Performed back-end operations on the shop’s website via Magento.',
        'Regularly posted product related content and conducted marketing campaigns via Facebook.',
      ],
    },
  ],
};
