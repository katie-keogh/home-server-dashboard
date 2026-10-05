import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly mastheadDate = 'MONDAY, 5 OCTOBER 2026';
  protected readonly location = 'DUBLIN, IRELAND';
  protected readonly weather = '14°C';
  protected readonly clock = '12:34';
  protected readonly quote = '“A more informed day, every day.”';

  protected readonly irelandStories = [
    {
      title: 'Government to unveil new housing measures in this week’s budget',
      summary: 'The Government is expected to announce a range of new housing measures in Tuesday’s budget, with a focus on increasing supply and supporting first-time buyers.',
      image: "url('https://images.unsplash.com/photo-1528747045269-390fe33c19f2?auto=format&fit=crop&w=1200&q=80')",
    },
    {
      title: 'Dublin City Council approves new sustainable transport plan',
      summary: 'The plan includes extra bus and cycling corridors as the city works to cut congestion and emissions.',
      image: "url('https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80')",
      time: '2 hours ago',
    },
    {
      title: 'Ireland’s unemployment rate holds steady at 4.3%',
      summary: 'Employment remains resilient despite a slowdown in hiring among retail and hospitality employers.',
      image: "url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80')",
      time: '3 hours ago',
    },
    {
      title: 'New coastal safety measures announced ahead of winter',
      summary: 'Authorities say improved warning systems and patrols are designed to reduce risk along high-exposure routes.',
      image: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80')",
      time: '5 hours ago',
    },
  ];

  protected readonly technologyStories = [
    {
      title: 'Apple unveils next generation chips with major performance gains',
      summary: 'Apple has announced its latest line of chips, promising significant performance improvements across its Mac and iPhone ranges.',
      image: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80')",
    },
    {
      title: 'OpenAI expands access to custom AI tools',
      summary: 'The company says more organisations will be able to build domain-specific assistants using its enterprise platform.',
      image: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80')",
      time: '2 hours ago',
    },
    {
      title: 'EU rules for tech giants set to take effect in 2026',
      summary: 'Compliance demands and reporting obligations are expected to push major platforms to change their operating models.',
      image: "url('https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80')",
      time: '4 hours ago',
    },
    {
      title: 'Major cybersecurity flaw patched in widely used software',
      summary: 'Security teams are urging customers to update their systems immediately to reduce exposure to exploitation.',
      image: "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80')",
      time: '5 hours ago',
    },
  ];

  protected readonly worldStories = [
    {
      title: 'Shipping routes shift as new trade concerns spread through eastern ports',
      image: "url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80')",
    },
    {
      title: 'European leaders prepare a wider response to energy volatility',
      image: "url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80')",
    },
    {
      title: 'Public health agencies watch rising temperatures for knock-on effects',
      image: "url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80')",
    },
    {
      title: 'Asian markets close higher after strong tech and manufacturing data',
      image: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80')",
    },
  ];

  protected readonly todayStats = [
    { label: 'DUBLIN', value: '14°C' },
    { label: 'EUR/GBP', value: '0.87' },
    { label: 'EUR/USD', value: '1.17' },
    { label: 'BTC', value: '€58,432' },
  ];

  protected readonly todayIndices = [
    { name: 'S&P 500', value: '5,732.18', delta: '+0.4%' },
    { name: 'FTSE 100', value: '8,241.62', delta: '+0.2%' },
    { name: 'DAX', value: '19,473.21', delta: '-0.1%' },
    { name: 'Nikkei 225', value: '38,145.02', delta: '+0.6%' },
  ];
}
