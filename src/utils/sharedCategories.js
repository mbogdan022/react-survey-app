const sharedCategories = [
  {
    categoryLetter: 'A-2',
    name: 'Memory',
    customColor: '#99e2ff',
    autoNext: true,
    subcategories: [
      {
        categoryLetter: null,
        name: 'Remember',
        customColor: '#99e2ff',
        autoNext: true,
        subcategories_1: [
          {
            categoryLetter: 'A-2-3',
            name: 'Previous actions',
            customColor: '#99e2ff',
            autoNext: false,
          },
          {
            categoryLetter: 'A-2-1',
            name: 'To check',
            customColor: '#99e2ff',
            autoNext: false,
          },
          {
            categoryLetter: 'A-2-2',
            name: 'To act',
            customColor: '#99e2ff',
            autoNext: false,
          },
        ]
      },
      {
        categoryLetter: null,
        name: 'Recall',
        customColor: '#99e2ff',
        autoNext: true,
        subcategories_1: [
          {
            categoryLetter: 'A-2-4b',
            name: 'From working memory',
            customColor: '#99e2ff',
            autoNext: false,
          },
          {
            categoryLetter: 'A-2-6',
            name: 'From long term emory',
            customColor: '#99e2ff',
            autoNext: false,
          },
        ]
      }
    ]
  },
  {
    categoryLetter: 'A-5',
    name: 'Compliance with rules',
    customColor: '#99e2ff',
    autoNext: true,
    shouldDeleteLast: false,
    subcategories: [
      {
        categoryLetter: null,
        name: 'YES',
        customColor: '#99e2ff',
        autoNext: true,
        subcategories_1: [
          {
            categoryLetter: 'A-5-1',
            name: 'Deliberate or malicious act',
            customColor: '#99e2ff',
            autoNext: false
          }
        ]
      },
      {
        categoryLetter: null,
        name: 'NO',
        customColor: '#99e2ff',
        autoNext: true,
        subcategories_1: [
          {
            categoryLetter: null,
            name: 'Individual',
            customColor: '#99e2ff',
            autoNext: true,
            shouldDeleteLast: false,
            subcategories_2: [
              {
                categoryLetter: 'A-5-3',
                name: 'Rutine',
                customColor: '#99e2ff',
                autoNext: false,
              },
              {
                categoryLetter: 'A-5-2',
                name: 'Isolated',
                customColor: '#99e2ff',
                autoNext: false,
              },
              {
                categoryLetter: 'A-5-5',
                name: 'Situation Induced',
                customColor: '#99e2ff',
                autoNext: false,
              },
            ]
          },
          {
            categoryLetter: null,
            name: 'Team',
            customColor: '#99e2ff',
            autoNext: true,
            subcategories_2: [
              {
                categoryLetter: 'A-5-4',
                name: 'Rutine',
                customColor: '#99e2ff',
                autoNext: false,
              },
              {
                categoryLetter: null,
                name: 'Isolated',
                customColor: '#99e2ff',
                autoNext: false,
              },
              {
                categoryLetter: 'A-5-6',
                name: 'Situation Induced',
                customColor: '#99e2ff',
                autoNext: false,
              },
            ]
          }
        ]
      },
    ]
  },
]

export default sharedCategories
