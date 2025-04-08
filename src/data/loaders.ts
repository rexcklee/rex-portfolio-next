import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";

const BASE_URL = getStrapiURL();

const BLOG_PAGE_SIZE = 3;

const aboutPageQuery = qs.stringify({
  populate: {
    profile_photo: {
      fields: ["url", "alternativeText"],
    },
  },
});

export async function getAboutPage() {
  const path = "/api/about-me";
  const url = new URL(path, BASE_URL);
  url.search = aboutPageQuery;

  return await fetchAPI(url.href, { method: "GET" });
}

const skillsQuery = qs.stringify({
  populate: {
    skills: {
      fields: [
        "id",
        "documentId",
        "name",
        "createdAt",
        "updatedAt",
        "publishedAt",
      ],
    },
  },
});

export async function getSkillsPage() {
  const path = "/api/skill-categories";
  const url = new URL(path, BASE_URL);
  url.search = skillsQuery;

  return await fetchAPI(url.href, { method: "GET" });
}

const projectsQuery = qs.stringify({
  populate: {
    skills: {
      fields: [
        "id",
        "documentId",
        "name",
        "createdAt",
        "updatedAt",
        "publishedAt",
      ],
    },
    pictures: {
      fields: ["url", "alternativeText"],
      sort: ["name:asc"],
    },
  },
  sort: ["sort:desc"],
});

export async function getProjectsPage() {
  const path = "/api/projects";
  const url = new URL(path, BASE_URL);
  url.search = projectsQuery;

  return await fetchAPI(url.href, { method: "GET" });
}

const experiencesQuery = qs.stringify({
  sort: ["sort:desc"],
});

export async function getExperiencesPage() {
  const path = "/api/experiences";
  const url = new URL(path, BASE_URL);
  url.search = experiencesQuery;

  return await fetchAPI(url.href, { method: "GET" });
}

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "blocks.hero-section": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            logo: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            cta: true,
          },
        },
        "blocks.info-block": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            cta: true,
          },
        },
      },
    },
  },
});

export async function getHomePage() {
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);
  url.search = homePageQuery;

  return await fetchAPI(url.href, { method: "GET" });
}

const pageBySlugQuery = (slug: string) =>
  qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      blocks: {
        on: {
          "blocks.hero-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              logo: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
              cta: true,
            },
          },
          "blocks.info-block": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              cta: true,
            },
          },

          "blocks.featured-article": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              link: true,
            },
          },
          "blocks.subscribe": {
            populate: true,
          },
        },
      },
    },
  });

export async function getPageBySlug(slug: string) {
  const path = "/api/pages";
  const url = new URL(path, BASE_URL);
  url.search = pageBySlugQuery(slug);
  return await fetchAPI(url.href, { method: "GET" });
}

const globalSettingQuery = qs.stringify({
  populate: {
    header: {
      populate: {
        logo: {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        navigation: true,
        cta: true,
      },
    },
    footer: {
      populate: {
        logo: {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        navigation: true,
        policies: true,
      },
    },
  },
});

export async function getGlobalSettings() {
  const path = "/api/global";
  const url = new URL(path, BASE_URL);
  url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}

export async function getContent(
  path: string,
  featured?: boolean,
  query?: string,
  page?: string
) {
  const url = new URL(path, BASE_URL);

  url.search = qs.stringify({
    sort: ["createdAt:desc"],
    filters: {
      $or: [
        { title: { $containsi: query } },
        { description: { $containsi: query } },
      ],
      ...(featured && { featured: { $eq: featured } }),
    },
    pagination: {
      pageSize: BLOG_PAGE_SIZE,
      page: parseInt(page || "1"),
    },
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
    },
  });

  return fetchAPI(url.href, { method: "GET" });
}

const blogPopulate = {
  blocks: {
    on: {
      "blocks.hero-section": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          logo: {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
          cta: true,
        },
      },
      "blocks.info-block": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          cta: true,
        },
      },
      "blocks.featured-article": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          link: true,
        },
      },
      "blocks.subscribe": {
        populate: true,
      },
      "blocks.heading": {
        populate: true,
      },
      "blocks.paragraph-with-image": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      "blocks.paragraph": {
        populate: true,
      },
      "blocks.full-image": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
    },
  },
};

export async function getContentBySlug(slug: string, path: string) {
  const url = new URL(path, BASE_URL);
  url.search = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
      ...blogPopulate,
    },
  });

  return fetchAPI(url.href, { method: "GET" });
}
