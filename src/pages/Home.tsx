import Hero from "../components/Hero";
import About from "../components/About";
import LearnMore from "../components/LearnMore";
import useContentful from "../hooks/useContentful";

const query = `
  query Homepage {
    homepageCollection {
      items {
        heroTitle
        learnMoreTitle
        learnMoreText {
          json
        }
        aboutMeText {
          json
        }
        heroImage {
          url
        }
        learnMoreImage {
          url
        }
      }
    }
  }
`;

export default function Home() {
  const { data } = useContentful(query, "home");

  return (
    <div>
      <Hero data={data[0]} />
      <About data={data[0]} />
      <LearnMore data={data[0]} />
    </div>
  );
}
