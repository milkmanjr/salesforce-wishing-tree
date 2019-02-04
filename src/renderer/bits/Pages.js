export default {
  sales: {
    name: 'Sales',
    icon: require('@/assets/imgs/sales-icon.png'),
    url: '/predictor/sales',
    items: [
      {
        title: 'Leads',
        copy: 'Leads that will convert to opportunities',
        video: 'static/videos/Sales/Sales01.mp4'
      },
      {
        title: 'Opportunities',
        copy: 'Opportunities that are likely to close',
        video: 'static/videos/Sales/Sales02.mp4'
      },
      {
        title: 'Forecast',
        copy: 'The likelihood of hitting my Forecast',
        video: 'static/videos/Sales/Sales03.mp4'
      }
    ]
  },
  service: {
    name: 'Service',
    icon: require('@/assets/imgs/service-icon.png'),
    url: '/predictor/service',
    items: [
      {
        title: 'Service Cases',
        copy: 'High priority service cases',
        video: 'static/videos/Service/Service01.mp4'
      },
      {
        title: 'Service Responses',
        copy: 'The best way to respond to customers with AI-powered chat bots',
        video: 'static/videos/Service/Service02.mp4'
      },
      {
        title: 'Customer Answers',
        copy: 'Answers to every customer question',
        video: 'static/videos/Service/Service03.mp4'
      }
    ]
  },
  marketing: {
    name: 'Marketing',
    icon: require('@/assets/imgs/marketing-icon.png'),
    url: '/predictor/marketing',
    items: [
      {
        title: 'Customer Engagement',
        copy: 'The likelihood of customers to engage',
        video: 'static/videos/Marketing/Marketing01.mp4'
      },
      {
        title: 'Brand Presence',
        copy: 'Where my brand shows up on social media',
        video: 'static/videos/Marketing/Marketing02.mp4'
      },
      {
        title: 'Custom Audiences',
        copy: 'The highest value audiences for targeted campaigns',
        video: 'static/videos/Marketing/Marketing03.mp4'
      }
    ]
  },
  commerce: {
    name: 'Commerce',
    icon: require('@/assets/imgs/commerce-icon.png'),
    url: '/predictor/commerce',
    items: [
      {
        title: 'Recommended Products',
        copy: 'The best products for every shopper',
        video: 'static/videos/Commerce/Commerce01.mp4'
      },
      {
        title: 'Shopper Behavior',
        copy: 'Patterns in shopper behavior',
        video: 'static/videos/Commerce/Commerce02.mp4'
      },
      {
        title: 'Search Results',
        copy: 'The best way to display products to shoppers',
        video: 'static/videos/Commerce/Commerce03.mp4'
      }
    ]
  },
  platform: {
    name: 'Platform',
    icon: require('@/assets/imgs/platform-icon.png'),
    url: '/predictor/platform',
    items: [
      {
        title: 'Customer Context',
        copy: 'Customer sentiment and intent across every channel',
        video: 'static/videos/myEinstein/Platform01.mp4'
      },
      {
        title: 'Customer Churn',
        copy: 'Custom predictions on any Salesforce object',
        video: 'static/videos/myEinstein/Platform03_use-as-2.mp4'
      }/*,
      {
        title: 'Employee Attrition',
        video: 'static/videos/platform/KH platform03_Einstein Builder Attrition_102317_1645.m4v'
      }*/
    ]
  }
};