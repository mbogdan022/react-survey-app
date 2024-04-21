const mainCategories = [
  {
    id: 1,
    name: 'Operator Involvement',
    categories: [
      {
        categoryLetter: 'A',
        name: 'Actions',
        customColor: '#00adef',
        subcategories: [
          {
            categoryLetter: 'A-1',
            name: 'Conflict Detection',
            customColor: '#99e2ff',
            autoNext: true,
            autoEnable: true,
            subcategories_1: [
              {
                categoryLetter: null,
                name: 'Detection',
                customColor: '#99e2ff',
                autoNext: false
              },
              {
                categoryLetter: null,
                name: 'Identification',
                customColor: '#99e2ff',
                autoNext: false
              },
              {
                categoryLetter: null,
                name: 'Accuracy',
                customColor: '#99e2ff',
                autoNext: false
              },
              {
                shouldDeleteLast: true,
                subcategories_2: [
                  {
                    categoryLetter: null,
                    name: 'Auditory Information',
                    customColor: '#99e2ff',
                  },
                  {
                    categoryLetter: null,
                    name: 'Visual Information',
                    customColor: '#99e2ff',
                  },
                ]
              }
            ],
          },
          {
            categoryLetter: 'A-3',
            name: 'Judge/Plan',
            customColor: '#99e2ff',
            autoNext: true,
            hasYesNo: true,
            subcategories_1: [
              {
                categoryLetter: 'A-3-1',
                name: 'Judge/Project',
                customColor: '#99e2ff',
                autoNext: false
              },
              {
                categoryLetter: 'A-3-4',
                name: 'Timing',
                customColor: '#99e2ff',
                autoNext: false
              },
              {
                categoryLetter: 'A-3-3',
                name: 'Sufficiency',
                customColor: '#99e2ff',
                autoNext: false
              },
              {
                categoryLetter: 'A-3-2',
                name: 'Correctness/workability',
                customColor: '#99e2ff',
                autoNext: false
              },
            ],
          },
          {
            categoryLetter: 'A-4',
            name: 'Execution',
            customColor: '#99e2ff',
            autoNext: true,
            hasYesNo: true,
            subcategories_1: [
              {
                categoryLetter: 'A-4-2',
                name: 'Clarity',
                customColor: '#99e2ff',
                autoNext: false
              },
              {
                categoryLetter: 'A-4-5',
                name: 'Completeness',
                customColor: '#99e2ff',
                autoNext: false
              },
              {
                categoryLetter: 'A-4-3',
                name: 'Correctness',
                customColor: '#99e2ff',
                autoNext: false
              },
            ],
          },
        ]
      },
      {
        categoryLetter: 'D',
        name: 'Personal and Interpersonal context',
        customColor: '#ba151a',
        subcategories: [
          {
            categoryLetter: 'D-2',
            name: 'Interaction with equipment',
            customColor: '#e83037',
          },
          {
            categoryLetter: 'D-3',
            name: 'Training and Experience',
            customColor: '#e83037',
          },
          {
            categoryLetter: 'D-6',
            name: 'Team Factors',
            customColor: '#e83037',
          },
          {
            categoryLetter: 'D-5',
            name: 'Operational Environment',
            customColor: '#e83037',
          },
          {
            categoryLetter: 'D-7',
            name: 'Personal Factors',
            customColor: '#e83037',
          },
        ]
      },
    ]
  },
  {
    id: 2,
    name: 'Pilot Involvement',
    categories: [
      {
        categoryLetter: 'B-1',
        name: 'Pilot Actions',
        customColor: '#7d51a1',
      },
      {
        categoryLetter: 'B-2',
        name: 'Pilot/ATCO Communications',
        customColor: '#7d51a1',
      },
    ]
  },
  {
    id: 3,
    name: 'Other people Involvement',
    categories: [
      {
        categoryLetter: 'B-5',
        name: 'External Agencies',
        customColor: '#7d51a1',
      },
      {
        categoryLetter: 'F',
        name: 'ATSEP Communications',
        customColor: '#ffa31a',
      },
    ]
  },
  {
    id: 4,
    name: 'Operations',
    categories: [
      {
        categoryLetter: 'B-3',
        name: 'Airspace',
        customColor: '#7d51a1',
      },
      {
        categoryLetter: 'B-8',
        name: 'Airport',
        customColor: '#7d51a1',
      },
      {
        categoryLetter: 'B-6',
        name: 'Weather',
        customColor: '#7d51a1',
      },
    ]
  },
  {
    id: 5,
    name: 'Traffic',
    categories: [
      {
        categoryLetter: 'B-4',
        name: 'Traffic Management',
        customColor: '#7d51a1',
      },
    ]
  },
  {
    id: 6,
    name: 'Organizational Environment',
    categories: [
      {
        categoryLetter: 'D-4',
        name: 'Organizational Factors',
        customColor: '#e83037',
      },
      {
        categoryLetter: 'D-1',
        name: 'Documentation and Procedures',
        customColor: '#e83037',
      },
    ]
  },
  {
    id: 7,
    name: 'Technical Systems',
    categories: [
      {
        categoryLetter: 'C-1',
        name: 'Navigation',
        customColor: '#8cc63f',
      },
      {
        categoryLetter: null,
        name: 'Surveillance',
        customColor: '#8cc63f',
      },
      {
        categoryLetter: null,
        name: 'Communications',
        customColor: '#8cc63f',
      },
      {
        categoryLetter: null,
        name: 'Working Position',
        customColor: '#8cc63f',
      },
      {
        categoryLetter: null,
        name: 'Support Systems',
        customColor: '#8cc63f',
      },
    ]
  },
  {
    id: 8,
    name: 'Abnormal Situations',
    categories: [
      {
        categoryLetter: 'B-1',
        name: 'Aircraft Technical issues and Emergencies',
        customColor: '#7d51a1',
      },
    ]
  },
]

export default mainCategories
