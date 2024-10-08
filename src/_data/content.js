const header = 'Timeline of coastal flooding and sea level rise events, potentially useful for pricing in SLR to your cost-benefit analysis of coastal construction, especially for long-term investments like infrastructure.';
const footer = 'Manage our resources wisely!';
const entries = [
  {
    id: 'forecast',
    categories: ['forecast'],
    color: 'green',
    faicon: 'forecast',
    datetime: '3000-01-01 05:00',
    title: 'SLR Maximum',
    image: {
      link: 'http://placekitten.com',
      src: 'http://placekitten.com/200/300',
      alt: 'A placeholder kitten',
      caption: 'Kitten!',
    },
    body: "80m (240') of SLR",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Cat',
        linkText: 'forecast',
      },
    ],
  },
  {
    id: 'dog',
    categories: ['dog'],
    color: 'green',
    faicon: 'dog',
    datetime: '2021-05-01 23:55',
    title: 'Puppies are great too',
    image: {
      link: 'http://place-puppy.com',
      src: 'https://place-puppy.com/300x300',
      alt: 'A placeholder puppy',
      caption: 'Puppy!',
    },
    body: 'Doggo ipsum sub woofer smol wow very biscit aqua doggo pupper dat tungg tho big ol pupper, very jealous pupper mlem heckin angery woofer very jealous pupper. Blep waggy wags long doggo, corgo. Tungg wow such tempt mlem very jealous pupper boofers lotsa pats, snoot smol big ol ruff doge super chub, long doggo heckin good boys and girls h*ck heck. Shoober blop many pats borkf, such treat. Big ol what a nice floof long water shoob wrinkler heck sub woofer, pupper porgo wow very biscit.',
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Dog',
        linkText: 'Dog',
      },
    ],
  },
];

// Page details
const pageTitle = 'SLR Timeline'; // The title of the page that shows in the browser tab
const pageDescription = 'A timeline of sea level rise and coastal flooding events'; // The description of the page for search engines
const pageAuthor = 'nelscity'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
