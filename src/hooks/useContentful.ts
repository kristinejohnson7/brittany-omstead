import { useState, useEffect } from "react";

const { REACT_APP_CDA_TOKEN, REACT_APP_SPACE_ID } = process.env;

//@ts-ignore
export default function useContentful(query) {
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
        setData(json.data?.homepageCollection?.items);
      });
  }, [query]);

  return { data };
}
