export const filterConfig = [
    {
      name: 'from',
      label: 'Price',
      type: 'text',
      placeholder: 'from',
    },
    {
      name: 'to',
      label: '',
      type: 'text',
      placeholder: 'to',
    },
    {
      name: 'discounted',
      label: 'Discounted items',
      type: 'checkbox',
      hiddenOnSalePage: true,
    },
    {
      name: 'sortBy',
      label: 'Sort by',
      type: 'select',
      options: [
        { value: '', label: 'Default' },
        { value: 'price_asc', label: 'Price (Low to High)' },
        { value: 'price_desc', label: 'Price (High to Low)' },
        { value: 'name_asc', label: 'Name A-Z' },
        { value: 'name_desc', label: 'Name Z-A' },
      ],
    },
  ];
  