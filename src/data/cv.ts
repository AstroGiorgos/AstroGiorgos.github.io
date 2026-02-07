import type { Experience, Education, Skill, Publication } from '../types/cv'

export const experiences: Experience[] = [
  {
    title: 'Senior Researcher',
    company:
      'DTU Space – Technical University of Denmark',
    time: '2018 - present',
  description:'(equivalent to Associate Professor)'
  },
  {
    title: 'Assistant Professor',
    company: 'Dark Cosmology Centre, University of Copenhagen',
    time: '2017 - 2018',
  },
  {
    title: 'Postdoc',
    company: 'Weizmann Institute of Science',
    time: '2014 - 2017',
  },
  {
    title: 'Postdoc',
    company: 'Oskar Klein Centre, Stockholm University',
    time: '2012 - 2014',
  },
  {
    title: 'Postdoc',
    company: 'Dark Cosmology Centre, University of Copenhagen',
    time: '2010 - 2011',
  },
]

export const education: Education[] = [
  {
    degree: 'PhD in Astrophysics',
    school: 'Niels Bohr Institute, University of Copenhagen',
    time: '2006 - 2010',
    description:
      'Thesis: “Observations of Supernovae and their Environments”',
  },
  {
    degree: 'MSc in Wind Energy',
    school: 'Technical University of Denmark',
    time: '2004 - 2006',
  },
  {
    degree: 'MSc in Astrophysics',
    school: 'Queen Mary, University of London',
    time: '2001 - 2002',
  },
  {
    degree:
      'Physics Degree',
    school: 'Department of Physics, University of Athens',
    description:'with major in Astrophysics, Astronomy and Mechanics',
    time: '1996 - 2001',
  },
]



export const skills: Skill[] = [
    {
    title: 'The Villum Foundation',
    description:
      'Villum Young Investigator Plus: “Black hole mass measurements with Tidal Disruption Events (BlackTiDE)” (Principal Investigator; 530k EUR, 2023).',
    },
    {
      title: 'Independent Research Fund Denmark',
      description:
        'Research Project: “The 3D geometry of gravitational wave sources” (Principal Investigator; 326k EUR, 2023).',
    },
    {
      title: 'The Villum Foundation',
      description:
        'Villum Young Investigator: “Studying Transients in the Nuclei of Galaxies” (Principal Investigator; 1328k EUR, 2018).',
    },
    {
      title: 'Feinberg Graduate School (Weizmann Institute of Science)',
      description: 'Koshland Prize (2014).',
    },
    {
      title: 'The Swedish Research Council',
      description:
        'Postdoctoral grant: “Using UltraVISTA to detect supernovae and study the acceleration of the Universe” (193k EUR, 2011).',
    },
    {
      title: 'The Carlsberg Foundation',
      description: 'Postdoctoral fellowship (77k EUR, 2010).',
    },
    {
      title: 'Academic Distinction',
      description: 'Distinction at MSc degree (2002).',
    },
]

export const publications: Publication[] = []



