import React from "react";
import parse from "html-react-parser";
// import { Link } from "gatsby";
import AniLink from "../transitions/AniLink";

const HowYouCanHelp = (props) => {
  const { content } = props;

  return (
    <section className={`help gray-bg pad-med`}>
      <div className={`flex wrapper lg justify-center`}>
        <h3
          className={`al-fresco-font text-xl lowercase title`}
          style={{ paddingRight: 0 }}
        >
          {content[0].__typename === "DatoCmsHowYouCanHelpTitle" &&
            content[0].title}
        </h3>
      </div>
      <div className={`flex wrapper lg`}>
        <div className={`left one-half`}>
          <div className="inner">
            {content.map((block) => {
              return (
                <React.Fragment key={block.id}>
                  {block.__typename === "DatoCmsLeftColumn" && (
                    <>
                      <h4 className={`nobel-font uppercase`}>
                        {block.headline}
                      </h4>
                      <p className={`big-caslon-font text-lg`}>
                        {block.subheadline}
                      </p>
                      <div className="text-base inner">
                        {parse(block.textBlock)}
                      </div>
                      {block.customUrl ? (
                        <a
                          href={block.ctaButtonUrl}
                          className={`btn med-pink`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {block.ctaButtonText}
                        </a>
                      ) : (
                        <AniLink
                          preventScrollJump
                          fade
                          to={`/${block.ctaButtonUrlPageLink.slug}`}
                          className={`btn med-pink`}
                        >
                          {block.ctaButtonText}
                        </AniLink>
                      )}
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className={`right one-half`}>
          {content.map((block) => {
            return (
              <React.Fragment key={block.id}>
                {block.__typename === "DatoCmsRightColumnItem" && (
                  <div className="inner">
                    <h4 className={`nobel-font uppercase`}>{block.headline}</h4>
                    <p className={`big-caslon-font text-lg`}>
                      {block.subheadline}
                    </p>
                    {block.customUrl ? (
                      <a
                        href={block.ctaUrl}
                        className={`caps-font text-sm`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        {block.ctaText}
                      </a>
                    ) : (
                      <AniLink
                        preventScrollJump
                        fade
                        to={`/${block.ctaUrlPageLink.slug}`}
                        className={`caps-font text-sm`}
                        style={{ textDecoration: "none" }}
                      >
                        {block.ctaText}
                      </AniLink>
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowYouCanHelp;
