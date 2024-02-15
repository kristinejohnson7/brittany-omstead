import { useState, useEffect } from "react";

const { REACT_APP_CDA_TOKEN, REACT_APP_SPACE_ID } = process.env;

//@ts-ignore
export default function useContentful(query, type) {
  const [data, setData] = useState([
    {
      heroTitle: "",
      heroImage: "",
      learnMoreTitle: "",
      aboutMeText: {},
      learnMoreText: {},
      learnMoreImage: "",
    },
  ]);
  const [parentLinkData, setParentLinkData] = useState([
    {
      linkTitle: "",
      linkUrl: "",
      linkImage: "",
      linkDescription: "",
      googleDocsLink: "",
    },
  ]);
  const [parentNewsletterData, setParentNewsletterData] = useState([
    {
      newsletterTitle: "",
      googleDocsLink: "",
    },
  ]);

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then((json) => {
        if (type === "home") {
          setData(json.data?.homepageCollection?.items);
        }
        if (type === "parentLink") {
          setParentLinkData(json.data?.parentLinkCollection?.items);
        }
        if (type === "parentNewsletter") {
          setParentNewsletterData(json.data?.parentNewsletterCollection?.items);
        }
        return;
      });
  }, [query, type]);

  return { data, parentLinkData, parentNewsletterData };
}
