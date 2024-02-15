import React from "react";
import "../sass/ParentResources.scss";
import useContentful from "../hooks/useContentful";

const query = `
  query ParentLink {
    parentLinkCollection {
      items {
        linkTitle
        linkUrl
        googleDocsLink
        linkImage {
          url
        }
        linkDescription
      }
    }
  }
`;

const newsletterQuery = `
  query ParentNewsletter {
    parentNewsletterCollection {
      items {
        newsletterTitle
        googleDocsLink
      }
    }
  }
`;

export default function ParentResources() {
  const { parentLinkData } = useContentful(query, "parentLink");
  const { parentNewsletterData } = useContentful(
    newsletterQuery,
    "parentNewsletter"
  );

  //@ts-ignore
  return (
    <div>
      <div className="headerContainer">
        <div className="bgContainer">
          <h2>Parent Resources</h2>
          <p>
            Welcome to our Parent Resources section! Explore helpful guides,
            tips for fostering a positive learning environment at home, and stay
            informed about upcoming events and curriculum updates. Together, we
            can ensure a seamless collaboration between home and school,
            nurturing a thriving educational experience for your child.
          </p>
        </div>
      </div>
      <h2 className="studentLinkHeader">Parent Links:</h2>
      <div className="studentLinksContainer parentContainer">
        {parentLinkData &&
          parentLinkData.map((link) => (
            <div className="studentItem">
              {/* 
                // @ts-ignore */}
              {link.linkUrl && link.linkImage?.url ? (
                <a
                  href={`${link.linkUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="linkContainer"
                >
                  {/* 
                    // @ts-ignore */}
                  <img src={link.linkImage.url} alt="parent resource" />
                </a>
              ) : (
                link.googleDocsLink && (
                  <iframe
                    src={`${link.googleDocsLink}`}
                    width="230"
                    height="220"
                    allow="autoplay"
                    style={{ borderRadius: "7px" }}
                    title="google docs item"
                  ></iframe>
                )
              )}
              <h3 style={{ marginTop: "7px" }}>{link?.linkTitle}</h3>
              {link.linkDescription ? <p>{link.linkDescription} </p> : null}
            </div>
          ))}
      </div>
      <div className="divider"></div>
      <h2 className="studentLinkHeader">Parent Newsletters:</h2>
      <div className="studentLinksContainer">
        {parentNewsletterData &&
          parentNewsletterData.map((newsletter) => (
            <div className="studentItem">
              <iframe
                src={newsletter.googleDocsLink}
                width="230"
                height="220"
                allow="autoplay"
                style={{ borderRadius: "7px" }}
                title="newsletter"
              ></iframe>
              <h3>{newsletter.newsletterTitle}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}
