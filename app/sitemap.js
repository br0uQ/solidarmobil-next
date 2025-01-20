export default function sitemap() {
  let base_url = "https://www.solidarmobil.de";
  return [
    {
      url: base_url,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: base_url + '/ueber_uns',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: base_url + '/wiki',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: base_url + '/impressum',
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: base_url + '/datenschutz',
      lastModified: new Date(),
      priority: 0.1,
    },
  ]
}
